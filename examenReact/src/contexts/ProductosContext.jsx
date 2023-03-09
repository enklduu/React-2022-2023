import { createContext, useContext, useState } from "react";
// El primer paso es importar el createContext
// Luego tenemos que exportar el context

export const ProductosContext = createContext();

// Todo contexto debe estar englobado con el provider para que permita mandar el contexto

export function ProductosContextProvider({children}) {
  // aqui ponemos lo que queremos que se vea en todos los componentes
  const [productos, setProductos] = useState([]);
    const value = { productos:productos, setProductos:setProductos };
  return(<ProductosContext.Provider value={value}>
    {/* {props.children} */}
    {children}
  </ProductosContext.Provider>);
    // La diferencia entre props.children (todos los componentes que ponemos en medio/ código html blablabla) y  props (aquello que le paso al componente)
}
// Debemos exportar el contexto ProductosContext y el Provider


export function useProductosContext(){
    const context = useContext(ProductosContext);
    return context;
}