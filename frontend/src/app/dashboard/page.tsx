"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";
import Link from "next/link";
import NavBar from "../nav";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function ThreeDCardDemo() {
  return (
    <div>
    <NavBar/>
    <div className="relative top-20 flex flex-wrap justify-around py-10 sm:py-8 lg:py-12">
    
      <div className="w-full sm:w-1/3 p-2 py-5">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-9 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>

        <CardItem translateZ="100" className="py-5 w-full mt-4">
          <Image
            src="https://news.artnet.com/app/news-upload/2023/02/Julian-van-Dieken_A-Girl-With-Glowing-Earrings-.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover  "
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-8  py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
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
    <div className="w-full sm:w-1/3 p-2 py-5">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://news.artnet.com/app/news-upload/2023/02/Julian-van-Dieken_A-Girl-With-Glowing-Earrings-.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Download
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>    
    </div>
    <div className="w-full sm:w-1/3 p-2 py-5">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://news.artnet.com/app/news-upload/2023/02/Julian-van-Dieken_A-Girl-With-Glowing-Earrings-.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Download
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>    
    </div>
    <div className="w-full sm:w-1/3 p-2 py-5">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://news.artnet.com/app/news-upload/2023/02/Julian-van-Dieken_A-Girl-With-Glowing-Earrings-.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Download
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
    </div>
    <div className="fixed bottom-4 right-4 z-50">
    <Link href="/generate">
      <button className="px-8 py-2 rounded-md bg-white text-black font-bold transition duration-200 hover:bg-black hover:text-white border-2 border-transparent hover:border-teal-500">
        Generate an Image
      </button>
    
    </Link>
    </div>
    </div>
  );
}
