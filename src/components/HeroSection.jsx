import React from "react";
import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpeg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <motion.video
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          loop
          autoPlay
          muted
          src={video}
          poster={hero}
          className="h-full w-full object-cover"
        ></motion.video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="absolute z-20 flex flex-col justify-end pb-20 h-screen">
        <a href="/">
          <img src={logo} alt="restaura" className="w-full p-4" />
        </a>
        <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
      </div>
    </section>
  );
};

export default HeroSection;
