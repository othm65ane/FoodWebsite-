import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";



const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="menu">
          <Dishes />
        </div>
        <div id="review">
          <Reviews />
        </div>
        <div id="contact">
          <Contact />
        </div> 
      </main>
      <Footer />
    </div>
  );
};

export default App;