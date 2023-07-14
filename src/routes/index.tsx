import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route
        path="/initial-page"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Pruebas
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/initial-page" />} />
    </Routes>
  );
};

/* 
La primera ruta, <Route path="/initial-page" element={<p>Initial Page</p>} />, establece una ruta para la página inicial de la aplicación. Cuando el usuario visita la URL "/initial-page", se renderiza un elemento de párrafo que dice "Initial Page". El elemento JSX <p> es el contenido que se muestra en la página.
<Route path="/initial-page" element={<Button>Pruebas</Button>} /> boton que dice pruebas

La segunda ruta, <Route path="*" element={<Navigate to="/initial-page" />} />, establece una ruta para todas las demás URL que no coincidan con la primera ruta definida. El path * coincidirá con cualquier URL que no haya sido definida en otras rutas.

Cuando el usuario visita una URL que no coincide con ninguna ruta definida, se renderiza un elemento <Navigate> que redirige al usuario a la ruta "/initial-page". El componente Navigate es parte de React Router y se utiliza para navegar programáticamente en la aplicación.

En resumen, este código define dos rutas en una aplicación de React Router: una para la página inicial y otra para todas las demás URL no encontradas. Cuando el usuario visita una URL no encontrada, se redirige automáticamente a la página inicial.
*/
