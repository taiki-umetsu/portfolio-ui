import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { menuTheme } from "./Header";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    // layerStyles: {},
    styles: {
      global: {
        body: {
          bg: "#1a1e2e",
          color: "gray.300",
        },
        a: {
          color: "white",
          textDecoration: "none",
          _hover: {
            textDecoration: "none",
          },
        },
        h1: {
          color: "white",
          fontSize: { base: "4xl", md: "4xl" },
          fontWeight: "700",
          lineHeight: "1.4",
          mb: 8,
        },
        h2: {
          color: "white",
          fontSize: { base: "2xl", md: "2xl" },
          fontWeight: "700",
          lineHeight: "1.4",
        },
      },
    },
    components: {
      Menu: menuTheme,
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
      <Box display="flex" flexDirection="column" p={3} mx="auto" maxW="3xl">
        <Header />
        <Box my={20}>{children}</Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
