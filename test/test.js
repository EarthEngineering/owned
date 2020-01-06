const Owned = artifacts.require("Owned")

contract("Owned", accounts => {
  it("should win", async () => {
    const ownedInstance = await Owned.deployed()
    const owned = await ownedInstance.winning()

    assert.equal(owned, "Owned", "should be 'Owned'")
  })
})
