import React from "react";
import Section from "./section/section";
import Link from "next/link";

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/thanhphat.theo/",
    img: "https://img.icons8.com/glyph-neue/512/737373/facebook-new.png",
  },
  {
    name: "Linkedin",

    url: "https://www.linkedin.com/in/thanhphatlam/",
    img: "https://img.icons8.com/ios-filled/500/737373/linkedin-circled--v1.png",
  },
  {
    name: "Instagram",

    url: "https://www.instagram.com/thanhphat.theo/",
    img: "https://img.icons8.com/glyph-neue/512/737373/instagram-new--v1.png",
  },
  {
    name: "Github",
    url: "https://github.com/theo-thanhlam",
    img: "https://img.icons8.com/ios-filled/500/737373/github.png",
  },
];

const Socials = () => {
  return (
    <Section name="socials">
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2 ">
        {socials.map(
          (
            social: { url: string; img: string; name: string },
            index: number
          ) => {
            return (
              <Link
                href={social.url}
                className="group flex items-center gap-2 border border-transparent hover:border-gray-600 hover:text-gray-300 transition duration-200 hover:scale-110 rounded-lg"
                key={index}
              >
                <img
                  src={social.img}
                  alt=""
                  width={36}
                  height={36}
                  className=""
                />
                <span className="">{social.name}</span>
              </Link>
            );
          }
        )}
      </div>
    </Section>
  );
};

export default Socials;
