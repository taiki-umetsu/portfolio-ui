import React from "react";
import { Text, Box, VStack, Wrap, WrapItem } from "@chakra-ui/react";

type SkillList = string[];

interface SkillsSectionProps {
  skills: SkillList;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <VStack align="start" mb="10" textStyle="p" fontSize="md">
      <Wrap>
        {skills.map((skill) => (
          <WrapItem key={skill}>
            <Box borderWidth="1px" borderRadius="lg" padding="2">
              <Text>{skill}</Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default SkillsSection;
