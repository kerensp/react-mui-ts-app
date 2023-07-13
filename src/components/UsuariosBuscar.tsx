import { InputBase, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function UsuariosBuscar() {
  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{
        mt: "40.23px",
        mr: "14.02px",
        mb: "17.17px",
        display: "flex",
        alignItems: "center",
        width: "366px",
        height: "42px",
        border: "1px solid #09378C33",
        opacity: 1,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize:"15px" }}
        placeholder="Buscar..."
        inputProps={{ "aria-label": "buscar" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "#4F2D80", opacity: 1, }}
        aria-label="buscar"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
