import React from 'react'
import logo from '../assets/images/site-logo.svg'
import mobilemenu from '../assets/images/menu.png'
import { navlinks } from '../constants/contents'
const navigationbar = () => {
  return (
    <nav className='w-full flex items-center justify-between py-6 px-6 sm:px-16'>
      <img src={ logo } alt='site-logo' className='w-[124px] h-[32px]'/>
      <ul className='hidden sm:flex mr-10'>
        {navlinks.map((nav,index) => (
        <li key={nav.id} className={`text-white justify-end items-center sm:flex ${index === navlinks.length -1 ? 'mr-0' : 'mr-10' }`}>
          <a className='hover:no-underline hover:text-slate-300' href={`#${nav.id}`}>{nav.title}</a>
        </li>
        ))}
      </ul>
      <div className="sm:hidden flex">
        <img src={mobilemenu} alt='hamburger-menu' className='w-[28px] h-[28px]'/>
      </div>
    </nav>
  )
}

export default navigationbar