'use client';

import React from "react";
import NavBar from "../nav";

const Generate = () => {
    return (
        <div>
            <NavBar/>
            <div className="flex justify-center items-center  w-full h-screen">
            <div className="relative flex flex-col items-center justify-center  items-center text-4xl w-8/12 h-screen" >
                   <h1 className="">
                    Generate an AI image
                   </h1>
                   

                   <form className="max-w-sm mx-auto">
  <br />
  <label className="block mb-2 text-center text-sm font-medium text-white">Select a model: </label>
  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Stable Diffusion by Keras</option>
    <option value="US">Imagen API</option>
  </select>
</form>


<div className="py-5">

    <label  className="block mb-2 text-sm font-medium text-white dark:text-white">Prompt: </label>
    <input type="text" id="default-input" className="bg-gray-50   border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<br />
<div className="py-5">
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-black from-black-500 to-white-500 group-hover:from-white-500 group-hover:to-black-500 border border-white hover:text-white dark:text-white dark:border-white focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-white">
  <span className="relative bg-none px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Generate
  </span>
</button>
</div>


                </div>
            </div>
        </div>
    );
}

export default Generate;
