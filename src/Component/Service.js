import React from 'react'
import seo from '../asset/img/seo.png'
import gd from '../asset/img/the-best-applications-to-learn-as-a-graphics-designer.webp'
import mb from '../asset/img/Mediabuyeractions_blog.png'
import prog from '../asset/img/ONLC-2017-4.webp'
import cuss from '../asset/img/تنزيل.png'


import '../asset/css/component/servicecard.css'
import Card from './Card'
const Service = () => {
    const myar = [{
      type:"seo",
      img:seo,
      title:"",
      des:"",
      price:30
    },
    {
      type:"programing",
      img:prog,
      title:"",
      des:"",
      price:30
    },
    {
      type:"Mediabuyer",
      img:mb,
      title:"",
      des:"",
      price:30
    },
    {
      type:"graphic desing",
      img:gd,
      title:"",
      des:"",
      price:30
    },
    {
      type:"customer success",
      img:cuss,
      title:"",
      des:"",
      price:30
    }]
  return (
    <section className='service w-100 '>
        <div className='container'>
            <div className='row'>
                <h2 className='text-center'>SERVICE</h2>
            </div>
             <div className='row justify-content-center'>
              {myar?.map((elm)=>{
                return(
                    <Card data={elm}/>
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