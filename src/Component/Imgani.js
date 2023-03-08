import React from 'react'

export const Imgani = ({imgs}) => {
  return (
    <div className='imgany logo-loop '>
        {imgs?.map((imgsrc)=>{
            return <img src={imgsrc} key={imgs.indexOf(imgsrc)} alt="service"/>
        })}
    </div>
  )
}
