import React from 'react'
import { FaCalculator, FaMoneyCheckAlt, FaUpload } from 'react-icons/fa'

const HowItWorks = () => {
  return (
      <section  className='text-center py-14 bg-gray-200'>
          <h1 className='text-3xl font-bold'>How it Works</h1>
          <p className='text-md py-4'>Selling your unused licenses with SoftSell is simple and secure.</p>
          <div className='p-6 md:px-20 flex flex-col gap-10 md:grid grid-cols-3'>
              <div className=' shadow-3xl flex flex-col items-center rounded-2xl bg-white p-10 '>
                  <FaUpload className='text-4xl text-blue-700'/>
                  <h1 className='text-2xl font-bold '>Upload Your Licence</h1>
                  <p className='mt-4 text-gray-800 '>Provide details of the software license you want to sell. We accept many major software types.</p>
              </div>
              <div className=' shadow-3xl flex flex-col items-center rounded-2xl bg-white p-6'>
                  <FaCalculator className='text-4xl text-blue-700'/>
                  <h1 className='text-2xl font-bold '>Get a Free Valuation</h1>
                  <p className='mt-4 text-gray-800'>Our system evaluates your license and gives you a market-based price estimate.</p>
              </div>
              <div className=' shadow-3xl flex flex-col items-center rounded-2xl bg-white p-6'>
                  <FaMoneyCheckAlt className='text-4xl text-blue-700'/>
                  <h1 className='text-2xl font-bold '>Get Paid Fast</h1>
                  <p className='mt-4 text-gray-800'>Once accepted, we handle the transfer process and pay you securely within days.</p>
              </div>
          </div>
    </section>
  )
}

export default HowItWorks