import React from 'react'
import Feed from '../../components/feed/Feed';
import Profile from '../../components/profile/Profile';
import Recommend from '../../components/recommendation/Recommend';
import './Homepage.css';

const Home = () => {
  return (
    <div className = "home">
        <Profile/>
        <Feed />
        <Recommend />
    </div>
  )
}

export default Home