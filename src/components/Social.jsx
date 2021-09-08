import React from "react";

const SocialShare = [
  {
    iconName: "github",
    link: "https://github.com/4shutosh",
  },
  { iconName: "linkedin", link: "https://www.linkedin.com/in/4shutosh/" },
  {
    iconName: "twitter",
    link: "https://twitter.com/4shutoshSingh",
  },
  { iconName: "instagram", link: "https://instagram.com/zohan_ash" },
  {
    iconName: "medium",
    link: "https://medium.com/@4shutosh",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
