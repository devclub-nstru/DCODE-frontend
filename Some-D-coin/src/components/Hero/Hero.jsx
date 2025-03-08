import React from 'react'
import './Hero.css'
import coinImg from '../../assets/hero-imgs/bit-coin-sample.jpg'

function Hero() {
  return (
    <>
        <div id="main-hero">
            <div className="hero-img">
                <img src={coinImg} alt="" />
            </div>
            <div className="hero-txts">
                <h1 className='main-txt'>Welcome To The Era</h1>
                <h3 className='sec-txt'>Officially preparing things</h3>
            </div>
        </div>
    </>
  )
}

export default Hero