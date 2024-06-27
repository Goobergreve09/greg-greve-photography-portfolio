import { Row, Col, Container, Button } from "react-bootstrap";

import ModalImage from "react-modal-image";

// forest and greenery imports------------------------------------------------------------

import twopaths from "../assets/images/2paths.jpg";
import twopathsSmall from "../assets/images/2pathsSmall.jpg";
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
import land from "../assets/images/land.jpg";
import landSmall from "../assets/images/landSmall.jpg";
import leconte1 from "../assets/images/leconte3.jpg";
import leconte1Small from "../assets/images/leconte3Small.jpg";
import leconte2 from "../assets/images/leconte2.jpg";
import leconte2Small from "../assets/images/leconte2Small.jpg";
import leconte22 from "../assets/images/leconte22.jpg";
import leconte22Small from "../assets/images/leconte22Small.jpg";
import luton1 from "../assets/images/luton1.jpg";
import luton1Small from "../assets/images/luton1Small.jpg";
import luton2 from "../assets/images/luton2.jpg";
import luton2Small from "../assets/images/luton2Small.jpg";
import luton3 from "../assets/images/luton3.jpg";
import luton3Small from "../assets/images/luton3Small.jpg";
import luton4 from "../assets/images/luton4.jpg";
import luton4Small from "../assets/images/luton4Small.jpg";
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
import spiderLight from "../assets/images/spiderLight.jpg";
import spiderLightSmall from "../assets/images/spiderLightSmall.jpg";
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

import crash from "../assets/images/crash.jpg";
import crashSmall from "../assets/images/crashSmall.jpg";
import crashWater from "../assets/images/crashWater.jpg";
import crashWaterSmall from "../assets/images/crashWaterSmall.jpg";
import creekFall from "../assets/images/creekFall.jpg";
import creekFallSmall from "../assets/images/creekFallSmall.jpg";
import fish from "../assets/images/fish.jpg";
import fishSmall from "../assets/images/fishSmall.jpg";
import handWater from "../assets/images/handWater.jpg";
import handWaterSmall from "../assets/images/handWaterSmall.jpg";
import lakePeace from "../assets/images/lakePeace.jpg";
import lakePeaceSmall from "../assets/images/lakePeaceSmall.jpg";
import loveBirds from "../assets/images/loveBirds.jpg";
import loveBirdsSmall from "../assets/images/loveBirdsSmall.jpg";
import morningHaze from "../assets/images/morningHaze.jpg";
import morningHazeSmall from "../assets/images/morningHazeSmall.jpg";
import morningHaze2 from "../assets/images/morningHaze2.jpg";
import morningHaze2Small from "../assets/images/morningHaze2Small.jpg";
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
import salinac1 from "../assets/images/salinac1.jpg";
import salinac1Small from "../assets/images/salinac1Small.jpg";
import salinac2 from "../assets/images/salinac2.jpg";
import salinac2Small from "../assets/images/salinac2Small.jpg";
import salinac3 from "../assets/images/salinac3.jpg";
import salinac3Small from "../assets/images/salinac3Small.jpg";
import salinac4 from "../assets/images/salinac4.jpg";
import salinac4Small from "../assets/images/salinac4Small.jpg";
import salinac5 from "../assets/images/salinac5.jpg";
import salinac5Small from "../assets/images/salinac5Small.jpg";
import salinac6 from "../assets/images/salinac6.jpg";
import salinac6Small from "../assets/images/salinac6Small.jpg";
import salinac7 from "../assets/images/salinac7.jpg";
import salinac7Small from "../assets/images/salinac7Small.jpg";
import tahoe from "../assets/images/tahoe.jpg";
import tahoeSmall from "../assets/images/tahoeSmall.jpg";
import venice from "../assets/images/venice.jpg";
import veniceSmall from "../assets/images/veniceSmall.jpg";
import venice2 from "../assets/images/venice2.jpg";
import venice3Small from "../assets/images/venice3Small.jpg";
import venice3 from "../assets/images/venice3.jpg";
import waterLove from "../assets/images/waterLove.jpg";
import waterLoveSmall from "../assets/images/waterLoveSmall.jpg";
import yosemiteCreek from "../assets/images/yosemiteCreek.jpg";
import yosemiteCreekSmall from "../assets/images/yosemiteCreekSmall.jpg";
import zen from "../assets/images/zen.jpg";
import zenSmall from "../assets/images/zenSmall.jpg";

