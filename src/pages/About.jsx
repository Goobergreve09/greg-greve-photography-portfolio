import { Row, Col, Container } from "react-bootstrap";
import ModalImage from "react-modal-image";

import greg from "../assets/images/gregProfile.jpg"
import background from "../assets/images/luton4Small.jpg"

// import ModalImage from "react-modal-image";

export default function About() {
  return (
    <>
        <Container
        fluid
        className="aboutBackground"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: 'white', // Optional: ensure text color is readable on the background
        }}
      >
        <Row className="pt-5">
            <Col lg={6}>
            <ModalImage
            small ={greg}
            large ={greg}
            className="profilePhoto"

            />
            </Col>
            <Col lg={6} className="profileDescription">
            Hey guys, Thanks for checking out my page. I am Greg. I primarily excel in landscape and candid photography. I started taking pictures about 8 years ago now with my first camera which was a Panasonic Lumix. 
            I retrieved a Nikon D5600 for Christmas shortly after and haven't stopped since. I now own a professional DSLR Nikon D850 
            which I use for most of my shots. My hobbies include travel, hammocking, watching movies, cultural restaurants, and sports. My photos are for your enjoyment only. 
            If you'd like to collaborate or you would like me to take photos of you, contact me via facebook or my contact page here. If you would like to see any of my photos in the gallery in your home as a poster, tapestry, canvas, or more reach out to
            my contact page and we can make something happen.
            </Col>
        </Row>
      </Container>
    </>
  );
}
