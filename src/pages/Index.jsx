import React, { useState } from "react";
import { Box, Button, Container, VStack, Heading, Text, Link, Image, useToast, Input } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [modelUrl, setModelUrl] = useState("");

  const handleUpload = () => {
    toast({
      title: "Upload Started.",
      description: "Your 3D model is being uploaded...",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started.",
      description: "Your 3D model is being downloaded...",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" centerContent>
      <VStack spacing={8} py={12}>
        <Heading>3D Model Viewer</Heading>
        <Text>Interact with the 3D model by rotating and examining it from all angles.</Text>

        <Box>
          <Input value={modelUrl} onChange={(e) => setModelUrl(e.target.value)} placeholder="Enter model URL" mr={4} />
          <Button colorScheme="blue" onClick={handleUpload}>
            Upload Model
          </Button>
        </Box>

        {/* Placeholder for 3D Model Viewer */}
        <Box w="full" h="400px" bg="gray.200" display="flex" alignItems="center" justifyContent="center">
          {/* This is where the actual 3D model would be rendered */}
          <Text color="gray.500">3D Model Viewer Placeholder</Text>
        </Box>

        <Button leftIcon={<FaDownload />} colorScheme="teal" onClick={handleDownload}>
          Download Model
        </Button>

        <Box>
          <Heading size="md">Model Details</Heading>
          <Text>Name: Example 3D Model</Text>
          <Text>Format: .glb</Text>
          <Link href="https://example.com/model.glb" isExternal>
            Direct Download Link
          </Link>
        </Box>

        <Image src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsJTIwZXhhbXBsZXxlbnwwfHx8fDE3MTEwMzY2MjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D model example" />
      </VStack>
    </Container>
  );
};

export default Index;
