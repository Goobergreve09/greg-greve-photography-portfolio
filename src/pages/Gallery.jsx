import { Row, Col, Container } from "react-bootstrap";

import ModalImage from "react-modal-image";

import cliffLight from "../assets/images/cliffLight.jpg";
import lightShine from "../assets/images/lightShine.jpg";
import goldenHour from "../assets/images/goldenHour.jpg";
import hikingMan from "../assets/images/hikingMan.jpg";
import treeFall from "../assets/images/treeFall.jpg";
import mountainMan from "../assets/images/mountainMan.jpg";
import majesticForest from "../assets/images/majesticForest.jpg";
import foggyOwl from "../assets/images/foggyOwl.jpg";
import forestBridge from "../assets/images/forestBridge.jpg";
import forestPath from "../assets/images/forestpath.jpg";
import forestHall from "../assets/images/forestHall.jpg";
import grinch from "../assets/images/grinch.jpg";
import humanTree from "../assets/images/humanTree.jpg";
import land from "../assets/images/land.jpg";
import leconte1 from "../assets/images/leconte3.jpg";
import leconte2 from "../assets/images/leconte2.jpg";
import leconte22 from "../assets/images/leconte22.jpg";
import magicHike from "../assets/images/magicHike.jpg";
import pathFog from "../assets/images/pathFog.jpg";
import rambo from "../assets/images/rambo.jpg";
import ranchero from "../assets/images/ranchero.jpg";
import redPuddle from "../assets/images/redPuddle.jpg";
import smokeyMountain from "../assets/images/smokeyMountain.jpg";
import sunStream from "../assets/images/sunStream.jpg";
import waterRocks from "../assets/images/waterRocks.jpg";

export default function Gallery() {
  return (
    <Container fluid className="text-center">
      <Row>
        <Col>
          <p className="galleryTitle">1. Forests and Greenery</p>
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lightShine}
            large={lightShine}
            alt="The sun beaming through the thick forest"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={goldenHour}
            large={goldenHour}
            alt="Golden Hour in the Appalachians"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={hikingMan}
            large={hikingMan}
            alt="A man hiking through the Appalachians"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={treeFall}
            large={treeFall}
            alt="A man hiking through the Appalachians"
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={mountainMan}
            large={mountainMan}
            alt="A selfie taken on Max Patch, a mountain bald on the North Carolina/Tennessee border."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={forestBridge}
            large={forestBridge}
            alt="a Bridge lay across a hiking path in the appalachians to cross creek on foot."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={forestHall}
            large={forestHall}
            alt="The tree lines the hiking path perfect to create a hall in the forest."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={majesticForest}
            large={majesticForest}
            alt="A majestic image with fog in the thick brush of the Appalachians."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
        <Col lg={12} sm={12} xs={12}>
          <ModalImage
            small={rambo}
            large={rambo}
            alt="A man hiding behind the tall leaves in the Appalachians."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={grinch}
            large={grinch}
            alt="A foggy patch hanging left off the appalachian trail."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={land}
            large={land}
            alt="A magical and colorful area in the Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={foggyOwl}
            large={foggyOwl}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={sunStream}
            large={sunStream}
            alt="Light rays shine over a puddle in the Appalachian Forest."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={ranchero}
            large={ranchero}
            alt="A foggy patch hanging left off the appalachian trail."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={cliffLight}
            large={cliffLight}
            alt="A magical and colorful area in the Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={humanTree}
            large={humanTree}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={waterRocks}
            large={waterRocks}
            alt="Light rays shine over a puddle in the Appalachian Forest."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={smokeyMountain}
            large={smokeyMountain}
            alt="A foggy patch hanging left off the appalachian trail."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={redPuddle}
            large={redPuddle}
            alt="A magical and colorful area in the Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={pathFog}
            large={pathFog}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={magicHike}
            large={magicHike}
            alt="Light rays shine over a puddle in the Appalachian Forest."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="justify-content-center text-center pt-3">
        <Col className="d-flex justify-content-center">
          <p className="fogVillage">
            "...and there we were miles up deep into the Appalachians on the
            Mt.Leconte Alum Cave Trail. Out of the fog almost miraculously we
            found a small village. Small wooden shacks lined up next top
            eachother. It was surreal to find at such a high elevation."
          </p>
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={4} sm={12} xs={12} className ="pt-2">
          <ModalImage
            small={leconte1}
            large={leconte1}
            alt="A foggy patch hanging left off the appalachian trail."
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className ="pt-2">
          <ModalImage
            small={leconte22}
            large={leconte22}
            alt="A magical and colorful area in the Appalachians."
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className ="pt-2">
          <ModalImage
            small={leconte2}
            large={leconte2}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
          />
        </Col>
      </Row>
    </Container>
  );
}
