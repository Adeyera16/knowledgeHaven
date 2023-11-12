import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonAdd } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavBar } from './NavBar';


export const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=''>
      <NavBar />
      {/* Hamburger icon for mobile */}
      <RxHamburgerMenu
        size={20}
        className='text-[#507DBC] cursor-pointer block md:hidden'
        onClick={toggleMenu}
      />

      {/* Menu for desktop */}
      <div className='hidden md:flex'>
        <div style={{height: '87vh'}} className='bg-[#507DBC]  py-[3rem] w-[13rem] text-white p-3'>
          <div className='flex items-center p-2 hover:bg-[#1051ac]'>
            <AiFillHome size={20} />
            <p className='ml-5'  >Dashboard</p>
          </div>
          <div className='flex p-2 hover:bg-[#1051ac] items-center my-2'>
            <BsPersonAdd size={20} />
            <p className='ml-5'>My account</p>
          </div>
          <div className='flex p-2 hover:bg-[#1051ac] items-center'>
            <FaBook size={20} />
            <p className='ml-5'>Book Reports</p>
          </div>
        </div>
      </div>

      {/* Menu for mobile */}
      {isMenuOpen && (
        <div className='md:hidden bg-[#507DBC] w-[10rem] text-white p-3 h-screen'>
          <div className='flex items-center '>
            <AiFillHome size={20} />
            <p className='ml-5'>Dashboard</p>
          </div>
          <div className='flex items-center my-2'>
            <BsPersonAdd size={20} />
            <p className='ml-5'>My account</p>
          </div>
          <div className='flex items-center'>
            <FaBook size={20} />
            <p className='ml-5'>Book Reports</p>
          </div>
        </div>
      )}
    </div>
  );
};
