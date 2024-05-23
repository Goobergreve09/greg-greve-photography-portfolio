import { Row, Col, Container } from "react-bootstrap";

import ModalImage from "react-modal-image";

import cliffLight from "../assets/images/cliffLight.jpg";
import cliffLightSmall from "../assets/images/cliffLightSmall.jpg";
import lightShine from "../assets/images/lightShine.jpg";
import lightShineSmall from "../assets/images/lightShineSmall.jpg";
import goldenHour from "../assets/images/goldenHour.jpg";
import goldenHourSmall from "../assets/images/goldenHourSmall.jpg";
import hikingMan from "../assets/images/hikingMan.jpg";
import hikingManSmall from "../assets/images/hikingManSmall.jpg";
import treeFall from "../assets/images/treeFall.jpg";
import treeFallSmall from "../assets/images/treeFallSmall.jpg";
import mountainMan from "../assets/images/mountainMan.jpg";
import mountainManSmall from "../assets/images/mountainManSmall.jpg";
import majesticForest from "../assets/images/majesticForest.jpg";
import majesticForestSmall from "../assets/images/majesticForestSmall.jpg";
import foggyOwl from "../assets/images/foggyOwl.jpg";
import foggyOwlSmall from "../assets/images/foggyOwlSmall.jpg";
import forestBridge from "../assets/images/forestBridge.jpg";
import forestBridgeSmall from "../assets/images/forestBridgeSmall.jpg";
import forestPath from "../assets/images/forestpath.jpg";
import forestHall from "../assets/images/forestHall.jpg";
import forestHallSmall from "../assets/images/forestHallSmall.jpg";
import grinch from "../assets/images/grinch.jpg";
import grinchSmall from "../assets/images/grinchSmall.jpg";
import humanTree from "../assets/images/humanTree.jpg";
import humanTreeSmall from "../assets/images/humanTreeSmall.jpg";
import land from "../assets/images/land.jpg";
import landSmall from "../assets/images/landSmall.jpg";
import leconte1 from "../assets/images/leconte3.jpg";
import leconte1Small from "../assets/images/leconte3Small.jpg";
import leconte2 from "../assets/images/leconte2.jpg";
import leconte2Small from "../assets/images/leconte2Small.jpg";
import leconte22 from "../assets/images/leconte22.jpg";
import leconte22Small from "../assets/images/leconte22Small.jpg";
import magicHike from "../assets/images/magicHike.jpg";
import magicHikeSmall from "../assets/images/magicHikeSmall.jpg";
import pathFog from "../assets/images/pathFog.jpg";
import pathFogSmall from "../assets/images/pathFog.jpg";
import rambo from "../assets/images/rambo.jpg";
import ramboSmall from "../assets/images/ramboSmall.jpg";
import ranchero from "../assets/images/ranchero.jpg";
import rancheroSmall from "../assets/images/ranchero.jpg";
import redPuddle from "../assets/images/redPuddle.jpg";
import redPuddleSmall from "../assets/images/redPuddleSmall.jpg";
import smokeyMountain from "../assets/images/smokeyMountain.jpg";
import smokeyMountainSmall from "../assets/images/smokeyMountain.jpg";
import sunStream from "../assets/images/sunStream.jpg";
import sunStreamSmall from "../assets/images/sunStreamSmall.jpg";
import waterRocks from "../assets/images/waterRocks.jpg";
import waterRocksSmall from "../assets/images/waterRocksSmall.jpg";


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
            small={lightShineSmall}
            large={lightShine}
            alt="The sun beaming through the thick forest"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={goldenHourSmall}
            large={goldenHour}
            alt="Golden Hour in the Appalachians"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={hikingManSmall}
            large={hikingMan}
            alt="A man hiking through the Appalachians"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={treeFallSmall}
            large={treeFall}
            alt="A man hiking through the Appalachians"
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={mountainManSmall}
            large={mountainMan}
            alt="A selfie taken on Max Patch, a mountain bald on the North Carolina/Tennessee border."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={forestBridgeSmall}
            large={forestBridge}
            alt="a Bridge lay across a hiking path in the appalachians to cross creek on foot."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={forestHallSmall}
            large={forestHall}
            alt="The tree lines the hiking path perfect to create a hall in the forest."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={majesticForestSmall}
            large={majesticForest}
            alt="A majestic image with fog in the thick brush of the Appalachians."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
        <Col lg={12} sm={12} xs={12}>
          <ModalImage
            small={ramboSmall}
            large={rambo}
            alt="A man hiding behind the tall leaves in the Appalachians."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={grinchSmall}
            large={grinch}
            alt="A foggy patch hanging left off the appalachian trail."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={landSmall}
            large={land}
            alt="A magical and colorful area in the Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={foggyOwlSmall}
            large={foggyOwl}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={sunStreamSmall}
            large={sunStream}
            alt="Light rays shine over a puddle in the Appalachian Forest."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={rancheroSmall}
            large={ranchero}
            alt="A foggy patch hanging left off the appalachian trail."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={cliffLightSmall}
            large={cliffLight}
            alt="A magical and colorful area in the Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={humanTreeSmall}
            large={humanTree}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={waterRocksSmall}
            large={waterRocks}
            alt="Light rays shine over a puddle in the Appalachian Forest."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center p-3">
      <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={smokeyMountainSmall}
            large={smokeyMountain}
            alt="A foggy patch hanging left off the appalachian trail."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={redPuddleSmall}
            large={redPuddle}
            alt="A magical and colorful area in the Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={pathFogSmall}
            large={pathFog}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={magicHikeSmall}
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
            small={leconte1Small}
            large={leconte1}
            alt="A foggy patch hanging left off the appalachian trail."
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className ="pt-2">
          <ModalImage
            small={leconte22Small}
            large={leconte22}
            alt="A magical and colorful area in the Appalachians."
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className ="pt-2">
          <ModalImage
            small={leconte2Small}
            large={leconte2}
            alt="A man hiking through the Appalachians holding the rope to cross a waterway."
          />
        </Col>
      </Row>
    </Container>
  );
}
