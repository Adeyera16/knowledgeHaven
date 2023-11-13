import React from 'react'
import johnDoe from '../assets/johnDoe.jpg';
import { SideBar } from '../components/SideBar';
import {GiPlainCircle} from 'react-icons/gi'

const MyAccount = () => {
  return (
    <div className='flex'>
        <SideBar />
        < div>
            <h1 className='font-bold text-xl p-[2rem]'>My Profile</h1>
            <div className='flex items-center p-5'>
                <img src={johnDoe} alt="Profile Picture" className='w-[5rem] h-[5rem] rounded-full object-cover' />
                <div className='px-5'>
                    <p className='font-bold'>Name: <span className='font-normal text-gray-500'>Adams Ryan</span></p>
                    <p className='font-bold'>Position: <span className='font-normal text-gray-500'>Librarian</span> </p>
                    <div className='flex items-center'> <p className='pr-2 font-bold'> Status: <span className='font-normal text-gray-500'>Online</span></p> <span><GiPlainCircle size={10} className='text-green-400 mt-1'/></span></div>
                </div>
            </div>
            <div className='px-5 border-t-2 border-gray-300 ml-2'>
                <p className='font-bold pt-2'>Phone: <span className='font-normal text-gray-500'>08123456781</span></p>
                <p className='font-bold'>Address: <span className='font-normal text-gray-500'>28, xyz street, Plateau State</span></p>
                <p className='font-bold'>Gender: <span className='font-normal text-gray-500'>Male</span></p>
            </div>
        </div>
    </div>
  )
}

export default MyAccount