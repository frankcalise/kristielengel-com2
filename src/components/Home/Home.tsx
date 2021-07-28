import React from "react";
import { Link, navigate } from "gatsby";
import Slide from "../Slide/Slide";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="home-container">
      <Slide
        foldBarColor="gold"
        foldBarText={
          <>
            <span className="fold-text mr-xl">
              changing lives on a daily basis!
            </span>
            <span className="fold-text">
              <Link to="/signup">sign up</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10095;
            </span>
          </>
        }
      >
        <div style={{ display: "flex", height: "100%" }}>
          <div className="left-image" />
          <div className="center-image">
            <div className="center-text-container">
              <div>
                <span className="first-name">kristie</span>
                <span className="last-name">lengel</span>
              </div>
              <div>
                <span className="ex">exercise</span>
                <span className="phys">physiologist</span>
              </div>
              <div className="gold-separator" />
              <div className="message-container">
                <span className="message">
                  Delivering weekly workouts for the busy individual...
                </span>
              </div>
            </div>
          </div>
          <div className="right-image" />
        </div>
      </Slide>

      <Slide>
        <div className="back-to-basics-slide">
          <div>{/* move plays here */}</div>
          <div>
            <div className="description">
              <span className="hero-text">Back to BaSix</span>
              <span className="hero-sub-text">stop starting over!</span>
              <div className="gray-separator" />
              <span className="message">
                <strong>Kristielengel.com</strong> delivers weekly workouts for
                the busy individual looking to stay healthy in a "balanced" way!
                Minimal space, time and equipment are needed to...
              </span>
              <span className="here-now">
                <span className="gold-text">right here.</span>
                <span className="white-text">right now.</span>
              </span>
              <button
                className="gold-button"
                onClick={() => navigate("/signup")}
              >
                learn more & sign up
              </button>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Home;
