// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    // uint public unlockTime;
    address payable public owner;
    string[] public promoCodes;
    uint256 public ticketPrice;
    address[] public poapCollections;

    // event Withdrawal(uint256 amount, uint256 when);

    constructor(
        address _owner,
        string[] _promoCodes,
        uint256 _ticketPrice,
        address[] _poapCollections
    ) payable {
        owner = _owner;
        promoCodes = _promoCodes;
        ticketPrice = _ticketPrice;
        poapCollections = _poapCollections;
    }

    function applyForTicket(address to) public payable {
        msg.sender.transfer(owner, ticketPrice);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        // require(block.timestamp >= unlockTime, "You can't withdraw yet");
        // require(msg.sender == owner, "You aren't the owner");

        // emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(ticketPrice);
    }
}
