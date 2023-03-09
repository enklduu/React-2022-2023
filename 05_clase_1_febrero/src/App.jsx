import { useState } from 'react'
import './App.css'
import FormularioDatos from './components/FormularioDatos'
import Formulario from './components/Formulario'
import { Col, Container, Row } from 'react-bootstrap'
import CardInfo from './components/CardInfo'

const initialStateAPI = {};
function App() {
  const [API, setAPI] = useState(initialStateAPI);
  return (
    <div className="App">
      {/* <FormularioDatos/> */}
      <Container>
        <Row>
          <Col xs={4}><Formulario setAPI={setAPI}/></Col>
          <Col md="auto"><CardInfo api={API}/></Col>
        </Row>
      </Container>
    </div>
  )
}

export default App