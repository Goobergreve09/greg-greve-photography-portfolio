import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav
 } from 'react-bootstrap';
import ggpLogo from '../assets/images/ggpLogo.png';


export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false); 
  };

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        className="navbar"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={ggpLogo}
              alt="Main Logo"
              width="175"
              height="75"
             
            />
          </Navbar.Brand>
          
          <Navbar.Toggle onClick={handleNavbarToggle} />
          <Navbar.Collapse>
            <Nav className="navbar">
              <Nav.Link as={Link} to="/Gallery" onClick={handleNavLinkClick}>
                Gallery
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
