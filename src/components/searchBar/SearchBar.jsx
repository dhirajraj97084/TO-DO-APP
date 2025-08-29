import React from 'react'

function SearchBar() {
  return (
    <div>
        <div className="box px-5 pt-5 flex justify-center">
            <div className="main_box border-2 border-gray-200 shadow-md rounded-xl">
                <input className='bg-white md:w-96  py-2 px-2 outline-none ' type="text" placeholder=' Search here' />
                <button className='px-5 bg-blue-600 text-white py-2'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default SearchBar