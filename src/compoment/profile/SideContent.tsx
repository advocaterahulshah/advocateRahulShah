import { Box, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";

import fb from "./Images/fb.png";
import linkedin from "./Images/in.png";
import twitter from "./Images/twitter.png";

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
          <Image src={fb} />
        </Link>
        <Link href="https://www.linkedin.com/" isExternal>
          <Image src={linkedin} />
        </Link>
        <Link href="https://twitter.com/" isExternal>
          <Image src={twitter} />{" "}
        </Link>
      </VStack>
    </Box>
  );
};
export default SideContent;
