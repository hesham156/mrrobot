import React from 'react'
import mapi from '../asset/img/africamap.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Customer = ({comments}) => {
  return (
    <section className='customer'>
        <div className='container position-relative'>
            <div className='bgImg'>
                <img style={{filter: 'brightness(0.4)'}} src={mapi} width="100%" alt="map"/>
            </div>
            <div className='cont d-flex position-absolute w-100 top-0 align-items-center justify-content-center h-100 '>
                <div className='d-flex align-items-center justify-content-center  flex-row '>
                <Carousel autoPlay={true} autoFocus={true} centerMode={true} emulateTouch={true} infiniteLoop={true}>  

                    {comments?.map((comment)=>{
                        return (
                            <div className='comment'>
                                <div className='commTop'></div>
                                <div className='commBottom'>
                                    <p>{comment}</p>
                                </div>

                            </div>
                        )
                    })}
                    </Carousel>
                </div>
                <div className='myo'></div>
            </div>
        </div>
    </section>
  )
}

export default Customer