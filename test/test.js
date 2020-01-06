const Owned = artifacts.require("Owned")

contract("Owned", accounts => {
  it("should win", async () => {
    const ownedInstance = await Owned.deployed()
    const owned = await ownedInstance.winning()

    assert.equal(owned, "Owned", "should be 'Owned'")
  })

  it("should return owner", async () => {
    const ownedInstance = await Owned.deployed()
    const owner = await ownedInstance.owner()

    assert.equal(owner, accounts[0], "should be 'Owned'")
  })
})
