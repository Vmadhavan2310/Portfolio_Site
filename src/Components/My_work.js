import '../Styling/My_work.css'
import { Typography, Stack, Container, Grid,Box} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'; 
import { useState } from 'react';


export default function My_work() {
  const[counter,setCounter]=useState(false)

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


  return (
    <ThemeProvider theme={theme}>
      <div id='work_container'>
    <Container sx={{ minHeight: '800px', marginTop: '65px', color: 'white'}}id='work' maxWidth='xl'>
      <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
      <Grid container spacing={5}  sx={{paddingTop:'100px'}}>
        <Grid item xs={12} sm={3}>
          <h3 className='work_heading'>Techonology Platforms</h3>
          <h5 className='work_heading2'>Securly with <span style={{color:'#ffee58'}}>passion</span> and clean</h5>
          <h1 className='work_values'>{counter&&<CountUp start={100} end={11} duration={2} delay={0}/>}+</h1>
        </Grid>

        <Grid item xs={12} sm={3}>
          <h3 className='work_heading'>Finished Projects</h3>
          <h5 className='work_heading2'>Crated perfectly <span style={{color:'#ffee58'}}>up to date</span></h5>
          <h1 className='work_values'>{counter&&<CountUp start={100} end={6} duration={2} delay={0}/>}</h1>
        </Grid>

        <Grid item xs={12} sm={3}>
          <h3 className='work_heading'>Maintaning Projects</h3>
          <h5 className='work_heading2'>Always <span style={{color:'#ffee58'}}>24/7</span> live</h5>
          <h1 className='work_values'>{counter&&<CountUp start={100} end={2} duration={2} delay={0}/>}</h1>
        </Grid>

        <Grid item xs={12} sm={3}>
          <h3 className='work_heading'>Happy Customers</h3>
          <h5 className='work_heading2'>With <span style={{color:'#ffee58'}}>good</span> reviews</h5>
          <h1 className='work_values'>{counter&&<CountUp start={100} end={3} duration={2} delay={0}/>}</h1>
        </Grid>
      </Grid>
      </ScrollTrigger>
    </Container>
    </div>
    </ThemeProvider>
  )
}
