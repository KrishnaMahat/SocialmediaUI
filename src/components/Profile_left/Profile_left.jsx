import React from 'react'
import Followercard from '../followercard/Followercard'
import Profilecard from '../profilecard/Profilecard'
import Search from '../search/Search'

import '../profile/Profile.css'
import Profile_info from '../Profile_info/Profile_info'


const Profile = () => {
  return (
    <div className='profile'>
        <Search/>
        <Profile_info />
        <Followercard/>
    </div>
  )
}

export default Profile