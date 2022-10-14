import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook-logo-png-100x100.png";
import Twitter from "./assets/social-media-icons/Twitter-icon-100x100.png";
import Instagram from "./assets/social-media-icons/Pinstagram.png";
/*import { LayoutGroupContext } from "framer-motion";*/

const NavBar = ({ accounts, setAccounts }) =>{
const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        } 
    }

    return (
        <flex justify="space-between" align="center" padding="30px">

        {/* left side - Social Media Icons */}
        <Flex justify="space-around" width="40%" padding="0 75px">
        <Link href="https://www.facebook.com/DABArtspr">
            <Image src={Facebook} boxSize="42px" margin="0 15px"/>
        </Link>
        <Link href="https://twitter.com/badwabbitznft?t=LeJ06BiYSx1X4cFI4HicQQ&s=08">
            <Image src={Twitter} boxSize="42px" margin="0 15px"/>
        </Link>
        <Link href="https://www.instagram.com/badwabbitznft/">
            <Image src={Instagram} boxSize="42px" margin="0 15px"/>
        </Link>
      
        </Flex>


       

        {/* Right Side - Sections and Connect */}
        <Flex
        justify="space-around"
        align="center"
        width="40%"
        padding="30px"
        >
        <Box margin="0 15px">About</Box>
        <Spacer />
        <Box margin="0 15px">Mint</Box>
        <Spacer />
        <Box margin="0 15px">Team</Box>
        <Spacer />

{/* Connect */}
{isConnected ? (
            <Box margin="0 15px">Connected</Box>
        ) : (
          <Button 
          backgroundColor="#D6517D"
          borderRadius="5px"
          boxShadow="0px 2px 2px 1px #0F0F0F"
          color="white"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          onClick={connectAccount}
          >
            Connect
          </Button>
        )}
        </Flex>
        </flex>
   );
};

export default NavBar;



