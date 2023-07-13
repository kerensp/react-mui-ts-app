import { Breadcrumbs, Link, Typography } from "@mui/material";

export const BreadcrumbsComponent = (
  <Breadcrumbs sx={{ display: "flex",ml: 5, color: "#464646", opacity: 1, fontSize: "14px" }}>
    <Link underline="hover" color="inherit" href="/inicio">
      Inicio
    </Link>
    <Link
      underline="hover"
      color="inherit"
      href="/inicio/administracion/"
    >
      Administración
    </Link>
    <Typography sx={{ color: "#4F2D80", opacity: 1, fontSize: "14px"}}>
      Usuarios
    </Typography>
  </Breadcrumbs>
);