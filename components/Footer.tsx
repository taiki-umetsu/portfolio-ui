import React from "react";
import { Box, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Footer: React.FC = () => (
  <Box
    as="footer"
    h="90px"
    px="3"
    borderTop="1px solid"
    borderTopColor="#80f2e0"
    color="#8ac8fe"
    backgroundColor="rgba(0,0,0,0.5)"
    backdropFilter="blur(2px)"
  >
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      height="100%"
    >
      <Text fontSize={["sm", "md"]} textAlign="left">
        &copy; {new Date().getFullYear()} Taiki Umetsu
      </Text>
      <Flex alignItems="center">
        <ChakraLink href="https://github.com/taiki-umetsu" isExternal>
          <FaGithub size={20} style={{ marginRight: "0.5rem" }} />
        </ChakraLink>
        <ChakraLink
          href="https://www.linkedin.com/in/taiki-umetsu-backend-developer"
          isExternal
          marginLeft={{ base: "0", md: "1rem" }}
        >
          <FaLinkedin size={20} style={{ marginRight: "0.5rem" }} />
        </ChakraLink>
        <ChakraLink
          href="/resume.pdf"
          download
          marginLeft={{ base: "0", md: "1rem" }}
        >
          <FaFilePdf size={20} style={{ marginRight: "0.5rem" }} />
        </ChakraLink>
      </Flex>
    </Flex>
  </Box>
);

export default Footer;
