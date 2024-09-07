import { useInView , motion } from "framer-motion"
import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "Inertia" , delay:0.2} },
  }


  return (
    <div className=" bg-[#F2F2F2] border-t border-zinc-200">

        <section className="container px-5 sm:px-7 py-8 sm:py-10 mx-auto lg:max-w-[1280px]">
          <motion.div 
            ref={ref}
            animate={isInView ? "show" : "hidden"}
            variants={variants}
            className="flex flex-col sm:flex-row gap-y-5 items-center justify-between "
          >
            <div className=" text-xs text-center order-1 sm:order-none  ">© {new Date().getFullYear()} Dinner with Lahcen. All rights reserved.</div>
            <div className=" text-xs text-center ">Made with <span className="text-[10px]">🖤</span> and <span className="text-[10px]">☕️</span> by <a href="#" className="border-b-2 border-solid border-black font-bold">Othmane charfaoui</a></div>
            <div className="flex text-2xl">
              <a href="https://web.facebook.com/aitighess.lahcen"><FaFacebook
              width={50}
              /></a>
              <a href="https://www.instagram.com/taste_of_atlas/"><FaInstagram
              width={50}
              className="ml-6"
              /></a>
            </div>
          </motion.div>
        </section>

    </div>
  )    
}