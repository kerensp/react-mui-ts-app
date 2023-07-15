import { Box, Button, Paper, TextField, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface IToolBarsProps {
  searchText?: string;
  showSearchInput?: boolean;
  onChangeSearchText?: (newText: string) => void;
  newTextButton?: string;
  showNewButton?: boolean;
  onClickNew?: () => void;
}

export const ToolBars: React.FC<IToolBarsProps> = ({
  searchText = '',
  showSearchInput = false,
  onChangeSearchText: whenChangingSearchText,
  newTextButton: newButtonText = '',
  showNewButton = true,
  onClickNew: whenClickingNew,
}) => {
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
      {showSearchInput && (
        <TextField
          size='small'
          placeholder='Buscar...'
          value={searchText}
          onChange={(e) => whenChangingSearchText?.(e.target.value)}
        />
      )}

      <Box display={'flex'} flex={1} justifyContent={'end'}>
        {showNewButton && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            startIcon={<AddIcon />}
            onClick={whenClickingNew}>
            {newButtonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};
