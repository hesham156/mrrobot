import './App.css';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';

function App() {
  const dir ="ltr"
  const lnks=[{url:'/',name:"Home"},{url:'/about',name:"About"},{url:'/Servie',name:"Servise"}]
  return (
    <>
     <NavBar dir={dir} lnks={lnks} logo={"https://scontent.faly1-2.fna.fbcdn.net/v/t39.30808-1/332315756_215651317628878_2444922090375883785_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeG5gW4BXY4ieWNWCUtaEq5rJaaaIJMp7VMlppogkyntU0jsuc4cvHjWnbvh7p29230IP-CESyVkzdZRv9fJWO2G&_nc_ohc=DxKRJJ3ILbYAX-hcYia&_nc_ht=scontent.faly1-2.fna&oh=00_AfBlEx1q0tVKV3y7YNqFK7mqr-wZ9fppsZwZIxC0un1WqA&oe=640C80F6"} siteName={"MrRobot"}/>
     {/* <Header/> */}
   {/*    <Section2/>
     <Section3/>
     <Section4/>
     <Section5/> */}
     <Footer/>
    </>
  );
}

export default App;
