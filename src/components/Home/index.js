import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-ss.png'

import Signup from '../Signup/'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', ' ','M', 'e', 'm', 'e', 's']
  const jobArray = [
    'H',
    'e',
    'h',
    'e',
    'H',
    'a',
    'h',
    'a',
   
  
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _12`}>I,</span>&nbsp;
            <span className={`${letterClass} _13`}>L</span>
            <span className={`${letterClass} _14`}>o</span>
            <span className={`${letterClass} _15`}>v</span>
            <span className={`${letterClass} _16`}>e</span>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          <br/>
         
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Memefuli for ultimate laughter</h2>
          <Link to="/contact" className="homebutton">
            Explore Meme
          </Link>
        </div>

        <div className = "text-zone">
        <Signup />
        </div>

      </div>
      
    </>
  )
}

export default Home
