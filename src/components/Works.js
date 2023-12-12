import React, { useState } from 'react'
import './Work.css'
import lala2 from '../img/lala2.png'
import Works_3D from './Works_3D'
import Cisco_3d from './cisco_3D'
import Desktop_3D from './desktop_3D'
import Web_Dev from './web_development_3D'
import Iphone from './phone_3D'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Tippy from '@tippyjs/react'
// const models ={
//   desktop :'/3dmodels/desktop_computer/scene.gltf',
//   design_web :'/3dmodels/design_web/scene.gltf',
//   phone :'/3dmodels/phone/scene.gltf',
//   switch :'/3dmodels/switch/scene.gltf',
//   web_development :'/3dmodels/web-development/scene.gltf',





// };


 
function Works() {
  const [show,setshow] = useState(false);
  const [cshow,setcshow] = useState(false);
  const [deskshow,setdeskshow] = useState(false);
  const [web_dev,setweb_dev] = useState(false);
  const [iphone,setiphone] = useState(false);
  const [visible, setVisible] = useState(true);
  const showtip = () => setVisible(true);
  const hide = () => setVisible(false);

const uiclick =()=>
{
  setcshow(false);
  setiphone(false);
  setdeskshow(false);
  setshow(true);
  setweb_dev(false);
}
const desktop =()=>
{
  setcshow(false);
  setiphone(false);
  setdeskshow(true);
  setshow(false);
  setweb_dev(false);
}
const phone =()=>
{
  setcshow(false);
  setiphone(true);
  setdeskshow(false);
  setshow(false);
  setweb_dev(false);
}
const switch_cisco =()=>
{
  setcshow(true);
  setiphone(false);
  setdeskshow(false);
  setshow(false);
  setweb_dev(false);
}

const web_development=()=>
{
  setcshow(false);
  setiphone(false);
  setdeskshow(false);
  setshow(false);
  setweb_dev(true);
}


 
  return (

    <div class = " hero h-screen w-screen flex flex-col bg-transparent">
      
      <div class=" h-screen  flex  justify-center w-screen justify-items-center gap-16">
      <div  class="left  flex justify-start items-center w-full  ">       
           <div class=" justify-start items-center w-full gap-20 ">
          <div class="gap-24 ">
          <p class="font-bold text-4xl pl-24 ">Skills 
          
          <p class = " text-4xl text-cyan-400">Click <TouchAppIcon/> To see Somting</p></p>
          </div>
          <div class=" lists font-bold text-2xl pl-36">
            
            <div class="relative mb-6 text-2xl cursor-pointer" >
              
              <Tippy className = " bg-transparent text-white w-16 h-16 hints" content=" You Can See by Rotating Of The 3D Models Check Tt" visible={visible} onClickOutside={hide}>
      <div onMouseOver={visible ? hide : showtip}>
      <p onMouseOver={web_development} class="absolute bottom-0 left-0 text-white hover:animate-bounce ">Web Development</p>
              <p onMouseOver={web_development} class=" text-white hover:animate-bounce"> Web Development</p>
      </div>
      
    </Tippy>
            </div>
            <div class="relative mb-6  cursor-pointer" >
              <p onMouseOver={phone} class="absolute bottom-0 left-0 text-white hover:animate-bounce">Android App Development</p>
              <p onMouseOver={phone} class=" text-white hover:animate-bounce"> Android App Development</p>
            </div>
            <div class="relative mb-6  cursor-pointer" >
              <p onMouseOver={desktop} class="absolute bottom-0 left-0  text-white hover:animate-bounce">Desktop App Development</p>
              <p onMouseOver={desktop} class="text-white hover:animate-bounce"> Desktop App Development</p>
            </div>
            <div class="relative mb-6  cursor-pointer" >
              <p onMouseOver={switch_cisco} class="absolute bottom-0 left-0 text-white hover:animate-bounce">Cisco Networking</p>
              <p onMouseOver={switch_cisco} class=" text-white hover:animate-bounce"> Cisco Networking</p>
            </div>
            <div class=" relative  mb-6  cursor-pointer" >
              <p onMouseOver={uiclick} class=" absolute top-0 left-0 text-white hover:animate-bounce  ">UI Development</p>
              <p onMouseOver={uiclick} class=" text-white hover:animate-bounce ">UI Development </p>
            </div>
         
          </div>
         </div>
        </div>
        

        <div class=" flex justify-center items-center w-full   ">
        
      {show  &&(
        
        <Works_3D/>
      )}
      {cshow &&(
        <Cisco_3d/>
      )}

{deskshow &&(
        <Desktop_3D/>
      )}
{web_dev &&(
        <Web_Dev/>
      )}
      {iphone &&(
        <Iphone/>
      )}
        </div>

        
      </div>
    </div> 
  )
}

export default Works