// Mountains and Red Rocks imports ----------------------------------------------------------------

import bwMountains from "../assets/images/bwMountains.jpg";
import bwMountainsSmall from "../assets/images/bwMountains.jpg";
import church from "../assets/images/church.jpg";
import churchSmall from "../assets/images/churchSmall.jpg";
import coldCow from "../assets/images/coldCow.jpg";
import coldCowSmall from "../assets/images/coldCowSmall.jpg";
import diamondLake from "../assets/images/diamondLake.jpg";
import diamondLakeSmall from "../assets/images/diamondLakeSmall.jpg";
import gloryMountain from "../assets/images/gloryMountain.jpg";
import gloryMountainSmall from "../assets/images/gloryMountainSmall.jpg";
import mars from "../assets/images/mars.jpg";
import marsSmall from "../assets/images/marsSmall.jpg";
import mexicanHat from "../assets/images/mexicanHat.jpg";
import mexicanHatSmall from "../assets/images/mexicanHatSmall.jpg";
import mountainPeak from "../assets/images/mountainPeak.jpg";
import mountainPeakSmall from "../assets/images/mountainPeakSmall.jpg";
import mtShasta from "../assets/images/mtShasta.jpg";
import mtShastaSmall from "../assets/images/mtShastaSmall.jpg";
import nc01 from "../assets/images/nc01.jpg";
import nc02 from "../assets/images/nc02.jpg";
import nc03 from "../assets/images/nc03.jpg";
import nc04 from "../assets/images/nc04.jpg";
import nc05 from "../assets/images/nc05.jpg";
import nc06 from "../assets/images/nc06.jpg";
import nc07 from "../assets/images/nc07.jpg";
import nc08 from "../assets/images/nc08.jpg";
import sedona from "../assets/images/sedona.jpg";
import sedonaSmall from "../assets/images/sedonaSmall.jpg";
import sedonaGlory from "../assets/images/sedonaGlory.jpg";
import sedonaGlorySmall from "../assets/images/sedonaGlorySmall.jpg";
import sedonaMagic from "../assets/images/sedonaMagic.jpg";
import sedonaMagicSmall from "../assets/images/sedonaMagicSmall.jpg";
import sedonaTour from "../assets/images/sedonaTour.jpg";
import sedonaTourSmall from "../assets/images/sedonaTourSmall.jpg";
import swMagic from "../assets/images/swMagic.jpg";
import swMagicSmall from "../assets/images/swMagicSmall.jpg";
import peak1 from "../assets/images/peak1.jpg";
import peak1Small from "../assets/images/peak1Small.jpg";
import peak2 from "../assets/images/peak2.jpg";
import peak2Small from "../assets/images/peak2Small.jpg";
import peak3 from "../assets/images/peak3.jpg";
import peak3Small from "../assets/images/peak3Small.jpg";
import utahRay01 from "../assets/images/utahRay01.jpg";
import utahRay01Small from "../assets/images/utahRay01Small.jpg";
import utahRay02 from "../assets/images/utahRay02.jpg";
import utahRay02Small from "../assets/images/utahRay02Small.jpg";
import utahRay03 from "../assets/images/utahRay03.jpg";
import utahRay03Small from "../assets/images/utahRay03Small.jpg";
import utahRay04 from "../assets/images/utahRay04.jpg";
import utahRay04Small from "../assets/images/utahRay04Small.jpg";
import zeus from "../assets/images/zeus.jpg";
import zeusSmall from "../assets/images/zeusSmall.jpg";

