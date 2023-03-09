import { createContext, useState } from "react";
// El primer paso es importar el createContext
// Luego tenemos que exportar el context

export const PersonContext = createContext();

// Todo contexto debe estar englobado con el provider para que permita mandar el contexto

export function ContextPersonProvider({children}) {
  // aqui ponemos lo que queremos que se vea en todos los componentes
  // ejemplo
  // const edad
  // siempre creamos un value para que sea más claro
  // const value = edad;
  // debemos exportar un componente de tipo Provider


  const [usuario, setUsuario] = useState({dni:"77021510F", nombre: "Iván" , edad:20});
const value = { usuario, setUsuario };
  return(<PersonContext.Provider value={value}>
    {/* {props.children} */}
    {children}
  </PersonContext.Provider>);
    // La diferencia entre props.children (todos los componentes que ponemos en medio/ código html blablabla) y  props (aquello que le paso al componente)
}
// Debemos exportar el contexto InfoContext y el Provider
// Le metemos un export tope guapo delante