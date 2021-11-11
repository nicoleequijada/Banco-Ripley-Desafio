import React, { useState } from "react";
import {
  Button,
  Modal
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './CreateModal.css';


function CreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="div-modal">
    <Button variant="warning" onClick={handleShow}>
       Crear
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Creación nuevo destinatario</Modal.Title>
        </Modal.Header>
        <Modal.Body>El Destinatario se ha creado con exito!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Link to="/transfer"><Button variant="primary" onClick={handleClose}> Ir a transferir
          </Button></Link>
           
        </Modal.Footer>
      </Modal>
    </div>
      
    </>
  );
}
export default CreateModal
