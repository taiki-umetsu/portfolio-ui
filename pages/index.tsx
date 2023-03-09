import React from 'react';
import { Heading, Text, Link as ChakraLink, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header backgroundColor="gray.700" textColor="white" hoverColor="gray.300" />
        <Box height="500px"></Box>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