// Macro imports-----------------------------------------------------------------------------------
import bee1 from "../assets/images/bee1.jpg";
import bee1Small from "../assets/images/bee1Small.jpg";
import bee2 from "../assets/images/bee2.jpg";
import bee2Small from "../assets/images/bee2Small.jpg";
import bee3 from "../assets/images/bee3.jpg";
import bee3Small from "../assets/images/bee3Small.jpg";
import blossom from "../assets/images/blossom.jpg";
import blossomSmall from "../assets/images/blossomSmall.jpg";
import bwFlower from "../assets/images/bwFlower.jpg";
import bwFlowerSmall from "../assets/images/bwFlowerSmall.jpg";
import caterpillar from "../assets/images/caterpillar.jpg";
import caterpillarSmall from "../assets/images/caterpillarSmall.jpg";
import eye from "../assets/images/eye.jpg";
import funguy from "../assets/images/funguy.jpg";
import funguySmall from "../assets/images/funguySmall.jpg";
import grasshopper1 from "../assets/images/grasshopper1.jpg";
import grasshopper1Small from "../assets/images/grasshopper1Small.jpg";
import grasshopper2 from "../assets/images/grasshopper2.jpg";
import grasshopper2Small from "../assets/images/grasshopper2Small.jpg";
import hdr from "../assets/images/hdr.jpg";
import hdrSmall from "../assets/images/hdrSmall.jpg";
import moss1 from "../assets/images/moss1.jpg";
import moss1Small from "../assets/images/moss1Small.jpg";
import moss2 from "../assets/images/moss2.jpg";
import moss2Small from "../assets/images/moss2Small.jpg";
import rolliePolie from "../assets/images/rolliePolie.jpg";
import rolliePolieSmall from "../assets/images/rolliePolieSmall.jpg";
import rose from "../assets/images/rose.jpg";
import roseSmall from "../assets/images/roseSmall.jpg";
import spider from "../assets/images/spider.jpg";
import spiderSmall from "../assets/images/spiderSmall.jpg";
import treasure from "../assets/images/treasure.jpg";
import treasureSmall from "../assets/images/treasureSmall.jpg";
import treeFungi from "../assets/images/treeFungi.jpg";
import treeFungiSmall from "../assets/images/treeFungiSmall.jpg";
import waterPedal from "../assets/images/waterPedal.jpg";
import waterPedalSmall from "../assets/images/waterPedalSmall.jpg";

// Portraiture image imports-------------------------------------------------------

import adamBricks from "../assets/images/adamBricks.jpg";
import adamBricksSmall from "../assets/images/adamBricksSmall.jpg";
import adamBricks2 from "../assets/images/adamBricks2.jpg";
import adamBricks2Small from "../assets/images/adamBricks2Small.jpg";
import adamFam1 from "../assets/images/adamFam1.jpg";
import adamFam1Small from "../assets/images/adamFam1Small.jpg";
import adamFam2 from "../assets/images/adamFam2.jpg";
import adamFam2mall from "../assets/images/adamFam2Small.jpg";
import adamFam3 from "../assets/images/adamFam3.jpg";
import adamFam3Small from "../assets/images/adamFam3Small.jpg";
import lolabw from "../assets/images/lolabw.jpg";
import lolabwSmall from "../assets/images/lolabwSmall.jpg";
import lolabw2 from "../assets/images/lolabw2.jpg";
import lolabw2Small from "../assets/images/lolabw2Small.jpg";
import lolaFence1 from "../assets/images/lolaFence1.jpg";
import lolaFence1Small from "../assets/images/lolaFence1Small.jpg";
import lolaFence2 from "../assets/images/lolaFence2.jpg";
import lolaFence2Small from "../assets/images/lolaFence2Small.jpg";
import lolaFence3 from "../assets/images/lolaFence3.jpg";
import lolaFence3Small from "../assets/images/lolaFence3Small.jpg";
import lolaLake from "../assets/images/lolaLake.jpg";
import lolaLakeSmall from "../assets/images/lolaLakeSmall.jpg";
import lolaLake2 from "../assets/images/lolaLake2.jpg";
import lolaLake2Small from "../assets/images/lolaLake2Small.jpg";
import lolaLight from "../assets/images/lolaLight.jpg";
import lolaLightSmall from "../assets/images/lolaLightSmall.jpg";
import lolaNight from "../assets/images/lolaNight.jpg";
import lolaNightSmall from "../assets/images/lolaNightSmall.jpg";
import lolaSequoia from "../assets/images/lolaSequoia.jpg";
import lolaSequoiaSmall from "../assets/images/lolaSequoiaSmall.jpg";
import lolaSedona from "../assets/images/lolaSedona.jpg";
import lolaSedonaSmall from "../assets/images/lolaSedonaSmall.jpg";
import lolaSedona2 from "../assets/images/lolaSedona2.jpg";
import lolaSedona2Small from "../assets/images/lolaSedona2Small.jpg";
import lolaSit from "../assets/images/lolaSit.jpg";
import lolaSitSmall from "../assets/images/lolaSitSmall.jpg";
import lolaTree from "../assets/images/lolaTree.jpg";
import lolaTreeSmall from "../assets/images/lolaTreeSmall.jpg";
import lolaTree2 from "../assets/images/lolaTree2.jpg";
import lolaTree2Small from "../assets/images/lolaTree2Small.jpg";
import lolaWoods from "../assets/images/lolaWoods.jpg";
import lolaWoodsSmall from "../assets/images/lolaWoodsSmall.jpg";
import theo from "../assets/images/theo.jpg";
import theoSmall from "../assets/images/theoSmall.jpg";
import tonyYellow1 from "../assets/images/tonyYellow1.jpg";
import tonyYellow1Small from "../assets/images/tonyYellow1Small.jpg";
import tonyYellow2 from "../assets/images/tonyYellow2.jpg";
import tonyYellow2Small from "../assets/images/tonyYellow2Small.jpg";
import tonyYellow3 from "../assets/images/tonyYellow3.jpg";
import tonyYellow3Small from "../assets/images/tonyYellow3Small.jpg";

