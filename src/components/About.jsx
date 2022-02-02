import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";
import ExpItem from "./ExpItem"

Modal.setAppElement("#root");

const About = () => {
  return (
    <>
      <div className="tokyo_tm_about">
        {/* <div className="about_image">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Ashutosh Singh</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hello, I am a software developer by profession. I love to build stuff. If not
                around computers I'll be playing football, engrossed in music or lifting some dead heavy weights.
              </p>
              {/* <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div> */}
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>26 08 2000
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Age:</span>31
                  </p>
                </li> */}
                <li>
                  <p>
                    <span>Address:</span>India
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:4shutoshsingh@gmail.com" target="_blank">4shutoshsingh@gmail.com</a>
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">+77 022 177 05 05</a>
                  </p>
                </li> */}
                {/* <li>
                  <p>
                    <span>Study:</span>Univercity of Texas
                  </p>
                </li> */}
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>

          <div className="description_inner">
            <div className="experience">
              <div className="title">
                Experience:
              </div>
              <ExpItem
                year='Present'
                title='TickerTape'
                body='Android Developer'
              />
              <ExpItem
                year='2021'
                title='Open Source Developer'
                body='Kiwix, DuckDuckGO, TapTap and other'
              />
              <ExpItem
                year='2021'
                title='BlackBoard Radio: Curieo Tech'
                body='Android Developer'
              />
              <ExpItem
                year='2020'
                title='Freelance Android & Web Developer'
                body='International Freelance Software Developer'
              />
              <ExpItem
                year='2020'
                title='Developers Club IIITN'
                body='Indian Institute of Information Technology, Nagpur'
              />
              <ExpItem
                year='2019'
                title='Gooogle Developers Group, Nagpur, India'
                body='Android Developer & Tech Team Member'
              />
            </div>
            <div className="experience">
              <div className="title">
                Education:
              </div>
              <ExpItem
                year='Present'
                title='IIIT Nagpur, India'
                body='B.Tech : ECE'
              />
              <ExpItem
                year='2018'
                title='Yashoda Junior College, Nagpur'
                body='Junior College'
              />
              <ExpItem
                year='2016'
                title='Somalwar Ramdaspeth, Nagpur'
                body='Schooling'
              />
            </div>
          </div>
          {/* END DESCRIPTION INNER */}
          <div className="description_inner">
            <div className="experience">
              <div className="title">
                Areas of Interest :
              </div>
              <div className="interest">
                Tech, Startups, Fitness, Human Psychology, Finance, Extreme Sports, Music, Media Production, Football etc
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
