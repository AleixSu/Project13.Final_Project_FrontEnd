import React from 'react'
import './SearchBox.css'

const SearchBox = () => {
  return (
    <div className='searchBar'>
      <input className='searchInput' type='text' name='' placeholder='Search' />
      <button className='searchButton'>
        <img
          className='searchIcon'
          src='./images/searchIcon.png'
          alt='searchImg'
        />
      </button>{' '}
      {/* Meter onClick y hacer cositas */}
    </div>
  )
}

export default SearchBox
