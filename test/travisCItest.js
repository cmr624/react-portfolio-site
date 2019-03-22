let assert = require("chai").assert;

describe("basicCItest", function () {
    {
        it("should return hello world", function () {
            let hello = "hello, world";

            assert.equal(hello, "hello, world");
        });
    }
});