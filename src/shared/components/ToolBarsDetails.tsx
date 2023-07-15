import { Box, Button, Divider, Paper, useTheme } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export const ToolBarsDetails: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display={'flex'}
      alignItems={'center'}
      gap={1}>

      <Button color='primary' variant='contained' disableElevation startIcon={<SaveIcon />}>
        Save
      </Button>

      <Button color='primary' variant='outlined' disableElevation startIcon={<AssignmentReturnIcon />}>
        save and return
      </Button>

      <Button color='primary' variant='outlined' disableElevation startIcon={<DeleteIcon />}>
        delete
      </Button>

      <Button color='primary' variant='outlined' disableElevation startIcon={<AddIcon />}>
        New
      </Button>

      <Divider variant='middle' orientation='vertical' />

      <Button color='primary' variant='outlined' disableElevation startIcon={<KeyboardReturnIcon />}>
        return
      </Button>

    </Box>
  );
};
