import React from 'react'
import {Trends} from '../../data/Trenddata'
import './Trend.css'


const Trend = () => {
  return (
    <div className="trendcard">
    <h3>Whats Trending !</h3>
    {Trends.map((trends,id)=>{
        return(
            <div className="trend">
                    <span>#{trends.trendname}</span>
                    <span>{trends.share} Shares</span>
            </div>
        )

    })}
    </div>
  )
}

export default Trend