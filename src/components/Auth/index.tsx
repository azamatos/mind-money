import { Suspense, useState } from "react";

// material ui
import { Box, Container, Link, Stack, Typography } from "@mui/material";

// components
import AuthTabNavigator from "./TabNavigator";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<App.Auth.Tab>("register");

  const handleActiveTab = (tab: App.Auth.Tab) => setActiveTab(tab);

  return (
    <Container component={Stack} gap={2}>
      <Box component="header" height={64}>
        <Link
          href="/"
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <Box component="img" src="/assets/logo.svg" alt="Logo" />
        </Link>
      </Box>
      <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Box py={2} sx={{ maxWidth: 600, minWidth: 340 }}>
          <Box
            sx={{
              border: "1px solid #DCDEE0",
              bgcolor: "white",
              p: 4,
              borderRadius: "16px",
            }}
          >
            <AuthTabNavigator
              activeTab={activeTab}
              handleActiveTab={handleActiveTab}
            />
            <Box pt={2}>
              <Suspense>
                {activeTab === "login" && <LoginForm />}
                {activeTab === "register" && <RegisterForm />}
              </Suspense>
            </Box>
          </Box>
        </Box>
      </Box>
      <Stack
        component="footer"
        direction="row"
        justifyContent="space-between"
        pb={2}
      >
        <Typography variant="caption">© 2024 MIND MONEY LIMITED</Typography>
        <Typography variant="caption">
          Have some issue? Write us{" "}
          <Typography variant="caption" color="primary">
            info@mind-money.eu
          </Typography>
        </Typography>
      </Stack>
    </Container>
  );
};

export default Auth;
