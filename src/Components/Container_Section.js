import { useState } from 'react'
import { Typography, Stack, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Styling/Container_sec.css'

import { motion } from "framer-motion";
import {Link} from 'react-scroll'




export default function Container_Section() {
  const [animate, setAnimate] = useState(false)
  const theme = createTheme();
  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  }

  const downloadCV=()=>{
    fetch('Resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Resume.pdf';
          alink.click();
      })
  })
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='Container_head' id='home' onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimate(false)}>
          <Container maxWidth='xl' sx={{ minHeight: '800px', marginTop: '65px', color: 'white' }}>

            <Grid container>
              <Grid item xs={12} md={6} sx={{ height: '50vh', width: '400px' }} className='banner-title'>
                <Stack direction='column' flexWrap='wrap' spacing={8}>
                  <Typography variant='h2' className='imp-text'>Web Developer</Typography>
                  <Typography variant='h3' sx={{ marginTop: '50px' }} >Turning <span id='ideas'>Ideas</span> into real life Products is my Calling. Oppurtunities don't happen until we create them!!</Typography>
                  <Stack direction='row' flexWrap='wrap' gap={3} alignItems='center'>
                  {/* CV Button */}
                  
                      <button className="btn" onClick={downloadCV}>
                        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                        </svg>
                        <span>Fetch/Import CV</span>
                      </button>

                  {/* Contact US */}
                  <div className="Contact"><Link to='contact' spy={true} smooth={true} duration={500} id='contact-link'>Contact</Link></div>
                </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6} className='animation-title' >
                <Stack direction='column' flexWrap='wrap' sx={{ display: { xs: 'none', lg: 'block' } }}>
                  <motion.div
                    className="box"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
            
          </Container>
        </div>
      </ThemeProvider>

    </>
  )
}
