import React from "react";
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className=" container mx-auto mb-15 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center text-3xl mb-15 lg:text-4xl tracking-tighter"
      >
        About Us
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-full bg-amber0-30 p-4 lg:w-1/2"
        >
          <img src={about} className="lg:-rotate-2 rounded-3xl" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-fullp-4 lg:w-1/2"
        >
          <h2 className="text-4xl lg:text-6xl max-md:text-center mt-5">
            We love cooking!
          </h2>
          <p className="p-7 text-2xl font-extralight tracking-wide text-white max-w-[35rem]">
            {ABOUT.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
