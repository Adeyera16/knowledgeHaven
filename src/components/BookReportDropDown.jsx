import React, { useState } from 'react';

export const BookReportDropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropDownOpen(false);
  };

  return (
    <div className=''>
      <div className='w-[6rem] text-center'>
        <p className='border-2 border-green-500 rounded-md p-1 bg-white' onClick={toggleDropDown}>{selectedOption || 'select'}</p>
        {dropDownOpen && (
          <div className=''>
            <p className='border-2 border-green-500 rounded-md p-1' onClick={() => handleOptionClick('Taken')}> Available            </p>
            <p className='border-2 border-green-500 rounded-md p-1' onClick={() => handleOptionClick('Taken')}>
              Taken
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
