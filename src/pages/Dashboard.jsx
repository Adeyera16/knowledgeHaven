import React from 'react';
import dashboardData from '../utils/dashboardData';
import {AiFillCheckCircle} from 'react-icons/ai'

export const Dashboard = () => {
  return (
    <div className='flex'>
        {dashboardData.map(item => (
            <div id={item.id} className='flex justify-between w-[13rem] shadow-md shadow-gray-300 p-5 ml-5'>
                <item.icon size={40} className='text-green-700'/>
                <div>
                    <h3 className='font-bold text-lg'>{item.number}</h3>
                    <div className=' flex items-center bg-[#507DBC] text-white p-2 rounded-md text-sm'>
                        <p className='mr-2'>{item.name}</p>
                        <AiFillCheckCircle />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
