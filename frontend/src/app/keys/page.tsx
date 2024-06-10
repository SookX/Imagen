
"use client"
import React, { useRef, useState, useEffect } from "react";
import NavBar from "../nav";
import copy from "clipboard-copy";
import { useRouter } from "next/navigation";
import axios from "axios";
import { PacmanLoader } from "react-spinners";

const Keys = () => {
    const inputRef = useRef(null);
    const [isCopied, setIsCopied] = useState(false);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState('');

    const copyToClipboard = () => {
        if (inputRef.current) {
            copy(inputRef.current['value']);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };
    



    useEffect(() => {
        const logged = localStorage.getItem("loggedIn");
        if (logged != "true"){
          router.push('/user');
        }
        else {
          fetchKey();
        }
        
      }, []); 

      const fetchKey = async () => {
        try {
          setLoading(true)
          const response = await axios.get(`http://127.0.0.1:8000/api/user/?Content-Type=application-json&id=${JSON.parse(localStorage.getItem('accData') ?? '')?.id}`);
           if (response.status == 200){
                setLoading(false); 
           }
          setKey(response.data.Key);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

    return (
        <div>
            <div className={`${loading ? 'blur': ''}`}>
            <NavBar />
            <div className={`flex flex-col py-24 items-center ${loading ? 'blur' : ''}`}>
                <h1 className="text-xl border-b-2">My API KEY</h1>
                <div className="my-7 grid rounded bg-purple grid-cols-8 gap-0 w-full max-w-[25rem]">
                    
                    <label className="sr-only">Label</label>
                    <input
                        ref={inputRef}
                        type="text"
                        className="col-span-6 bg-gray-50 border border-gray-300 text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={key}
                        disabled
                        
                        readOnly
                    />
                    

                    <button
                        onClick={copyToClipboard}
                        className="col-span-2 border-r-2 border-t-2 border-b-2  text-white bg-black-700 hover:bg-white hover:text-black hover:border-t-0"
                    >
                        <span id="default-message" className={isCopied ? "hidden" : ""}>Copy</span>
                        <span id="success-message" className={isCopied ? "inline-flex items-center" : "hidden"}>
                            <svg className="w-3 h-3 text-white me-1.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                            Copied!
                        </span>
                    </button>
                </div>

                <div className="relative divide-y divide-card-muted rounded-md border border-card bg-card w-7/12">
                    <div className="px-6 py-3">
                        <h2 className="text-strong m-0 text base font-medium">
                            Command Prompt
                        </h2>
                    </div>
                    <div className="px-6 py-3">
                        <p className=" mb-4 break-words">
                            Install the appropriate package using the package installer for Python
                        </p>
                        <pre className="rounded border border-gray-300 bg-gray-50 px-3 py-2">
                            <code className ='WHnkZwe1S6bYhZVXiN93 h-9 text-gray-500 select-all' data-cursor = "$">
                                pip install imagenai
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="relative my-10 divide-y divide-card-muted rounded-md border border-card bg-card w-7/12">
                    <div className="px-6 py-3">
                        <h2 className="text-strong m-0 text base font-medium">
                            Python interpreter
                        </h2>
                    </div>
                    <div className="px-6 py-3">
                        <p className=" mb-4 break-words">
                            Import the package
                        </p>
                        <pre className="rounded border border-gray-300 bg-gray-50 px-3 py-2">
                            <code className ='WHnkZwe1S6bYhZVXiN93 h-9 text-gray-500 select-all' data-cursor = "$">
                                import imagenai
                            </code>
                            
                        </pre>
                        
                    </div>
                    
                </div>

                <div className="relative my-1 divide-y divide-card-muted rounded-md border border-card bg-card w-7/12">
                    <div className="px-6 py-3">
                        <h2 className="text-strong m-0 text base font-medium">
                            Python interpreter
                        </h2>
                    </div>
                    <div className="px-6 py-3">
                        <p className=" mb-4 break-words">
                            Generate an Image
                        </p>
                        <pre className="rounded border border-gray-300 bg-gray-50 px-3 py-2">
                            <code className ='WHnkZwe1S6bYhZVXiN93 h-9 text-gray-500 select-all' data-cursor = "$">
                                imagenai.imageGenerate(filename, prompt, model_name, api_key)
                            </code>
                            
                        </pre>
                        
                    </div>
                    
                </div>
                
                
            </div>

            </div>
            <div className="fixed w-full flex items-center justify-center bottom-80">
                <PacmanLoader className={`${loading ? '' : 'invisible'}`} color="#FFFFFF"/>
            </div>
        </div>
        
    );
}

export default Keys;