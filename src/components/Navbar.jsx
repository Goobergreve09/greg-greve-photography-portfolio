import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavbarText } from "react-bootstrap";
import ggpLogo from "../assets/images/ggpLogo.png";
import dayjs from "dayjs";

// Ribbon image imports---------------------------------------------------------------

import RibbonJune from "../assets/images/mensRibbon.png";
import RibbonJuly from "../assets/images/ribbonJuly.png";
import RibbonAugust from "../assets/images/ribbonAugust.png";
import RibbonSeptember from "../assets/images/ribbonSeptember.png";
import RibbonOctober from "../assets/images/ribbonOctober.png";


export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const date = dayjs().format("dddd, MMMM D, YYYY");
  const currentMonth = dayjs().format("MMMM");

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const monthToRibbonMap = {
    June: RibbonJune,
    July: RibbonJuly,
    August: RibbonAugust,
    September: RibbonSeptember,
    October: RibbonOctober
  };

  const ribbonImage = monthToRibbonMap[currentMonth];

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
            <NavbarText className="navbar-text p-0">
              <span className="dateAndRibbon">
                <img src={ribbonImage} className="mensRibbon" />
                {date}
              </span>
            </NavbarText>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
