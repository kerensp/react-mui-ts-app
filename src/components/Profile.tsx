import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const perfil = [
  {
    text: "Perfil",
    icon: <AccountCircleIcon />,
  },
  {
    text: "Configuración",
    icon: <SettingsIcon />,
  },
];

export default function ProfileComponent() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <IconButton
        onClick={handleOpenUserMenu}
        sx={{ p: 0, width: "40px", height: "40px" }}
      >
        <Avatar alt="Remy Sharp" src="./assets/2.jpg" />
      </IconButton>
      <Menu
        sx={{ mt: "45px", borderRadius: "4px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          sx={{ alignItems: "center", padding: 3 }}
          onClick={handleCloseUserMenu}
        >
          <Avatar
            sx={{ width: "50px", height: "50px" }}
            alt="Remy Sharp"
            src="./assets/2.jpg"
          />
          <Typography
            sx={{
              ml: 2,
              color: "#000000",
              fontFamily: "Roboto",
              fontSize: "18px",
              fontStyle: "italic",
            }}
          >
            Carlos Díaz
            <Typography
              sx={{
                color: "#4646468A",
                fontSize: "15px",
                fontFamily: "Roboto",
              }}
            >
              carlos@gmail.com
            </Typography>
          </Typography>
        </MenuItem>
        <Divider />
        {perfil.map((item) => (
          <MenuItem
            key={item.text}
            onClick={handleCloseUserMenu}
            sx={{
              color: "#6E6B6B",
              fontSize: "18px",
              fontStyle: "italic",
              ml: 2,
              mr: 4,
              alignItems: "left",
            }}
          >
            <ListItemIcon sx={{ ml: 2, color: "#4f2d80" }}>{item.icon}</ListItemIcon>
            <ListItemText sx={{ m: 1 }}>
              <Typography sx={{ fontFamily: "Roboto", fontSize: "18px" }}>
                {item.text}
              </Typography>
            </ListItemText>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem
          onClick={handleCloseUserMenu}
          sx={{
            color: "#6E6B6B",
            fontSize: "18px",
            fontStyle: "italic",
            ml: 2,
            mr: 5,
            mb: 2,
            alignItems: "left",
          }}
        >
          <ListItemIcon sx={{ ml: 2 }}>
            <SvgIcon viewBox="0 0 22.524 20.273">
              <g
                id="Group_11358"
                data-name="Group 11358"
                transform="translate(10768.35 6225.381)"
              >
                <path
                  id="ic_input_24px"
                  d="M13.562,18.05l5.025-5.025L13.562,8v3.769H1v2.512H13.562Z"
                  transform="translate(-10764.412 -6228.368)"
                  fill="#4f2d80"
                />
                <path
                  id="Path_7453"
                  data-name="Path 7453"
                  d="M-10754.619-6224.381h-12.73v18.273h12.73"
                  fill="none"
                  stroke="#4f2d80"
                  strokeWidth="2"
                />
              </g>
            </SvgIcon>
          </ListItemIcon>
          <Typography sx={{ m: 1, fontFamily: "Roboto", fontSize: "18px" }}>
            Cerrar Sesión
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
