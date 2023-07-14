import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Routes>
      <Route
        path='/initial-page'
        element={
          <Button variant='contained' color='primary' onClick={toggleDrawerOpen} >
            TOGGLE DRAWER
          </Button>
        }
      />
      <Route path='*' element={<Navigate to='/initial-page' />} />
    </Routes>
  );
};

/*
Este código exporta un componente llamado AppRoutes que define las rutas de la aplicación usando react-router-dom. Este componente utiliza el contexto DrawerContext para manejar el estado de un cajón lateral y renderiza una ruta que muestra un botón para abrir o cerrar el cajón.

Dentro del componente AppRoutes, se utiliza el hook useDrawerContext para obtener la función toggleDrawerOpen del contexto DrawerContext.

Se define una ruta con la ruta de acceso /initial-page utilizando el componente Route de react-router-dom. El prop element se establece en un componente Button de Material-UI que muestra un botón con el texto TOGGLE DRAWER. Cuando el botón se hace clic, se llama a la función toggleDrawerOpen del contexto DrawerContext para abrir o cerrar el cajón lateral.

También se define una ruta para cualquier otra ruta que no coincida con /initial-page. Esta ruta utiliza el componente Navigate de react-router-dom para redirigir al usuario a /initial-page.

En resumen, el componente AppRoutes define las rutas de la aplicación y muestra un botón en la ruta /initial-page para abrir o cerrar el cajón lateral utilizando el contexto DrawerContext.
*/