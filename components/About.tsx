import { FC, Fragment } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

interface AboutProps {
  description: string;
}

const About: FC<AboutProps> = ({ description }) => {
  const formattedDescription = description.split("\n").map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));
  return (
    <VStack align="start" textStyle="p">
      <Heading as="h1">Hi, I&apos;m Taiki &#128075;</Heading>
      <Text pb="5">{formattedDescription}</Text>
    </VStack>
  );
};

export default About;
