import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Pagination from '../../components/pagination/pagination'
import SearchBar from '../../components/searchBar/SearchBar'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="div bg-gray-100">
        <SearchBar/>
       <Pagination/>
      </div>
      
    </div>
  )
}

export default HomePage