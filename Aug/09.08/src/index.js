#!/usr/bin/env node

const words = require("./lib/dic");
const args = process.argv.slice(2);
const [word]=args;

words(word).then(console.log).catch(console.error);
