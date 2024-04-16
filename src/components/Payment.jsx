import React from 'react'
import paymentimg from '../assets/images/payment.png'
import apple_store from '../assets/images/app-strore.svg'
import google_play from '../assets/images/google-play.svg'
const Payment = () => {
  return (
    <section className='flex items-center sm:px-16 px-6' id="product">
        <img className='w-[450px]' src={ paymentimg} alt="payment-img"/>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-[40px] w-full mb-2">Easily control your billing<br className="hidden sm:block"/> & invoicing.</h2>
          <p className="text-white text-[20px] w-full">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className='flex mt-3'>
            <img className='w-[150px] h-[45px]' src={ apple_store } alt='appstore-img'/>
            <img className='w-[150px]' src={ google_play } alt='google-playstore-img'/>
          </div>
        </div>
    </section>
  )
}

export default Payment