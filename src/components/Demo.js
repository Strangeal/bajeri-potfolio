import { Button, ListItem, Typography, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

const Demo = () => {
  const location = useLocation();
  const styles = {
    linkItem: {
      textDecoration: "none",
      fontSize: "0.8rem",
    },
    link: {
      color: "#ccd6f6",
    },
    linkSpan: {
      color: "#64ffda",
    },
  };

  const menuItems = [
    {
      name: "Home",
      num: "00",
      path: "#home",
    },
    {
      name: "About",
      num: "01",
      path: "#about",
    },
    {
      name: "Experience",
      num: "02",
      path: "#experience",
    },
    {
      name: "Contact",
      num: "03",
      path: "#contact",
    },
  ];

  return (
    <>
      {menuItems.map((item, index) => (
        <ListItem
          key={index}
          style={styles.linkItem}
          sx={{ textAlign: { xxs: "center" } }}
        >
          <Typography
            style={styles.linkSpan}
            sx={{ mr: 0.5, width: { xxs: "100%" } }}
            variant="span"
          >
            <Typography variant="span" sx={{ fontSize: 12 }}>
              {item.num}.
            </Typography>
            <Link
              sx={{
                display: { xxs: "block", md: "revert" },
                mt: { xxs: 0.5 },
              }}
              href={item.path}
              style={styles.link}
              className={location.pathname === item.path ? "active" : null}
            >
              {item.name}
            </Link>
          </Typography>
        </ListItem>
      ))}
      <a
        href="https://drive.google.com/file/d/1THbLM99uo60P02WoFfXopgnDFTTvkPF7/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
        id="downloadBtn"
        type="button"
      >
        <Button sx={{ px: 5 }} className="btn" size="large">
          Resume
        </Button>
      </a>
    </>
  );
};

export default Demo;
