import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Experience = () => {
  const styles = {
    img: {
      width: "100%",
    },
  };
  return (
    <Container sx={{ mx: { xl: "6rem" }, my: "6rem", mb: { md: 0 } }}>
      <Box sx={{ mx: { xs: 4 } }}>
        <Typography variant="body1" component="h6" sx={{ color: "#ccd6f6" }}>
          <Typography variant="span" sx={{ color: "#64ffda" }}>
            03.
          </Typography>
          Experince
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: "sans-serif", fontWeight: 800, my: 2, px: 5 }}
        ></Typography>
      </Box>

      <Card
        elevation={0}
        sx={{
          bgcolor: "#e0e0e00a",
          color: "#ccd6f6",
          borderRadius: 0,
          mx: { xs: 4, md: "" },
        }}
      >
        <CardActionArea>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: { md: "flex" },
                alignItems: { md: "" },
                p: { md: "1rem" },
                width: { md: "80%" },
                mx: { md: "auto" },
              }}
            >
              <CardMedia
                component="img"
                image="https://res.cloudinary.com/dxsom7jmx/image/upload/v1668783580/Meta%20tags/shot_fpwnaw.png"
                alt="Project 1"
                sx={styles.img}
              />
            </Grid>

            <Grid item xs={12} md={6} sx={{ py: { md: "1rem" } }}>
              <CardContent sx={{ py: { md: "0.3rem" } }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Clickbank
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#8892af", fontFamily: "sans-serif" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  tempore quaerat ipsam aut consectetur, sequi odit cupiditate
                  beatae labore quae temporibus, aliquam aperiam explicabo! Eius
                  cupiditate in explicabo culpa debitis.
                </Typography>

                <Typography variant="body2" sx={{ mt: 3 }}>
                  VsCode Sublime Text Atom iTerm2 Hyper
                </Typography>
              </CardContent>
              <CardActions sx={{ mb: { xxs: 3, md: 0 } }}>
                <GitHubIcon className="card-icon" />
                <OpenInNewIcon className="card-icon" />
              </CardActions>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default Experience;
