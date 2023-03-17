import { Button, ListItem, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

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
        <ListItem key={index} style={styles.linkItem}>
          <Typography style={styles.linkSpan} sx={{ mr: 0.5 }} variant="span">
            {item.num}.
          </Typography>
          <a
            href={item.path}
            style={styles.link}
            className={location.pathname === item.path ? "active" : null}
          >
            {item.name}
          </a>
        </ListItem>
      ))}
      <Button sx={{ px: 5 }} className="btn" size="large">
        Resume
      </Button>
    </>
  );
};

export default Demo;
