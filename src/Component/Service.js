import React from 'react'
import seo from '../asset/img/seo.png'
import '../asset/css/component/servicecard.css'
const Service = () => {
  return (
    <section className='service w-100 '>
        <div className='container'>
             <div className='row'>
                <div className='service-card w-auto '>
                    <div className='myCard d-flex justify-content-center align-items-center flex-column'>
                        <div className='card-top'>
                            <div className='img'>
                            <img src={seo} alt=''/>
                            </div>
                            <div className='des'>
                                <p>تحسين محرّكات البحث (SEO): هي العملية التي يتم من خلالها تحسين موقعك الإلكتروني ليتلاءم بشكل أفضل مع محرّكات البحث. ويُستخدَم هذا المصطلح أيضًا كمسمّى وظيفي</p>
                            </div>
                        </div>
                        <div className='card-bottom'></div>
                    </div>
                </div>
                <div className='service-card w-auto '>
                    <div className='myCard d-flex justify-content-center align-items-center flex-column'>
                        <div className='card-top'>
                            <img src={seo} alt=''/>
                        </div>
                        <div className='card-bottom'></div>
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default Service