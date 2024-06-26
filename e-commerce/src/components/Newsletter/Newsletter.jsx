import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer on your Email</h1>
        <p>subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter your email here' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter