import React from 'react'

export const Imgani = ({imgs}) => {
  return (
    <div className='imgany logo-loop '>
        {imgs?.map((imgsrc)=>{
            return <img src={imgsrc} alt="service"/>
        })}
    </div>
  )
}
