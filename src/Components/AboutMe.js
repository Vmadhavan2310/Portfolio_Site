import '../Styling/AboutMe.css'
import {Container} from '@mui/material'
import HeroSlider, {Slide,Nav,Overlay} from 'hero-slider'


export default function AboutMe() {
  return (
    <div id='about'>
      <Container maxWidth='xl' id='aboutMe_container'>
      <h2 >WHAT CLIENT SAYS</h2>
        <h4>Hear what over satisfied Customers says about my work</h4> 

        <HeroSlider
        height={'40vh'}
        autoplay
        
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          autoplay: 200,
          slidingAnimation: "fade",
          autoplayDuration:100,
        }}

        >


      <Slide shouldRenderMask label="Giau Pass - Italy">
      <p className='phrase phrase1'>This guy is Quite good!! So quick to respond and let me tell you... they are all knowing!</p>
        </Slide> 

        <Slide shouldRenderMask label="Giau Pass - Italy">
      <p className='phrase phrase1'>I highly recommend this developer for developing minimal application! He was all about making their clients happy!</p>
        </Slide> 

        <Slide shouldRenderMask label="Giau Pass - Italy">
      <p className='phrase phrase1'>Highly skillable with web development and web designs. Easily grasping the things and understand the logic</p>
        </Slide> 
        <Nav/>
        </HeroSlider>


       
        </Container>
    </div>
  )
}
