import React from "react";
import img1 from "../assets/R1.jpg";
import R2 from "../assets/R2.jpeg";
import ocharfao from "../assets/ocharfao.jpg";
// import img1 from "../assets/picFood/R1.jpg";


const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl  text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="lg:flex lg:justify-around lg:items-center">
      <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div >
        <p className=" text-lightText">
        Eating Moroccan food is an immersive experience that engages all your senses. The rich aromas of spices like cumin and saffron tantalize your nose before the first bite. The complex flavors of dishes such as tagine or zaaloug unfold on your palate, combining savory, sweet, and tangy notes. Each bite reveals the care and tradition embedded in the cooking methods, like slow braising and spice blending. The communal style of dining, often with shared platters, creates a warm and inviting atmosphere that enhances the enjoyment of the meal.
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full" src={ocharfao} alt="img" 
        width={50}
        />
        <h3 className=" font-semibold ">Othmane charfaoui</h3>
      </div>
    </div>
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:ml-2 mt-4">
      <div>
        <p className=" text-lightText">
        Fire for some Authentic Moroccan Food . Deleciouse
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full" src={img1} alt="img"
        width={50}
        />
        <h3 className=" font-semibold ">patrick casale</h3>
      </div>
    </div>
     <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:ml-2 mt-4">
      <div>
        <p className=" text-lightText">
        Eating Moroccan food is a sensory journey with rich aromas and vibrant flavors. The complex blend of spices and textures creates a memorable taste experience. Sharing these dishes in a communal setting enhances the enjoyment and connection.
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full" src={R2} alt="img"
        width={50}
        />
        <h3 className=" font-semibold ">Ait ighess lhoucine</h3>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Review;