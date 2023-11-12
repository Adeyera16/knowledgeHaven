import React from 'react'

export const NavBar = () => {
  return (
    <nav className='flex justify-between p-[1rem] px-[2rem] h-[5rem] shadow-md shadow-gray-300'>
        <h1 className='text-[#507DBC] text-xl italic font-bold'>KnowledgeHaven</h1>
        <ul className='flex'>
            <li className='pl-5'>About</li>
            <li className='pl-5'>Services</li>
            <li className='pl-5'>Contact</li>
        </ul>
    </nav>
  )
}
