import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { menuTheme } from "./Header";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import Swimmer from "@/components/Swimmer";

const fish = "\uD83D\uDC1F";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = extendTheme({
    textStyles: {
      p: {
        fontSize: { base: "lg", md: "lg" },
        fontWeight: "400",
        lineHeight: "1.6",
      },
    },
    layerStyles: {
      bgTransparentBlack: {
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(50px)",
      },
    },
    styles: {
      global: {
        body: {
          bg: "black",
          color: "gray.200",
          minH: "100vh",
        },
        a: {
          color: "white",
          textDecoration: "none",
          _hover: {
            textDecoration: "none",
          },
        },
        h1: {
          fontSize: { base: "4xl", md: "4xl" },
          fontWeight: "700",
          lineHeight: "1.4",
          mb: 8,
        },
        h2: {
          fontSize: { base: "2xl", md: "2xl" },
          fontWeight: "700",
          lineHeight: "1.4",
        },
      },
    },
    components: {
      Menu: menuTheme,
    },
    breakpoints: {
      "3xl": "112em",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Global
        styles={css`
          html,
          body {
            font-family: "Inter";
          }
        `}
      />
      <Header />
      <Box
        layerStyle="bgTransparentBlack"
        w="100%"
        zIndex="1"
        position="relative"
        my="90px"
      >
        <Box p={3} mx="auto" maxW="3xl" h="calc(100vh - (90px + 90px))">
          {children}
        </Box>
        <Footer />
        <Swimmer emoji={fish} bottom="0px" left="-2vh" delay="150ms" />
        <Swimmer emoji={fish} bottom="10px" left="-2vh" delay="0ms" />
        <Swimmer emoji={fish} bottom="20px" left="-2vh" delay="300ms" />
      </Box>
      <Spinner />
    </ChakraProvider>
  );
};

export default Layout;
