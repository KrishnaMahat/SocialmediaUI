import React from 'react'
import {Followers} from '../../data/Followersdata'
import './Followercard.css'


const Followercard = () => {
  return (
    <div className="followercard">
    <h3>Who is following you</h3>
    {Followers.map((followers,id)=>{
        return(
            <div className="follower">
                <div>
                <img src = {followers.img}/>
                <div className="followerstext">
                    <span>{followers.name}</span>
                    <span>@{followers.username}</span>
                </div>
                </div>
                <button className='fabutton'> Follow</button>
            </div>
        )

    })}
    </div>
  )
}

export default Followercard