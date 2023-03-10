import Layout from "../components/Layout";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About | Taiki Umetsu</title>
      </Head>
      <Box>
        <Heading as="h1">About</Heading>
        <Text textStyle="p">
          Backend developer with 2+ years of experience in Ruby on Rails.
          <br />
          Building features at a SaaS company.
          <br />
          Seeking a job in Vancouver.
        </Text>
      </Box>
    </Layout>
  );
};

export default About;
