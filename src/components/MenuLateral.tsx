import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { securityList } from "./securityList";
import { rrhhList } from "./rrhhList";
import MenuIcon from "@mui/icons-material/Menu";
import { BreadcrumbsComponent } from "./Breadcrumbs";
import ProfileComponent from "./Profile";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Usuarios from "./Usuarios";

const drawerWidth = 280;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box sx={{ ml: 3, mt: 5, mr: 3, mb: 4 }}>
        <img src="../assets/logo.svg" />
      </Box>
      <List>
        <Typography color="#CBC7CF" textTransform="uppercase" pl={3}>
          SEGURIDAD
        </Typography>
        {securityList.map((item) => (
          <ListItem key={item.text}>
            <ListItemButton
              sx={{
                opacity: 1,
                ml: 1.3,
                mr: 1.3,
                color: "#4F2D80",
                "&:hover": {
                  backgroundColor: "#4F2D80",
                  borderRadius: "5px",
                  color: "#FFFFFF",
                  transition: "0.3s"
                },
              }}
            >
              <ListItemIcon className="icon">{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography color="#CBC7CF" paddingLeft={3}>
        RRHH
      </Typography>
      <List>
        {rrhhList.map((item) => (
          <ListItem key={item.text}>
            <ListItemButton
              href={item.href}
              sx={{
                opacity: 1,
                ml: 1.3,
                mr: 1.3,
                color: "#4F2D80",
                "&:hover": {
                  backgroundColor: "#4F2D80",
                  borderRadius: "5px",
                  color: "#FFFFFF",
                },
              }}
            >
              <ListItemIcon className="icon">{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>{BreadcrumbsComponent}</Box>
          <Button sx={{ cursor: "default" }}>
            <Typography
              sx={{
                color: "#4F2D80",
                fontFamily: "Segoe UI",
                fontSize: "20px",
              }}
            >
              EN
            </Typography>
          </Button>
          <IconButton sx={{ cursor: "default" }}>
            <NotificationsIcon
              sx={{ width: 24, height: 24, color: "#4f2d80" }}
            />
          </IconButton>
          <IconButton sx={{ ml: 1, mr: 2, cursor: "default" }}>
            <img src="../assets/settings.svg" />
          </IconButton>
          <ProfileComponent />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          background: "#F3F5F7",
          height: "100vh",
          boxSizing: "content-box",
        }}
      >
        <Toolbar />
        <Usuarios />
      </Box>
    </Box>
  );
}
