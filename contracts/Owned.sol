 pragma solidity ^0.5.0;

import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";


contract Owned is Ownable {
  function winning() public pure returns (string memory message) {
    return "Owned";
  }
}
