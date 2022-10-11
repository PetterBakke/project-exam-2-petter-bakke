import logo from '../images/project-exam-logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Layout() {
  return (
    <Navbar className='navbar' expand="lg" >
      <Container>
        <Navbar.Brand href="/"><img src={logo} className="app-logo" alt="" /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/hotels">View Hotels</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/enquiry">Enquiry</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Layout;