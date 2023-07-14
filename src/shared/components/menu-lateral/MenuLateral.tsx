import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} >
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

      <Box height='100vh' marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
