import { createContext, useContext, useState } from "react";
// El primer paso es importar el createContext
// Luego tenemos que exportar el context

export const LoggedContext = createContext();

// Todo contexto debe estar englobado con el provider para que permita mandar el contexto

export function LoggedContextProvider({children}) {
  // aqui ponemos lo que queremos que se vea en todos los componentes
  // ejemplo
  // const edad
  // siempre creamos un value para que sea más claro
  // const value = edad;
  // debemos exportar un componente de tipo Provider


  const [logged, setLogged] = useState(false);
    const value = { logged, setLogged };
  return(<LoggedContext.Provider value={value}>
    {/* {props.children} */}
    {children}
  </LoggedContext.Provider>);
    // La diferencia entre props.children (todos los componentes que ponemos en medio/ código html blablabla) y  props (aquello que le paso al componente)
}
// Debemos exportar el contexto InfoContext y el Provider
// Le metemos un export tope guapo delante

export function useLoggedContext(){
    const context = useContext(LoggedContext);
    return context;
}