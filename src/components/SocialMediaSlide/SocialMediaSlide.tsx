import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slide from "../Slide/Slide";

interface Props {}

const SocialMediaSlide: React.FC<Props> = () => {
  return (
    <Slide>
      <div className="social-media-container">
        <div className="instructions">
          <div>
            <span className="title">
              <span className="gray">share your experiences </span>
              <span className="gold">on social media</span>
            </span>
          </div>
          <div>
            <span className="description">
              Use <strong>#kristielengel</strong> and your content could be
              featured here!
            </span>
          </div>
        </div>

        <div>
          <Container className="image-container">
            <Row>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
            </Row>

            <Row>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
              <Col md={2}>
                <div className="image" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Slide>
  );
};

export { SocialMediaSlide };
