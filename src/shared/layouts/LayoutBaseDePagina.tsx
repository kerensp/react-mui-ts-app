import {
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerContext } from '../contexts/DrawerContext';
import { ReactNode } from 'react';

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  title: string;
  toolbars: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  title,
  toolbars,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box
        padding={1}
        display='flex'
        alignItems='center'
        gap={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          variant={ smDown ? 'h5' : mdDown ? 'h4' : 'h3'}>
          {title}
        </Typography>
      </Box>

      {toolbars && <Box>{toolbars}</Box>}

      <Box flex={1} overflow={'auto'}>
        {children}
      </Box>
    </Box>
  );
};
