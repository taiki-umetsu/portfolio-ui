import React from "react";
import { Box, useBreakpointValue, useTheme } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const Spinner: React.FC = () => {
  const theme = useTheme();
  const breakpointValue = theme.breakpoints["3xl"];
  const leftValue = useBreakpointValue({
    base: "calc(50% - 50%/2)",
    "3xl": `calc(50% - ${breakpointValue}/4)`,
  });

  return (
    <Box
      animation={`${spin} 8s linear infinite`}
      borderRadius="50%"
      bg="linear-gradient(90deg, #8ac8fe, #80f2e0);"
      w="50%"
      h="50%"
      position="fixed"
      top="calc(50% - 50%/2)"
      left={leftValue}
      maxW="3xl"
      maxH="xl"
    />
  );
};

export default Spinner;
