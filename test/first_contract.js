const firstContract = artifacts.require("firstContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("firstContract", function (/* accounts */) {
  it("should assert true", async function () {
    await firstContract.deployed();
    return assert.isTrue(true);
  });
});
