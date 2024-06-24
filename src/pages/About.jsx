import { Row, Col, Container } from "react-bootstrap";
import ModalImage from "react-modal-image";
import Footer from "../components/Footer";

import greg from "../assets/images/gregProfile.jpg";
import background from "../assets/images/luton4Small.jpg";
import nikon from "../assets/images/nikon.png"
import nikonBackground from "../assets/images/nikonBackground.jpg"

// import ModalImage from "react-modal-image";

export default function About() {
  return (
    <>
      <Container
        fluid
        className="aboutBackground justify-content-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: "white", // Optional: ensure text color is readable on the background
        }}
      >
        <Row className="pt-5 d-flex justify-content-center text-center">
          <Col lg={6} sm={12} xs={12} className="justify-content-center">
            <ModalImage small={greg} large={greg} className="profilePhoto" />
          </Col>
          <Col lg={6} className="profileDescription mt-5">
            <p className="profileTitle pb-3 pt-2">Gregory M.Greve</p>
            <p>
              Hello and welcome to my portfolio. I am Greg, a dedicated
              photographer with a passion for landscape and candid photography.
              My journey began eight years ago with my first camera, a Panasonic
              Lumix. Shortly thereafter, I received a Nikon D5600 for Christmas,
              which further ignited my passion. Today, I primarily shoot with a{" "}
              <a href="https://imaging.nikon.com/imaging/lineup/dslr/d850/https://imaging.nikon.com/imaging/lineup/dslr/d850/">
                professional DSLR Nikon D850.
              </a>
            </p>
            <p>
              Photography is more than a hobby for me—it's a way to capture and
              share the beauty of the world. In addition to photography, I enjoy
              traveling, hammocking, watching movies, exploring cultural
              restaurants, and engaging in sports.
            </p>
            <p>
              My portfolio is curated for your enjoyment. If you're interested
              in collaborating or wish to have a personalized photoshoot, please
              contact me via{" "}
              <a href="https://www.facebook.com/GregGrevePhotography">
                Facebook
              </a>
              , <a href="https://www.instagram.com/karatecakeman/">Instagram</a>
              , or through my contact page. Additionally, if you are interested
              in purchasing my photographs you find in the{" "}
              <a href="/Gallery">Gallery</a> as posters, tapestries, canvases,
              or other formats, feel free to reach out. I'm excited to make your
              vision a reality.
            </p>
            Thank you for visiting, and I hope you enjoy my work.
          </Col>
        </Row>
        </Container>
        <Container fluid
                style={{
                    backgroundImage: `url(${nikonBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    color: "white", // Optional: ensure text color is readable on the background
                  }}
        >
        <Row className="cameraTitle text-center pt-3">
          <Col>
            <h1>Whats in my camera bag?</h1>
          </Col>
        </Row>
        <Row className="text-center pt-3">
            <Col>
            <img
            src={nikon}
            alt="Nikon logo image"
            className="nikonLogo" />
            </Col>
        </Row>
        <Row className="cameraBag text-center pt-3">
          <Col xs={12} className="pb-3 itemRow">
            <h2>
              <a href="https://imaging.nikon.com/imaging/lineup/dslr/d850/https://imaging.nikon.com/imaging/lineup/dslr/d850/">
                Nikon D850 Body
              </a>
            </h2>
          </Col>
          <Col xs={12} className="pb-3 itemRow">
            <h2>
              <a href="https://photographylife.com/reviews/nikon-40mm-f2-8g-dx">
                Nikkor 40mm f2.8 lens
              </a>
            </h2>
          </Col>
          <Col xs={12} className="pb-3 itemRow">
            <h2>
              <a href="https://photographylife.com/reviews/nikon-18-35mm-f3-5-4-5g">
                Nikkor 18-35mm f3.5-4.5 lens
              </a>{" "}
            </h2>
          </Col>
          <Col xs={12} className="pb-3 itemRow">
            <h2>
              <a href="https://www.amazon.com/EN-EL15-Replacement-Battery-Charger-Compatible/dp/B07Q1G83XK/ref=sr_1_6?adgrpid=1330409641619504&dib=eyJ2IjoiMSJ9.FM6Ikq8YRF5ocFmlKEPsVt6aYJUP2de7NlbCSdcjAfCWSQpkAdXNHmTgvqqFH-jqUDfpjETjWawCd71ZwrPupAQu1zdUIUtS-opvnmTZBfCGU4YxMFPF4WHWE4KEoNwsBdqUfnruehkuJl8Aec-LedecUWTqzRbQ0ChAinHnlJM_-qfrYvEmGuV1tAsWdfwdzKe3Cenv7xVBdLS5bFOjz3YSFfo5gTjzTc7rOHW0Wc0.Pm84QcSNbg77evnVm0UY3x2_5kd6gYskmZ2kukU-THY&dib_tag=se&hvadid=83150674749084&hvbmt=bp&hvdev=c&hvlocphy=53251&hvnetw=o&hvqmt=p&hvtargid=kwd-83150961772864%3Aloc-190&hydadcr=18471_10804803&keywords=d850%2Bbattery%2Bcharger&msclkid=72a794e923df1e31cc8ef290be0edfed&qid=1719246313&sr=8-6&th=1">
                Enegon Dual Battery Charger
              </a>{" "}
            </h2>
          </Col>
          <Col xs={12} className="pb-3 itemRow">
            <h2>
              <a href="https://www.amazon.com/AmazonBasics-60-Inch-Lightweight-Tripod-Bag/dp/B005KP473Q/ref=sr_1_1_ffob_sspa?crid=1R7BAT28KJ9PL&dib=eyJ2IjoiMSJ9.da6xIAPgjdqyUsopjfEn6jGSmC1SeRrgawiN_700ETspiCYIConMcg9cTvnFK2zqLqWNnxqC3KncloT5xj0-x8p5aBRIdpm6xerQzs9nZUICZ15L8W2lwCbEY6P_FPh7CGpcbTRc_o5jmPbCf6isrgrTfUTVcJx1I-4jnS1MY0FgyOIi_9coDnMIgbTY-I5mUKam5imCGfebK-_XlTrEY3s_lnth-6SOWMdeI9hmchFaN_4yHGC-D5jYRQzXHkFROeYxhBaLwHKk_gJb22lFay80xbREhy7FP0EAUTp59MI.r5piHTXBMNQrCb0WXHWUAjkKHc-VQrGowcLzp1j6pzY&dib_tag=se&keywords=amazon%2Btripod&qid=1719246412&s=electronics&sprefix=amazon%2Btripod%2Celectronics%2C103&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1">
               Amazon Basics Tripod
              </a>{" "}
            </h2>
          </Col>
          <Col xs={12} className="pb-3 lastRow">
            <h2>
              <a href="https://www.adobe.com/products/photoshop-lightroom/campaign/pricing.html?sdid=BDDS3CR2&mv=search&mv2=paidsearch&ef_id=1becb68328f51f63b7fdd0fa882aa3d5:G:s&s_kwcid=AL!3085!10!79783520125068!20678565233">
               Adobe Lightroom(mobile & desktop)
              </a>{" "}
            </h2>
          </Col>
        </Row>
        </Container>
      <Footer />
    </>
  );
}
