import React from 'react'
import footerlogo from '../assets/images/site-logo.svg'
import { footerlinks } from '../constants/contents'
const Footer = () => {
  return (
    <section className='flex md:flex-row flex-col sm:px-16 px-6 mt-5 pb-5'>
      <div className='flex flex-col w-[320px]'>
        <img className='w-[180px]' src={ footerlogo } alt='footer-logo'/>
        <p className='text-white text-[20px] w-full'>A new way to make the payments easy. reliable and secure.
        </p>
      </div>
      <div className="flex flex-row items-start justify-between">
        {footerlinks.map((footlink) => (
          <div className='w-[280px]'>
          <h4 className='text-white text-[25px] mb-2'>{footlink.title}</h4>
          <ul>
            {footlink.links.map((footmenu) =>(
              <li className='text-white text-[15px]'>{footmenu.name}</li>
            ))}
          </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Footer