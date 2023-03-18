import {
  AppBar,
  List,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Demo from "./Demo";
import NavDrawer from "./NavDrawer";
import { useTheme } from "@emotion/react";

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <NavDrawer />
      ) : (
        <AppBar elevation={0}>
          <Toolbar
            className="toolbar"
            sx={{ mx: { md: 2, xl: 4 }, my: { md: 2 } }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <div className="logo">
                <p>JB</p>
              </div>
            </Typography>
            <List sx={{ display: "flex" }}>
              <Demo />
            </List>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Nav;
