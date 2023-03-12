import React from 'react'
import Ani from './Ani'

const Header = () => {
  return (
    <header className='header' style={{    height:'60'+'vh'}}>
        <div className='container position-relative overflow-hidden d-flex justify-content-center align-items-center h-100'>
        <Ani/>
        <div className='Content flex-column '>
          <h1 style={{'font-family':'myFirstFont','color': '#03a7dd'}} className='text-center'>MR. Robot</h1>
          <br/>
          <h2 className='text-center'>
12 YEARS OF INNOVATION
AND STILL COUNTING</h2>
<div className='btns h-25 '>
          <button>تواصل معنا</button>
          <button style={{background:"var(--primary-color)",color:"White"}}>ابداء الان</button>
        </div>
        </div>
      
        </div>
    </header>
  )
}

export default Header