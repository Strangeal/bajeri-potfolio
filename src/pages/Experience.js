import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";

const Experience = () => {
  const projects = [
    {
      project_name: "Clickbank",
      project_live_link: "https://strangeal.github.io/clickbank/index.html",
      project_description:
        "Clickbank is an affiliate marketing platform enable businesses with great products to connect with elite affiliates who can promote those products. They have e-commerce tools that helps product owners sell more with less work, and their marketplace helps marketers and aspiring entrepreneurs looking for new ways to earn an income online!.",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1668783580/Meta%20tags/shot_fpwnaw.png",
      project_tech: "HTML, CSS, JavaScript",
      project_link: "https://github.com/Strangeal/clickbank",
    },
    {
      project_name: "ClinixGo",
      project_live_link: "clinixgo.up.railway.app/",
      project_description:
        "The project is based on an app to book an appointment with a health specialist(Doctor). The doctor appointment booking app permits healthcare providers to manage their appointments with increased efficiency while giving reliable management. However, it displays all details of the patients, complete history of appointment, analyses the doctors, etc",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1678831190/Screenshot_2023-03-14_at_14.58.21_pcoore.png",
      project_tech:
        "React, Redux, Ruby On Rails, PostgreSQL, Bootstrap, React-Router",
      project_link: "https://github.com/Strangeal/ClinixGo/",
    },
    {
      project_name: "Space Travel",
      project_live_link: "https://spacehubx.netlify.app/",
      project_description:
        "This project is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
      project_image:
        "https://res.cloudinary.com/dxsom7jmx/image/upload/v1668859707/Meta%20tags/Screenshot_2022-11-19_at_07.05.18_kpxwpi.png",
      project_tech: "HTML5, CSS, React, Redux, Sass, Jest-test",
      project_link: "https://github.com/Strangeal/space-travelers-hub",
    },
  ];
  return (
    <Container
      id="experience"
      sx={{
        mx: { xl: "6rem" },
        ml: { "2xl": "13rem" },
        my: "6rem",
        display: "grid",
      }}
    >
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
          bgcolor: "transparent",
          ":hover": "none",
          color: "#ccd6f6",
          borderRadius: 0,
          mx: { xs: 4 },
        }}
      >
        <div>
          {projects.map((item, index) => (
            <Grid
              container
              sx={{
                bgcolor: { xxs: "#e0e0e00a", md: "transparent" },
                alignItems: { md: "center" },
                mb: { xxs: "3rem", md: "7rem", mmd: "4rem" },
              }}
              key={index}
            >
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  display: { md: "flex" },
                  alignItems: { md: "" },
                  width: { md: "50%", lg: "45%", xl: "40%" },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.project_image}
                  alt={item.project_name}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  position: { md: "absolute" },
                  display: { md: "flex" },
                  flexDirection: { md: "column" },
                  alignItems: { md: "end" },
                  m: { md: "auto" },
                  mr: { md: 0 },
                  right: { md: 4, xl: 20, xl: 132, "2xl": 180 },
                  width: { md: "53%", lg: "52%", xl: "43%", "2xl": "38%" },
                  pr: { md: "2rem" },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: { md: "right" },
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 1, color: "#64ffda" }}>
                    Featured Project
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.project_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#8892af",
                      fontFamily: "sans-serif",
                      bgcolor: { md: "#112240" },
                      p: { md: "1rem" },
                    }}
                  >
                    {item.project_description}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      m: { md: "auto" },
                      mr: { md: 0 },
                      width: { md: "70%" },
                      color: "#8892af",
                    }}
                  >
                    {item.project_tech}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    mb: { xxs: 3, md: 0 },
                    mr: { md: "1rem" },
                    float: { md: "right" },
                    color: "#8892af",
                  }}
                >
                  <Link to={item.project_link} className="card-icon">
                    <GitHubIcon />
                  </Link>
                  <Link to={item.project_live_link} className="card-icon">
                    <OpenInNewIcon />
                  </Link>
                </CardActions>
              </Grid>
            </Grid>
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default Experience;
