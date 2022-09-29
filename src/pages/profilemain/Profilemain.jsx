import React from 'react'
import Profile_left from '../../components/Profile_left/Profile_left'
import Profile_right from '../../components/Profile_right/Profile_right'

import './Profilemain.css'
import Profile_mid from '../../components/Profile_mid/Profile_mid'




const Profilemain = () => {
  return (
    <div className="profilemain">
      <Profile_left />
      <Profile_mid />
      <Profile_right />
    </div>
  )
}

export default Profilemain