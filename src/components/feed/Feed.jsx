import React from 'react'
import Feedsection from '../feedsection/Feedsection'
import Postsection from '../postsection/Postsection'
import './Feed.css'


const Feed = () => {
  return (
    <div className="feed">
        <Postsection />
        <Feedsection />
    </div>
  )
}

export default Feed