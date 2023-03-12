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
      name: "About",
      num: "01",
      path: "/",
    },
    {
      name: "Experience",
      num: "02",
      path: "/experience",
    },
    {
      name: "Contact",
      num: "03",
      path: "/contact",
    },
  ];
  return (
    <>
      {menuItems.map((item, index) => (
        <ListItem key={index} style={styles.linkItem}>
          <Typography style={styles.linkSpan} variant="span">
            {item.num}.
          </Typography>
          <Link
            to={item.path}
            style={styles.link}
            className={location.pathname === item.path ? "active" : null}
          >
            {item.name}
          </Link>
        </ListItem>
      ))}
      <Button sx={{ px: 5 }} className="btn" size="large">
        Resume
      </Button>
    </>
  );
};

export default Demo;
