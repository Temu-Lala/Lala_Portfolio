import React, { useEffect, useRef } from 'react'
import './Hero.css'
import Navbar from './Navbar'
import lalaHero from '../img/lalahero.jpg'
import Hero_3D from './Hero_3D'
import { Canvas } from '@react-three/fiber'
import { extend } from '@react-three/fiber';
import { Telegram } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import {motion} from 'framer-motion'
extend({
  Canvas 
});
function Hero() {
 
  
 
  return (
   

    <div class = " hero h-screen flex flex-col   " >
   
      

      <div class="flex justify-center bg-transparent">
      <Navbar/>
      </div>

      <div class=" h-screen  flex  justify-center w-full justify-items-center gap-16">
        <div  class="left  flex justify-start items-center w-full  ">       
           <div class=" justify-start items-center w-full gap-20 ">

          <div class="  gap-24">
        
          <p class=" name font-bold text-6xl pl-24 ">
            
          <p class=" text-9xl text-red-500 "  >HI I'm</p>
          TEMESGEN  DEBEBE</p>
          </div>
          <div class=" ">
          <p class="name  pl-24"> # Welcome to My Portfolio!


          </p></div>
          <div class=" name w-40 h-40 align-middle flex flex-row  font-bold pl-40 pt-20 gap-12 text-[20px]">
       <div class="gap-56">
< Telegram class = " w-14 h-14 fill-white hover:fill-blue-800 hover:animate-bounce"/>
       </div>
       <div>
        <WhatsApp class = " w-14 h-14 fill-white hover:fill-green-600 hover:animate-bounce"/>
        
       </div>
       <div>
        <Instagram class = " w-14 h-14 fill-white hover:fill-red-400 hover:animate-bounce"/>
        
       </div>
       <div>
        <GitHub class = " w-14 h-14 fill-white hover:fill-black hover:animate-bounce "/>
        
       </div>
          


            
          </div>
          
        </div>
        </div>

        <div class="photo flex justify-center items-center w-full   ">

<img class=" right-side" src={lalaHero} />

        </div>
      </div>
    </div>
  )
}

export default Hero