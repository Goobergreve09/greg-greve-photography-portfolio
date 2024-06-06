import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, NavbarText } from 'react-bootstrap';
import ggpLogo from '../assets/images/ggpLogo.png';
import dayjs from 'dayjs';

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const date = dayjs().format('dddd, MMMM D, YYYY');

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar expand="lg" expanded={expanded} className="navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={ggpLogo} alt="Main Logo" width="175" height="75" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleNavbarToggle} />
          <Navbar.Collapse>
            <Nav className="mr-auto navbar">
              <Nav.Link as={Link} to="/Gallery" onClick={handleNavLinkClick}>
                Gallery
              </Nav.Link>
            </Nav>
            <NavbarText className="navbar-text p-0">{date}</NavbarText>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

