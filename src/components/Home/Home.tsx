import React from "react";
import { Link, navigate } from "gatsby";
import Slide from "../Slide/Slide";
import { SocialMediaSlide } from "../SocialMediaSlide/SocialMediaSlide";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="home-container">
      <Slide
        foldBarColor="gold"
        foldBarText={
          <>
            <span className="fold-text mr-xl">
              Helping women all over the world find a healthy #BALANCE
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
                  Delivering convenient workouts and #balanced nutrition advice
                  for busy women!
                </span>
              </div>
            </div>
          </div>
          <div className="right-image" />
        </div>
      </Slide>

      <Slide>
        <div className="back-to-basics-slide">
          <div className="video-frame">
            <iframe
              src="https://player.vimeo.com/video/588480092?h=226e972b63"
              width="720"
              height="480"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <div className="description">
              <span className="hero-text">Back to BaSix</span>
              <span className="hero-sub-text">stop starting over!</span>
              <div className="gray-separator" />
              <span className="message">
                To kick start your new #balanced lifestyle, your membership
                includes my 6 step “healthy habit formation” program called
                “Back to BaSIX”! Each week, you’ll commit to one new healthy
                habit. Once it becomes routine, you’ll level up to my next
                habit! We’ll slowly build up 6 new habits so you NEVER feel
                overwhelmed or deprived! You’ll get the results you want, and be
                hungry for more!
              </span>
              <span className="here-now">
                <span className="gold-text">right here.</span>
                <span className="white-text">right now.</span>
              </span>
              <button
                className="gold-button"
                onClick={() => navigate("/back-to-basix")}
              >
                learn more
              </button>
            </div>
          </div>
        </div>
      </Slide>

      <Slide short={true} foldBarColor="gold">
        <div style={{ display: "flex", height: "100%" }}>
          <div className="feature-container">
            <div className="feature one">
              <span>5 new workouts every week</span>
            </div>
            <span className="feature-hover-message"></span>
          </div>
          <div className="feature-container">
            <div className="feature two">
              <span>30+ workout videos on demand!</span>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature three">
              <span>recipes & nutrition support</span>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature four">
              <span>
                community
                <br />
                support
              </span>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature five">
              <span>individual online meetings</span>
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <div className="fitness-community-slide">
          <span>a fitness community fueled by #balance</span>
        </div>
      </Slide>

      <Slide>
        <div className="testimonials-container">
          <div>
            <span className="by-the-people">by the people</span>
          </div>
        </div>
      </Slide>

      <SocialMediaSlide />
    </div>
  );
};

export default Home;
