import React from 'react'
import './Contact.css'
import lala2 from '../img/lala2.png'
import Map from './Map'

const handlsubmit =(e)=>
{
  e.preventDefault();
  

}
function Contact() {
  return (
    <div class=" flex w-full h-screen items-center flex-row align-middle justify-center self-center gap-24 ">
      <div onSubmit={handlsubmit} class=" w-full h-screen items-center justify-center pl-36 bg-transparent">  
      <div class="pt-36 w-96 ">
      <div class="pb-6">
        <p class = "text-4xl font-bold">Contact me </p>
      </div>
      <div class=" pb-6">
      <input class = "bg-transparent border-4 border-white w-96 h-12 rounded-lg  text-white "  type='text' placeholder='Name'></input>
      </div>
      <div class=" pb-6 ">
      <input  class = "bg-transparent border-4 border-white w-96 h-12 rounded-lg  text-white " type='email' placeholder='Email'></input>
      </div>
      <div class="pb-6">
      <textarea class = " bg-transparent border-4 border-white rounded-lg text-white" id="message" placeholder='Write Your Message' name="message" rows="8" cols="50"></textarea>
      </div>
      <div class="">
        <button type='submit' class=" bg-cyan-400 text-black w-full  h-12 rounded-lg">Send </button>
      </div>
          </div>
          </div>


<div class = " w-full h-screen justify-start items-start bg-transparent" >
  
<div class=" w-full h-full">
  <Map/>
  </div>
</div>
    </div>
  )
}

export default Contact