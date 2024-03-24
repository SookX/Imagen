import React from "react";
import NavBar from "./nav";
import { GlobeDemo } from "./globe";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { Globe } from "../../components/ui/globe";
import { ContactForm } from "./form";
import Footer from "./footer";
import AboutImage from "./favicon.ico"
import { useState } from 'react';



export default function BackgroundBeamsDemo() {
  return (
    <div>
          <div className="relative z-10">
    <NavBar /> {/* NavBar placed inside a container with higher z-index */}
  </div>
    <div className="relative low-hidden min-h-screen bg-neutral-950 flex flex-col items-center  antialiased">

      <BackgroundBeams className="fixed top-0 left-0 w-full h-full" />
    
    <div className="flex justify-center items-center h-screen">
      <div className="relative z-10 max-w-2xl mx-auto px-4  text-center text-neutral-500">

        <h1 className="text-4xl md:text-5xl lg:text-6xl p-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
          Imagen.ai
        </h1>
        <p className="max-w-lg mx-auto my-4 text-base md:text-lg">
         Welcome to the new world of Image generating.
        </p>
        <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        Sign Now
     </div>
      </button>
      </div>
      </div>
      <section className="py-12" id="about">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <img src="https://i.gifer.com/7VA.gif" alt="Company" className="rounded-lg shadow-lg mb-4 lg:mb-0" />
                  <div>
                    <p className="text-lg leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        et mollis dolor. Vivamus eget dolor vitae urna finibus consequat.</p>
                    <p className="text-lg leading-relaxed">Nullam fringilla diam vitae tortor congue, non tempor purus
                        ultricies. Fusce volutpat feugiat magna eget scelerisque.</p>
                </div>
            </div>
        </div>
    </section>
    <div className="w-full flex items-center justify-center h-screen">
      <ContactForm/>
    </div>
    <Footer/>
    </div>
    </div>
    

  );
}
