const Winner = artifacts.require("Winner")

contract("Winner", accounts => {
  it("should win", async () => {
    const winnerInstance = await Winner.deployed()
    const win = await winnerInstance.winning()

    assert.equal(win, "Winning", "should be 'Winning'")
  })
})
