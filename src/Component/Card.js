import React, { useState } from 'react'
import Form from './Form'

const Card = ({seo}) => {
    const [form,setForm] = useState(false)
  return (
    <>
    <div className='service-card w-auto ' data-aos="fade-up">
    <div className='myCard d-flex justify-content-center align-items-center flex-column'>
        <div className='card-top'>
            <div className='img'>
            <img className='w-100' src={seo} alt=''/>
            </div>
            <div className='des'>
                <p className='text-center'>تحسين محرّكات البحث (SEO): هي العملية التي يتم من خلالها تحسين موقعك الإلكتروني ليتلاءم بشكل أفضل مع محرّكات البحث. ويُستخدَم هذا المصطلح أيضًا كمسمّى وظيفي</p>
            </div>
        </div>
        <div className='card-bottom btns'>
            <button onClick={()=>{setForm(form?false:true)}}>احصل عليها الان</button>
        </div>
    </div>
</div>
{form?<Form/>:' '}
</>
  )
}

export default Card