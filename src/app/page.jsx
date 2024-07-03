"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return(
    <motion.div className=" h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}} 
    > 

   <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* Image Container */}
    <div className="h-1/2 py-5 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.png" alt="" fill className="object-contain"/>
    </div>
    {/* Text Container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
      {/* Desc */}
      <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta nihil excepturi eaque saepe voluptatum officiis esse eius sequi? Praesentium!</p>
      {/* Buttons */}
      <div className=" flex w-full gap-8">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
      </div>
    </div>
  </div>
  </motion.div>
  );
};

export default Homepage;
