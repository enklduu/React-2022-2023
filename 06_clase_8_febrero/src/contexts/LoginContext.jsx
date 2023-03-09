import { createContext, useContext, useState } from "react";
// El primer paso es importar el createContext
// Luego tenemos que exportar el context

export const LoginContext = createContext();

// Todo contexto debe estar englobado con el provider para que permita mandar el contexto

export function ContextLoginProvider({children}) {
  // aqui ponemos lo que queremos que se vea en todos los componentes
  // ejemplo
  // const edad
  // siempre creamos un value para que sea más claro
  // const value = edad;
  // debemos exportar un componente de tipo Provider


  const [logged, setLogged] = useState(false);
    const value = { logged:logged, setLogged:setLogged };
  return(<LoginContext.Provider value={value}>
    {/* {props.children} */}
    {children}
  </LoginContext.Provider>);
    // La diferencia entre props.children (todos los componentes que ponemos en medio/ código html blablabla) y  props (aquello que le paso al componente)
}
// Debemos exportar el contexto InfoContext y el Provider
// Le metemos un export tope guapo delante

export function useLoginContext(){
    const context = useContext(LoginContext);
    return context;
}

