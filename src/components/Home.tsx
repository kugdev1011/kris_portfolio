import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { CommonProps } from "../App.props"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Image from "mui-image"
import Button from "@mui/material/Button"
import { navItems } from "../utils/constants"
const Home = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID}>
      <Grid
        container
        sx={{
          minHeight: secHeight,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            gap={{ xs: 6, sm: 2, md: 10 }}
            alignItems={"center"}
          >
            <Box
              sx={{
                textAlign: { xs: "center", sm: "initial" },
                flexShrink: 2,
              }}
            >
              <Typography variant="h3" color={"text.secondary"}>
                Hi there,
                <span role="img" aria-label={"hi emoji"} className="wave">
                  {String.fromCodePoint(0x1f44b)}
                </span>
              </Typography>
              <Typography variant="h3" color={"text.secondary"}>
                My name is
              </Typography>
              <Typography
                variant="h3"
                color={"text.secondary"}
                className="gradientName"
              >
                Kris Dan
              </Typography>
              <Typography variant="h3" color={"text.secondary"}>
                I'm a Senior Front End Developer
              </Typography>
              <Button
                size="large"
                sx={{
                  mt: 2,
                  backgroundImage:
                    "linear-gradient(to right, #00C0FD 0%, #E70FAA 51%, #00C0FD 100%)",
                  transition: "0.5s",
                  backgroundSize: "200% auto",
                  color: "#fff",
                  typography: "h6",
                  "&:hover": {
                    backgroundPosition: "right center",
                  },
                }}
                href={"#" + navItems[5]}
              >
                Contact Me
              </Button>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: 220, md: 250 },
                height: { xs: 220, md: 250 },
                borderRadius: "50%",
                "&::before,&::after": {
                  content: '" "',
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "inherit",
                  background: "linear-gradient(#00C0FD, #E70FAA)",
                  zIndex: -1,
                  animation: "spin 4s linear infinite",
                },
                "&::after": { filter: "blur(16px)" },
              }}
            >
              <Image
                alt="Kris Dan"
                src="/profile-pic.png"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
