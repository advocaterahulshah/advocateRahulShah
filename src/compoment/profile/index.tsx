import { Box } from "@chakra-ui/react";
import React from "react";
import TopContent from "./TopContent";
import styles from "./profile.module.scss";
import BottomContent from "./BottomContent";
import SideContent from "./SideContent";
const Profile: React.FC = () => {
  return (
    <>
      <Box width={"100%"} className={styles.profile}>
        <TopContent />
      </Box>
      <Box width={"100%"}>
        <BottomContent />
        <SideContent />
      </Box>
    </>
  );
};

export default Profile;
