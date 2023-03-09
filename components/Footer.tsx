import React from 'react';
import {
  Box,
  Text,
  VStack,
  Flex,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box as="footer" py={8} borderTop="1px solid" borderTopColor="gray.200">
      <VStack spacing={4}>
        <Text fontSize={['sm', 'md']}>&copy; {new Date().getFullYear()} Taiki Umetsu</Text>
        <Flex>
          <ChakraLink href="https://github.com/taiki-umetsu" isExternal>
            <FaGithub size={20} style={{ marginRight: "0.5rem" }} />
          </ChakraLink>
          <ChakraLink href="https://www.linkedin.com/in/taiki-umetsu-backend-developer" isExternal>
            <FaLinkedin size={20} style={{ marginRight: "0.5rem" }} />
          </ChakraLink>
          <ChakraLink href="/resume.pdf" download>
            <FaFilePdf size={20} style={{ marginRight: "0.5rem" }} />
          </ChakraLink>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
