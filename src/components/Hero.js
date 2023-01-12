import React from 'react'
import { SpinnerCircular, SpinnerDotted } from 'spinners-react';

function Hero({title}) {
  if(title=="loading"){
    return (

      <header className='bg-dark text-white p-5'>
          <div>
          <SpinnerDotted/>
          </div>  
      </header>
    )
  }
  return (

    <header className='bg-dark text-white p-5'>
        <h1> {title}</h1>   
    </header>
  )
}

export default Hero