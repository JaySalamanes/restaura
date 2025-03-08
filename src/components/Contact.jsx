import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto container py-16">
      <h2 className="text-center text-3xl lg:text-4xl mb-8">Contact Us</h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="py-20 pb-12 text-center items-center justify-center border-b-2 border-dotted border-neutral-700"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};
console.log("Rendering Contact component");

export default Contact;
