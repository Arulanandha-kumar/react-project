import React from 'react'
import discount from '../assets/images/Discount.png'
import bannerimg from '../assets/images/hero-img.png'
const hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 flex-col sm:px-16 px-6`}>
          <div className='flex flex-row items-center py-[6px] px-4 bg-slate-800 rounded-[10px] mb-2 w-[340px]'>
            <img src={ discount } alt="discount" className='w-[32px] h-[32px]'/>
            <span className='text-white ml-2 mr-1'>20% Discont for 1 Month Account</span>
          </div> 
          <div className='flex text-[52px]'>
            <h1 className='text-white font-semibold leading-[50px]'>The Next<br className='sm:block hidden'/> <span className='text-cyan-400'>Generation</span><br/> Payment Method</h1>
            <div className='h-[70px] w-[70px] rounded-full cursor-pointer bg-teal-300 p-[2px]'>
              <div className="flex items-center justify-center flex-col bg-slate-900 rounded-full w-[100%] h-[100%]">
                <div className='flex-row flex items-center'>
                  <p className='leading-[17px] text-[12px] text-teal-300'>Get<br/>Started</p>
                </div>
              </div>
            </div>
          </div>
          <p className='flex text-white text-[16px] max-w-[400px] mt-5'>Our team of experts uses a methodology to identity the credit cards nost likely to fit your needs. we examine annual percentage rates, annual fees.</p>
      </div>
      <div className='flex-1 flex md:justify-end justify-center my-5 sm:px-16 px-6'>
        <img className='w-[330px] h-[330px] relative z-[5]' src={ bannerimg } alt='bannner-hero-img'></img>
      </div>
    </section>
  )
}

export default hero