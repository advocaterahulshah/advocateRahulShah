import { Box, Text } from "@chakra-ui/react";
import React from "react";
const BottomContent: React.FC = () => {
  return (
    <Box minHeight={"40px"} background={"#249bcb"}>
      <Text textAlign={"center"} fontSize={"15px"} color={"white"}>
        &copy;{new Date().getFullYear()} Rahul Shah All rights reserved.
      </Text>
    </Box>
  );
};
export default BottomContent;
