import React from "react";

const socials = [
  {
    url: "https://www.facebook.com/thanhphat.theo/",
    img: "https://img.icons8.com/glyph-neue/512/737373/facebook-new.png",
  },
  {
    url: "https://www.linkedin.com/in/thanhphatlam/",
    img: "https://img.icons8.com/ios-filled/500/737373/linkedin-circled--v1.png",
  },
  {
    url: "https://www.instagram.com/thanhphat.theo/",
    img: "https://img.icons8.com/glyph-neue/512/737373/instagram-new--v1.png",
  },
  {
    url: "https://github.com/theo-thanhlam",
    img: "https://img.icons8.com/ios-filled/500/737373/github.png",
  },
];

const SocialGroup = () => {
  return (
    <div className="flex flex-row gap-2 justify-center">
      {socials.map((social: { url: string; img: string }, index: number) => {
        return (
          <a href={social.url} key={index}>
            <img
              src={social.img}
              alt="social icon"
              width={40}
              height={40}
              className="rounded-full hover:scale-125 transition ease-in-out hover:shadow-lg hover:shadow-slate-400 border-transparent"
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialGroup;
