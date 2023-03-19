import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import data from "../db/data";

const About = () => {
  const styles = {
    heading: {
      display: "flex",
      alignItems: "center",
    },
    hr: {
      backgroundColor: "#8892af",
    },
    img: {
      border: "1px solid #64ffda",
      borderRadius: "8px",
      filter: "saturate(0%)",
    },
  };

  return (
    <Container
      id="about"
      sx={{ mt: { md: "3rem" }, mx: { xl: "6rem" }, ml: { "2xl": "13rem" } }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xxs={12}
          md={6}
          sx={{
            color: "#8892af",
            mx: { xs: 4, md: 6 },
          }}
        >
          <div className="heading" style={styles.heading}>
            <Typography variant="h6" sx={{ mr: 2, color: "#ccd6f6" }}>
              <Typography variant="span" sx={{ color: "#64ffda" }}>
                01.{" "}
              </Typography>
              About Me
            </Typography>
            <Divider
              style={styles.hr}
              sx={{ width: { xxs: "30%", xs: "50%" } }}
            />
          </div>
          <Box className="about-content" sx={{ fontFamily: "sans-serif" }}>
            <Typography
              variant="body1"
              sx={{ mt: 4, fontFamily: "sans-serif" }}
            >
              Hello! My name is Justice, and I am a multi-skilled full-stack
              developer with hands-on experience in project development. I have
              one year of experience working with both front-end technologies
              (React/Redux) and back-end technologies (Ruby on Rails). I am a
              good communicator and a team player, and I enjoy pair programming.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2, fontFamily: "sans-serif" }}
            >
              Over the years, I have built more than 20 projects, ranging from
              small to full-stack projects. Each project has presented its own
              unique set of challenges, from technical obstacles to pair
              programming challenges. These challenges have honed my skills in
              problem-solving, collaboration, and innovation. By continually
              pushing myself to learn new technologies and techniques, I have
              been able to expand my capabilities and take on increasingly
              complex projects.
            </Typography>
            <Typography sx={{ mt: 2, fontFamily: "sans-serif" }}>
              In my free time, I enjoy watching movies, listening to music, and
              writing tutorials.
            </Typography>
            <Typography sx={{ mt: 2, fontFamily: "sans-serif" }}>
              I am currently working on improving my writing skills to create
              tutorials that cover the skills I have learned over the years.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontFamily: "sans-serif" }}>
                Here are a few technologies I've been working with recently:
              </Typography>
              <Grid container sx={{ mt: 2 }}>
                {data.skills.map((skill, index) => (
                  <Grid
                    item
                    key={index}
                    xxs={6}
                    sx={{
                      py: "0.2rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="span"
                      sx={{
                        fontSize: "0.8rem",
                        position: "relative",
                        bottom: "2px",
                        mr: 1,
                        color: "#64ffda",
                        fontFamily: "sans-serif",
                      }}
                    >
                      ▹
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.8rem",
                        fontFamily: "sans-serif",
                        fontWeight: "300",
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Box
          sx={{
            mx: "auto",
            my: { xxs: 5 },
            width: { xxs: "60%", xs: "40%", sm: "35%", md: "30%" },
            display: { md: "flex", alignItems: "center" },
            mr: { md: 4, xl: 0, "2xl": 0 },
          }}
        >
          <img
            className="img slideanim"
            style={styles.img}
            src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1679052423/photo_2023-03-17_04.24.56_kjjtgy.jpg"
            width="100%"
            alt="profile"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default About;
