import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlankPageTemplate = () => {
  return (
    <Box position="relative" minH="100vh">
      <Header />
      <Container maxW="container.lg" p={8}>
        <Heading as="h1" size="xl" textAlign="center" my={10}>
          Page Title
        </Heading>
        <Text mb={4} textAlign="center">
          This is a placeholder for page content.
        </Text>
        <Image src="https://via.placeholder.com/500x300" alt="Placeholder Image" boxSize="500px" objectFit="cover" mb={4} />
        <Text mb={10} textAlign="center">
          Additional content can go here.
        </Text>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlankPageTemplate;
