import { Row, Col, Container, Button } from "react-bootstrap";
import photoOfMonth from "../assets/images/salinac6.jpg";
import photoOfMonthSmall from "../assets/images/salinac6Small.jpg";
import photoOfMonth2 from "../assets/images/pickler2.jpg";
import photoOfMonth2Small from "../assets/images/pickler2Small.jpg";
import monthlyLogo from "../assets/images/monthlyLogo.jpg";
import Footer from "../components/Footer";
import Instagram from "../components/Instagram";
// import Facebook from "../components/Facebook";

import { FaCamera } from "react-icons/fa";

// ModalImage

import ModalImage from "react-modal-image";

export default function Home() {
  return (
    <>
      <Container fluid className="titleContainer">
        <Row className="monthlyShowcase justify-content-center pt-5">
          Monthly Photo Selection:
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center   pt-3">
          1. Lake Huron Sunrise
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-3">
          This photo was taken on Port Salinac in Michigan. It's an image of a seagull at about 5:30 in the
          morning in late June. The sunrise of Lake Huron makes for an amazing backdrop. 
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-2">
          <span className="italic"> Nikon D5600/18-35mm lens 3.4</span>
        </Row>
        <Row className="text-center align-items-center justify-content-center pt-5 pb-5">
          <Col lg={8} xs={12}>
            <ModalImage
              small={photoOfMonthSmall}
              large={photoOfMonth}
              alt="The photo of the month selected by Greg Greve"
              className="photoOfmonth"
            />
          </Col>
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-3">
          2. Resilient Forest
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-3">
        This is an image of a tree taken at Pickler Lake Park - Fred Meijer Nature Reserve. The forests
        here are vast and diverse with plants and wildlife. Only days after a thunderstorm this photo was captured, 
        of a tree that appears to be broken, but holding on resliently.
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-2">
          <span className="italic"> Nikon D850/40mm lens 2.8</span>
        </Row>
        <Row className="text-center align-items-center justify-content-center pt-5 pb-5">
          <Col lg={8} xs={12}>
            <ModalImage
              small={photoOfMonth2Small}
              large={photoOfMonth2}
              alt="Adam Degi - The Greatest of All-Time."
              className="photoOfmonth"
            />
          </Col>
        </Row>
        <Row className="text-center align-items-center justify-content-center pt-5 pb-5">
          <Button className="w-50 galleryButton" href="/gallery">
            View Gallery <FaCamera className="" />
          </Button>
        </Row>
      </Container>
      <Container fluid className=" instagramBackground">
        <Row className="justify-content-center align-items-center text-center">
          <Col>You can follow my socials here</Col>
        </Row>
        <Row className="justify-content-center align-items-center pt-3 pb-3">
          <Col xs={12} sm={12} md={12} lg={4}>
            <Instagram className="Instagram" />
          </Col>
          {/* <Col xs={12} sm={12} md={12} lg={4} className="text-center">
        <Facebook />
        </Col>  */}
        </Row>
      </Container>

      <Container fluid className="monthlyContainer">
        <Row className="monthlyTitle justify-content-center pt-5">
          <Col>
            <h1> July is National Minority Mental Health Awareness month.</h1>
          </Col>
        </Row>
        <Row className="monthlyTitle justify-content-center">
          <Col>
            <img
              src={monthlyLogo}
              alt="mental health reach out icon"
              className="monthlyIcon"
            />
          </Col>
        </Row>

        <Row className="monthlyTitle justify-content-center pt-4">
          <h4>Links and Resources for Mental Health</h4>
        </Row>
        <Row className="monthlyTitle justify-content-center pt-2">
          <Col lg={6} xs={12}>
            <h5>Phone Numbers:</h5>
            <Col>988 - Suicide and Crisis Lifeline</Col>
            <Col>1-800-784-2433 - National Hopeline Network</Col>
            <Col>Text HOME to 741741 - Crisis Text Line</Col>
            <Col>1-800-950-6264 - National Alliance on Mental Illness</Col>
          </Col>
          <Col lg={6} xs={12} className="pt-4 pb-5">
            <h5>Online Resources:</h5>
            <Col>
              <a
                href="http://www.nami.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.nami.org
              </a>
            </Col>
            <Col>
              <a
                href="http://www.mentalhealthamerica.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mentalhealthamerica.net
              </a>
            </Col>
            <Col>
              <a
                href="http://www.nmha.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.nmha.org/
              </a>
            </Col>
            <Col className="pb-5">
              <a
                href="https://selfinjury.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://selfinjury.com/
              </a>
            </Col>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
