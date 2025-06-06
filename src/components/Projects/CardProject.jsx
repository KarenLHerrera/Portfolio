
import { Card, Button } from "react-bootstrap";
import useProject from "../../Custom/useProject";
import '../../css/AboutMe/Cards.css'; 


const CardProject = () => {
const {data}=useProject("Proyecto")  
  return (
    <div className="card-libraries-container">
      { data.map((item) => (
        <Card key={item.id} className="library-card">
        <Card.Img className="library-card-img" />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
            {item.descripcion}
          </Card.Text>
          <Button variant="dark">Ver más</Button>
        </Card.Body>
      </Card>

      ))}
      
    </div>
  );
};

export default CardProject;
