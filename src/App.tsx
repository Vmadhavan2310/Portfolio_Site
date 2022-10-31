
import { useEffect, useState } from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import Blog from './Components/Blog';
import ContactMe from './Components/ContactMe';
import Container_Section from './Components/Container_Section';
import Icons_check from './Components/Footer';
import Logo from './Components/Logo';
import My_work from './Components/My_work';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';

function App() {
  const[logo,setLogo]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLogo(false)
    },2000)
  },[])
  
  return (
    <div className="App">
      {
        logo?<Logo/>:
      <>
      <NavBar/>
      <Container_Section/>
      <Skills/>
      <My_work/>
      <Blog/>
      <AboutMe/>
      <ContactMe/>
      </>
    }
    </div>
  );
}

export default App;
