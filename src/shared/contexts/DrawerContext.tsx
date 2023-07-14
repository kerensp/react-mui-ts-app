import {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IDrawerProviderProps {
  children: React.ReactNode
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

/* 
Este código es una implementación de un contexto en React que proporciona un estado compartido para el estado de un cajón (drawer) en una aplicación. Un contexto en React es una forma de pasar datos desde un componente padre a varios componentes hijos sin tener que pasar las props manualmente a través de cada nivel de la jerarquía de componentes.

El código importa varias funciones de React, incluyendo createContext, useCallback, useContext y useState. createContext se utiliza para crear un nuevo contexto, useCallback se utiliza para crear una función de devolución de llamada que no se vuelve a crear en cada renderizado, useContext se utiliza para acceder al valor actual del contexto y useState se utiliza para crear un estado local para la variable isDrawerOpen.

El DrawerContext creado con createContext se utiliza para proporcionar el valor del estado compartido a través del DrawerProvider. El useDrawerContext es un gancho personalizado que se utiliza para acceder al valor del DrawerContext en cualquier componente que esté dentro del árbol de componentes del DrawerProvider.

El DrawerProvider es un componente de función que toma un prop children y proporciona el valor del contexto a sus componentes hijos. El estado local isDrawerOpen se inicializa en false y se actualiza mediante la función setIsDrawerOpen, que se pasa como argumento a useState. Se define una función toggleDrawerOpen mediante useCallback que invierte el valor actual del estado del cajón.

Finalmente, el componente DrawerProvider envuelve a los componentes hijos con el contexto creado mediante DrawerContext.Provider. El valor del contexto se establece en un objeto con las claves isDrawerOpen y toggleDrawerOpen, que se pasan como valores a value en el Provider. De esta manera, cualquier componente hijo que llame a la función useDrawerContext puede acceder al estado del cajón y la función toggleDrawerOpen.
*/
