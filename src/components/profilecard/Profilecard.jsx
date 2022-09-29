import React from 'react'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
import './Profilecard.css'


const Profilecard = () => {
    const profilepage = true;
  return (
        <div className="profilecard">
            <div className="profileimage">
                <img src ={cover} />
                <img src ={profile} />
            </div>

            <div className="profilename">
                <span>Krishna Mahat</span>
                <span>meme-king</span>
            </div>

            <div className="followinfo">
            <hr/>
                <div>
                <div className="follow">
                    <span>4,500</span>
                    <span>Follower</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>12</span>
                    <span>Following</span>
                </div>
                {profilepage && (
                <>
                <div className="vl"></div>
                <div className="follow">
                    <span>3</span>
                    <span>Post</span>
                </div>
                </>
                )}
                </div>
            <hr/>
            </div>
            {profilepage? '' : <span>My Profile</span>}
        </div>
    )
}

export default Profilecard
