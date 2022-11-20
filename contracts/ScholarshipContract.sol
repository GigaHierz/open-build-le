// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract ScholarshipContract {
    using Counters for Counters.Counter;

    // uint public unlockTime;
    address payable public owner;
    string[] public promoCodes;
    uint256 public ticketPrice;
    address[] public poapCollections;
    mapping(address => bool) scholarReimbursed;
    address[] scholarshipRecipients;

    Counters.Counter private _codeCounter;

    modifier alreadyApplied(address _to) {
        bool exists;
        for (uint256 i = 0; i < scholarshipRecipients.length; i++) {
            //for loop example
            exists = scholarshipRecipients[i] == msg.sender;
        }
        require(
            !exists,
            "You already bought a ticket. There is only one Ticket per person."
        );
        _;
    }

    event Withdrawal(address to);
    event AppliedForTicket(string promoCode);

    constructor(
        address payable _owner,
        string[] memory _promoCodes,
        uint256 _ticketPrice,
        address[] memory _poapCollections
    ) payable {
        owner = _owner;
        promoCodes = _promoCodes;
        ticketPrice = _ticketPrice;
        poapCollections = _poapCollections;
    }

    function applyForTicket()
        public
        payable
        alreadyApplied(msg.sender)
        returns (string memory)
    {
        require(
            promoCodes.length >= _codeCounter.current(),
            "No more tickets available"
        );
        require(msg.value >= ticketPrice, "Sent amount is too low");

        // to.safeTransferFrom(owner, ticketPrice);
        emit AppliedForTicket(promoCodes[_codeCounter.current()]);
        _codeCounter.increment();
        scholarshipRecipients.push(msg.sender);

        return promoCodes[_codeCounter.current() - 1];
    }

    function withdraw() public {
        require(
            scholarReimbursed[msg.sender] == false,
            "You already got reimbursed"
        );

        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        address payable to = payable(msg.sender);
        to.transfer(ticketPrice);
        scholarReimbursed[msg.sender] = true;

        emit Withdrawal(to);
    }

    function getPoapCollection() public view returns (string[] memory) {
        return promoCodes;
    }
}
