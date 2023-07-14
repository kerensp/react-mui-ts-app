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
