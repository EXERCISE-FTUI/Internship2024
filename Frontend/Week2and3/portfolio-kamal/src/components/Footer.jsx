import React from "react";
import Socials from "../static/social";

const Footer = () => {
  return (
    <>
      <div className="bg-white w-full h-1"></div>
      <div className="flex justify-center items-center py-3 bg-[#131313]">
        <div className="lg:w-[70vw] w-[90vw] flex flex-col justify-center">
          <div className="flex justify-start mt-3 flex-wrap">
            {Socials.map((social) => (
              <div className="flex flex-col items-center m-2">
                <img
                  src={social.photo}
                  alt={social.name}
                  className="h-16 w-16 rounded-md hover:cursor-pointer hover:scale-105 transform transition-transform"
                  key={social.name}
                  onClick={() => window.open(social.link, "_blank")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
