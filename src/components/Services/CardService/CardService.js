import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CardService.css"


const CardService = (props) => {

   const { id, title, subtitle, image, footer, link } = props.service;
   console.log(image);

   return (
      <Col className='container-card-service'>
         <Card>
            <Card.Img src={image} alt={title} />
            <Card.Body>
               <Card.Title>{title}</Card.Title>
               <Card.Text>{subtitle}</Card.Text>
            </Card.Body>
            <Card.Footer>
                  <a href={link} target='_blank' rel="noreferrer">{footer}</a>
            </Card.Footer>
         </Card>
      </Col>
   )
}

export default CardService;