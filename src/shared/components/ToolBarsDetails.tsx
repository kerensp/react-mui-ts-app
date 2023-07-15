import {
  Box,
  Button,
  Divider,
  Paper,
  Skeleton,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

interface IToolBarsDetailsProps {
  newTextButton: string;

  showSaveButton?: boolean;
  showSaveAndCloseButton?: boolean;
  showDeleteButton?: boolean;
  showNewButton?: boolean;
  showReturnButton?: boolean;

  showSaveButtonLoading?: boolean;
  showSaveAndCloseButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showNewButtonLoading?: boolean;
  showReturnButtonLoading?: boolean;

  onClickSaveButton?: () => void;
  onClickSaveAndCloseButton?: () => void;
  onClickDeleteButton?: () => void;
  onClickNewButton?: () => void;
  onClickReturnButton?: () => void;
}

export const ToolBarsDetails: React.FC<IToolBarsDetailsProps> = ({
  newTextButton = 'New',

  showSaveButton = true,
  showSaveAndCloseButton = false,
  showDeleteButton = true,
  showNewButton = true,
  showReturnButton = true,

  showSaveButtonLoading = false,
  showSaveAndCloseButtonLoading = false,
  showDeleteButtonLoading = false,
  showNewButtonLoading = false,
  showReturnButtonLoading = false,

  onClickSaveButton,
  onClickSaveAndCloseButton,
  onClickDeleteButton,
  onClickNewButton,
  onClickReturnButton,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

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
      {showSaveButton && !showSaveButtonLoading && (
        <Button
          color='primary'
          variant='contained'
          disableElevation
          startIcon={<SaveIcon />}
          onClick={onClickSaveButton}>
          Save
        </Button>
      )}
      {showSaveButtonLoading && <Skeleton width={110} height={60} />}

      {(showSaveAndCloseButton && !showSaveAndCloseButtonLoading && !smDown && !mdDown) && 
        (
          <Button
            color='primary'
            variant='outlined'
            disableElevation
            startIcon={<SaveIcon />}
            onClick={onClickSaveAndCloseButton}>
            save and close
          </Button>
        )
      }
      {showSaveAndCloseButtonLoading && !smDown && !mdDown && (
        <Skeleton width={180} height={60} />
      )}

      {showDeleteButton && !showDeleteButtonLoading && (
        <Button
          color='primary'
          variant='outlined'
          disableElevation
          startIcon={<DeleteIcon />}
          onClick={onClickDeleteButton}>
          delete
        </Button>
      )}
      {showDeleteButtonLoading && <Skeleton width={110} height={60} />}

      {showNewButton && !showNewButtonLoading && !smDown && (
        <Button
          color='primary'
          variant='outlined'
          disableElevation
          startIcon={<AddIcon />}
          onClick={onClickNewButton}>
          {newTextButton}
        </Button>
      )}
      {showNewButtonLoading && <Skeleton width={110} height={60} />}

      {
        (
          showReturnButton &&
          (showDeleteButton || showNewButton || showSaveAndCloseButton || showSaveButton)
        ) && (
          <Divider variant='middle' orientation='vertical' />
        )
      }

      {showReturnButton && !showReturnButtonLoading && (
        <Button
          color='primary'
          variant='outlined'
          disableElevation
          startIcon={<KeyboardReturnIcon />}
          onClick={onClickReturnButton}>
          return
        </Button>
      )}
      {showReturnButtonLoading && <Skeleton width={110} height={60} />}
    </Box>
  );
};
