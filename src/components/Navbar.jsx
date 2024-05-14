import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import ggpLogo from '../assets/images/ggpLogo.png';


export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
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
              className="align-top d-flex"
            />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleNavbarToggle} />
        </Container>
      </Navbar>
    </>
  );
}
