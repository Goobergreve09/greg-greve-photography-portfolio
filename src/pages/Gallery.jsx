import { Row, Col, Container, Button } from "react-bootstrap";

import ModalImage from "react-modal-image";

// forest and greenery imports------------------------------------------------------------

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
import foggyOpening from "../assets/images/foggyOpening.jpg";
import foggyOpeningSmall from "../assets/images/foggyOpeningSmall.jpg";
import foggyOwl from "../assets/images/foggyOwl.jpg";
import foggyOwlSmall from "../assets/images/foggyOwlSmall.jpg";
import forestBridge from "../assets/images/forestBridge.jpg";
import forestBridgeSmall from "../assets/images/forestBridgeSmall.jpg";
import forestHall from "../assets/images/forestHall.jpg";
import forestHallSmall from "../assets/images/forestHallSmall.jpg";
import forestVibes from "../assets/images/forestVibes.jpg";
import forestVibesSmall from "../assets/images/forestVibes.jpg";
import gatlinburg1 from "../assets/images/gatlinburg1.jpg";
import gatlinburg2 from "../assets/images/gatlinburg2.jpg";
import gatlinburg1Small from "../assets/images/gatlinburg1Small.jpg";
import gatlinburg2Small from "../assets/images/gatlinburg2Small.jpg";
import grinch from "../assets/images/grinch.jpg";
import grinchSmall from "../assets/images/grinchSmall.jpg";
import humanTree from "../assets/images/humanTree.jpg";
import humanTreeSmall from "../assets/images/humanTreeSmall.jpg";
import jungleAdventure from "../assets/images/jungleAdventure.jpg";
import jungleAdventureSmall from "../assets/images/jungleAdventure.jpg";
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
import omniousForest from "../assets/images/omniousForest.jpg";
import omniousForestSmall from "../assets/images/omniousForestSmall.jpg";
import pathFog from "../assets/images/pathFog.jpg";
import pathFogSmall from "../assets/images/pathFog.jpg";
import peaceCreek from "../assets/images/peaceCreek.jpg";
import peaceCreekSmall from "../assets/images/peaceCreekSmall.jpg";
import rambo from "../assets/images/rambo.jpg";
import ramboSmall from "../assets/images/ramboSmall.jpg";
import ranchero from "../assets/images/ranchero.jpg";
import rancheroSmall from "../assets/images/ranchero.jpg";
import rayForest from "../assets/images/rayForest.jpg";
import rayForestSmall from "../assets/images/rayForestSmall.jpg";
import redPuddle from "../assets/images/redPuddle.jpg";
import redPuddleSmall from "../assets/images/redPuddleSmall.jpg";
import smokeyMountain from "../assets/images/smokeyMountain.jpg";
import smokeyMountainSmall from "../assets/images/smokeyMountain.jpg";
import sunStairs from "../assets/images/sunStairs.jpg";
import sunStairsSmall from "../assets/images/sunStairsSmall.jpg";
import sunStream from "../assets/images/sunStream.jpg";
import sunStreamSmall from "../assets/images/sunStreamSmall.jpg";
import tonyPath from "../assets/images/tonyPath.jpg";
import tonyPathSmall from "../assets/images/tonyPathSmall.jpg";
import tonyPath2 from "../assets/images/tonyPath2.jpg";
import tonyPath2Small from "../assets/images/tonyPath2Small.jpg";
import tonyPuddle from "../assets/images/tonyPuddle.jpg";
import tonyPuddleSmall from "../assets/images/tonyPuddleSmall.jpg";
import tonyStairs from "../assets/images/tonyStairs.jpg";
import tonyStairsSmall from "../assets/images/tonyStairsSmall.jpg";
import viberyForest from "../assets/images/viberyForest.jpg";
import viberyForestSmall from "../assets/images/viberyForestSmall.jpg";
import waterRocks from "../assets/images/waterRocks.jpg";
import waterRocksSmall from "../assets/images/waterRocksSmall.jpg";
import wow from "../assets/images/wow.jpg";
import wowSmall from "../assets/images/wowSmall.jpg";

// beaches and water imports ------------------------------------------------------------

