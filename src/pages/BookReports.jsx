import React, { useState } from 'react';
import { DropDown } from '../components/DropDown';
import bookReportsData from '../utils/bookReportsData';
import { BookReportDropDown } from '../components/BookReportDropDown';

export const BookReports = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(bookReportsData);

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filteredResults = bookReportsData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.Author.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <h1 className='font-bold text-xl p-5 px-10'>Book Reports</h1>
      <div className='flex justify-around mt-[2rem]'>
        <div className='border-2 w-[12rem]'>
          <div className='flex justify-between items-center p-2'>
            <input
              type='text'
              placeholder='Enter title or author'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='outline-none border-none p-1'
            />
            <button
              onClick={handleSearch}
              className='w-[8rem] p-1 bg-[#507DBC] text-white rounded-md'
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <table
        style={{
          width: '90vw',
          borderSpacing: '10px',
          borderCollapse: 'collapse',
          padding: '1rem',
          border: '1px solid gray',
          margin: '2rem',
        }}
        className=' text-sm text-left mt-[2rem]'
      >
        <thead>
          <th className='p-2' style={{ width: '18rem' }}>
            Title
          </th>
          <th className='p-2'>Author</th>
          <th className='p-2'>Issued By</th>
          <th className='p-2'>Collected By</th>
          <th className='p-2'>Status</th>
        </thead>
        <tbody className='border-[1px] border-gray-400 p-2'>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className='border-b-[1px] border-gray-200 p-2'>{item.title}</td>
              <td className='border-b-[1px] border-gray-200 p-2'>{item.Author}</td>
              <td className='border-b-[1px] border-gray-200 p-2'>{item.IssuedBy}</td>
              <td className='border-b-[1px] border-gray-200 p-2'>{item.collectedBy}</td>
              <td className='border-b-[1px] border-gray-200 p-2'>
                <BookReportDropDown />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
