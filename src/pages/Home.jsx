import { Row, Col, Container } from "react-bootstrap";

import background from "../assets/images/background.jpg"


export default function Home() {
  return (
    <Container fluid 
    className="titleContainer"
    >
      <Row>
      </Row>
      <Row className="text-center align-items-center justify-content-center pt-5">
        <Col lg={8} xs={12}>
          <img
            src={background}
            alt="collage of photographer"
            className="collage"
          />
        </Col>
      </Row>
    </Container>
  );
}
