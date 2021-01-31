import React from "react";
import { Row, Col } from "react-flexbox-grid";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image9 from "./images/image9.png";


import Title from "../ui-components/title/title";

import "./comber.scss";

const Comber = () => (
  <div id="comber">
    <div className="container">
      <Title title="COMBERsemos." />
      <Row className="row">
        <Col className="img-container">
          <img src={image1} className="img-c" />
        </Col>
        <Col className="img-container">
          <img src={image2} className="img-c" />
        </Col>
        <Col className="img-container">
          <img src={image3} className="img-c" />
        </Col>
      </Row>
      <Row className="row">
        <Col className="img-container">
          <img src={image4} className="img-c" />
        </Col>
        <Col className="img-container">
          <img src={image5} className="img-c" />
        </Col>
        <Col className="img-container">
          <img src={image6} className="img-c" />
        </Col>
      </Row>
      <Row className="row">
        <Col className="img-container">
          <img src={image7} className="img-c" />
        </Col>
        <Col className="img-container">
          <img src={image8} className="img-c" />
        </Col>
        <Col className="img-container">
          <img src={image9} className="img-c" />
        </Col>
      </Row>
    </div>
  </div>
);

export default Comber;