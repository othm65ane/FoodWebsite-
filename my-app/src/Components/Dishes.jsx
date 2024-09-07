import img1 from '../assets/picFood/img1.png'
import img2 from '../assets/picFood/img2.png'
import img03 from '../assets/picFood/img03.png'
import img4 from '../assets/picFood/img4.png'
import img5 from '../assets/picFood/img5.png'
import img6 from '../assets/picFood/img6.png'
import img7 from '../assets/picFood/img7.png'
import hero from "../Components/hero.jpg"
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'


const Dishes = () => {
   const PROJECTS = [
    {
      title: "Bastila",
      image: img1,
      description:
       "Moroccan bastila is a savory-sweet pie with flaky pastry filled with spiced chicken or pigeon, almonds, and eggs, often topped with powdered sugar and cinnamon. This dish exemplifies the rich blend of flavors and textures in Moroccan cuisine" ,
    },
    {
      title: "Zaalouk",
      image: img2,
      description:
        "Moroccan zaalouk is a flavorful eggplant and tomato salad seasoned with garlic, cumin, and olive oil, often garnished with fresh cilantro. It's a vibrant and tangy dish, commonly enjoyed as a dip or side in Moroccan cuisine.."
    },
    {
      title: "Tajine",
      image: img03,
      description:
        "Moroccan tajine is a slow-cooked stew made in a traditional earthenware pot, featuring a harmonious blend of meat, vegetables, and aromatic spices like cumin, saffron, and ginger. The dish is renowned for its rich, complex flavors and tender texture, often served with couscous or crusty bread.."
    },
    {
      title: "Harira",
      image: img4,
      description:
       "Harira is a zesty, fragrant tomato-based soup with chickpeas and lentils. Robustly seasoned with ginger, pepper, cinnamon and lots of fresh herbs, it’s especially popular in Ramadan when it’s served to break the fast. . ",
    },
    {
      title: "Gambas Tajine",
      image: img5,
      description:
        "Garlic and Chilli Prawns, known in Spain as Gambas 🍤 , is a classic tapas dish served in tapas bars, loved by all. Made with fresh prawns cooked in oil infused with garlic and chilli and served with bread to soak up the delicious sauce.",
    },
    {
      title: "Braised lamb shanks",
      image: img6,
      description:
        "Moroccan braised lamb shanks are slow-cooked to tender perfection in a rich blend of spices, tomatoes, and herbs, creating a savory and aromatic dish. 🍲",
    },
    {
      title: " Paella",
      image: img7,
      description:
        "Paella is a classic Spanish dish known for its vibrant blend of saffron-infused rice, seafood, chicken, and vegetables, all cooked together in a single pan. Its colorful presentation and rich, savory flavors make it a festive and communal favorite",
    },
    {
      title: " Couscous",
      image: hero,
      description:
        "Moroccan couscous is a flavorful dish made from steamed semolina grains, often served with a savory mix of vegetables, meat, and aromatic spices. It’s typically accompanied by a rich stew or broth that infuses the grains with deep, savory flavors. 🌿 The combination of textures and spices makes it a staple of Moroccan cuisine 🥘, enjoyed both as a comforting family meal and at festive gatherings.",
    },
  ];
    return (
       <div className="pb-4 text-black ">
        <motion.h2
        initial = {{y : -100 , opacity : 0}}
        whileInView={{y : 0 , opacity : 1}}
        transition={{duration : 0.8}}
        viewport={{once : true}}
        className="my-20 text-center text-4xl">
            My Menu
        </motion.h2>
        <div>{PROJECTS.map((projects , index) => (
<div key={index} className='mb-8 flex flex-wrap lg:justify-center ml-[10px]'>
    <motion.div 
    initial={{opacity : 0 , x : -100}}
    whileInView={{opacity : 1 , x : 0}}
    transition={{duration : 0.7}}
    viewport={{once : true}}

    className='w-full lg:w-1/4'>
    <img 
    src={projects.image} 
    alt={projects.title}
    height={250}
    width={250}
    className='mb-6 rounded-lg'
    />
    </motion.div>
    <motion.div
    initial={{opacity : 0 , x : 100}}
    whileInView={{opacity : 1 , x : 0}}
    transition={{duration : 0.7}}
    viewport={{once : true}}
    className='w-full max-w-xl lg:3/4'>
        <h6 className='mb-2 text-2xl flex justify-between font-semibold'>{projects.title}</h6>
        <h6 className='mb-4 text-neutral-400'>{projects.description}</h6>
        <Link
         to="contact"
         spy={true}
         smooth={true}
         duration={500}
        >
        <button class="w-[100px] bg-black h-[40px] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FF9100] before:to-[#FF9100] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black ">
        request
        </button>
        </Link>
    </motion.div>
</div>

        ))}
        </div>
       </div>
    )
}

export default Dishes