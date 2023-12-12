import React from 'react'
import lala from '../img/lalacv.jpg'
function Cv() {
  return (
    <div class = "  pt-12 pl-24 gap-6 bg-transparent ">
     <div  class= " flex border w-[1012px]  h-[950px]  bg-slate-400 flex-row gap-6 break-all ">
      <div class= " bg-black border  w-[350px]  flex flex-col pt-8 ">

  <div class= " bg-black text-white h-32  align-middle text-center border-b-8  border-b-white " >
    <p class="text-2xl font-bold underline">
      TEMESGEN DEBEBE 
    </p>
    <p class="text-xl ">
     Seftware Enggenre 
    </p>

    


  </div>
  <div class="  w-40 h-40  absolute flex align-middle self-center items-center justify-center content-center mt-12 border rounded-full border-blue-500 shadow-md border-b-8 " >
 <div class="flex align-middle self-center items-center justify-center content-center w-36 h-36 border rounded-full border-yellow-300 shadow-md border-b-8  ">

 <div class=" flex align-middle self-center items-center justify-center content-center  w-32 h-32 border rounded-full border-red-500 shadow-md border-b-8  ">
  <img class = "  w-28 h-28 rounded-[50%]" src= {lala}/>
  </div>
  </div>
  </div>

  <div class= " border-t-8 border-t-white  bg-black pt-24 ">
  <p class = "text-center  text-4xl font-bold underline"># HI!</p>
<p >
I'm Temesgen Debebe, 
</p>
<p>
 a passionate software engineer
</p>
<p>
 with a knack for developing
</p>
<p>
 innovative solutions. Explore 
</p>
<p>
 my portfolio to discover my 
</p>
<p>
 journey in ui/ux, web, mobile, 
</p>
<p>
and desktop app developmen.
</p>

<div class="w-full h-8 bg-white text-black mt-6">
<p class = "font-bold text-center text-2xl">Education</p>
</div>

<p>
Software Engineering Degree </p><p>
  Debre Birhan University
</p>

<div class="w-full h-8 bg-white text-black mt-6">
<p class = "font-bold text-center text-2xl">Skills</p>
</div>

<ul>
  <li>
  - Web Development

  </li>
  <li>
  - Android App Development

  </li>
  <li>
  - Desktop App Development

  </li>
  <li>
  - Python Machine Learning

  </li>
  <li>
  - UI/Ux Development

  </li>
  <li>
  - Cisco Networking

  </li>
</ul>
  </div>
  <div class="w-full h-8 bg-white text-black mt-6">
<p class = "font-bold text-center text-2xl">Contact</p>
</div>
<div class = "flex flex-col">
<p class = "font-bold">Phone: </p> 
<p>0914490662</p>
<p class = "font-bold">
email: </p>
 <p>temesgendebebe1921@gmail.com
</p>
</div>



    </div>
    
    <div class= "border  bg-slate-400 w-[500]">
      <div>
    </div>
</div>
</div>
<button onMouseOver={()=>window.print()}>Print Page</button>


    </div>
  )
}

export default Cv