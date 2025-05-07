import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  return (
      <section id="#testimonials" className='py-14'>
          <h1 className='text-4xl font-semibold mb-2 text-center text-gray-800'>What Our Customer Say</h1> 
          <div className='text-center flex md:flex  gap-6 md:justify-around p-4 flex-wrap justify-center items-center'>
               
              
              <div className='flex flex-col items-center bg-white shadow-2xl p-6 rounded-2xl gap-4'>
                  <div className='flex '>
                      
                  
              <FaStar className="text-yellow-500 text-2xl" />
              <FaStar className="text-yellow-500 text-2xl" />
              <FaStar className="text-yellow-500 text-2xl" />
              <FaStar className="text-yellow-500 text-2xl" />
                      <FaStar className="text-yellow-500 text-2xl" />
                  </div>
                  <div className='flex w-80'>
                      <p>
                      "SoftSell made selling our unused software licenses so simple and quick. The entire process was seamless, and the payment was delivered within days!"
                      </p>
                  </div>
                  <div>
                 <p className='font-semibold text-gray-800'>John Doe</p> 

           <p> Chief Technology Officer, TechCorp</p>
                  </div>
              </div>
              <div className='flex p-6  flex-col items-center bg-white shadow-2xl rounded-2xl gap-4'>
                  <div className='flex  '>
                      
                  
              <FaStar className="text-yellow-500 text-2xl" />
              <FaStar className="text-yellow-500 text-2xl" />
              <FaStar className="text-yellow-500 text-2xl" />
              <FaStar className="text-yellow-500 text-2xl" />
                      <FaStar className="text-yellow-500 text-2xl" />
                  </div>
                  <div className='flex w-80'>
                      <p>
                     "Selling our licenses through SoftSell was incredibly easy. The team provided us with great support, and the valuation was spot-on. Highly recommend!"
                      </p>
                  </div>
                  <div>
                 <p>John Doe</p> 

Chief Technology Officer, TechCorp
                  </div>
              </div>
              <div className='flex p-6  flex-col items-center bg-white shadow-2xl rounded-2xl gap-4'>
                  <div className='flex  '>
                      
                  
              <FaStar className="text-yellow-500 text-2xl" />
              <FaStar className="text-yellow-500 text-2xl" />
              <FaStar className="text-yellow-500 text-2xl" />
              
                      <FaStar className="text-yellow-500 text-2xl" />
                  </div>
                  <div className='flex w-80'>
                      <p>
                      "SoftSell made selling our unused software licenses so simple and quick. The entire process was seamless, and the payment was delivered within days!"
                      </p>
                  </div>
                  <div>
                  <p>John Doe</p> 

Chief Technology Officer, TechCorp
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Testimonials