import { Row, Col, Container } from "react-bootstrap";

import headerLogo from "../assets/images/headerLogo.jpg";
import lightShine from "../assets/images/lightShine.jpg";
import goldenHour from "../assets/images/goldenHour.jpg";

export default function Home() {
  return (
    <Container fluid className="titleContainer">
      <Row>
        <Col lg={12} xs={12} className="d-flex justify-content-center p-0 mb-0">
          <img
            src={headerLogo}
            alt="Greg Greve Portfolio Photography Header"
            className="headerLogo"
          />
        </Col>
      </Row>
      <Row className="text-center align-items-center pt-5">
        <Col lg={6} xs={12}>
          <img
            src={lightShine}
            alt="image of sedona at sunset"
            className="lightShine"
          />
          <p className="text-center italicLocation">
            Mount Leconte,TN -- Nikon D5600 24-70mm
          </p>
        </Col>
        <Col lg={6} xs={12}>
          <img
            src={goldenHour}
            alt="image of hiking trail in Mt. Leconte,TN at golden hour"
            className="goldenHour"
          />
          <p className="text-center italicLocation">
            Mount Leconte,TN -- Nikon D5600 24-70mm
          </p>
        </Col>
      </Row>
    </Container>
  );
}
