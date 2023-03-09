import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GuardarPiezas from "./components/GuardarPiezas";
import MostrarPiezas from "./components/MostrarPiezas";
import { getAll } from "./helpers/acceso-firebase";
import "./index.css";

// const piezaFake = {
//   id: "",
//   data: {
//     nombre: "",
//     precio: 0,
//     valoracion: 0,
//   },
// };

function App() {
  const [pieza, setPieza] = useState(null);
  const [edit, setEdit] = useState(null);

  async function getData() {
    const data = await getAll();
    setPieza(data);
    return data;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row className="mt-4">
          <Col>
            <GuardarPiezas
              statePieza={{ pieza, setPieza }}
              stateEdit={{ edit, setEdit }}
            />
          </Col>
          <Col>
            {pieza && (
              <MostrarPiezas
                statePieza={{ pieza, setPieza }}
                stateEdit={{ edit, setEdit }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
