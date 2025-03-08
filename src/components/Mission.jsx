import React from "react";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="py-10 mb-8 text-3xl tracking-tight lg:text-4xl">
          Our Mission
        </h2>
        <div className="relative flex items-center justify-center">
          <video
            loop
            autoPlay
            muted
            src={mission}
            className="rounded-4xl w-full h-full bg-amber-950"
          ></video>
          <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -200 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute text-2xl lg:text-3xl font-extralight max-w-[35rem]"
          >
            {MISSION}
          </motion.h3>
        </div>
      </div>
    </section>
  );
};

export default Mission;
