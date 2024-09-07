import React from "react";
import img1 from "../assets/picFood/about.jpg";
import { motion } from 'framer-motion'


const About = () => {
  return (
    <>
     <motion.h2
        initial = {{y : -100 , opacity : 0}}
        whileInView={{y : 0 , opacity : 1}}
        transition={{duration : 0.8}}
        viewport={{once : true}}
        className="my-20 text-center text-4xl">
            About Me
        </motion.h2>
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
       
      <img src={img1} 
      width={500}
      alt="img"
      className="rounded-lg"
      />

      <div className=" space-y-4 lg:pt-14 lg:ml-[50px] mt-[20px]">
        <h1 className=" font-semibold text-4xl text-center md:text-start ">
          Why Choose Me?
        </h1>
        <p>
        As a <motion.span
        initial={{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        className=" bg-[#FF9100]"
        >
          Personal chef
          </motion.span> specializing in the finest Moroccan cuisine, I bring a unique blend of culinary expertise and cultural richness to my clients’
        </p>
        <p>
       <motion.span
       initial={{opacity : 0}}
       whileInView={{opacity : 1}}
       transition={{duration : 0.9}}
       className="border-solid border-b-2 border-black"
       > As a Moroccan chef based in the North Carolina </motion.span> and the Regions area, I draw inspiration from my upbringing in Morocco, where I learned the art of cooking from my mother. With a deep-rooted passion for Moroccan cuisine, I bring authentic flavors and traditions to every dish I create. From vibrant tagines to fragrant couscous, my culinary journey is a celebration of heritage and taste, enriching the dining experiences of clients seeking the finest Moroccan fare in the heart of The southern.
        </p>
        <div className=" flex justify-center lg:justify-start">
        </div>
      </div>
    </div>
    </>
  );
};

export default About;