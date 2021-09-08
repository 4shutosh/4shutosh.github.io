import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Ashutosh Singh</h3>
            <p className="job">
              <b>The Curious Guy</b>
              <p className="myText">
                I’d rather be a could-be if I cannot be an are; because a could-be is a maybe who is reaching for a star,
                I’d rather be a has-been than a might-have-been, by far; for a might have-been has never been, but a has was once an are.
              </p>

              {/* <p className="myText1">
                <b>Fields of Interest:</b> Tech, Startups, Football, Music
              </p> */}
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
