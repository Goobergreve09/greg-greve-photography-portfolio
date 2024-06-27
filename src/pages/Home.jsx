import { Row, Col, Container, Button } from "react-bootstrap";
import photoOfMonth from "../assets/images/photoOfmonth.jpg";
import photoOfMonthSmall from "../assets/images/photoOfmonthSmall.jpg";
import theGreatest from "../assets/images/theGreatest.jpg";
import theGreatestSmall from "../assets/images/theGreatestSmall.jpg";
import reachOut from "../assets/images/reachout.png";
import Footer from "../components/Footer";
import Instagram from "../components/Instagram";
import Facebook from "../components/Facebook"

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
          1. An afternoon in Washington
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-3">
          This photo was taken on the coast of the Pacific Ocean. I took a path
          down towards the water in Washington. It was a rainy and eerie
          afternoon. Nothing really describes Washington better.
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
          2. The Greatest of All Time
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-3">
          Adam Degi is a stand-up comedian, and a Michigan native. This photo
          was captured of him before a set in Detroit, in the green room.
          Recently he has stated that he survived cancer for the third time.
          Melanoma is said to be one of the most aggressive forms of cancers. To
          learn more about melanoma,
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cancer.org/cancer/types/melanoma-skin-cancer.html"
            className="pt-3 pb-2"
          >
            click here to learn more
          </a>
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-2">
          <span className="italic"> Nikon D850/40mm lens 2.8</span>
        </Row>
        <Row className="text-center align-items-center justify-content-center pt-5 pb-5">
          <Col lg={8} xs={12}>
            <ModalImage
              small={theGreatestSmall}
              large={theGreatest}
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
          <Col>
          You can follow my socials here
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center pt-3 pb-3">
        <Col xs={12} sm={12} md={12} lg={4}>
        <Instagram className='Instagram' />
        </Col>
         <Col xs={12} sm={12} md={12} lg={4} className="text-center">
        <Facebook />
        </Col> 
         </Row>
      </Container> 

      <Container fluid className="monthlyContainer">
        <Row className="monthlyTitle justify-content-center pt-5">
          <Col>
            <h1> June is Men's Mental Health Awareness month.</h1>
          </Col>
        </Row>
        <Row className="monthlyTitle justify-content-center">
          <Col>
            <img
              src={reachOut}
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
