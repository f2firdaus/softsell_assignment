import React from 'react'
import { FaHandsHelping, FaRocket, FaShieldAlt, FaTag } from 'react-icons/fa'

const WhyUs = () => {
  return (
      <section id="why-us" className='p-4  text-center py-20 bg-white text-gray-800 '>
          <div className='mx-w-6xl mx-auto text-center'>
              
        
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>
          Why Choose SoftSell?  
          </h1>
          <p className='text-md md:text-lg mb-12 text-gray-600'>
          We offer secure, fast, and transparent software license resale services  
          </p>
          
          <div className='grid gap-10 md:grid-cols-4  sm:grid-cols-2'>
              <div className=' flex flex-col items-center text-center'>
              <FaShieldAlt className='text-4xl text-blue-700 mb-4'/>
                  <h1 className='text-xl font-semibold mb-2'>Secure Transaction</h1>
                  <p className='text-gray-600'>Your data and payments are protected with top-notch encryption.</p>
              </div>
              <div className=' flex flex-col items-center  text-center'>
              <FaRocket className='text-4xl text-blue-700 mb-4'/>
                  <h1 className='text-xl font-semibold mb-2'>Fast Processing</h1>
                      <p>Our streamlined system ensures quick valuations and payments.
                          
                  </p>
              </div>
              <div className=' flex flex-col items-center  text-center'>
              <FaHandsHelping className='text-4xl text-blue-700 mb-4'/>
                  <h1 className='text-xl font-semibold mb-2'>Expert Support</h1>
                  <p>Our team is ready to guide you at every step of the process.</p>
              </div>
              <div className=' flex flex-col items-center  text-center'>
              <FaTag className='text-4xl text-blue-700 mb-4'/>
                  <h1 className='text-xl font-semibold mb-2'>Best Market Rates</h1>
                  <p>Get competitive offers based on current resale trends.</p>
              </div>
              </div>
              </div>
    </section>
  )
}

export default WhyUs