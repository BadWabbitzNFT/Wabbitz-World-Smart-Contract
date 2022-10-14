// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

// Import this file to use console.log
import "hardhat/console.sol";
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
//import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import '@openzeppelin/contracts/access/Ownable.sol';
//import '@openzeppelin/contracts/utils/Counters.sol';

contract badWabbitzNft is ERC721, Ownable {
   uint256 public mintPrice;
   uint256 public totalSupply;
   uint256 public maxSupply;
   uint256 public maxPerWallet;
   bool public isPublicMintEnabled;
   string internal baseTokenUri;
   address payable public withdrawWallet;
   mapping(address => uint256) public walletMints;

   constructor() payable ERC721('badWabbitzNft', 'BWB') {
   mintPrice = 0.02 ether;
   totalSupply = 0;
   maxSupply = 1000;
   maxPerWallet = 3;

   }

   function setIsPublicMintEnabled(bool isPublicMintEnabled_)  external onlyOwner {
    isPublicMintEnabled = isPublicMintEnabled_;
   }

   function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
    baseTokenUri = baseTokenUri_;
   }

   function tokenURI(uint256 tokenId_) public view override returns (string memory) {
    require(_exists(tokenId_), 'la ficha no existe!');
    return string(abi.encodePacked(baseTokenUri,Strings.toString(tokenId_), ".json"));
   }

   function withdraw() external onlyOwner {
    (bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
    require(success, 'retirar fallido');
   }


   function mint(uint256 quantity_) public payable {
    require(isPublicMintEnabled, "minteo no habilitada");
    require(msg.value == quantity_ * mintPrice, 'valor de minteo incorrecto');
    require(totalSupply + quantity_  <= maxSupply, 'agotado');
    require(walletMints[msg.sender] + quantity_ <= maxPerWallet, "excederte de  la billetera maxima");

    for (uint256 i = 0; 1 < quantity_; i++) {
        uint256 newTokenId = totalSupply + 1;
        totalSupply++;
        _safeMint(msg.sender, newTokenId);
    }
   }
}

