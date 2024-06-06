import { Row, Col, Container, Button} from "react-bootstrap";
import background from "../assets/images/background.jpg"
import headsUp from "../assets/images/headsUp.png"
import faceIt from "../assets/images/faceit.png"


export default function Home() {
  return (
    <>
      <Container fluid className="titleContainer">
        <Row className="text-center align-items-center justify-content-center pt-5 pb-4">
          <Col lg={8} xs={12}>
            <img src={background} alt="collage of photographer" className="collage" />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="monthlyTitle justify-content-center pt-5">
          <Col>
            <h1> June is Men's mental health awareness month.</h1> 
          </Col>
  
        </Row>
        <Row className="monthlyTitle justify-content-center">
          <Col>
            <h1> Reach out.</h1> 
          </Col>
  
        </Row>
        <Row className="monthlyTitle justify-content-center pt-2 pb-2">
  <Col lg={6} xs={12}>
    <a href="https://headsupguys.org/" target="_blank" rel="noopener noreferrer"> 
      <img
        src={headsUp}
        alt="headsUp Logo men's mental health"
        className="monthlyIcon"
      />
    </a>
  </Col>
  <Col lg={6} xs={12}>
    <a href="https://www.faceitfoundation.org/" target="_blank" rel="noopener noreferrer"> 
      <img
        src={faceIt}
        alt="Face it men's mental health foundation"
        className="monthlyIcon"
      />
    </a>
  </Col>
</Row>

      </Container>
    </>
  );
}



