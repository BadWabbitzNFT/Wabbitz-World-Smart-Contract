//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const dotenv =require("dotenv");

//General metadata for Ethereum

//const baseUri = "ipfs://QmVa8RXDaK8xoV9QR9kSygxiJjymLikMCxKbdp6kMggm6C",

dotenv.config();

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
//const baseUri = "ipfs://QmVa8RXDaK8xoV9QR9kSygxiJjymLikMCxKbdp6kMggm6C",


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },

  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },

};
