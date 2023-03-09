import React from "react";
import { Heading, Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Box height="2000px"></Box>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
