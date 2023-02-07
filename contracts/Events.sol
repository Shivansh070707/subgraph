// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Events {
    event Event(string name, uint256 num);

    function set(uint256 num) external {
        emit Event("Hello", num);
    }

    function set1(uint256 num) external {
        emit Event("Hello", num / 2);
    }
}
