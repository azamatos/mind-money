import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Hero = () => (
  <Box
    sx={{
      position: "relative",
      height: "100vh",
      overflow: "hidden",
      display: {
        sm: "none",
        md: "block",
      },
    }}
  >
    <Stack
      sx={{
        zIndex: 1,
        position: "relative",
        color: "#fff",
        px: 8,
        top: "20%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: 40,
          lineHeight: "52px",
          fontWeight: 700,
        }}
      >
        Start Investing in global stock markets
      </Typography>
      <Typography sx={{ fontSize: 16, lineHeight: "24px" }}>
        Mind.money.eu is the easiest place to invest your money and become a
        rich guy. Sign up and get started today free trial fo 14 days!
      </Typography>
    </Stack>
    <Box
      component="img"
      src="/assets/right-background.jpg"
      alt="Car"
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        aspectRatio: 945 / 1080,
        top: 0,
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  </Box>
);

export default Hero;
