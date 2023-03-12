import { List, Drawer, Typography, Box, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Demo from "./Demo";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const drawerWidth = 240;
const NavDrawer = () => {
  const [open, setOpen] = useState(false);
  const styles = {
    drawer: {
      backgroundColor: "#0a1930",
    },
    drawList: {},
  };

  return (
    <Box>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        elevation={0}
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth, bgcolor: styles.drawer },
        }}
      >
        <Typography>Hello drawer</Typography>
        <List style={styles.drawList} onClick={() => setOpen(false)}>
          <Demo />
        </List>
      </Drawer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: { xxs: 2 },
        }}
      >
        <LogoDevIcon
          sx={{
            color: "#64ffda",
            fontSize: "2rem",
          }}
        />
        <IconButton onClick={() => setOpen(!open)}>
          <MenuIcon sx={{ color: "#64ffda", fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavDrawer;
