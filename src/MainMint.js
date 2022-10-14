import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import {Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import badWabbitzNft from './badWabbitzNft.json';


const badWabbitzNftAddress = '0xE3f08144E71131cbA80fE3A84Ffb9692f8b49b3e';

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

// eslint-disable-next-line
    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                badWabbitzNftAddress,
                badWabbitzNft.abi,
                signer
            );
            try {
              const response = await contract.mint(BigNumber.from(mintAmount), {
              value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
              }); 
              console.log('response: ', response);
            } catch (err) {
                console.log("error:", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
// eslint-disable-next-line
        const handleIncrement = () => {
            if (mintAmount >= 3) return;
            setMintAmount(mintAmount + 1);
        };

        return (
            <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
                <Box width="520px">
                    <div>
                        <Text fontSize="48px" textShadow="05px #000000"></Text>
                <Text
                   fontSize="30px"
                   letterSpacing="-5.5%"
                   fontFamily="VT323"
                   textShadow="0 2px 2px #000000 "
                   >

                 </Text>
                </div>
                
                 {isConnected ? (
                  <div>
                    <Flex align="center" justify="center">
                    <Button 
                    backgroundColor="#D6517D"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="0 15px"
                    onClick={handleDecrement}
                    >
                        -
                    </Button> 
                    <Input
                    readOnly
                    fontFamily="inherit"
                    width="100px"
                    height="40px"
                    textAlign="center"
                    paddingLeft="19px"
                    marginTop="10px"
                    type="number"
                    value={mintAmount}
                    />
                    <Button 
                    backgroundColor="#D6517D"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    margin="10px"
                    onClick={handleDecrement}
                    >
                       + 
                        </Button> 
                    </Flex>
                    <Button 
                     backgroundColor="#D6517D"
                     borderRadius="5px"
                     boxShadow="0px 2px 2px 1px #0F0F0F"
                     color="white"
                     cursor="pointer"
                     fontFamily="inherit"
                     padding="15px"
                     margin="10px"
                    onClick={handleMint}
                    >
                        Mint Now
                        </Button>
                    </div>
                 ) : (
                  <p>You must be connected to Mint.</p>  
                 )}
                 </Box>
            </Flex>
           );
 };

 export default MainMint;