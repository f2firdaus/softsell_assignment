import React from 'react'

const HeroSection = () => {
  return (
      <section className='py-24 px:6 md:px-12  text-white bg-blue-700 w-2/2'>
          <div className='max-w-5xl mx-auto text-center '>
          <h1 className="text-4xl text-white md:text-5xl font-bold leading-tight mb-6">
          Resell Unused Software Licenses Seamlessly
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          At <strong>SoftSell</strong>, we help individuals and businesses turn unused software licenses into real value — fast, legal, and easy.
              </p>
              <button className='bg-white text-blue-700 p-3 px-5 rounded-xl font-bold'>Sell My License</button>
          </div>
    </section>
  )
}

export default HeroSection