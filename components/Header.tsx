import {
  Flex,
  Image,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaInfoCircle,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import { menuAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);
const baseStyle = definePartsStyle({
  // define the part you're going to style
  list: {
    // this will style the MenuList component
    py: "4",
    borderRadius: "xl",
    border: "2px",
    bg: "#2b3047",
    minW: "0",
    w: "160px",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: "white",
    _hover: {
      bg: "#1a1e2e",
    },
    _focus: {
      bg: "#1a1e2e",
    },
    bg: "#2b3047",
  },
});
export const menuTheme = defineMultiStyleConfig({ baseStyle });

const textColor = "white";
const hoverColor = "gray.300";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      as="header"
      backgroundColor="transparent"
      backdropFilter="blur(10px)"
      alignItems="center"
      position="fixed"
      zIndex="999"
      w="100%"
    >
      <ChakraLink href="/" _hover={{ textDecoration: "none" }}>
        <Flex alignItems="center">
          <Image
            src="/images/top-icon.jpg"
            alt="icon"
            boxSize="60px"
            borderRadius="full"
            objectFit="cover"
            objectPosition="center"
          />
          <Text
            ml={2}
            fontSize="md"
            color={textColor}
            _hover={{ color: hoverColor }}
          >
            Taiki Umetsu
          </Text>
        </Flex>
      </ChakraLink>

      <Menu
        isOpen={isMenuOpen}
        onOpen={handleMenuToggle}
        onClose={handleMenuToggle}
      >
        <MenuButton
          as={ChakraLink}
          color={textColor}
          _hover={{ color: hoverColor }}
          ml={2}
        >
          {isMenuOpen ? (
            <ChevronUpIcon boxSize={6} />
          ) : (
            <ChevronDownIcon boxSize={6} />
          )}
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
          <ChakraLink
            href="https://github.com/taiki-umetsu"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <MenuItem>
              <Flex alignItems="center">
                <FaGithub size={20} style={{ marginRight: "0.5rem" }} />
                GitHub
              </Flex>
            </MenuItem>
          </ChakraLink>
          <ChakraLink
            href="https://www.linkedin.com/in/taiki-umetsu-backend-developer"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <MenuItem>
              <Flex alignItems="center">
                <FaLinkedin size={20} style={{ marginRight: "0.5rem" }} />
                LinkedIn
              </Flex>
            </MenuItem>
          </ChakraLink>
          <ChakraLink
            href="/resume.pdf"
            download
            _hover={{ textDecoration: "none" }}
          >
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
