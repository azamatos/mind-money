import { FC } from "react";

// thirt party
import { motion } from "framer-motion";

// material ui
import { Box, Stack, Typography } from "@mui/material";

interface Props {
  activeTab: App.Auth.Tab;
  handleActiveTab: (tab: App.Auth.Tab) => void;
}

const AuthTabNavigator: FC<Props> = ({ activeTab, handleActiveTab }) => {
  return (
    <Stack
      direction="row"
      sx={{
        position: "relative",
        borderRadius: "12px",
        bgcolor: "#F4F4F4",
        padding: "12px 6px",
      }}
    >
      <Box
        flex={1}
        zIndex={2}
        textAlign="center"
        component="button"
        onClick={() => handleActiveTab("register")}
        sx={{
          appearance: "none",
          border: "none",
          bgcolor: "transparent",
        }}
      >
        <Typography>Register</Typography>
      </Box>
      <Box
        flex={1}
        zIndex={2}
        textAlign="center"
        component="button"
        onClick={() => handleActiveTab("login")}
        sx={{
          appearance: "none",
          border: "none",
          bgcolor: "transparent",
        }}
      >
        <Typography>Login</Typography>
      </Box>
      <Box
        component={motion.div}
        sx={{
          bgcolor: "white",
          width: "50%",
          position: "absolute",
          height: "calc(100% - 12px)",
          borderRadius: "6px",
          top: "6px",
        }}
        animate={{
          translateX: activeTab === "login" ? "calc(100% - 12px)" : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          velocity: 50,
        }}
      />
    </Stack>
  );
};

export default AuthTabNavigator;
