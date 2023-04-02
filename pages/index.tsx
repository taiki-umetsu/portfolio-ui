import React from "react";
import Head from "next/head";
import { Text, Link as ChakraLink, Box, VStack } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Skill from "@/components/Skill";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import { getStaticAllProps } from "@/lib/getStaticAllProps";

export const getStaticProps = getStaticAllProps;

interface IndexPageProps {
  description: string;
  professionalSkills: string[];
  learningSkills: string[];
}

const IndexPage: React.FC<IndexPageProps> = ({
  description,
  professionalSkills,
  learningSkills,
}) => {
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
      <Skill
        professionalSkills={professionalSkills}
        learningSkills={learningSkills}
      />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
