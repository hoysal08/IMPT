/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-network-helpers")
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("solidity-coverage");

module.exports = {
  solidity: "0.8.12",
};
