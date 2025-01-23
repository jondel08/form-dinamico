import { Container, Navbar, Nav } from "react-bootstrap";

const NavBarMenu = () => { 
   return (
      <div >
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="/">Dynamic <b>Form</b></Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
               </Nav>
            </Container>

         </Navbar>
      </div>
   )
}

export default NavBarMenu;