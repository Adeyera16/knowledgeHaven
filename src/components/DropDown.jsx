import { useState,React} from 'react';
import {BiChevronDown} from 'react-icons/bi'

export const DropDown = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
      };
  return (
    <div className='flex justify-around mt-[2rem]'>
        <div className='border-2 w-[12rem]'>
            <div className='flex justify-between items-center p-2'>
                <p> Select a book</p>
                <BiChevronDown onClick={toggleDropDown}/>
            </div>
            {dropDownOpen && (
                <div className=''>
                    <p className='hover:bg-black hover:text-white'>Author</p>
                    <p className='hover:bg-black hover:text-white'>Title </p>
                </div>
            )}
        </div>
        <button className='w-[10rem] p-2 bg-[#507DBC] text-white rounded-md'>Search</button>
    </div>
  )
}
