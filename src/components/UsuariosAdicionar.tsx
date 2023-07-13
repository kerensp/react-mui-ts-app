import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function UsuariosAdicionar() {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "120px",
        height: "42px",
        mt: "40.23px",
        mr: "59px",
        mb: "17.17px",
        textTransform: "none",
        color: "#4F2D80",
        fontSize: "15px",
        border: "1px solid #09378C33",
        opacity: 1,
        "&:hover":{backgroundColor:"#4F2D80", color:"#FFFFFF", borderRadius: "5px"}
      }}
      startIcon={<AddIcon />}
    >
      Adicionar
    </Button>
  );
}