import beachSunset from "../assets/images/beachSunset.jpg"
import beachSunsetSmall from "../assets/images/beachSunsetSmall.jpg"
import crash from "../assets/images/crash.jpg";
import crashSmall from "../assets/images/crashSmall.jpg";
import crashWater from "../assets/images/crashWater.jpg";
import crashWaterSmall from "../assets/images/crashWaterSmall.jpg";
import creekFall from "../assets/images/creekFall.jpg";
import creekFallSmall from "../assets/images/creekFallSmall.jpg";
import dan from "../assets/images/dan.jpg";
import danSmall from "../assets/images/danSmall.jpg";
import handWater from "../assets/images/handWater.jpg";
import handWaterSmall from "../assets/images/handWaterSmall.jpg";
import lakePeace from "../assets/images/lakePeace.jpg"
import lakePeaceSmall from "../assets/images/lakePeaceSmall.jpg"
import lakeSunset from "../assets/images/lakeSunset.jpg";
import lakeSunsetSmall from "../assets/images/lakeSunsetSmall.jpg";
import loveBirds from "../assets/images/loveBirds.jpg";
import loveBirdsSmall from "../assets/images/loveBirdsSmall.jpg";
import nolanWalk from "../assets/images/nolanWalk.jpg";
import nolanWalkSmall from "../assets/images/nolanWalkSmall.jpg";
import nolanWonder from "../assets/images/nolanWonder.jpg";
import nolanWonderSmall from "../assets/images/nolanWonderSmall.jpg";
import morningHaze from "../assets/images/morningHaze.jpg";
import morningHazeSmall from "../assets/images/morningHazeSmall.jpg";
import paddleboard from "../assets/images/paddleboard.jpg"
import peace from "../assets/images/peace.jpg";
import peaceSmall from "../assets/images/peaceSmall.jpg";
import riverRocks from "../assets/images/riverRocks.jpg";
import riverRocksSmall from "../assets/images/riverRocks.jpg";
import rockPile from "../assets/images/rockPile.jpg";
import rockPileSmall from "../assets/images/rockPileSmall.jpg";
import rockTahoe from "../assets/images/rockTahoe.jpg";
import rockTahoeSmall from "../assets/images/rockTahoe.jpg";
import sandy1 from "../assets/images/sandy1.jpg";
import sandy1Small from "../assets/images/sandy1Small.jpg";
import sandy2 from "../assets/images/sandy2.jpg";
import sandy2Small from "../assets/images/sandy2Small.jpg";
import tahoe from "../assets/images/tahoe.jpg";
import tahoeSmall from "../assets/images/tahoeSmall.jpg";
import theShot from "../assets/images/theShot.jpg";
import theShotSmall from "../assets/images/theShotSmall.jpg";
import venice from "../assets/images/venice.jpg";
import veniceSmall from "../assets/images/veniceSmall.jpg";
import waterLove from "../assets/images/waterLove.jpg"
import waterLoveSmall from "../assets/images/waterLoveSmall.jpg"
import yosemiteCreek from "../assets/images/yosemiteCreek.jpg";
import yosemiteCreekSmall from "../assets/images/yosemiteCreekSmall.jpg";
import zen from "../assets/images/zen.jpg"
import zenSmall from "../assets/images/zenSmall.jpg"

// Mountains and Red Rocks imports ----------------------------------------------------------------

import bwMountains from "../assets/images/bwMountains.jpg"
import bwMountainsSmall from "../assets/images/bwMountains.jpg"
import diamondLake from "../assets/images/diamondLake.jpg"
import diamondLakeSmall from "../assets/images/diamondLakeSmall.jpg"
import gloryMountain from "../assets/images/gloryMountain.jpg"
import gloryMountainSmall from "../assets/images/gloryMountainSmall.jpg"
import mountainPeak from "../assets/images/mountainPeak.jpg"
import mountainPeakSmall from "../assets/images/mountainPeakSmall.jpg"
import mtShasta from "../assets/images/mtShasta.jpg"
import mtShastaSmall from "../assets/images/mtShastaSmall.jpg"
import utahRay01 from "../assets/images/utahRay01.jpg"
import utahRay01Small from "../assets/images/utahRay01Small.jpg"
import utahRay02 from "../assets/images/utahRay02.jpg"
import utahRay02Small from "../assets/images/utahRay02Small.jpg"
import utahRay03 from "../assets/images/utahRay03.jpg"
import utahRay03Small from "../assets/images/utahRay03Small.jpg"
import utahRay04 from "../assets/images/utahRay04.jpg"
import utahRay04Small from "../assets/images/utahRay04Small.jpg"

