import React, { FC } from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

interface ExperienceHeaderProps {
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string | null;
}

const ExperienceHeader: FC<ExperienceHeaderProps> = ({
  title,
  company,
  location,
  start_date,
  end_date,
}) => {
  const dateRange = end_date
    ? `${start_date} – ${end_date}`
    : `${start_date} – Present`;

  return (
    <Box mb="2">
      <Heading as="h2" size="md">
        {title}
      </Heading>
      <Flex justifyContent="space-between">
        <Text fontStyle="italic" textStyle="p">
          {company} ({location})
        </Text>
        <Text fontStyle="italic" textStyle="p">
          {dateRange}
        </Text>
      </Flex>
    </Box>
  );
};

export default ExperienceHeader;
