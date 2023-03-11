import React from 'react'
import '../asset/css/component/footer.css'

const Footer = ({lnks}) => {
  return (
    <footer data-aos="fade-up" className='footer'>
      <div className='container d-flex justify-content-center align-items-center'>
        <div>
          <p>MR.Robot</p>
        </div>
        <div>
          <ul>
          {lnks?.map((urls)=>{
          return(
            <li key={lnks.indexOf(urls)}><a href={urls.url}>{urls.name}</a></li>
          )
        })}
          </ul>
        </div>
        <div>
          <>End</>
        </div>
      </div>
  
    </footer>
  )
}

export default Footer