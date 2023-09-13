import { Box, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";

const SideContent: React.FC = () => {
  return (
    <Box
      position={"fixed"}
      top={"50%"}
      right={"2px"}
      display={{ base: "none", md: "block", lg: "block" }}
    >
      <VStack>
        <Link href="https://www.facebook.com/" isExternal>
          <Image src={"../../../Images/fb.png"} />
        </Link>
        <Link href="https://www.linkedin.com/" isExternal>
          <Image src={"../../../Images/in.png"} />
        </Link>
        <Link href="https://twitter.com/" isExternal>
          <Image src={"../../../Images/twitter.png"} />{" "}
        </Link>
      </VStack>
    </Box>
  );
};
export default SideContent;
