import { Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Home = () => {
  return (
    <Container
      id="home"
      sx={{ mx: { sx: 0, xl: "8rem" }, ml: { "2xl": "14.5rem" } }}
    >
      <Grid container sx={{ m: 0 }}>
        <Grid
          item
          xxs={12}
          sx={{
            color: "#8892af",
            m: { xxs: 1, xs: 4, md: 6, lg: 8, xl: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: { xxs: "85vh", xs: "65vh", md: "100vh", xxl: "80vh" },
          }}
        >
          <Typography sx={{ color: "#64ffda" }}>Hello, my name is </Typography>
          <Typography
            className="tracking-in-expand"
            sx={{
              fontSize: {
                xxs: "clamp(40px, 8vw, 60px)",
                md: "clamp(2rem, 7vw, 5rem)",
              },
              color: "#ccd6f6",
              fontWeight: { xxs: 600 },
              mt: { xxs: 2 },
              fontFamily: "sans-serif",
            }}
            variant="h1"
          >
            Justice Bajeri.
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xxs: "clamp(40px, 8vw, 50px)",
                md: "clamp(2rem, 7vw, 4.3rem)",
              },
              lineHeight: 0.9,
              mt: 1,
              fontWeight: 600,
              fontFamily: "sans-serif",
            }}
            variant="h2"
          >
            I build things for the web
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              pt: 3,
              fontFamily: "sans-serif",
              width: { md: "60%" },
            }}
          >
            My name is Bajeri Justice. I help people make the world a better
            place through quality software. As a fullstack web developer, I
            possess a wide range of skills and expertise that allow me to create
            and maintain both the front-end and back-end of a website.
          </Typography>
          <Link
            href="https://www.linkedin.com/in/justice-bajeri/"
            target="_blank"
            sx={{
              py: { xxs: 2.8 },
              px: { xxs: 7 },
              mt: 6,
              width: { xxs: "max-content" },
              textDecoration: "none",
              borderRadius: 1,
              "&:hover": {
                backgroundColor: "#a6fae632",
                color: "#fff",
              },
            }}
            className="btn"
          >
            Get in touch
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