export default function Gallery() {
  return (
    <Container fluid className="text-center">
      <Container fluid className="tableOfcontents">
        <Row>
          <Col>
            <p>Table of Contents</p>
          </Col>
        </Row>
        <Row>
          <Col className="pb-3">
            <Button
              className="tableButton"
              variant="link"
              href="#forests"
              size="lg"
            >
              1. Forests and Greenery
            </Button>
          </Col>
          <Col className="pb-3">
            <Button
              className="tableButton"
              variant="link"
              href="#beaches"
              size="lg"
            >
              2. Beaches and Water
            </Button>
          </Col>
          <Col className="pb-3">
            <Button
              className="tableButton"
              variant="link"
              href="#mountains"
              size="lg"
            >
              3. Mountains and Red Rocks
            </Button>
          </Col>
        </Row>
      </Container>
      <Row id="forests" className="pt-5">
        <Col>
          <p className="galleryTitle">1. Forests and Greenery</p>
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
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
      <Row className="align-items-center pt-3">
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
      <Row className="align-items-center pt-3">
        <Col lg={12} sm={12} xs={12}>
          <ModalImage
            small={ramboSmall}
            large={rambo}
            alt="A man hiding behind the tall leaves in the Appalachians."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
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
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={rancheroSmall}
            large={ranchero}
            alt="A rustic scenery in North Carolina."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={cliffLightSmall}
            large={cliffLight}
            alt="An image below a cliff in the Smokies."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={humanTreeSmall}
            large={humanTree}
            alt="A woman leaning effortlessly against a tree."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={waterRocksSmall}
            large={waterRocks}
            alt="An image taken of a creek path with small waterfalls ahead."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={smokeyMountainSmall}
            large={smokeyMountain}
            alt="A beautiful image of the Smokey Mountains."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={redPuddleSmall}
            large={redPuddle}
            alt="A puddle that appears red on a path."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={pathFogSmall}
            large={pathFog}
            alt="The trees line up perfectly and thick fog fills the air."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={magicHikeSmall}
            large={magicHike}
            alt="A man hiking on the Appalachian Trail."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="justify-content-center text-center pt-3">
        <Col className="d-flex justify-content-center">
          <p className="fogVillage">
            "...and there we were miles up deep into the Appalachians on the
            Mt.Leconte Alum Cave Trail. Out of the fog almost miraculously we
            found a small village. Small wooden shacks lined up next too
            eachother. It was surreal to find at such a high elevation."
          </p>
        </Col>
      </Row>
      <Row className="align-items-center pt-3 leconteRow">
        <Col lg={4} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={leconte1Small}
            large={leconte1}
            alt="An image in Leconte Village up deep in the mountains."
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={leconte22Small}
            large={leconte22}
            alt="An image in Leconte Village up deep in the mountains."
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={leconte2Small}
            large={leconte2}
            alt="An image in Leconte Village up deep in the mountains."
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={tonyPath2Small}
            large={tonyPath2}
            alt="A man hikes down a path in the Smokey Mountains."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={foggyOpeningSmall}
            large={foggyOpening}
            alt="A hole appears to be created by a large tree, fog, and the man made path."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={forestVibesSmall}
            large={forestVibes}
            alt="A colorful forest path in the Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={jungleAdventureSmall}
            large={jungleAdventure}
            alt="A man hiking through the jungle-like Appalachians."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={tonyPathSmall}
            large={tonyPath}
            alt="A man hikes down a path in the Smokey Mountains."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={peaceCreekSmall}
            large={peaceCreek}
            alt="A beautiful images of a gentle and peaceful creek."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={tonyStairsSmall}
            large={tonyStairs}
            alt="A man climbing a small set of stairs between two stairs."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={tonyPuddleSmall}
            large={tonyPuddle}
            alt="A man crosses a bridge as his reflection passes through a puddle."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={6} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={gatlinburg2Small}
            large={gatlinburg2}
            alt="An image taken off the side of the road with a warning sign on a fence."
            className="galleryImageLarge"
          />
        </Col>
        <Col lg={6} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={gatlinburg1Small}
            large={gatlinburg1}
            alt="An image taken off the side of the road and mountains are seen in the distance through the brush."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={rayForestSmall}
            large={rayForest}
            alt="Sunlight finds it's way through the dense Appalachians."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={viberyForestSmall}
            large={viberyForest}
            alt="A vibey photo taken of a few stairs on the Appalachian trail."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={wowSmall}
            large={wow}
            alt="A golden creek flows through a forest path."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={omniousForestSmall}
            large={omniousForest}
            alt="An ominous image of a forest path."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={12} sm={12} xs={12}>
          <ModalImage
            small={sunStairsSmall}
            large={sunStairs}
            alt="The sun light beams heavily onto a secluded set of stairs."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row id="beaches">
        <Col>
          <p className="galleryTitle pt-3">2. Beaches and Water</p>
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={theShotSmall}
            large={theShot}
            alt="An electric sunset on Lake Michigan."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nolanWalkSmall}
            large={nolanWalk}
            alt="A man walking the shoreline on Lake Michigan."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lakeSunsetSmall}
            large={lakeSunset}
            alt="A sunset on Lake Michigan."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={loveBirdsSmall}
            large={loveBirds}
            alt="Two humans roaming gracefully in the water."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={yosemiteCreekSmall}
            large={yosemiteCreek}
            alt="A river runs off of Yosemite Falls."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={morningHazeSmall}
            large={morningHaze}
            alt="A sunset on Lake michigan take during the forest fires in Canada."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={veniceSmall}
            large={venice}
            alt="A venice Beach Sunset."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={handWaterSmall}
            large={handWater}
            alt="A man reaching his hand towards Lake Michigan"
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={12} sm={12} xs={12}>
          <ModalImage
            small={tahoeSmall}
            large={tahoe}
            alt="A woman astonished by the view of Lake Tahoe."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={rockPileSmall}
            large={rockPile}
            alt="A pile of rocks found stacked on Lake Huron."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nolanWonderSmall}
            large={nolanWonder}
            alt="A man wanders during a sunset on Lake Michigan."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={creekFallSmall}
            large={creekFall}
            alt="A creek waterfall in the Smokey Mountains."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={danSmall}
            large={dan}
            alt="A man appreciates the beauty of Lake Michigan."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={6} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={sandy2Small}
            large={sandy2}
            alt="An woman playing in the sand."
            className="galleryImageLarge"
          />
        </Col>
        <Col lg={6} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={sandy1Small}
            large={sandy1}
            alt="A woman dancing during golden hour on the beach."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={zenSmall}
            large={zen}
            alt="A silhouette of a woman resting at sunset."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={riverRocksSmall}
            large={riverRocks}
            alt="Rocks show on a river in the Appalachian Mountains."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lakePeaceSmall}
            large={lakePeace}
            alt="A transient image of Lake Michigan at sunset."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={rockTahoeSmall}
            large={rockTahoe}
            alt="Rocks are visible on Lake Tahoe."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={peaceSmall}
            large={peace}
            alt="A tree overlooks a small lake."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={crashSmall}
            large={crash}
            alt="A wave crashes against a barrier."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={waterLoveSmall}
            large={waterLove}
            alt="Two humans play in Lake Michigan as birds fly."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={crashWaterSmall}
            large={crashWater}
            alt="A wave crashes as a dramatic sunset covers the sky."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={6} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={beachSunsetSmall}
            large={beachSunset}
            alt="A silhouette of a man with his back against the sunset."
            className="galleryImageLarge"
          />
        </Col>
        <Col lg={6} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={paddleboard}
            large={paddleboard}
            alt="A man seen paddle-boarding on Lake Michigan."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row id="mountains">
        <Col>
          <p className="galleryTitle pt-3">3. Mountains and Red Rocks</p>
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={12} sm={12} xs={12}>
          <ModalImage
            small={bwMountainsSmall}
            large={bwMountains}
            alt="A black and white photo of Mountains out West from a vehicle."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={mtShastaSmall}
            large={mtShasta}
            alt="Mt. Shasta image taken from the road."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={diamondLakeSmall}
            large={diamondLake}
            alt="A person sitting on a bench reading on Diamond Lake in Oregon."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={mountainPeakSmall}
            large={mountainPeak}
            alt="A mountain peak on Crater Lake in Oregon."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={gloryMountainSmall}
            large={gloryMountain}
            alt="The sun radiates off of a mountain peak."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="justify-content-center text-center pt-3">
        <Col className="d-flex justify-content-center">
          <p className="fogVillage">
            "If you look out of the car window in Northern Arizona you never know what you will see.
            The sun was beaming through the clouds, like nothing I have witnessed before."
          </p>
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={utahRay01Small}
            large={utahRay01}
            alt="Utah/Arizona desert Sun 01"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={utahRay02Small}
            large={utahRay02}
            alt="Utah/Arizona desert Sun 02"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={utahRay03Small}
            large={utahRay03}
            alt="Utah/Arizona desert Sun 03"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={utahRay04Small}
            large={utahRay04}
            alt="Utah/Arizona desert Sun 04"
            className="galleryImage"
          />
        </Col>
      </Row>
    </Container>
  );
}
