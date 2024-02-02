import React from 'react'
import { MdLocalPhone, MdEmail, MdEmergency } from "react-icons/md";



const Footer = () => {
  return (


<footer className="bg-slate-950">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://starcontractoragency.com/">
                  <img src="/assets/identity/wlogo.svg" className="h-16 lg:h-20 me-3" alt="Star Contractor Agency Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className='col-span-1'>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Site Map</h2>
                  <ul className="text-slate-400 font-normal">
                      <li className="mb-4">
                          <a href="https://starcontractoragency.com/" className=" hover:text-orange-500">Home</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://starcontractoragency.com/about" className=" hover:text-orange-500">About</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://starcontractoragency.com/services" className=" hover:text-orange-500">Services</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://starcontractoragency.com/blog" className=" hover:text-orange-500">Blog</a>
                      </li>
                  </ul>
              </div>
              <div className=''>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Our Solutions</h2>
                  <ul className="text-slate-400 font-normal">
                      <li className="mb-4">
                          <a href="https://starcontractoragency.com/services/web-design" className=" hover:text-orange-500">Web Design</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://starcontractoragency.com/services/branding" className=" hover:text-orange-500">Branding</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://starcontractoragency.com/services/seo" className=" hover:text-orange-500">SEO</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://starcontractoragency.com/services/digital-media" className=" hover:text-orange-500">Digital Media</a>
                      </li>
                  </ul>
              </div>
              <div className=''>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contact Us</h2>
                  <ul className="text-slate-400 font-normal">
                  <li className="mb-4">
                        <a href="tel:+14379616674" className="hover:text-orange-500 flex items-center gap-2">
                          <MdLocalPhone size={20} style={{ minWidth: '20px' }}/>
                          <span>(437) 961 6674</span>
                        </a>
                      </li>

                      <li className="mb-4">
                        <a href="mailto:info@starcontractoragency.com" className="hover:text-orange-500 flex items-center gap-2">
                          <MdEmail size={20} style={{ minWidth: '20px' }}/>
                          <span>Get In Touch</span>
                        </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 sm:mx-auto border-slate-800 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-slate-300">© 2024 <a href="https://starcontractoragency.com" className=" hover:text-orange-500">Star Contractor Agency</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 gap-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-slate-400 hover:text-orange-500">
                  Facebook
              </a>

              <a href="#" className="text-slate-400 hover:text-orange-500">
                  Google
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer
