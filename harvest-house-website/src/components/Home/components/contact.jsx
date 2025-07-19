import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <div className='lg:m-24 m-5'>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <div>
            <p className='mb-8'>Connect</p>
            <h1 className='font-medium mb-4 text-2xl'>Get in Touch</h1>
            <p className='mb-4'>We'd love to hear from you!</p>
            <p className='flex items-center gap-4 mb-2 cursor-pointer'>
               <MdOutlineEmail /> <span>info@harvesthouse.com</span>
            </p>
            <p className='flex items-center gap-4 mb-2'>
               <CiPhone/>
               <span>+1 (555) 123-4567</span>
            </p>
            <p className='flex items-center gap-4 mb-2'>
               <CiLocationOn />
               <span>Harvest House Redemption Cresent, Gbagada Lagos</span>
            </p>
         
        </div>
        <div>
             <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
                
              </div>
              
              <button 
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
