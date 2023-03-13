import React from "react";
import { Text, Link as ChakraLink, Box } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Timeline from "@/components/Timeline";
import { GetStaticProps } from "next";
import { Experience, getLinkedinExperience } from "@/lib/linkedin";

export const getStaticProps: GetStaticProps<{
  experiences: Experience[];
}> = async () => {
  const experiences = await getLinkedinExperience();

  return {
    props: {
      experiences,
    },
  };
};

interface Props {
  experiences: Experience[];
}

const IndexPage: React.FC<Props> = ({ experiences }) => {
  return (
    <Layout>
      <Box>
        <Text textStyle="p">
          I&apos;m a Backend developer with 2+ years of experience in Ruby on
          Rails. &#128512;
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
        <div>
          <h1>My LinkedIn Experience</h1>
          <ul></ul>
        </div>
      </Box>
    </Layout>
  );
};

export default IndexPage;
