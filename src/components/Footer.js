import React from 'react'
import './Footer.css'
import { Telegram } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
function Footer() {
  return (
    <div className=' w-full bg-sky-300'>

<footer class="">
  <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl">
Temesgen Debebe: Your Full-Stack Software Engineering Solution
</h2>

      <p class="mx-auto mt-4  text-gray-500">
      I am Temesgen Debebe, and I am your one-stop shop for all your software development needs. With my diverse skillset and passion for technology, I can bring your ideas to life through custom-built web applications, mobile apps, desktop software, and more.

Whether you are a small startup or a large enterprise, I have the expertise and experience to deliver high-quality software solutions that meet your specific requirements. I am adept at working with various technologies and frameworks, ensuring that your project is built on a solid and reliable foundation.
      </p>

      <a
        href="#"
        class="upbutton mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      >
        Go To Up
      </a>
    </div>

    <div
      class=" border-t border-gray-100 pt-8 sm:flex sm:items-center  gap-10 lg:mt-24"
    >
    

     <Telegram/> <WhatsApp/> <Instagram/> <GitHub/> 
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer