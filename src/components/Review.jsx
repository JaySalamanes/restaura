import React from "react";
import { REVIEW } from "../constants";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import xaviour from "../assets/xaviour.jpeg";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <section className="container mx-auto mb-8 text-center" id="review">
      <div className="flex flex-col">
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 5 }}
          className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
        >
          {REVIEW.content}
        </motion.p>
        <div className="flex justify-center items-center gap-6">
          <img
            src={xaviour}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />
          <div>
            <h6 className="text-[20px]">{REVIEW.name}</h6>
            <p className="text-start text-neutral-400">{REVIEW.profession}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-15 items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index) => {
          return (
            <img
              key={index}
              src={customer}
              alt="customer"
              className="h-[300px] w-[200px] rounded-br-3xl rounded-t-3xl object-cover"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Review;
