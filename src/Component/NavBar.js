import React from 'react'
import '../asset/css/component/nave.css'
const NavBar = ({logo,lnks,siteName}) => {
  return (
    <nav dir='RTL' className='navebar navemob'>
      <div className='container'>
      <div className='logo'><img src={logo} alt={siteName}/></div>
      <div className='mobicon'>
      <button >|||</button>
      </div>
      <div className='lnks'>
        <ul>
        {lnks?.map((urls)=>{
          return(
            <li key={lnks.indexOf(urls)}><a href={urls.url}>{urls.name}</a></li>
          )
        })}

        </ul>
      </div>
      <div className='btns'>
        <button>Connect</button>
        {/* <a onClick={()=>{setLang(dir==="rtl"?"en":"ar")}}>{dir==="rtl"?"en":"ar"}</a> */}
      </div>
      </div>

    </nav>
  )
}

export default NavBar