#!/usr/bin/env node
// extract_js_const.js — evaluate an arbitrary historical .js data-file
// snapshot (as pulled from `git show <hash>:<path>`) in a sandbox and dump
// one of its top-level `const` bindings as JSON on stdout.
//
// Why not a regex parser: these files span ~200 commits with drifting
// formatting (single-line vs multi-line objects, quoted vs bare keys,
// trailing commas, comments, an old numeric-ID player-key scheme before the
// switch to real UIDs). A real JS evaluator handles all of that uniformly
// instead of a hand-rolled parser silently mis-reading some historical
// shape and corrupting the backfilled series.
//
// Usage: node extract_js_const.js <file> <varName>
// Prints JSON to stdout, or exits non-zero with a message on stderr if the
// binding isn't found or the source doesn't evaluate.

const fs = require('fs');
const vm = require('vm');

const [, , file, varName] = process.argv;
if (!file || !varName) {
    console.error('usage: node extract_js_const.js <file> <varName>');
    process.exit(2);
}

let src;
try {
    src = fs.readFileSync(file, 'utf8');
} catch (err) {
    console.error(`could not read ${file}: ${err.message}`);
    process.exit(2);
}

const sandbox = { module: { exports: {} }, exports: {}, console: { log() {}, warn() {}, error() {} } };
vm.createContext(sandbox);

// A thrown error partway through `src` (commonly a trailing
// `module.exports = { playerData, cxSettings }` line referencing a global
// that was only ever declared in index.html, not the data file itself)
// does NOT undo earlier top-level `const` bindings that already completed
// — JS executes statements sequentially and a later throw can't retroactively
// erase them. So don't bail out here; fall through to the variable lookup
// below and let THAT be the real pass/fail signal.
let evalError = null;
try {
    vm.runInContext(src, sandbox, { timeout: 5000, filename: file });
} catch (err) {
    evalError = err;
}

// `const`/`let` at the top level of a vm context land in that context's own
// lexical environment, not as properties of the sandbox object — so a plain
// `varName in sandbox` check never finds them (only `var` would). Querying
// the bare identifier as a second statement in the SAME persistent context
// resolves it correctly either way, and throws a clean ReferenceError if it
// genuinely isn't defined.
let value;
try {
    value = vm.runInContext(varName, sandbox, { timeout: 1000, filename: file });
} catch (err) {
    if (evalError) {
        console.error(`failed to evaluate ${file}: ${evalError.message}`);
        process.exit(3);
    }
    console.error(`no top-level const/var "${varName}" found in ${file}: ${err.message}`);
    process.exit(4);
}

if (value === undefined) {
    console.error(`"${varName}" evaluated to undefined in ${file}`);
    process.exit(4);
}

process.stdout.write(JSON.stringify(value));
