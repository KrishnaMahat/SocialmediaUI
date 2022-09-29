import React from 'react'
import Navbar from '../navbar/Navbar'
import Trend from '../trendcard/Trend'
import '../recommendation/Recommend.css'

const Profile_right = () => {
  return (
        <div className="recommend">
            {/* <Navbar /> */}
            <Trend />
        </div>
  )
}

export default Profile_right