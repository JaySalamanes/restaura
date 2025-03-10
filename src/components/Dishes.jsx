import React from "react";
import DishCard from "./DishCard";
import { DISHES } from "../constants";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl tracking-tighter ">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">
        {DISHES.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
