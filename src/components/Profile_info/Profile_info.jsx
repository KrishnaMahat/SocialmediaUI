import React from 'react'
import './Profile_info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    
  faBullseye,
  faHeart,
  faPen,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons'

const Profile_info = () => {
  return (
    <div className="profileinfo">
       <div><b>Your Info</b> <FontAwesomeIcon icon={faPen} color="var(--facolor)" /></div>
       <hr/>
       <div className="onlyinfo">
            <div>
                <span><FontAwesomeIcon icon={faHeart} color="var(--facolor)" /> </span>
                <span>For me Meme is </span>
                <span>Oxygen </span>
            </div>
            <div>
                <span><FontAwesomeIcon icon={faPuzzlePiece} color="var(--facolor)" /> </span>
                <span>Hobby is </span>
                <span>Laughing </span>
            </div>
            <div>
                <span><FontAwesomeIcon icon={faBullseye} color="var(--facolor)" /> </span>
                <span>Goal is </span>
                <span>Billionaire </span>
            </div>
       </div>
       <hr/>
    </div>

  )
}

export default Profile_info