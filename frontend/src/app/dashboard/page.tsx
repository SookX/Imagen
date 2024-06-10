"use client";

import Image from "next/image";
import React, {useEffect, useState} from "react";
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";
import Link from "next/link";
import NavBar from "../nav";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { PacmanLoader } from "react-spinners";


export default function ThreeDCardDemo() {
  const router = useRouter();
  const [images, setImages] = useState<{ prompt: string; image: string }[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");
    if (logged != "true"){
      router.push('/login');
    }
    else {
      fetchImages();
    }
    
  }, []); 
  const fetchImages = async () => {
    try {
      setLoading(true);
      const accDataString = localStorage.getItem('accData');
      if (accDataString !== null) {
        const accData = JSON.parse(accDataString);
        const response = await axios.get(`http://127.0.0.1:8000/dashboard/data/?Content-Type=application-json&id=${accData.id}`);      
        if (response.status == 200) {
          setLoading(false)
        }
        setImages(response.data.data)
      
      
      }

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  


  return (
    <div>
      <div className={`${loading ? 'blur': ''}`}>
      <NavBar/>
      <div className="relative top-20 flex flex-wrap justify-around py-10 sm:py-8 lg:py-12">
        {images.map((image, index) => (
          <div  className="w-full sm:w-1/3 p-2 py-5">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-9 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {image.prompt}
                </CardItem>

                <CardItem translateZ="100" className="py-5 w-full mt-4">
                  <Image
                    src={image.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-8 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Download
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
      <div className={`fixed bottom-4 right-4  ${loading ? 'invisible' : ''}`}>
    <Link href="/generate">
      <button className={`px-8 py-2 rounded-md bg-white border border-black text-black font-bold transition duration-200 hover:bg-black hover:text-white border-2 border-transparent hover:border-teal-500 ` }>
        Generate an Image
      </button>
    </Link>
</div>

    </div>
    <div className="fixed w-full flex items-center justify-center bottom-80 py-10">
                <PacmanLoader className={`${loading ? '' : 'invisible'}`} color="#FFFFFF"/>
            </div>
    </div>
  );
}