import React from 'react'
import '../asset/css/component/form.css'
const Form = ({setForm,data}) => {
  return (
    <section className='myform'>
      <div className='container'>
        <button onClick={()=>{setForm(false)}} className='btn close'>X</button>
        <div>
          <p>{data.type}</p>
        </div>
      </div>
    </section>
  )
}

export default Form