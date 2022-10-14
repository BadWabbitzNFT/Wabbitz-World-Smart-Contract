require('dotenv').config();
const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY = process.env.GOERLI_API_KEY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli',  "GOERLI_API_KEY")


const contract = require("../contracts/imagen/TioSpider.json");
function newFunction() {
    console.log(JSON.stringify(contract.abi));
}

