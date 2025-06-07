import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../../css/Contact/FormContact.css";

const FormContact = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Correo:", mail);
    console.log("Mensaje:", mensaje);
    setNombre("");
    setMail("");
    setMensaje("");
  };

  return (
    <div className="form-wrapper">
      <Form className="contact-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ingresá tu Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre y Apellido"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <Form.Label>Ingresá tu correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Dejame tu mensaje aquí</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={mensaje}
            onChange={(e) => {
              setMensaje(e.target.value);
            }}
          />
        </Form.Group>
        <Button className="button" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormContact;
