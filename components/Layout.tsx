import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Box, ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = extendTheme({
    fonts: {
      body: 'Nunito Sans, sans-serif',
      heading: 'Poppins, sans-serif'
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Nunito Sans', sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <Box minH="100vh" display="flex" flexDirection="column" px={[2, 4]} py={8} mx="auto" maxW="6xl">
        {children}
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
