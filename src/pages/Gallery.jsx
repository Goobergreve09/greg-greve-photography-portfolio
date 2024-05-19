import { Row, Col, Container } from "react-bootstrap";

import ModalImage from 'react-modal-image';
import lightShine from "../assets/images/lightShine.jpg"
import goldenHour from "../assets/images/goldenHour.jpg"
import hikingMan from "../assets/images/hikingMan.jpg"
import treeFall from "../assets/images/treeFall.jpg"



export default function Gallery() {
    return (
<Container>
    <Row>
        <Col>
        <p className="galleryTitle">1. Forests and Greenery</p>
        </Col>
    </Row>
    <Row>
        <Col lg={3}>
            <ModalImage
            small = {lightShine}
            large = {lightShine}
            alt = "The sun beaming through the thick forest"
            className = "galleryImage" />
        </Col>
        <Col lg={3}>
            <ModalImage
            small = {goldenHour}
            large = {goldenHour}
            alt = "Golden Hour in the Appalachians"
            className = "galleryImage" />
        </Col>
        <Col lg={3}>
            <ModalImage
            small = {hikingMan}
            large = {hikingMan}
            alt = "A man hiking through the Appalachians"
            className = "galleryImage" />
        </Col>
        <Col lg={3} sm={12}>
            <ModalImage
            small = {treeFall}
            large = {treeFall}
            alt = "A man hiking through the Appalachians"
            className = "galleryImage" />
        </Col>
    </Row>
</Container>
    )
}