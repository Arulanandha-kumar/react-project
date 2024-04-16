import React from 'react'
import credit_card from '../assets/images/credit-card.png'
const Creditcards = () => {
  return (
    <section className='flex items-center sm:px-16 px-6'>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-[40px] w-full mb-2">Find a better card deal<br className="hidden sm:block"/> in few easy steps</h2>
          <p className="text-white text-[20px] w-full">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.c Aliquet ultrices ac, ametau.</p>
          <button className='bg-slate-300 w-[150px] p-3 mt-3 rounded-[10px]'>Get started</button>
        </div>
        <img className='w-[450px]' src={ credit_card} alt="payment-img"/>
    </section>
  )
}

export default Creditcards