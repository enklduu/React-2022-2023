import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import SelectorPelicula from "./components/SelectorPelicula";
import Pelicula from "./components/Pelicula";
import { useState } from "react";

function App() {
  // estado llevado al padre para poder tratar la info de las películas.

  const [idSeleccionado, setIdSeleccionado] = useState(false);
  return (
    <div className="App">
      {/* <UsandoUseEffect />
       <DatosApi /> */}
      <h1>Datos Api:</h1>
      <h2>Usuarios</h2>
      <hr />
      <Container>
        <Row>
          <Col xs={4}>
            <SelectorPelicula setIdSeleccionado={setIdSeleccionado} />
          </Col>
          <Col md="auto">
            <Pelicula
              idSeleccionado={idSeleccionado}
              setIdSeleccionado={setIdSeleccionado}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
