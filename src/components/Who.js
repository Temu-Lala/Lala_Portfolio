import React from 'react'
import lala from '../img/lala2.png'
import ss from '../img/ss.png'
import './Who.css'
function Who() {
  return (
    <div class = "w-screen h-screen flex flex-col gap-24">
      <div class="flex flex-row w-full h-96  gap-28 pl-36 ">
        <div class = "mycards w-1/4 h-96 flex flex-col-2  text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 " src={ss}/>
          <p class = "flex items-end"> This project is a real-time live chat application built with the following technologies:
          </p>
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
        <div class = " card w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300  ">
          <img class="w-full h-60 pb-8" src={lala}/>
          <p class = "flex items-end"> To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\LA_LA\Desktop\three\three npm uninstall -g @material-tailwind/react
</p>
          
        </div>
        <div class = " card w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 pb-8" src={lala}/>
          <p class = "flex items-end"> To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\LA_LA\Desktop\three\three npm uninstall -g @material-tailwind/react
</p>
          
        </div>
        

      </div>
      <div class="flex flex-row w-full h-96  gap-28 pl-36 ">
        <div class = " card w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 pb-8" src={lala}/>
          <p class = "flex items-end"> To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\LA_LA\Desktop\three\three npm uninstall -g @material-tailwind/react
</p>
          
        </div>
        <div class = "card w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 pb-8" src={lala}/>
          <p class = "flex items-end"> To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\LA_LA\Desktop\three\three npm uninstall -g @material-tailwind/react
</p>
          
        </div>
        <div class = " card w-1/4 h-96   text-white   text-center   sm:shadow  border border-yellow-300 ">
          <img class="w-full h-60 pb-8" src={lala}/>
          <p class = "flex items-end"> To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\LA_LA\Desktop\three\three npm uninstall -g @material-tailwind/react
</p>
          
        </div>
        

      </div>
      

    
      
    </div>
  )
}

export default Who