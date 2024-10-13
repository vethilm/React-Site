import React from "react";
import "./about.css";

function About() {
  const images = require.context("../cardImages", true);
  return (
    <>
      <div className="header">
        <div className="midText">
          <h1> Get Your Next Idea</h1>
          <img className="logolong" src="logo 2.png" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="grid">
          <div className="pin">
            <img src={images("./fonts/font12.jpeg")} alt="Image" />
            <div className="info">
              <h3>Google Fonts</h3>
              <p>Free fonts compiled for your convience</p>
            </div>
          </div>

          <div className="pin">
            <img src={images("./interfaces/interface3.jpeg")} alt="Image" />
            <div className="info">
              <h3>Interface Design Inspiration </h3>
              <p>Design is everywhere, use it as inspiration!</p>
            </div>
          </div>

          <div className="pin">
            <img src={images("./reactHacks/hack4.jpeg")} alt="Image" />
            <div className="info">
              <h3>Developer tips + Tricks </h3>
              <p>
                Learn shortcuts and tips to make your coding more efficient.
              </p>
            </div>
          </div>

          <div className="pin">
            <img src={images("./styleguides/style1.jpeg")} alt="Image" />
            <div className="info">
              <h3>Pre-made style guides </h3>
              <p>
                Jumpstart your designs with a premade style or use them as
                inspiration.
              </p>
            </div>
          </div>

          <div className="pin">
            <img src={images("./colorPalettes/color8.jpeg")} alt="Image" />
            <div className="info">
              <h3>Well balanced color palettes </h3>
              <p>
                The strongest designs start with color, we've got you covered.
              </p>
            </div>
          </div>

          <div className="pin">
            <img src={images("./reactHacks/hack3.jpeg")} alt="Image" />
            <div className="info">
              <h3>Pre-made Code </h3>
              <p>
                Enter a prompt to find code snippets to add just what you need!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="centeredimg"
              src="icons/icons/board-white.png"
              alt=""
            />
            <h3> Get Inspiration </h3>
            <p>
              We've curated special selections just for you to help your designs
              grow to their full potential. All images are copyright free!
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="centeredimg"
              src="icons/icons/profile-white.png"
              alt=""
            />
            <h3> Save For Later </h3>
            <p>
              {" "}
              With the profile feature, you can categorize and save ideas for
              later. We'll keep the safe for you.
            </p>
          </div>

          <div className="col-lg-4">
            <img
              className="centeredimg"
              src="icons/icons/search-white.png"
              alt=""
            />
            <h3> Find Hacks </h3>
            <p>
              {" "}
              You're coding hacks and questions can all be found and answered in
              one spot. We have a team determined to provide everything you
              need.
            </p>
            <br />
          </div>
        </div>
      </div>

      <div className="container3">
        <div className="row">
          <div className="col-left">
            <h2> Here's how it works...</h2>
            <h4>
              {" "}
              Find anything you like whether hacks, design tips, inpsiration, or
              anything between and save or share. The best part of DesignBoard
              is discovering new things and ideas from people around the world.
              Collect your favorites so you can go back to them later. Think,
              what can you try next? And see what you can find!
            </h4>
          </div>

          <div className="col-right">
            <img
              className="img-right"
              src="cardImages/interfaces/interface11.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container2">
        <h2>What people are saying...</h2>
        <div className="row">
          <div className="col-lg-4">
            <img className="personImg" src="testimonials-1.jpg" alt="" />
            <h3> Sarah Smith </h3>
            <p>
              "As a freelance UX Designer, I show companies examples, style
              guides, and color palettees for inpsiration directly from
              DesignBaord and it saves me a whole lot of prep work!"
            </p>
          </div>
          <div className="col-lg-4">
            <img className="personImg" src="testimonials-2.jpg" alt="" />
            <h3> Thomas Krane </h3>
            <p>
              "I work with a small start up, using react for the first time is a
              challenge but Design Board has given me so many short cuts and
              valuable tips."
            </p>
          </div>

          <div className="col-lg-4">
            <img className="personImg" src="testimonials-3.jpg" alt="" />
            <h3> Jamie McDaniel </h3>
            <p>
              "Five. Stars. As a CMO, I can better understand my designers and
              developers while helping them gain insights and growing their
              careers and projects using DB."
            </p>
            <br />
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 DesignBoard</p>
      </div>
    </>
  );
}

export default About;