export default function Gallery() {
  return (
    <Container fluid className="text-center galleryBackground">
      <Container fluid className="tableOfcontents">
        <Row>
          <Col>
            <p>Table of Contents</p>
          </Col>
        </Row>
        <Row className="pt-5">
        <Col small={12} xs={12} md={4} className="pb-3">
           

              <a href="#forests">1. Forests and Greenery</a>
           
          </Col>
          <Col small={12} xs={12} md={4} className="pb-3">
          <a href="#beaches">2. Beaches and Water</a>
          </Col>
          <Col small={12} xs={12} md={4} className="pb-3">
          <a href="#mountains">3. Mountains and Red Rocks</a>
          </Col>
          <Col small={12} xs={12} md={6} className="pb-3">
          <a href="#macro">4. Close-up</a>
          </Col>
          <Col small={12} xs={12} md={6} className="pb-3">
          <a href="#portraiture">5. Portraiture</a>
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
        <Col lg={12} sm={12} xs={12} className="p-4">
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
            small={twopathsSmall}
            large={twopaths}
            alt="Two paths go separate ways in a forest."
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
      <Row className="align-items-center pt-3 leconteRow ">
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={leconte1Small}
            large={leconte1}
            alt="An image in Leconte Village up deep in the mountains."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={leconte22Small}
            large={leconte22}
            alt="An image in Leconte Village up deep in the mountains."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={leconte2Small}
            large={leconte2}
            alt="An image in Leconte Village up deep in the mountains."
            className="ThreeinRow"
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
            alt="A rocky forest path during golden hour."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={spiderLightSmall}
            large={spiderLight}
            alt="The light shining through the forest brush."
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
        <Col lg={6} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={gatlinburg2Small}
            large={gatlinburg2}
            alt="An image taken off the side of the road with a warning sign on a fence."
            className="galleryImageLarge"
          />
        </Col>
        <Col lg={6} sm={12} xs={12} className="pt-2 p-4">
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
      <Row className="align-items-center pt-3 p-4">
        <Col lg={12} sm={12} xs={12}>
          <ModalImage
            small={sunStairsSmall}
            large={sunStairs}
            alt="The sun light beams heavily onto a secluded set of stairs."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={luton1Small}
            large={luton1}
            alt="Luton Park during golden hour."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={luton2Small}
            large={luton2}
            alt="Luton Park during golden hour."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={luton3Small}
            large={luton3}
            alt="Luton Park during golden hour."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={luton4Small}
            large={luton4}
            alt="Luton Park during golden hour."
            className="galleryImage"
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
            small={venice2}
            large={venice2}
            alt="Venice Beach at Sunset."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={salinac5Small}
            large={salinac5}
            alt="A Lake Huron sunrise on Port Salinac."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={salinac6Small}
            large={salinac6}
            alt="A Lake Huron sunrise on Port Salinac."
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
      <Row className="align-items-center pt-3 p-4">
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
            small={morningHaze2Small}
            large={morningHaze}
            alt="A sunset on Lake michigan take during the forest fires in Canada."
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
            small={salinac7Small}
            large={salinac7}
            alt="A Lake Huron sunrise on Port Salinac."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={6} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={sandy2Small}
            large={sandy2}
            alt="An woman playing in the sand."
            className="galleryImageLarge"
          />
        </Col>
        <Col lg={6} sm={12} xs={12} className="pt-2 p-4">
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
        <Col lg={6} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={venice3Small}
            large={venice3}
            alt="A venice beach sunset."
            className="galleryImageLarge"
          />
        </Col>
        <Col lg={6} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={fishSmall}
            large={fish}
            alt="A fish dead fish found on the beach"
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={salinac3Small}
            large={salinac3}
            alt="A Lake Huron sunrise on Port Salinac."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={salinac2Small}
            large={salinac2}
            alt="A Lake Huron sunrise on Port Salinac."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={salinac1Small}
            large={salinac1}
            alt="A Lake Huron sunrise on Port Salinac."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={salinac4Small}
            large={salinac4}
            alt="A Lake Huron sunrise on Port Salinac."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row id="mountains">
        <Col>
          <p className="galleryTitle pt-3">3. Mountains and Red Rocks</p>
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={12} sm={12} xs={12} className="p-4">
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
            "If you look out of the car window in Northern Arizona you never
            know what you will see. The sun was beaming through the clouds, like
            nothing I have witnessed before."
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
      <Row className="align-items-center pt-3 leconteRow">
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={peak1Small}
            large={peak1}
            alt="A mountain peak near Mt. Rainier in Washington 01"
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={peak2Small}
            large={peak2}
            alt="A mountain peak near Mt. Rainier in Washington 02"
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={peak3Small}
            large={peak3}
            alt="A mountain peak near Mt. Rainier in Washington 03"
            className="ThreeinRow"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nc01}
            large={nc01}
            alt="A sunset caught on Max patch on the TN/NC border"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nc02}
            large={nc02}
            alt="A sunset caught on Max patch on the TN/NC border"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nc03}
            large={nc03}
            alt="A sunset caught on Max patch on the TN/NC border"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nc04}
            large={nc04}
            alt="A sunset caught on Max patch on the TN/NC border"
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={sedonaSmall}
            large={sedona}
            alt="An image of Sedona, AZ."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={coldCowSmall}
            large={coldCow}
            alt="A cow in Montana amidst a winter storm."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={zeusSmall}
            large={zeus}
            alt="A mountain peak in northern Utah."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={churchSmall}
            large={church}
            alt="A church lay dormant in the Sierra Nevada mountains."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={6} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={sedonaMagicSmall}
            large={sedonaMagic}
            alt="A shot taken of Sedona, AZ at sunset."
            className="galleryImageLarge"
          />
        </Col>
        <Col lg={6} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={swMagicSmall}
            large={swMagic}
            alt="A shot taken of Southwest, USA. Somewhere on the interstate."
            className="galleryImageLarge"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nc05}
            large={nc05}
            alt="North Carolina Appalachian Mountains during sunset."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nc06}
            large={nc06}
            alt="North Carolina Appalachian Mountains during sunset."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nc07}
            large={nc07}
            alt="North Carolina Appalachian Mountains during sunset."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={nc08}
            large={nc08}
            alt="North Carolina Appalachian Mountains during sunset."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={sedonaTourSmall}
            large={sedonaTour}
            alt="Tourists and sunset lovers alike join to watch a Sedona,AZ sunset."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={marsSmall}
            large={mars}
            alt="An image of Arizona, or is it Mars?"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={sedonaGlorySmall}
            large={sedonaGlory}
            alt="Sedona,AZ at golden hour."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={mexicanHatSmall}
            large={mexicanHat}
            alt="The infamous Mexican Hat structure in Utah."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row id="macro" className="pt-5">
        <Col>
          <p className="galleryTitle">4. Macro Photography</p>
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={hdrSmall}
            large={hdr}
            alt="a high clarity image of fungi growing on wood"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={waterPedalSmall}
            large={waterPedal}
            alt="Water droplets closeup on a plant"
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={roseSmall}
            large={rose}
            alt="A closeup shot of a red flower after a sprinkle."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={bwFlowerSmall}
            large={bwFlower}
            alt="A black and white photo of a flower."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3 leconteRow">
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={bee2Small}
            large={bee2}
            alt="A closeup photo of a bee."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={bee1Small}
            large={bee1}
            alt="A closeup photo of a bee."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={bee3Small}
            large={bee3}
            alt="A closeup photo of a bee."
            className="ThreeinRow"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={moss2Small}
            large={moss2}
            alt="A closeup image of moss on a tree."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={treasureSmall}
            large={treasure}
            alt="The findings of a metal detector."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={funguySmall}
            large={funguy}
            alt="Fungi growing on a tree."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={moss1Small}
            large={moss1}
            alt="A closeup image of moss on a tree."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={spiderSmall}
            large={spider}
            alt="A closeup image of a spider on water."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={rolliePolieSmall}
            large={rolliePolie}
            alt="A macro image of a rollie-pollie with a baby."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={treeFungiSmall}
            large={treeFungi}
            alt="Fungi growing on a tree."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={caterpillarSmall}
            large={caterpillar}
            alt="A closeup image of a caterpillar on a log."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={grasshopper1Small}
            large={grasshopper1}
            alt="A closeup image of a grasshopper sitting on a flower."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={grasshopper2Small}
            large={grasshopper2}
            alt="A closeup image of a grasshopper sitting on a flower."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={eye}
            large={eye}
            alt="An image of an eye in the sunlight."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={blossomSmall}
            large={blossom}
            alt="A closeup image of a plant."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row id="portraiture" className="pt-5">
        <Col>
          <p className="galleryTitle">5. Portraiture Photography</p>
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={adamBricksSmall}
            large={adamBricks}
            alt="A portrait of a man against a brick wall."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaSitSmall}
            large={lolaSit}
            alt="A portrait of a woman sitting down in nature."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaTreeSmall}
            large={lolaTree}
            alt="A portrait of a standing against a tree."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaWoodsSmall}
            large={lolaWoods}
            alt="A portrait of a woman in the woods."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3 leconteRow">
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={lolaFence1Small}
            large={lolaFence1}
            alt="A woman standing by a fence."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={lolaFence2Small}
            large={lolaFence2}
            alt="A woman standing by a fence."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={lolaFence3Small}
            large={lolaFence3}
            alt="A woman standing by a fence."
            className="ThreeinRow"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={adamBricks2Small}
            large={adamBricks2}
            alt="A portrait of a man in front of bricks."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolabwSmall}
            large={lolabw}
            alt="A portrait of a woman sitting down by a lake."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaLightSmall}
            large={lolaLight}
            alt="A portrait of a woman by flowers."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaTree2Small}
            large={lolaTree2}
            alt="A portrait of a woman standing behind a tree."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3 leconteRow">
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={tonyYellow2Small}
            large={tonyYellow2}
            alt="A man standing in front of rocks."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={tonyYellow1Small}
            large={tonyYellow1}
            alt="A man standing in front of rocks."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={tonyYellow3Small}
            large={tonyYellow3}
            alt="A man standing in front of rocks."
            className="ThreeinRow"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaLakeSmall}
            large={lolaLake}
            alt="A portrait of a woman by a lake."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaNightSmall}
            large={lolaNight}
            alt="A portrait of a woman in front on a night cityscape."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaLake2Small}
            large={lolaLake2}
            alt="A portrait of a woman by a lake."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolabw2Small}
            large={lolabw2}
            alt="A portrait of a woman by a lake."
            className="galleryImage"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3 leconteRow">
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={adamFam1Small}
            large={adamFam1}
            alt="A family poses on a beach."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4">
          <ModalImage
            small={adamFam2mall}
            large={adamFam2}
            alt="A child wanders near a lake."
            className="ThreeinRow"
          />
        </Col>
        <Col lg={4} sm={12} xs={12} className="pt-2 p-4 ">
          <ModalImage
            small={adamFam3Small}
            large={adamFam3}
            alt="A father and child walking on a beach."
            className="ThreeinRow"
          />
        </Col>
      </Row>
      <Row className="align-items-center pt-3">
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaSequoiaSmall}
            large={lolaSequoia}
            alt="A portrait of a woman sitting on a rock."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaSedonaSmall}
            large={lolaSedona}
            alt="A portrait of a woman in Sedona, AZ."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={theoSmall}
            large={theo}
            alt="A portrait of a child playing in bubbles."
            className="galleryImage"
          />
        </Col>
        <Col lg={3} sm={12} xs={12} className="pt-2">
          <ModalImage
            small={lolaSedona2Small}
            large={lolaSedona2}
            alt="A portrait of a woman in Sedona, AZ."
            className="galleryImage"
          />
        </Col>
      </Row>
    </Container>
  );
}
