import React from "react";
import { Link } from "gatsby";
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
    </div>
  );
};

export default Home;
