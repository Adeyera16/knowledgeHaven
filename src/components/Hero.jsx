import React from 'react'
import libraryPicture from '../assets/libraryPics.jpg'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='max-w-[1640px] '>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-white text-center max-h-[500px] bg-black/70 flex flex-col justify-center items-center'>
                <h1 className=' text-3xl '>KnowledgeHaven</h1>
                <p className='py-[1rem]'>Nurturing the love for books, one click at a time.</p>
                <Link to="/dashboard" className='text-white p-2 rounded-md outline-none w-[8rem] bg-[#507DBC]'>Proceed</Link>
            </div>
            <img src={libraryPicture} alt="" className='w-full max-h-[500px] object-cover'/>
        </div>
    </div>
  )
}

