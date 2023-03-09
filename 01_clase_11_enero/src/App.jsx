import "./App.css";
import Card from "./components/card/Card";
import Contador from "./components/contador/Contador";
import uuid from "react-uuid";
import Usuario from "./components/usuarios/Usuario";


// import Todo from './components/todo/Todo';

function App() {
  const nombre = "DWEC";
  const personas = [
    { nombre: "Isaias", profesion: "Desarrollador Web", genero: "masculino" },
    { nombre: "Laura", profesion: "Desarrollador Web", genero: "femenino" },
    { nombre: "Pepa", profesion: "Desarrollador Web", genero: "femenino" },
    { nombre: "Ainoa", profesion: "Desarrollador Web", genero: "femenino" },
    { nombre: "Pepe", profesion: "Desarrollador Web", genero: "masculino" },
    { nombre: "Mario", profesion: "Desarrollador Web", genero: "masculino" },
  ];
  const naleatoriol = Math.floor(Math.random() * personas.length);
  const naleatorio= Math.floor(Math.random()*100);
  return (
    <div className="App">
      Hola
      <strong>{nombre}</strong> {/* <Todo/> */}
      <Card
      nombre={personas[naleatoriol].nombre}
      profesion={personas[naleatoriol].profesion}
      url={
        personas[naleatoriol].genero==="masculino"
        ? "https://randomuser.me/api/portraits/men/"+naleatorio+".jpg"
        : "https://randomuser.me/api/portraits/women/"+naleatorio+".jpg"
        }
      />
    </div>
    // <div className="App">
    //   <Contador />
    // </div>
    // <div className="App">
    //   <Usuario/>
    // </div>
  );
}

export default App;

