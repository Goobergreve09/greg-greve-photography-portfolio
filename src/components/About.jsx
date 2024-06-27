import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../assets/images/self.jpg";

export default function AboutMe() {
  return (
    <Container fluid className="pt-5">
      <Row className="pt-5">
        <Col>
          <h2 className="text-center">Who Am I?</h2>
          <img
            src={aboutImage}
            alt="AI generated image of photographer during apocalypse"
            className="aboutImage"
          />
        </Col>
      </Row>
    </Container>
  );
}
