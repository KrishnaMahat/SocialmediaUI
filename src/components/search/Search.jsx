import React from 'react'
import logo from '../../img/logo.png'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  
} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className='search'>
        {/* <img src={logo} /> */}
        <div className='searchbox'>
            <input type= 'text' placeholder='#memefuli'/>
       
            <div className="searchicons">
              <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    </div>
  )
}

export default Search