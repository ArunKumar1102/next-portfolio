"use client"
import { motion } from "framer-motion";

const Aboutpage = () => {
  return (
    <motion.div className=" h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}} 
    > 
    {/* CONTAINER */}
    <div className="">
      {/* TEXT CONTAINER */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
        {/* BIOGRAPHY CONTAINER */}
        <div className=" flex flex-col gap-12 justify-center">
          <h1>BIOGRAPHY</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nam, aspernatur ipsa maiores quisquam repudiandae molestiae repellat nesciunt, commodi esse id reprehenderit officia atque blanditiis?</p>
           
           <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        {/* SKILLS CONTAINER */}
        <div className="">SKILLS</div>
        {/* EXPERIENCE CONTAINER */}
        <div className="">EXPERIENCE</div>
      </div>
      {/* SVG CONTAINER */}
      <div className=" hidden"></div>
    </div>
    </motion.div>
  )
}

export default Aboutpage
