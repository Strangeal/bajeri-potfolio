import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ForkRightIcon from "@mui/icons-material/ForkRight";

const Contact = () => {
  const styles = {
    social: {
      color: "#8892af",
    },
    footText: {
      color: "#8892af",
      fontSize: 12,
    },
    floatEmail: {
      color: "#8892af",
    },
  };
  const socials = [
    { name: <GitHubIcon /> },
    { name: <LinkedInIcon /> },
    { name: <AlternateEmailIcon /> },
    { name: <TwitterIcon /> },
    { name: <InstagramIcon /> },
  ];
  return (
    <Container id="contact">
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ textAlign: "center", mx: { xs: 4 }, mt: { md: "6rem" } }}
        >
          <Typography variant="body1" component="h6" sx={{ color: "#64ffda" }}>
            <Typography variant="span">04.</Typography>
            What's Next?
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontFamily: "sans-serif", fontWeight: 800, my: 2, px: 5 }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontWeight: 300,
              textAlign: "center",
              mb: { xxs: 3, md: 8 },
              color: "#8892af",
              width: { md: "70%", lg: "60%" },
              mx: "auto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias
            doloribus, nostrum quia cupiditate tenetur numquam! Natus inventore
            cumque magnam dolorum ab beatae est saepe commodi! Necessitatibus
            maxime ad praesentium?
          </Typography>

          <Button
            className="btn"
            sx={{ py: { xxs: 1.8 }, px: { xxs: 7 }, mb: 5 }}
          >
            Say Hello
          </Button>

          <footer>
            <List
              sx={{
                width: "fit-content",
                m: "auto",
                display: { xxs: "flex", md: "block" },
                position: { md: "fixed" },
                left: { md: 10, xl: 57 },
                bottom: { md: 90 },
                zIndex: { md: 99 },
              }}
              className="social-float"
            >
              {socials.map((icon, index) => (
                <ListItem key={index} sx={{ px: 1.2 }}>
                  <Link
                    to=""
                    style={styles.social}
                    className="social-icon"
                    key={index}
                    target="_blank"
                  >
                    {icon.name}
                  </Link>
                </ListItem>
              ))}
              <ListItem
                sx={{
                  position: { md: "fixed" },
                  right: { md: -100, xl: -57 },
                  bottom: { md: 181 },
                  width: { md: "auto" },
                  transform: { md: "rotate(90deg)" },
                  display: { xxs: "none", md: "block" },
                }}
              >
                <Link to="" className="floatEmail" style={styles.floatEmail}>
                  bajerijustice@gmail.com
                </Link>
                <Divider orientation="vertical" />
              </ListItem>
            </List>

            <Box sx={{ mx: 5 }}>
              <Typography variant="body2" sx={{ color: "#64ffda" }}>
                <Link to="" className="footText" style={styles.footText}>
                  Designed & Built by Bajeri Justice
                </Link>
              </Typography>
              <Typography
                variant="span"
                className="card-icon"
                sx={{ fontWeight: 300, fontSize: 14, mr: 2 }}
              >
                <StarOutlineIcon sx={{ fontSize: 16, mx: 0.5 }} />
                56
              </Typography>
              <Typography
                variant="span"
                className="card-icon"
                sx={{ fontWeight: 300, fontSize: 14 }}
              >
                <ForkRightIcon sx={{ fontSize: 16, mx: 0.5 }} />8
              </Typography>
            </Box>
          </footer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
