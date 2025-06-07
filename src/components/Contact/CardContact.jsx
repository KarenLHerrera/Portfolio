import React from "react";
import { Card, Button } from "react-bootstrap";
import useProject from "../../Custom/useProject";
import '../../css/AboutMe/Cards.css'; 

const CardContact = () => {
  const { data } = useProject("Contacto");
  return (
    <div className="card-libraries-container">
      {data.map((item) => (
        <Card key={item.id} className="library-card">
          <Card.Img 
          variant="top"
            src={item.imagen} 
            className="library-card-img" />
          <Card.Body>
             <Button variant="dark" onClick={() => window.open(item.link, '_blank')}>Contáctame</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardContact;
