import React from 'react'
import './Feedsection.css'
import {Posty} from '../../data/Postdata'
import haha from '../../img/like.png'
import nothaha from '../../img/notlike.png'
import comment from '../../img/comment.png'
import share from '../../img/share.png'

const Feedsection = () => {
  return (
    <div className="feedcard">
    {Posty.map((Posty,id)=>{
        return(
            <div className="posted">
                <div className="postytext">
                    <span>@{Posty.feedname}</span>
                    <span>{Posty.desc}</span>
                </div>
                <img src = {Posty.feedimg}/>
                <div className="feedreact">
                  <div><img src = {Posty.Hahaed?haha:nothaha}/>{Posty.Haha}</div>
                  <img src = {comment}/>
                  <img src = {share}/>
                </div>
                
            </div>   
        )

    })}
    </div>
  )
}

export default Feedsection