import React from 'react'
import './secondCallAction.css'
// import Img2 from '../img/img2.jpg'

const SecondCallAction = () => {
  return (
    <div className='secondCallActionContainer'>
      <img
        src='../img/img2.jpg'
        alt='bg'
      />
      <h2>REAL ESTATE DOESN'T HAVE TO BE COMPLICATED!</h2>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <button>Contact Us</button>
      </div>
    </div>
  )
}

export default SecondCallAction
