import { Card, Col, Container, Row } from "react-bootstrap";
import "./Services.css"
import CardService from "./CardService/CardService";

const Services = () => {

   const servicesArray = [
      {
         id: "0",
         title: "Worpress Course",
         subtitle: "El mejor curso de Worpress",
         image: "img/wp.png",
         footer: "Go to the course",
         link: "#!"
      }, {
         id: "1",
         title: "React Course",
         subtitle: "El mejor curso de React",
         image: "img/react.png",
         footer: "Go to the course",
         link: "#!"
      },
      {
         id: "2",
         title: "JavaScript Course",
         subtitle: "El mejor curso de JavaScript",
         image: "img/js.png",
         footer: "Go to the course",
         link: "#!"
      }
   ]

   return (
      <div className="services p-4 mt-5">
         <Container fluid>
            <Row className="justify-content-md-center">
               <Col xs={12} md={8}>
                  {/* <h2 className="text-center">Servicios</h2>
                  <h4 className="pb-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h4> */}
                  <Row xs={12} md={3} className="g-4 mt-4">
                     {servicesArray.map((service, index) =>
                        <CardService service={service} key={index} />
                     )}
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Services;

