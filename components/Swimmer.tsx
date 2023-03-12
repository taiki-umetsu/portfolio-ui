import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

type SwimmerProps = {
  emoji: string;
  bottom: string;
  left: string;
  delay: string;
};
const maxX: string = "102vw";
const swim = keyframes`
  0% {
    transform: translate(0, 0) rotateY(180deg);
  }
  25% {
    transform: translate(${maxX}, 0) rotateY(180deg);
  }
  26% {
    transform: translate(${maxX}, 0) rotateY(0deg);
  }
  50% {
    transform: translate(0, 0) rotateY(0deg);
  }
  51% {
    transform: translate(0, 0) rotateY(180deg);
  }
  75% {
    transform: translate(${maxX}, 0) rotateY(180deg);
  }
  76% {
    transform: translate(${maxX}, 0) rotateY(0deg);
  }
  99% {
    transform: translate(0, 0) rotateY(0deg);
  }
  100% {
    transform: translate(0, 0) rotateY(180deg);
  }
`;

const Swimmer: React.FC<SwimmerProps> = ({ emoji, bottom, left, delay }) => {
  const durationSec = useBreakpointValue({
    base: 30,
    "3xl": 60,
  });
  return (
    <Box
      as="span"
      fontSize="50px"
      animation={`${swim} ${durationSec}s ease-in-out infinite ${delay}`}
      display="inline-block"
      position="fixed"
      zIndex="-3"
      bottom={bottom}
      left={left}
    >
      {emoji}
    </Box>
  );
};

export default Swimmer;
