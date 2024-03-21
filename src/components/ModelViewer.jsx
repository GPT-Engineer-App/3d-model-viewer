import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ModelViewer = ({ modelUrl }) => {
  return (
    <Box w="full" h="400px" bg="gray.100" display="flex" alignItems="center" justifyContent="center">
      <Text>3D Model Viewer requires additional dependencies.</Text>
    </Box>
  );
};

export default ModelViewer;
