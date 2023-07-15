import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Dashboard } from '../pages';


export const AppRoutes = () => {
  const {setDrawerOptions } = useDrawerContext();

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
      <Route path='/initial-page' element={ <Dashboard />}/>
      <Route path='*' element={<Navigate to='/initial-page' />} />
    </Routes>
  );
};
