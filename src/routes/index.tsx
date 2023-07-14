import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';


export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: HomeIcon,
        path: '/initial-page',
        label: 'Initial page',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path='/initial-page' element={ <Button variant='contained' color='primary' onClick={toggleDrawerOpen} >TOGGLE DRAWER</Button> }/>
      <Route path='*' element={<Navigate to='/initial-page' />} />
    </Routes>
  );
};
