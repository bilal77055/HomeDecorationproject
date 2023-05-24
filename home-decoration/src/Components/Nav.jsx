import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BsFillCartCheckFill } from "react-icons/bs";
import logo from '../pngtree-interior-logo-design-template-vector-isolated-illustration-image_286014-removebg-preview.png'
import { useNavigate } from 'react-router-dom';


function Navbr() {
const navigate=useNavigate(null)
  const showdata=()=>{
    navigate('/cartdata')
  }

  return (
    <Navbar bg="light" expand="lg" className=''>
      <Container fluid className=''>
        <Navbar.Brand href="#">

        <img className='logo ' src={logo} alt='Image'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
          </Nav>
            <Button variant="outline-dark" className='' onClick={showdata}>
          <BsFillCartCheckFill  className="fs-5"/>
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbr;