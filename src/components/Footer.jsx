import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <section id="footer" className="container mx-auto py-20">
      <div className="flex gap-6 justify-center items-center">
        {SOCIAL_MEDIA_LINKS.map((links, index) => (
          <div key={index}>
            <a target="_blank" rel="noopener noreferrer" href={links.href}>
              {links.icon}
            </a>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-md text-neutral-400">@Rbjay Salamanes. All Rights Reserved.</p>
    </section>
  );
};

export default Footer;
