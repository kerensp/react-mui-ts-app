import { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbarContainer, esES } from "@mui/x-data-grid";
import { GridCellParams } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import UsuariosAdicionar from "./UsuariosAdicionar";
import UsuariosFecha from "./UsuariosFecha";
import SearchIcon from "@mui/icons-material/Search";
import UsuariosLista from "./UsuariosLista";
import PersonIcon from "@mui/icons-material/Person";

interface RowData {
  id: number;
  name: string;
}

const initialRows: RowData[] = [
  { id: 1, name: "Rosemary Casanova" },
  { id: 2, name: "Ruby Lemus" },
  { id: 3, name: "Bill Arenas" },
  { id: 4, name: "Clint Samaniego" },
  { id: 5, name: "" },
  { id: 6, name: "" },
  { id: 7, name: "" },
  { id: 8, name: "" },
  { id: 9, name: "" },
  { id: 10, name: "" },
];

export default function DataGridTable() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params: GridCellParams) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar>
            <PersonIcon />
          </Avatar>
          <Box sx={{ ml: 1 }}>{params.value}</Box>
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: GridCellParams) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Edit
            sx={{ color: "#4F2D80", width: "19px" }}
            onClick={() => handleEditRow(params.row.id)}
          />

          <Box sx={{ ml: 1 }}>
            <Delete
              sx={{ color: "#4F2D80", width: "19px", ml: "19.74px" }}
              onClick={() => handleDeleteRow(params.row.id)}
            />
          </Box>
        </Box>
      ),
    },
  ];

  const [rows, setRows] = useState<RowData[]>(initialRows);
  const [lastId, setLastId] = useState<number>(3);

  const handleAddRow = () => {
    const newId = lastId + 1;
    setLastId(newId);
    const newRow = { id: newId, name: `New row ${newId}` };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleEditRow = (id: number) => {
    console.log(`Editing row with id: ${id}`);
  };

  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper elevation={2} sx={{ width: "100%" }}>
      <DataGrid
        sx={{ fontSize: "14px", border: "none" }}
        rows={filteredRows}
        columns={columns}
        autoHeight
        disableColumnMenu
        components={{
          Toolbar: CustomToolbar,
        }}
        rowsPerPageOptions={[10, 25, 100]}
        checkboxSelection
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      />
    </Paper>
  );

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <Typography
          sx={{
            flexGrow: 1,
            fontSize: "26px",
            color: "#4f2d80",
            opacity: 1,
            letterSpacing: "0.2px",
            fontWeight: 600,
            pl: "38px",
          }}
        >
          Usuarios
        </Typography>
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
            sx={{ ml: 1, flex: 1, fontSize: "15px" }}
            placeholder="Buscar..."
            inputProps={{ "aria-label": "buscar" }}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: "10px", color: "#4F2D80", opacity: 1 }}
            aria-label="buscar"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <UsuariosFecha />
        <Box sx={{ ml: 2 }} onClick={handleAddRow}>
          <UsuariosAdicionar />
        </Box>
        <UsuariosLista />
      </GridToolbarContainer>
    );
  }
}
