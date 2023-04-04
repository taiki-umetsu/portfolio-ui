import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SkillsSection from "@/components/SkillsSection";

interface SkillProps {
  professionalSkills: string[];
  learningSkills: string[];
}

const Skill: React.FC<SkillProps> = ({
  professionalSkills,
  learningSkills,
}) => {
  return (
    <Box>
      <Heading as="h1">Skills &#128640;</Heading>
      <SkillsSection skills={professionalSkills} />
      <Heading as="h2">Currently Exploring</Heading>
      <SkillsSection skills={learningSkills} />
    </Box>
  );
};

export default Skill;
