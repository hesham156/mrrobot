import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Ani from './Component/Ani';
import Footer from './Component/Footer';
import Header from './Component/Header';
import { Imgani } from './Component/Imgani';
import NavBar from './Component/NavBar';
import Settting from './Component/Settting';

function App() {
  const [data ,setData] =useState([])
  const [lang ,setLang] =useState("en")

  // const lang = "en"
  useEffect(()=>{

    axios.get(`http://localhost:3004/${lang}`).then((res)=>{  setData(res.data)
  })
  },[lang])

  const lnks= [{url:'/',name:data[1]?.lnks[0]},{url:'/about',name:data[1]?.lnks[1]},{url:'/Servie',name:data[1]?.lnks[2]}]

 const imgs =['https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
 'https://salla.dev/wp-content/uploads/2021/03/photo_2021-02-25-08.38.42-4.jpeg',
 'https://zid.sa/wp-content/uploads/2022/08/zid-logo-1.png','https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
 'https://salla.dev/wp-content/uploads/2021/03/photo_2021-02-25-08.38.42-4.jpeg',
 'https://zid.sa/wp-content/uploads/2022/08/zid-logo-1.png','https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
 'https://salla.dev/wp-content/uploads/2021/03/photo_2021-02-25-08.38.42-4.jpeg',
 'https://zid.sa/wp-content/uploads/2022/08/zid-logo-1.png','https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
 'https://salla.dev/wp-content/uploads/2021/03/photo_2021-02-25-08.38.42-4.jpeg',
 'https://zid.sa/wp-content/uploads/2022/08/zid-logo-1.png','https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
 'https://salla.dev/wp-content/uploads/2021/03/photo_2021-02-25-08.38.42-4.jpeg',
 'https://zid.sa/wp-content/uploads/2022/08/zid-logo-1.png','https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
 'https://salla.dev/wp-content/uploads/2021/03/photo_2021-02-25-08.38.42-4.jpeg',
 'https://zid.sa/wp-content/uploads/2022/08/zid-logo-1.png','https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
 'https://salla.dev/wp-content/uploads/2021/03/photo_2021-02-25-08.38.42-4.jpeg',
 'https://zid.sa/wp-content/uploads/2022/08/zid-logo-1.png','https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png',
 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
 'https://salla.dev/wp-content/uploads/2021/03/photo_2021-02-25-08.38.42-4.jpeg',
 'https://zid.sa/wp-content/uploads/2022/08/zid-logo-1.png'
 ]
  return (
    <>
     <NavBar setLang={setLang} dir={lang==="ar"?"rtl":"ltr"} lnks={lnks} logo={"https://scontent.faly1-2.fna.fbcdn.net/v/t39.30808-1/332315756_215651317628878_2444922090375883785_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeG5gW4BXY4ieWNWCUtaEq5rJaaaIJMp7VMlppogkyntU0jsuc4cvHjWnbvh7p29230IP-CESyVkzdZRv9fJWO2G&_nc_ohc=DxKRJJ3ILbYAX-hcYia&_nc_ht=scontent.faly1-2.fna&oh=00_AfBlEx1q0tVKV3y7YNqFK7mqr-wZ9fppsZwZIxC0un1WqA&oe=640C80F6"} siteName={"MrRobot"}/>
     <Settting/>
     <Header/>
     <section>
      <div className='container'>
      <Imgani imgs={imgs}/>

      </div>
     </section>
   {/*    <Section2/>
     <Section3/>
     <Section4/>
     <Section5/> */}
     <Footer/>
    </>
  );
}

export default App;
