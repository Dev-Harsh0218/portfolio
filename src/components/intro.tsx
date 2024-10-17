"use client";
import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion";
import main_circle_image from '@/images/intro-main-image.jpg';
import Link from 'next/link';
import {BsArrowRight, BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
const Intro = () => {
  return(
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"tween",duration:0.2}}>
                    <Image src={main_circle_image} width={200} height={200} quality={95} priority={true} 
                    className='h-24 w-24 object-cover shadow-xl rounded-full border-[0.35rem] border-white' 
                    alt=""/>
                </motion.div>
                <motion.span initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:125,delay:0.1,duration:0.7}} 
                    className="text-4xl absolute -bottom-1 left-0">👋</motion.span>
            </div>
        </div>
        <motion.p initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}  
          className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
            <span className="font-bold">Hello, I'm Harsh Bhardwaj.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">6 month</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. I m Currently focused in{" "}
            <span className="underline">Aws and other cloud platforms</span>.
        </motion.p>
        
        <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
            <Link href="" 
               className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
               Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>
            <a href="" className="flex items-center gap-2 bg-white px-7 py-3 rounded-full group outline-none focus:scale-110 hover:scale-110 active:scale-105 transition">Download CV <HiDownload className='opacity-60 group-hover:translate-x-1 transition'/></a>
            <a href="" className="flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full"><BsLinkedin/></a>
            <a href="" className="flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full"><BsGithub/></a>
            <a href="" className="flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full"><BsInstagram/></a>
        </motion.div>


    </section>
  )
}

export default Intro