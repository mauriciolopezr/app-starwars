import React from 'react'
import { Container, Button, Modal } from 'react-bootstrap'

const MyModal = (props) => {

  return (
    
    //Estructura del modal
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size='xl'>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Características completas del personaje
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className='table-responsive container mt-3'>
          <table className='table table-bordered table-hover table-sm'>
            <thead className='table-active bg-success'>
              <tr>
                <th>Personaje</th>
                <th>Altura</th>
                <th>Peso</th>
                <th>Color de cabello</th>
                <th>Color de ojos</th>
                <th>Año de nacimiento</th>
                <th>Género</th>
                <th>Planeta natal</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>              
                <tr key={props.details.name}>
                  <td>{props.details.name}</td>
                  <td>{props.details.height}</td>
                  <td>{props.details.hair_color}</td>
                  <td>{props.details.skin_color}</td>
                  <td>{props.details.eye_color}</td>
                  <td>{props.details.birth_year}</td>
                  <td>{props.details.gender}</td>
                  <td>{props.details.homeworld}</td>
                  <td>{props.details.url}</td>
                </tr>
            </tbody>
          </table>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;