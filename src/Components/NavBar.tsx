import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-scroll'
import '../Styling/NavBar.css'
import {Typography,Stack} from '@mui/material'


export default function NavBar() {
    const[hamburg,setHamburger]=useState(false)

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
    <>
    
<ThemeProvider theme={theme}>
  
        <header className="header">
          <Stack direction='row' flexWrap='wrap' justifyContent='space-evenly' alignItems='center' spacing={1}>
          <Link to='home' spy={true} smooth={true} offset={-70} duration={400} style={{cursor:'pointer'}}>
          <img src='./logo.png' height='50vh' alt='icon'/></Link>
        <Typography variant='h5' id="header-title">
            <Link to='/' className='header-title-1'>VINOTH MADHAV</Link><br/>
            <h6 className='header-title-2'>Web Designer & Front End developer</h6>
        </Typography>
          </Stack>    
        <nav className="menuBar">
            <ul id="menulist" className={hamburg ? "active" : ""}>
                <li className="menu item1"><Link to='home' spy={true} smooth={true} offset={-70} duration={400} className="nav-link" onClick={() => setHamburger(!hamburg)}>Home</Link></li>  
                <li className="menu item2"><Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className="nav-link" onClick={() => setHamburger(!hamburg)}>Skills</Link></li>  
                <li className="menu item3"><Link to='work' spy={true} smooth={true} offset={-100} duration={500} className="nav-link" onClick={() => setHamburger(!hamburg)}>My Work</Link></li>  
                <li className="menu item5"><Link to='blog' spy={true} smooth={true} offset={0} duration={500} className="nav-link" onClick={() => setHamburger(!hamburg)}>Blog</Link></li>  
                <li className="menu item4"><Link to='about' spy={true} smooth={true} offset={-100} duration={500} className="nav-link" onClick={() => setHamburger(!hamburg)}>Feedback</Link></li>  
                <li className="menu item6"><Link to='contact' spy={true} smooth={true} offset={-100} duration={600} className="nav-link" onClick={() => setHamburger(!hamburg)}> Contact</Link></li>  
            </ul>
            
        </nav>
        <div id="hamburger" className={hamburg ? "active" : ""} onClick={() => setHamburger(!hamburg)}>
            <span className="bar"></span><span className="bar"></span><span className="bar"></span>
        </div>
    </header>
    </ThemeProvider>  

   
    </>
  )
}
