import {Container,Stack, Typography,Grid,LinearProgress} from '@mui/material'
import '../Styling/Skills.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CountUp from 'react-countup'
import { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import {HideOn} from 'react-hide-on-scroll'

export default function Skills() {
  const[test,setTest]=useState({
    js:70,
    react:50,
    ts:80,
    bs:90,
    saas:65,
  })

  const theme = createTheme({
    status: {
      danger: "#e53e3e"
    },
    palette: {
      js: {
        main: "#ffeb3b",
        darker: "#053e85"
      },
      ts: {
        main: "#64ffda",
        contrastText: "#fff"
      },
      bs: {
        main: "#5e35b1",
        contrastText: "#fff"
      }
    }
  });



  /* Enable Skills set */

  const skillSetEnable=()=>{
    const newObj={
      js:80,
    react:90,
    ts:70,
    bs:85,
    saas:95,
    }
    setTest(newObj)
  }
  /* Disable Skillset */

  const disableSkills=()=>{
    const newObj={
      js:0,
    react:0,
    ts:0,
    bs:0,
    saas:0,
    }
    setTest(newObj)
  }


  return (
   
    <Container id="skills" style={{minHeight:'500px',backgroundColor:'white',color:'black',width:'100vw',zIndex:'500',marginBottom:'50px'}} maxWidth='xl'>
      <Stack direction='row' justifycontent='space-evenly' sx={{display:{xs:'column'}}}>
      <Grid container>   
      <Grid item xs={12} sm={6} >
      <Stack direction='column' flexWrap='wrap' justifyContent='center' id='skillSet-Story' spacing={3}>
        <Typography variant='h4' mt={5} mb={3}>Experience</Typography>
        <Typography variant='body1' className='skillSet-phrase'>I'm Vinoth-- A freelance frontend developer from Bangalore,India. My expertise is in the area of responsive web-design. With Every line of code, I strive to make the web a beatuiful place for clients. I have a diverse set of skills ranging from design to HTML+CSS+JavaScript and all the way to React and redux for developing efficient single page applications. </Typography>
        <Typography variant='body1' className='skillSet-phrase'>Since beginning of my journey as a freelance developer nearly 2 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use. 
        </Typography>
        </Stack>
        </Grid>   
       
        {/* SkillSet */}
        <Grid item xs={12} sm={6}>
        <Stack direction='column' flexWrap='wrap' justifyContent='center' id='skillSet-progressBar' spacing={1}>
        <ThemeProvider theme={theme}>
        <Typography variant='h4' my={5}>SkillSet</Typography>
        <Typography variant='h6'>Java Script</Typography>
        <ScrollTrigger onEnter={skillSetEnable} onExit={disableSkills}>
      
        <LinearProgress sx={{
                height: "8px",
                borderRadius: "5px",
              }}
              value={test.js}
              variant="determinate" 
              color="js"/>

<Typography variant='h6' my={1}>React</Typography>
        <LinearProgress sx={{
                height: "8px",
                borderRadius: "5px"
              }}  
              value={test.react}
              variant="determinate"
              color="primary"/>

<Typography variant='h6' my={1}>TypeScript</Typography>

        <LinearProgress sx={{
                height: "8px",
                borderRadius: "5px"
              }}
              value={test.ts}
              variant="determinate"
              color="ts"/>

<Typography variant='h6' my={1}>Bootstrap</Typography>

        <LinearProgress sx={{
                height: "8px",
                borderRadius: "5px"
              }}
              value={test.bs}
              variant="determinate"
              color="bs"/>

<Typography variant='h6' my={1}>SASS</Typography>

        <LinearProgress sx={{
                height: "8px",
                borderRadius: "5px"
              }}
              value={test.saas}
              variant="determinate"
              color="secondary"/>
           
               </ScrollTrigger>
               </ThemeProvider>
        </Stack>

        </Grid>
       
        </Grid>

        </Stack>
    </Container>
   
  )
}
