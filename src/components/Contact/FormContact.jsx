import React from "react";
import { Form,Button } from "react-bootstrap";
import "../../css/Contact/FormContact.css";

const FormContact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <Form className="contact-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ingresá tu Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre y Apellido" />
          <Form.Label>Ingresá tu correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Dejame tu mensaje aquí</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button className="button" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormContact;
