import React, { useState, useEffect } from "react";
import {
  Heading,
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import SentMessageModal from "./SentMessageModal";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6Le9-hYlAAAAAHFwlXJ7nKVqG8cM95b8CizeCl6j";

const ContactForm: React.FC = () => {
  // form validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const MAX_EMAIL_LENGTH = 254;
  const MAX_NAME_LENGTH = 50;
  const MAX_MESSAGE_LENGTH = 2000;
  useEffect(() => {
    setIsValidName(name.trim().length <= MAX_NAME_LENGTH);
  }, [name]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email) && email.length <= MAX_EMAIL_LENGTH);
  }, [email]);

  useEffect(() => {
    setIsValidMessage(message.trim().length <= MAX_MESSAGE_LENGTH);
  }, [message]);

  // reCAPTCHA
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setName("");
    setEmail("");
    setMessage("");
    setIsValidName(false);
    setIsValidEmail(false);
    setIsValidMessage(false);
  };
  const [isConfetti, setIsConfetti] = useState(false);

  // form submitting
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, recaptchaValue }),
      });

      if (response.ok) {
        setIsLoading(false);
        setIsConfetti(true);
        setIsModalOpen(true);
      } else {
        setIsLoading(false);
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert("A communication error occurred. Please try again.");
    }
  };

  const buttonWidth = useBreakpointValue({ base: "full", md: "200px" });

  return (
    <>
      <Heading as="h1">Contact &#9993;</Heading>

      <Box
        as="form"
        onSubmit={handleSubmit}
        width="full"
        maxWidth="3xl"
        textStyle="p"
      >
        <VStack spacing="4">
          <FormControl
            id="name"
            isRequired
            isInvalid={!isValidName && name.length > 0}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormErrorMessage>
              Please enter your name within {MAX_NAME_LENGTH} characters.
            </FormErrorMessage>
          </FormControl>

          <FormControl
            id="email"
            isRequired
            isInvalid={!isValidEmail && email.length > 0}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormErrorMessage>
              Please enter a valid email address within {MAX_EMAIL_LENGTH}{" "}
              characters.
            </FormErrorMessage>
          </FormControl>

          <FormControl
            id="message"
            isRequired
            isInvalid={!isValidMessage && message.length > 0}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <FormLabel>Message</FormLabel>
              <Box fontSize="sm">
                {message.length}/{MAX_MESSAGE_LENGTH}
              </Box>
            </Flex>
            <Input
              as="textarea"
              placeholder="Your Message"
              resize="vertical"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              minHeight="100px"
              py={3}
              maxLength={MAX_MESSAGE_LENGTH}
            />
            <FormErrorMessage>
              Please enter your input within {MAX_MESSAGE_LENGTH} characters.
            </FormErrorMessage>
          </FormControl>

          <Center>
            <FormControl id="recaptcha" isRequired>
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
                theme="dark"
                size="normal"
                hl="en"
              />
            </FormControl>
          </Center>

          <Button
            type="submit"
            disabled={!isValidName || !isValidEmail || !isValidMessage}
            isLoading={isLoading}
            loadingText="Submitting"
            bgColor="transparent"
            border="2px"
            borderColor="#8ac8fe"
            color="#8ac8fe"
            _hover={{ opacity: 0.6 }}
            width={buttonWidth}
          >
            Send
          </Button>
        </VStack>
      </Box>
      <SentMessageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        isConfetti={isConfetti}
        setIsConfetti={setIsConfetti}
        name={name}
        email={email}
        message={message}
      />
    </>
  );
};

export default ContactForm;
