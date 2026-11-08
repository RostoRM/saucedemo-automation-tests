// For test purposes
import assert from "node:assert";
import { describe, it, beforeEach, afterEach } from "mocha";

describe("TestSuite", function () {
  beforeEach(function () {
    console.log("Before each Testcase");
  });
  it("Testcase1", function () {
    assert.equal("1", "1", "One is equal to one");
  });
  afterEach(function () {
    console.log("After each Testcase");
  });
});
