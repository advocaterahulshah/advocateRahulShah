import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TopContent: React.FC = () => {
  return (
    <>
      <Container maxW="6xl" p={"10px"} centerContent>
        <Box w="100%">
          <Heading color={"#515151"} as="h2" size="lg">
            Advocate Rahul P. Shah
          </Heading>
          <Box w={"100%"} p={"10px 0"}>
            {/* <Image
              w={"100%"}
              objectFit={"cover"}
              src={"../../../Images/banner-advocate.webp"}
              h={{ base: "auto", md: "450px", lg: "450px" }}
            /> */}
            <Image
              w={"100%"}
              objectFit={"cover"}
              src={"../../../Images/profile.jpeg"}
              h={{ base: "auto", md: "450px", lg: "450px" }}
            />
          </Box>
        </Box>
        <Box w={"100%"}>
          <Breadcrumb
            fontSize={"12px"}
            spacing="5px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Advocate Rahul P. Shah </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Profile</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box
            fontSize={"20px"}
            color={"white"}
            fontWeight={"500"}
            background={"#00ACE4"}
            p={"5px 0px 5px 5px"}
            m={"10px 0px 10px 1px"}
            textTransform={"uppercase"}
          >
            Profile
          </Box>
          <Box
            className="Personal-Details"
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
          >
            <Text as={"b"}>PERSONAL DETAILS</Text>
            <Text>Name : Rahul.p.shah </Text>
            <Text>Nationality : Indian </Text>
            <Text>Date of Birth : 10/06/1996 </Text>
            <Text>Language known : English, Hindi, Gujarati</Text>
            <Text>
              Office Address : 53, G.H.B , variyav,tarwadi, Amroli Surat.
            </Text>
            <Text>Mobile : +91 8160917585</Text>
            <Text>
              E-mail :{" "}
              <a href="mailto: rahulpshah3@gmail.com">rahulpshah3@gmail.com </a>
            </Text>
          </Box>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            className="Educational-qualifications"
            mt={"25px"}
          >
            <Text as={"b"} style={{ textTransform: "uppercase" }}>
              Educational qualifications{" "}
            </Text>
            <Text>1. B.Sc (Chemistry) </Text>
            <Text>2. Industrial Training Course </Text>
            <Text>3. LL.B.</Text>
          </Box>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            className="Educational-qualifications"
            mt={"25px"}
          >
            <Text as={"b"} style={{ textTransform: "uppercase" }}>
              Achievements{" "}
            </Text>
            <Text>1. National Chess Player </Text>
            <Text>2. VNSGU Chess Team Captain </Text>
          </Box>
        </Box>
        <Box w={"100%"} className="Blogs" mt={"20px"}>
          <HStack spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Blogs</Heading>
              <Text mt={4}>
                Quote – By A.L Goodhart “There is something to be said for the
                view that justice should not only be seen to be done to the
                individual but also that it should be done to the community as a
                whole. It is not so done when guilty man is given an opportunity
                to continue his depredations owing to a technical slip “
              </Text>
            </Box>
          </HStack>
        </Box>
      </Container>
    </>
  );
};

export default TopContent;
