import { createContext, useContext, useState } from "react";
// 1.- paso Importar la función createContext que permite
// crear el contexto.
export const UserContext = createContext();
// 2.- creamos el provider que permite envolver a los componentes
// a los que quiero mandar el contexto.

export function UserContextProvider(props) {
  // aquí pondremos todo aquello que queremos que se vea
  // en todos los componentes.
  const [user, setUser] = useState(null);
  const value = { user, setUser };
  //3.- Debemos de exportar un componente de tipo provider.
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
  // 4.- debemos exportar el contexto (UserContext) y el provider con export
}

// 5- Para agilizar.. creamos un hook personalizado con mi contexto:
export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}