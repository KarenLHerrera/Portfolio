import React from 'react'
import { Card } from "react-bootstrap";
import useProject from '../../Custom/useProject';
import '../../css/AboutMe/Cards.css'; 

const CardLibraries = () => {
  const { data } = useProject("Libraries");

  return (
    <div className="card-libraries-container">
      {data.map((item) => (
        <Card key={item.id} className="library-card">
          <Card.Img
            variant="top"
            src={item.imagen} 
            className="library-card-img"
          />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardLibraries;