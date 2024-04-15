
'use client'
import React, { useState } from "react";
import NavBar from "../nav";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PacmanLoader } from "react-spinners";


const Generate = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('0');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = {
      id: JSON.parse(localStorage.getItem('accData') ?? '')?.id,
      prompt,
      model
    };
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/gen/image/?Content-Type=application/json', obj);
      if(response.status == 200) {
          setLoading(false);
          router.push('/dashboard')
      }
      setPrompt('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className={`${loading ? 'blur': ''}`}>
      <NavBar />
      <div className="flex justify-center items-center  w-full h-screen">
        <div className="relative flex flex-col items-center justify-center  items-center text-4xl w-8/12 h-screen">
          <h1 className="">Generate an AI image</h1>
          <form className="max-w-sm mx-auto w-8/12 py-5 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
            <br />
            <label className="block mb-2 text-center text-sm font-medium text-white">Select a model: </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="0">Stable Diffusion by Keras</option>
              <option value="1">Imagen API</option>
            </select>

            <div className="py-5 w-full">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white" htmlFor="default-input">Prompt: </label>
              <input type="text" id="default-input" value={prompt} onChange={(e) => setPrompt(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <br />
            <div className="py-5">
              <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-black from-black-500 to-white-500 group-hover:from-white-500 group-hover:to-black-500 border border-white hover:text-white dark:text-white dark:border-white focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-white">
                <span className="relative bg-none px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Generate
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="fixed w-full flex items-center justify-center bottom-80">
                <PacmanLoader className={`${loading ? '' : 'invisible'}`} color="#FFFFFF"/>
            </div>
    </div>
  );
};

export default Generate;
