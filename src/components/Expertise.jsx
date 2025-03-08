import React from "react";
import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <section id="expertise">
      <div className="container mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -200 }}
          transition={{ duration: 1, delay: 1 }}
          className="my-16 text-center text-3xl lg:text-4xl tracking-tight"
        >
          Our Expertise
        </motion.h2>
      </div>
      <div className="container mx-auto px-4 mb-20">
        {CUSINES.map((cusine, index) => (
          <div
            key={index}
            className="flex justify-center items-center border-b-4 border-dotted border-neutral-700/40 py-10"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex-shrink-0 pr-8 text-2xl"
            >
              {cusine.number}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-1/3 flex-shrink-0"
            >
              <img
                className="rounded-4xl h-auto"
                src={cusine.image}
                alt={cusine.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 2 }}
              className="ml-10"
            >
              <h2 className="text-2xl lg:text-3xl uppercase text-red-200 py-4">
                {cusine.title}
              </h2>
              <p className="text-lg tracking-tight">{cusine.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
