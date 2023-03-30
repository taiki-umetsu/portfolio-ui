import React from "react";
import Head from "next/head";
import {
  Text,
  Link as ChakraLink,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import SkillsSection from "@/components/SkillsSection";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import { getStaticAboutProps } from "@/lib/getStaticAboutProps";

export const getStaticProps = getStaticAboutProps;

interface IndexPageProps {
  description: string;
}

const IndexPage: React.FC<IndexPageProps> = ({ description }) => {
  return (
    <Layout>
      <Head>
        <title>Top | Taiki Umetsu</title>
      </Head>
      <Box mb="10">
        <VStack align="start" textStyle="p">
          <About description={description} />
        </VStack>
        <ChakraLink href="/experience" textStyle="p">
          Read more{" "}
          <Text as="span" fontSize="sm">
            →
          </Text>
        </ChakraLink>
      </Box>
      <Box>
        <Heading as="h1">Skills &#128640;</Heading>
        <SkillsSection
          skills={[
            "Ruby",
            "Ruby on Rails",
            "JavaScript",
            "jQuery",
            "MySQL",
            "Git",
            "AWS",
            "Docker",
            "SQL data analysis",
            "batch processes development",
            "routine tasks automation",
            "API Integration",
            "API development",
            "code reviews",
          ]}
        />
        <Heading as="h2">Learning...</Heading>
        <SkillsSection skills={["Go", "React", "Next.js", "ChatGPT"]} />
      </Box>
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
