import { Row, Col, Container } from "react-bootstrap";
import photoOfMonth from "../assets/images/photoOfmonth.jpg";
import reachOut from "../assets/images/reachout.png";

export default function Home() {
  return (
    <>
      <Container fluid className="titleContainer">
      <Row className="monthlyShowcase justify-content-center pt-5">
        Monthly Photo Selection:
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-3">
        This photo was taken on the coast of the Pacific Ocean. I took a path down 
         towards the water in Washington. It was a rainy and eerie afternoon.
          Nothing really describes Washington better.
        </Row>
        <Row className="monthlyShowcaseDescription justify-content-center  pt-2">
          <span className="italic"> Nikon D5600/18-35mm lens 3.4</span>
          </Row>
        <Row className="text-center align-items-center justify-content-center pt-5 pb-5">
          <Col lg={8} xs={12}>
            <img
              src={photoOfMonth}
              alt="The photo of the month selected by Greg Greve"
              className="photoOfmonth"
            />
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
          <Col lg={6} xs={12} className="pt-4">
            <h5>Online Resources:</h5>
            <Col>www.nami.org</Col>
            <Col>www.mentalhealthamerica.net</Col>
            <Col>http://www.icdri.org/</Col>
            <Col>http://www.nmha.org/</Col>
            <Col>https://selfinjury.com/</Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
