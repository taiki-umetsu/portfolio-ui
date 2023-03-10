import React from "react";
import { Heading, Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Link from "next/link";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Box>
        <Text textStyle="p">
          I am a Backend developer with 2+ years of experience in Ruby on Rails.
        </Text>
        <ChakraLink
          href="/about"
          _hover={{ textDecoration: "none" }}
          style={{ color: "white" }}
        >
          <Text textStyle="p" _hover={{ color: "gray.400" }}>
            Read more{" "}
            <Text as="span" fontSize="sm">
              →
            </Text>
          </Text>
        </ChakraLink>
      </Box>
    </Layout>
  );
};

export default IndexPage;
