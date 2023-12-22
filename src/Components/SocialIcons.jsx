import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = ({ color }) => {
  console.log(color);
  const socialData = [
    {
      icon: <FaGithub />,
      link: "https://github.com/istieak-a",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/istieaka/",
    },
    {
      icon: <FaXTwitter />,
      link: "https://twitter.com/istieak_a",
    },
  ];

  return (
    <div className="flex pt-5">
      {socialData.map((item, index) => (
        <SocialIcon
          key={index}
          color={`${color}`}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </div>
  );
};

const SocialIcon = ({ icon, link, color }) => {
  console.log(color);
  const textColor = `text-[${color}]`;
  console.log(textColor);
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{ color: `${color}` }}
      className={`text-2xl rounded-full p-2 transition-all duration-300 hover:bg-black hover:text-[#4831d4]`}
    >
      {icon}
    </a>
  );
};

export default SocialIcons;
