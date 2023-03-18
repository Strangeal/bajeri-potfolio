import { List, Drawer, Box, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Demo from "./Demo";

const drawerWidth = 280;
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
          width: { xxs: drawerWidth, xs: drawerWidth + 100 },
          "& .MuiDrawer-paper": {
            width: { xxs: drawerWidth, xs: drawerWidth + 100 },
            bgcolor: styles.drawer,
          },
        }}
      >
        <List
          className="ul-draw"
          style={styles.drawList}
          onClick={() => setOpen(false)}
          sx={{ m: "auto", mt: 0, pt: "5rem" }}
        >
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
        <div className="logo">
          <p>JB</p>
        </div>

        <IconButton onClick={() => setOpen(!open)}>
          <MenuIcon sx={{ color: "#64ffda", fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavDrawer;
