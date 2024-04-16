import React from 'react'

const Cta = () => {
  return (
    <section className='sm:px-16 px-6'>
        <div className='flex md:flex-row flex-col items-center justify-between px-10 py-10 bg-slate-700 rounded-[20px]'>
            <div className=''>
                <h2 className="text-white font-semibold text-[35px] w-full mb-2">Let's try our service now!</h2>
                <p className="text-white text-[15px] w-full">Everything you need to accept card payments<br></br> and grow your business anywhere on the planet.</p>
            </div>
            <button className='bg-slate-300 w-[150px] h-[45px] p-3 mt-3 leading-3 rounded-[10px]'>Get started</button>
        </div>
    </section>
  )
}

export default Cta