import React from 'react'
import seo from '../asset/img/seo.png'
import '../asset/css/component/servicecard.css'
import Card from './Card'
const Service = () => {
    const myar = [1,2,3,1,2,3,2,1,23]
  return (
    <section className='service w-100 '>
        <div className='container'>
            <div className='row'>
                <h2 className='text-center'>SERVICE</h2>
            </div>
             <div className='row justify-content-center'>
              {myar.map((elm)=>{
                return(
                    <Card seo={seo}/>
                )
              })} 
              
                
             </div>
        </div>
        <div className="stars">
 
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
</div>
    </section>
  )
}

export default Service