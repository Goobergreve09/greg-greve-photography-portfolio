import { Row, Col, Container } from "react-bootstrap";

import ModalImage from "react-modal-image";

import lightShine from "../assets/images/lightShine.jpg";
import goldenHour from "../assets/images/goldenHour.jpg";
import hikingMan from "../assets/images/hikingMan.jpg";
import treeFall from "../assets/images/treeFall.jpg";
import mountainMan from "../assets/images/mountainMan.jpg";
import majesticForest from "../assets/images/majesticForest.jpg";
import foggyOwl from "../assets/images/foggyOwl.jpg"
import forestBridge from "../assets/images/forestBridge.jpg";
import forestPath from "../assets/images/forestpath.jpg";
import forestHall from "../assets/images/forestHall.jpg";
import grinch from "../assets/images/grinch.jpg"
import land from "../assets/images/land.jpg"
import rambo from "../assets/images/rambo.jpg";
import sunStream from "../assets/images/sunStream.jpg"

export default function Gallery() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p className="galleryTitle">1. Forests and Greenery</p>
        </Col>
      </Row>
      <Row className="align-items-center p-3">
        <Col lg={3}>
          <ModalImage
            small={lightShine}
            large={lightShine}
            alt="The sun beaming through the thick forest"
            className="galleryImage"
          />
        </Col>
        <Col lg={3}>
          <ModalImage
            small={goldenHour}
            large={goldenHour}
            alt="Golden Hour in the Appalachians"
            className="galleryImage"
          />
        </Col>
        <Col lg={3}>
          <ModalImage
            small={hikingMan}
            large={hikingMan}
            alt="A man hiking through the Appalachians"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12}>
          <ModalImage
            small={treeFall}
            large={treeFall}
            alt="A man hiking through the Appalachians"
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
        <Col lg={3} sm={12}>
          <ModalImage
            small={mountainMan}
            large={mountainMan}
            alt="A selfie taken on Max Patch, a mountain bald on the North Carolina/Tennessee border."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12}>
          <ModalImage
            small={forestBridge}
            large={forestBridge}
            alt="a Bridge lay across a hiking path in the appalachians to cross creek on foot."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12}>
          <ModalImage
            small={forestHall}
            large={forestHall}
            alt="The tree lines the hiking path perfect to create a hall in the forest."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12}>
          <ModalImage
            small={majesticForest}
            large={majesticForest}
            alt="A majestic image with fog in the thick brush of the Appalachians."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center text-center p-4">
        <Col lg={12} sm={12} className="text-center">
          <ModalImage
            small={rambo}
            large={rambo}
            alt="A man hiding behind the tall leaves in the Appalachians."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
        <Col lg={3}>
          <ModalImage
            small={grinch}
            large={grinch}
            alt="A foggy patch hanging left off the appalachian trail."
            className="galleryImage"
          />
        </Col>
        <Col lg={3}>
          <ModalImage
            small={land}
            large={land}
            alt="A magical and colorful area in the Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3}>
          <ModalImage
            small={foggyOwl}
            large={foggyOwl}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12}>
          <ModalImage
            small={sunStream}
            large={sunStream}
            alt="Light rays shine over a puddle in the Appalachian Forest."
            className="galleryImage"
          />
        </Col>
      </Row>
    </Container>
  );
}
