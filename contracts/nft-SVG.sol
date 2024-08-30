// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "base64-sol/base64.sol";
pragma solidity 0.8.24;
contract nftSVG is ERC721URIStorage{
    uint256 public tokenCounter ;
    event SvgNFTCreated(uint256 indexed tokenID,string  tokenURI);
    constructor() ERC721("SVGnft","SN"){
        tokenCounter=0;
    }
    function create(string memory svg) public 
    {
        _safeMint(msg.sender,tokenCounter);
        string memory imageURI = svgToImageURI(svg);
        string memory tokenURI = ImageURIToTokenURI(imageURI);
        _setTokenURI(tokenCounter,tokenURI);
        emit SvgNFTCreated(tokenCounter,tokenURI);
        tokenCounter = tokenCounter+1;

    }

    function svgToImageURI(string memory svg) public pure returns(string memory )
    {
        string memory baseURL = "data:image/svg+xml;base64,";
        string memory imageURI = Base64.encode(bytes(string(abi.encodePacked(svg))));
        string memory concatURI = string(abi.encodePacked(baseURL,imageURI));
        return concatURI;
    }

    function ImageURIToTokenURI(string memory imageURI) public pure returns(string memory)
    {
        string memory baseURL = "data:application/json;base64,";
        return (
            string(
                abi.encodePacked(
                    baseURL,
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                    '{',
                                    '"name": "SVGNFT",',
                                    '"description": "An NFT based on SVG",',
                                    '"attributes": "",',
                                    '"image": "', imageURI, '"',
                                    '}'
                            )
                        )
                    )
                )
            )
        );

    }



}