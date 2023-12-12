import React from 'react'
import lala from '../img/lala2.png'
import ss from '../img/ss.png'
import ss2 from '../img/ss2.jpg'
import ss3 from '../img/ss3.png'
import laladbu from '../img/laladbu.jpg'
import cisco from '../img/cisco.jpg'
import rotate from '../img/rotate.gif'
import TouchAppIcon from '@mui/icons-material/TouchApp';

import './Who.css'
function Who() {
  return (
    <div class = " w-screen h-screen flex flex-col gap-24">
      <div class="flex flex-row w-full h-96  gap-28 pl-36 ">
        <div class = "mycards w-1/4 h-96   text-white  text-center    sm:shadow  border border-yellow-300 ">
          <img class=" w-full h-60 " src={ss}/>
          <p class = "flex items-end"> This project is a real-time live chat application built with the following technologies:
          </p>
          <div class = "grid grid-cols-2">
          <div>
          <p class = "text-xl">Frontend:</p>
<ul>
  <li>React</li>
  <li>Material UI</li>
  <li>CSS</li>



</ul>

          </div>
          <div> <p class = "text-xl">Backend:</p>
<ul>
  <li>Node.js</li>
  <li>Socket.io</li>
  <li>MySQL</li>


</ul></div>

</div>

          
        </div>
        <div class = " mycards w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300  ">
          <img class="w-full h-60 pb-8" src={ss2}/>
          <p class = "flex items-end"> This project is a robust customer service application designed specifically for DAF Tech. It leverages the power of React for a seamless and intuitive user interface, while utilizing C# for efficient and reliable backend operations.
</p>
          
        </div>
        <div class = " mycards w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 pb-4" src={ss3}/>
          <p class = "flex items-end"> Maintaining proper hydration is crucial for optimal health and well-being. To help you achieve this goal, we've developed a user-friendly water intake calculator built with React.to calculate your personalized daily water intake based on your weight 
</p>
          
        </div>
        

      </div>
      <div class="flex flex-row w-full h-96  gap-28 pl-36 ">
        <div class = " mycards w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 pb-8" src={laladbu}/>
          <p class = "flex items-end"> I am a motivated and passionate student pursuing a degree in Software Engineering at Debre Birhan University. I am driven by a desire to create innovative solutions using the power of technology
</p>
          
        </div>
        <div class = "mycards w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 pb-8" src={cisco}/>
          <p class = "flex items-end">  I have successfully earned a Cisco Networking Certificate from Debre Birhan University. </p>
          
        </div>
        <div class = " mycards w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 pb-8" src={rotate}/>
          <p class = "flex items-end text-2xl">Interact with 3D Models in a New Dimension: Double-Click to Rotate!</p>
          <TouchAppIcon className = " rotate-180 w-28 h-28 fill-white hover:fill-black hover:animate-bounce "/>
        </div>
        

      </div>
      

    
      
    </div>
  )
}

export default Who