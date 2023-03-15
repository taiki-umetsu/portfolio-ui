import React from "react";
import {
  Text,
  Link as ChakraLink,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Box>
        <VStack align="start" textStyle="p">
          <Heading as="h1">Hi, I&apos;m Taiki Umetsu &#128075;</Heading>

          <Text pb="10">
            A dedicated backend developer with over 2 years of experience and a
            passion for problem-solving and creating efficient solutions. I have
            experience working with Ruby on Rails, JavaScript, SQL, and AWS. I
            take pride in my ability to learn and adapt quickly, as well as my
            commitment to delivering high-quality work to my clients and team
            members. I enjoy dedicating time to learning about new technologies
            and honing my skills to stay ahead in this rapidly evolving field.
          </Text>

          <Text pb="10">
            Apart from my passion for backend development, I love traveling and
            exploring new cultures. My journey around Asia and my time spent
            living in Sydney have enriched my life experiences and broadened my
            perspective. I enjoy taking on challenges, such as reaching the
            Everest Base Camp in Nepal.
          </Text>

          <Text pb="10">Currently, I&apos;m seeking a job in Vancouver!</Text>
        </VStack>
        <ChakraLink href="/experience" textStyle="p">
          Read more{" "}
          <Text as="span" fontSize="sm">
            →
          </Text>
        </ChakraLink>
      </Box>
    </Layout>
  );
};

export default IndexPage;
