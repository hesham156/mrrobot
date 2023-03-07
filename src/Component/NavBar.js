import React from 'react'
import '../asset/css/component/nave.css'
const NavBar = ({logo,dir,lnks,siteName}) => {
  return (
    <nav dir={dir} className='navebar navemob'>
      <div className='container'>
      <div className='logo'><img src={logo} alt={siteName}/></div>
      <div className='mobicon'>
      <button >|||</button>
      </div>
      <div className='lnks'>
        <ul>
        {lnks?.map((urls)=>{
          return(
            <li><a href={urls.url}>{urls.name}</a></li>
          )
        })}

        </ul>
      </div>
      <div className='btns'>
        <button>Connect</button>
      </div>
      </div>

    </nav>
  )
}

export default NavBar