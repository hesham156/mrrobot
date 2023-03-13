import React from 'react'

const Parteners = ({imgs}) => {
  return (
    <section className='parteners'>
        <div className='container'>
            <div className='part d-flex justify-content-center align-items-center w-100'>
                {imgs?.map((url)=>{
                    return (
                        <div className='elm w-100'>
                            <img src={url} width="100%" alt='parteners'/>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Parteners