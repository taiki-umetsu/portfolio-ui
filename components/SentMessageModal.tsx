import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Confetti from "react-confetti";

interface SentMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  isConfetti: boolean;
  setIsConfetti: (value: boolean) => void;
  name: string;
  email: string;
  message: string;
}

const SentMessageModal: React.FC<SentMessageModalProps> = ({
  isOpen,
  onClose,
  isConfetti,
  setIsConfetti,
  name,
  email,
  message,
}) => {
  const maxW = useBreakpointValue({ base: "90%", md: "xl" });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="md"
        scrollBehavior="inside"
      >
        <ModalOverlay>
          <Confetti
            run={isConfetti}
            onConfettiComplete={() => setIsConfetti(false)}
            numberOfPieces={200}
            recycle={false}
          />
        </ModalOverlay>

        <ModalContent
          p={5}
          textStyle="p"
          bg="rgba(0,0,0,0.1)"
          backdropFilter="blur(20px)"
          border="1px"
          borderColor="#80f2e0"
          maxW={maxW}
        >
          <ModalHeader textAlign="center" fontSize={{ base: "lg", md: "xl" }}>
            Thank you &#127881;
            <br />
            for contacting me
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={{ base: "sm", md: "lg" }}>
            <Box>
              <Text fontWeight="bold">Name</Text>
              <Text>{name}</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Email</Text>
              <Text>{email}</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Message</Text>
              <Text>{message}</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SentMessageModal;
