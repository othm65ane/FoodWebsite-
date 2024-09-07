import React from "react";
import mouse from "../assets/mouse.jpeg"
import hero from "../Components/hero.jpg"
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <>
    <div className=" h-[96vh] flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
        Tastes  the Moroccan flavours
        </h1>
        <p className=" text-backgroundColor">
        Indulge in the <motion.span 
        className="bg-[#FF9100] font-semibold"
        initial={{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        >rich flavors of Moroccan cuisine </motion.span>, where fragrant spices and fresh ingredients create a vibrant tapestry of taste.
         From savory tagines to sweet pastries, each dish offers a unique 
         and , 
        <motion.span 
        className="border-solide border-b-2 border-black font-semibold"
        initial={{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        > unforgettable culinary experience .</motion.span>
        </p>
        <div className=" lg:pl-44 ">
        <button class="w-[150px] bg-black h-[50px] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FF9100] before:to-[#FF9100] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black ">
        Get Started
        </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8">
      <img src={hero} 
        width={350}
        className="rounded-[10px]"
        />
        </div>
    </div>
    <div className="flex items-center justify-center">
        <img src={mouse}
        width={50}
        />
    </div>
    </>
  );
};

export default Home;