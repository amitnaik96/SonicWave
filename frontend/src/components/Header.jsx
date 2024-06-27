import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
      navigate('/buy');
    }

    return ( 
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">SonicWave</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
          </Nav>
        </Container>
        <Button variant="success" className="me-3" onClick={handleRedirect}>Buy Now</Button>
      </Navbar>
     );
}
 
export default Header;