import {
  Button,
  FormControl,
  FormControlLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";
import React from "react";

const buttons = [
  "Hoy",
  "Últimos 7 días",
  "Últimos 30 días",
  "Últimos 90 días",
  "Este año",
  "Últimos 12 meses",
];

export default function UsuariosFecha() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<TuneIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          opacity: 1,
          color: "#4F2D80",
          fontSize: "15px",
          mt: "40.23px",
          mr: "14.02px",
          mb: "17.17px",
          border: "1px solid #09378C33",
          display: "flex",
          width: "240px",
          height: "42px",
          "&:hover": {
            backgroundColor: "#4F2D80",
            borderRadius: "5px",
            color: "#FFFFFF",
          },
        }}
      >
        Fecha de creación
      </Button>
      <Menu
        elevation={10}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ width: "345px", height: "721px" }}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {buttons.map((buttons) => (
              <MenuItem
                key={buttons}
                onClick={handleClose}
                sx={{ opacity: 1, fontSize: "18px" }}
              >
                <FormControlLabel control={<Radio />} label={buttons} />
              </MenuItem>
            ))}
            <MenuItem>
              <FormControlLabel control={<Radio />} label={"Rango"} />
            </MenuItem>
          </RadioGroup>
        </FormControl>
      </Menu>
    </div>
  );
}
