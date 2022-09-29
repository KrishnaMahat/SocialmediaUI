import React from 'react'
import Feedsection from '../feedsection/Feedsection'
import Postsection from '../postsection/Postsection'
import Profilecard from '../profilecard/Profilecard'
import '../feed/Feed.css'


const Profile_mid = () => {
  return (
    <div className="feed">
        <Profilecard/>
        <Postsection />
        <Feedsection />
    </div>
  )
}

export default Profile_mid