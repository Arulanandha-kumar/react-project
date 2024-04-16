import React from 'react'
import airbnb from '../assets/images/airbnb.png'
import binance from '../assets/images/binance.png'
import coinbase from '../assets/images/coinbase.png'
import dropbox from '../assets/images/dropbox.png'
const Clients = () => {
  return (
    <section className='sm:px-16 px-6 mt-3 mb-3' id='clients'>
        <div className='flex flex-row items-center justify-between'>
            <img className='sm:w-[192px] w-[100px] object-contain' src={ airbnb } alt="airbnb"/>
            <img className='sm:w-[192px] w-[100px] object-contain' src={ binance } alt="binance"/>
            <img className='sm:w-[192px] w-[100px] object-contain' src={ coinbase } alt="coinbase"/>
            <img className='sm:w-[192px] w-[100px] object-contain' src={ dropbox } alt="dropbox"/>
        </div>
    </section>
  )
}

export default Clients