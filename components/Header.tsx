import {
  Flex,
  Image,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaFilePdf, FaInfoCircle, FaBriefcase, FaCode } from "react-icons/fa";

interface HeaderProps {
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
}

const Header: FC<HeaderProps> = ({ backgroundColor, textColor, hoverColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex as="header" backgroundColor={backgroundColor} alignItems="center" px={4} py={2}>
      <ChakraLink href="/" _hover={{ textDecoration: "none" }}>
        <Flex alignItems="center">
          <Image src="/images/top-icon.jpg" alt="icon" boxSize="60px" borderRadius="full" objectFit="cover" objectPosition="center" _hover={{ color: hoverColor }}/>
          <Text ml={2} fontSize="md" color={textColor} _hover={{ color: hoverColor }}>Taiki Umetsu</Text>
        </Flex>
      </ChakraLink>
      <Menu isOpen={isMenuOpen} onOpen={handleMenuToggle} onClose={handleMenuToggle}>
        <MenuButton as={ChakraLink} color={textColor} _hover={{ color: hoverColor }} ml={2}>
          {isMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList>
          <Link href="/about">
            <MenuItem>
              <Flex alignItems="center">
                <FaInfoCircle size={20} style={{ marginRight: "0.5rem" }} />
                About
              </Flex>
            </MenuItem>
          </Link>
          <Link href="/experiences">
            <MenuItem>
              <Flex alignItems="center">
                <FaBriefcase size={20} style={{ marginRight: "0.5rem" }} />
                Experiences
              </Flex>
            </MenuItem>
          </Link>
          <Link href="/projects">
            <MenuItem>
              <Flex alignItems="center">
                <FaCode size={20} style={{ marginRight: "0.5rem" }} />
                Projects
              </Flex>
            </MenuItem>
          </Link>
          <ChakraLink href="https://github.com/taiki-umetsu" isExternal _hover={{ textDecoration: "none" }}>
            <MenuItem>
              <Flex alignItems="center">
                <FaGithub size={20} style={{ marginRight: "0.5rem" }} />
                Github
              </Flex>
            </MenuItem>
          </ChakraLink>
          <ChakraLink href="https://www.linkedin.com/in/taiki-umetsu-backend-developer" isExternal _hover={{ textDecoration: "none" }}>
            <MenuItem>
              <Flex alignItems="center">
                <FaLinkedin size={20} style={{ marginRight: "0.5rem" }} />
                Linkedin
              </Flex>
            </MenuItem>
          </ChakraLink>
          <ChakraLink href="/resume.pdf" download _hover={{ textDecoration: "none" }}>
            <MenuItem>
              <Flex alignItems="center">
                <FaFilePdf size={20} style={{ marginRight: "0.5rem" }} />
                Resume
              </Flex>
            </MenuItem>
          </ChakraLink>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
