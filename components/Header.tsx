import {
  Box,
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
  FaInfoCircle,
  FaBriefcase,
} from "react-icons/fa";
import { menuAnatomy } from "@chakra-ui/anatomy";

const textColor = "#80f2e0";
const hoverColor = "gray.300";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);
const baseStyle = definePartsStyle({
  // define the part you're going to style
  list: {
    // this will style the MenuList component
    py: "4",
    borderRadius: "xl",
    border: "1px",
    borderColor: "#8ac8fe",
    bg: "black",
    minW: "0",
    w: "160px",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: textColor,
    _hover: {
      bg: "#1a1e2e",
    },
    _focus: {
      bg: "#1a1e2e",
    },
    bg: "black",
  },
});
export const menuTheme = defineMultiStyleConfig({ baseStyle });

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      as="header"
      backgroundImage="linear-gradient(#000,transparent)"
      alignItems="center"
      position="fixed"
      top="0"
      zIndex="999"
      w="100%"
      h="90px"
      p="3"
    >
      <ChakraLink href="/" _hover={{ textDecoration: "none" }}>
        <Flex alignItems="center">
          <Image
            src="/images/top-icon-60px.png"
            alt="icon"
            boxSize="60px"
            borderRadius="full"
            objectFit="cover"
            objectPosition="center"
          />
          <Text
            ml={2}
            fontSize="md"
            fontWeight="500"
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
          <Link href="/">
            <MenuItem>
              <Flex alignItems="center">
                <FaInfoCircle size={20} style={{ marginRight: "0.5rem" }} />
                Top
              </Flex>
            </MenuItem>
          </Link>
          <Link href="/experience">
            <MenuItem>
              <Flex alignItems="center">
                <FaBriefcase size={20} style={{ marginRight: "0.5rem" }} />
                Experience
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
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
