import React from 'react'
import Followercard from '../followercard/Followercard'
import Profilecard from '../profilecard/Profilecard'
import Search from '../search/Search'

import './Profile.css'


const Profile = () => {
  return (
    <div className='profile'>
        <Search/>
        <Profilecard/>
        <Followercard/>
    </div>
  )
}

export default Profile