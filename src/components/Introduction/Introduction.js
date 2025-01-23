import React from 'react'
import "./Introduction.css"
import { Container, Row, Col, Button } from 'react-bootstrap'

const Introduction = () => {
   return (
      <div className='introduction p-3 p-lg-5 mt-5'>
         <Container fluid>
            <Row className="justify-content-md-center">
               <Col xs={12} md={8}>
                  <h1 className='pl-2 text-center'>Dynamic <b>Form</b></h1>
                  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

                  <h4 className='text-center pt-3'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                  </h4>
                  <div className='d-flex container-actions mt-5'>
                     <div className='container-buttons'>
                        <Button className='p-3' onClick={() => {console.log("Click") }}>Primary</Button>
                        <Button className='p-3'>Secondary</Button>
                     </div>
                  </div>
                  <div className='btn-start-create'>
                     <a href="#dinamyc-form">Start to create</a>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Introduction;