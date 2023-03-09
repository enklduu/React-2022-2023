import './App.css';
import Form from './components/Formulario';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CardShow from './components/CardShow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App mt-3">
      <h1 className='mb-5 fs-1 fw-bold'>TO DO LIST</h1>
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col xs={4}><Form/></Col>
          <Col md="auto" className='ms-3 border border-5'><CardShow/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
