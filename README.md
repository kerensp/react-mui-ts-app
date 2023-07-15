# Practicing react with mui and typescript

## Table of contents

- [Overview](#overview)
  - [Folders](#folders)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### Folders

*CARPETA MOCK*

La carpeta "mock" se utiliza para almacenar archivos que simulan la respuesta de una API o servicio externo, lo que permite a los desarrolladores trabajar en la aplicación sin depender de la disponibilidad o estabilidad del servicio externo.


*CARPETA PAGES*

La carpeta pages se utiliza para organizar las diferentes páginas de la aplicación. Cada archivo o módulo en la carpeta pages representa una página de la aplicación y contiene el código necesario para renderizar el contenido de esa página.


*CARPETA ROUTES*

En resumen, la carpeta routes se utiliza para organizar las diferentes rutas o páginas de la aplicación web y para definir el contenido que se muestra en cada una de ellas.


*CARPETA SHARED*

La carpeta "shared" se utiliza para organizar y almacenar componentes, funciones, utilidades y otros recursos que se comparten en diferentes partes de una aplicación. Es decir, contiene elementos que se comparten entre varias características o módulos de la aplicación. Es una práctica común en proyectos de React para mantener una estructura de carpetas organizada y evitar la duplicación de código. Al separar los recursos compartidos en una carpeta específica, se puede mejorar la legibilidad, la escalabilidad y la mantenibilidad del código.

Es importante tener en cuenta que la carpeta "shared" no debe contener elementos específicos de una característica o módulo de la aplicación, ya que eso puede dificultar la reutilización del código. Por lo tanto, es recomendable mantener los elementos específicos de cada característica en carpetas separadas y utilizar la carpeta "shared" únicamente para elementos que se comparten en varias partes de la aplicación.

- COMPONENTS
La carpeta components se utiliza para organizar los diferentes componentes de una aplicación web y para definir el contenido que se muestra en cada uno de ellos. La utilización de componentes facilita la reutilización de código y la creación de una interfaz de usuario modular y escalable.

- CONTEXT
La carpeta "context" se utiliza para organizar la implementación del patrón de diseño de contexto de React y para proporcionar una forma eficiente de compartir datos entre componentes en una aplicación React con TypeScript.

- ENVIRONMENT
La carpeta environment (o env) se utiliza para almacenar las variables de entorno o configuraciones específicas de cada entorno en archivos de configuración separados. Esto facilita la configuración de la aplicación para diferentes entornos y hace que sea más fácil trabajar con diferentes configuraciones en diferentes etapas del desarrollo y despliegue de la aplicación. (Las variables de entorno son valores que se utilizan en la aplicación para configurar diferentes aspectos de la misma, como la URL de la API, las credenciales de autenticación, las claves de API, etc.)

- HOOKS
La carpeta hooks es una carpeta común en las aplicaciones web que se utiliza para almacenar los hooks personalizados de React. Los hooks son una característica de React que permiten a los desarrolladores reutilizar la lógica de estado y de ciclo de vida de los componentes entre diferentes componentes y aplicaciones.
En una aplicación web, los hooks se utilizan para encapsular la lógica que se puede reutilizar en diferentes partes de la aplicación. Por ejemplo, se podría tener un hook que maneja la autenticación de usuario, un hook que maneja la conexión a una API, un hook que maneja la paginación de una lista, etc.

- LAYOUTS
La carpeta layouts se utiliza para organizar los diferentes diseños o plantillas de una aplicación web y para definir la estructura y el contenido que se muestra en cada uno de ellos. La utilización de plantillas facilita la creación de una interfaz de usuario coherente y consistente en toda la aplicación.

- SERVICES
La carpeta services se utiliza para organizar los diferentes servicios o módulos que se utilizan para interactuar con recursos externos, como una API o una base de datos (en este caso un API). Cada archivo o módulo en la carpeta services representa un servicio o módulo y contiene el código necesario para interactuar con esos recursos externos.
En una aplicación web, los servicios se utilizan para encapsular la lógica de negocio y la interacción con recursos externos en una capa separada de la lógica de presentación o de los componentes de la interfaz de usuario. Por ejemplo, se podría tener un servicio que maneja las llamadas a una API, un servicio que maneja la autenticación de usuario, un servicio que maneja las operaciones de base de datos, etc.
En estos archivos o módulos de servicio, se suele utilizar bibliotecas o herramientas específicas para interactuar con los recursos externos. Por ejemplo, para interactuar con una API se podría utilizar la biblioteca axios, y para interactuar con una base de datos se podría utilizar una biblioteca como mongoose en el caso de MongoDB.

- THEMES
La carpeta themes se utiliza para almacenar los diferentes temas o estilos visuales de una aplicación web y para definir y aplicar el estilo visual correspondiente. La utilización de temas facilita la personalización de la interfaz de usuario y hace que sea más fácil crear una interfaz de usuario coherente y consistente en toda la aplicación.

### Screenshot


## My process

### Built with

- [React.js](https://react.dev/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript
- Semantic HTML5 markup
- [MUI](https://mui.com/) - UI Framework