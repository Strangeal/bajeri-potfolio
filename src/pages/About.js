import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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

  const skills = [
    { name: "JavaScript(ES6+)" },
    { name: "ReactJs" },
    { name: "Redux" },
    { name: "SQL" },
    { name: "Ruby" },
    { name: "Ruby on Rails" },
  ];
  return (
    <Container sx={{ mt: { md: "6rem" }, mx: { xl: "6rem" } }}>
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
          {/* <div> */}
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
              developer with hands-on experience in project development. I am a
              good communicator and team player. I enjoy pair programming,
              watching movies, listening to music and writing tutorials.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2, fontFamily: "sans-serif" }}
            >
              I am currently enrolled in a distance-learning software
              development program that uses pair programming and actual client
              projects to teach development. Over the past few months, I have
              been deeply engrossed in remote development, creating everything
              from landing pages to APIs and JavaScript projects.
            </Typography>
            <Typography sx={{ mt: 2, fontFamily: "sans-serif" }}>
              In addition, I have spent the last couple of years learning
              remotely to acquire soft skills such as communication, teamwork,
              leadership, critical thinking, problem-solving, and more.
            </Typography>
            <Typography sx={{ mt: 2, fontFamily: "sans-serif" }}>
              I am currently working on improving my writing skills to create
              tutorials that cover the skills I have learned over the years.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontFamily: "sans-serif" }}>
                With years of experience in the tech industry, I have gained
                extensive knowledge of the following:
              </Typography>
              <Grid container sx={{ mt: 2 }}>
                {skills.map((skill, index) => (
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
          {/* </div> */}
        </Grid>
        <Box
          sx={{
            mx: "auto",
            my: { xxs: 5 },
            width: { xxs: "60%", xs: "40%", sm: "35%", md: "30%" },
            display: { md: "flex", alignItems: "center" },
          }}
        >
          <img
            className="img"
            style={styles.img}
            src="https://img.freepik.com/free-photo/portrait-man-with-nice-smile_23-2148780121.jpg?"
            width="100%"
            alt="profile"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default About;
