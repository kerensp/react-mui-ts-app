import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useDrawerContext } from '../../contexts';

interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  
  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} display='flex' flexDirection='column'>
          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src='avatars/avatar.jpg'
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Initial Page' />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};


/*
Este código exporta un componente llamado MenuLateral que utiliza el contexto DrawerContext para manejar el estado de un cajón lateral en una aplicación de React. El componente MenuLateral toma un prop children que se utiliza para renderizar el contenido de la página principal.

Dentro del componente MenuLateral, se utiliza el hook useTheme y useMediaQuery de Material-UI para obtener el tema actual y la información de punto de quiebre de la pantalla. Luego, se utiliza useDrawerContext para obtener el estado isDrawerOpen y la función toggleDrawerOpen del contexto DrawerContext.

El componente Drawer de Material-UI se utiliza para renderizar el cajón lateral. El prop open se establece en isDrawerOpen para controlar si el cajón se muestra o no. El prop variant se establece en temporary si la pantalla es pequeña (menor o igual que sm según el theme) y permanent de lo contrario. El prop onClose se establece en toggleDrawerOpen para que el cajón se cierre cuando se haga clic en el botón de cierre o se toque fuera del cajón.

Dentro del cajón lateral, se utiliza el componente Box de Material-UI para establecer la anchura del cajón y el componente Avatar para mostrar una imagen de perfil. Se utiliza el componente Divider para separar la sección del avatar de la lista de elementos.

La sección de la lista de elementos se establece dentro de un componente Box con una propiedad flex de 1 para que ocupe todo el espacio disponible en el cajón. Se utiliza el componente List y ListItemButton para renderizar un botón de lista con un ícono de HomeIcon y un texto Initial Page.

Fuera del cajón lateral, se utiliza el componente Box para establecer la altura de la página principal en 100vh y la propiedad marginLeft en 0 si la pantalla es pequeña y en theme.spacing(28) de lo contrario. El prop children se utiliza para renderizar el contenido de la página principal.
*/