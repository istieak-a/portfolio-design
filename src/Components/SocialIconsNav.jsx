import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialIconsNav = () => {
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
                <SocialIcon key={index} icon={item.icon} link={item.link} />
            ))}
        </div>
      )
}

const SocialIcon = ({ icon, link }) => {
    return (
        <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-[#4831d4] hover:text-white rounded-full p-2 hover:bg-black transition-all duration-300"
        >
        {icon}
        </a>
    );
}

export default SocialIconsNav
