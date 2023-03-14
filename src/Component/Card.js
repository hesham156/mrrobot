import React, { useState } from 'react'
import Form from './Form'

const Card = ({data}) => {
    const [form,setForm] = useState(false)
  return (
    <>
    <div className='service-card w-auto ' data-aos="fade-up">
    <div className='myCard d-flex justify-content-center align-items-center flex-column'>
        <div className='card-top'>
            <div className='img'>
            <img className='w-100' src={data.img} alt=''/>
            </div>
            <div className='des'>
                <p className='text-center'>{data.type}</p>
                <p className='text-center'>{data.price}</p>

            </div>
        </div>
        <div className='card-bottom btns'>
            <button onClick={()=>{setForm(form?false:true)}}>احصل عليها الان</button>
        </div>
    </div>
</div>
{form?<Form data={data} setForm={setForm}/>:' '}
</>
  )
}

export default Card