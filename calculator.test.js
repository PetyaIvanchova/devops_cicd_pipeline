const assert = require("node:assert/strict");
const { add } = require("./calculator");

assert.equal(add(2, 3), 5);
assert.equal(add(10, 5), 15);
assert.equal(add(-2, 2), 0);

console.log("All tests passed!");
