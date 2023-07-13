import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", ml: "40px", pb:"30px" }}>
      <Tabs
        sx={{
          "& button": {
            color: "#46464680",
            fontSize: "17px",
            padding: "1px 15px 15px 15px",
            mr: "25px",
            textTransform: "none",
          },
          "& button:hover": { color: "#4F2D80" },
        }}
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Todos" />
        <Tab label="Activos" />
        <Tab label="Sin verificar" />
        <Tab label="Bloqueados" />
      </Tabs>
    </Box>
  );
}
