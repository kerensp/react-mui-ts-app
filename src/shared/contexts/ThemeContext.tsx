import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from './../themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

interface IAppThemeProviderProps {
  children: React.ReactNode
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);


  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

/* 
Este código importa diferentes módulos y componentes de React y otras bibliotecas, define una interfaz llamada IThemeContextData, un contexto de tema llamado ThemeContext, una función personalizada llamada useAppThemeContext para utilizar el contexto de tema y un componente de proveedor de tema llamado AppThemeProvider.

Las importaciones al comienzo del código son para diferentes componentes y bibliotecas que se utilizan en el código. Por ejemplo, createContext y useContext son funciones de React que se utilizan para crear y utilizar contextos, mientras que ThemeProvider y Box son componentes de la biblioteca Material UI que se utilizan para establecer y mostrar estilos en la aplicación.

La interfaz IThemeContextData define la forma de los datos que se comparten a través del contexto de tema. En este caso, el contexto de tema tiene dos propiedades: themeName, que es una cadena que especifica el nombre del tema actual, y toggleTheme, que es una función que se utiliza para cambiar el tema de la aplicación.

La función useAppThemeContext se utiliza para consumir el contexto de tema en cualquier componente que lo necesite. Esta función utiliza la función useContext de React para acceder al contexto de tema y devuelve los datos del contexto a través de un objeto.

El componente AppThemeProvider es un componente de proveedor de tema que utiliza el contexto de tema para proporcionar el tema actual a los demás componentes de la aplicación. El componente utiliza el estado local para controlar el nombre del tema actual y la función useMemo para generar el tema correspondiente dependiendo del nombre del tema. (La función useCallback se utiliza para evitar que se vuelva a crear la función cada vez que se renderice el componente AppThemeProvider)

Finalmente, el componente envuelve el contenido de la aplicación en el componente Box para asegurarse de que el fondo de la aplicación tenga el color de fondo correspondiente al tema actual.
*/
