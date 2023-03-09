import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { menuTheme } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = extendTheme({
    fonts: {
      body: "Nunito Sans, sans-serif",
      heading: "Poppins, sans-serif",
    },
    styles: {
      global: {
        body: {
          bg: "#1a1e2e",
          color: "white",
        },
        a: {
          color: "white",
          _hover: {
            textDecoration: "none",
          },
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
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Nunito Sans", sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <Box
        minH="100vh"
        display="flex"
        flexDirection="column"
        py={8}
        mx="auto"
        maxW="6xl"
      >
        {children}
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
