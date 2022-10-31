import { Grid, IconButton } from '@mui/material'
import '../Styling/Contact.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React,{useState} from 'react';
import Terms_Conditions from './Terms_Conditions';
import Footer from './Footer';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height:'50%',
  overflow:'scroll'
};


export default function ContactMe() {
  const [open, setOpen] = React.useState(false);
  const[err,setErr]=useState(null)
  const[mail,setEmail]=useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formValidate=()=>{
    if(mail){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        setErr(null)
        
      }else{
        setErr('Please enter valid Email ID')
      }
    }
   
  }

  return (
    <div style={{ minHeight: '400px'}}>
      <Grid container id='contact_container' spacing={2}>

        <Grid item xs={12} sm={6} id='contact'>

          <h2 id='contact_heading'>Have a question? Please enquire below<i className="fa-solid fa-location-dot"></i></h2>

          <div className="container">
            <form action="https://formsubmit.co/d0855d297f1bae46692fd34cb692a404" method="POST" onClick={formValidate}>
              <label htmlFor='fname'>Full Name<span style={{ color: 'red' }}>*</span></label>
              <input type="text" id="fname" name="fullname" placeholder="Your name.." required /><br />

              <label htmlFor='email'>Email ID<span style={{ color: 'red' }}>*</span></label>
              <input type="text" id="lname" name="email" placeholder="Enter your Email address" value={mail} onChange={(e)=>setEmail(e.target.value)}/><br />
                <span style={{color:'red'}}>{err}</span><br/>
              <label htmlFor='source'>Where did you hear?(Optional)</label>
              <select id="source" name="sources">
                <option value="none"></option>
                <option value="google">Google</option>
                <option value="throughFriends">Through friends</option>
                <option value="existing_client">Existing client</option>
              </select>

              <label htmlFor='comments'>Message<span style={{ color: 'red' }}>*</span></label>
              <textarea type="text" id="comments" name="comments" placeholder="Your Comments.." required style={{ height: '200px', textAlign: 'top' }} />

              <label>Privacy<span style={{ color: 'red' }}>*</span></label>
              <p><input type='checkbox' id='terms' value='terms' name='terms' required/>&nbsp;By using this form you agree with the storage and handling of your data by this website. Please read our <a onClick={handleOpen} style={{display:'inline',cursor:'pointer',color:'blue'}}>Privacy policy</a> for more information on how we handle your data</p>
              <button type='submit' id='contact_btn'>Submit</button>
            </form>
          </div>
        </Grid>

        {/* Map */}
        <Grid item xs={12} sm={6} id='contact2'>

          <hr/>

          <h2>Lets Connect Quickly</h2>
            <br/>
          <h4><img src='https://cdn-icons-png.flaticon.com/512/3179/3179068.png' className='img' alt='icon' height='20'/>&nbsp;
            Bangalore,India</h4>
            <h4><img src='https://cdn-icons-png.flaticon.com/512/732/732200.png' className='img' alt='icon' height='20'/>&nbsp;
            vinodmad34@gmail.com</h4>
            <h4><img src='https://cdn-icons-png.flaticon.com/512/552/552489.png' className='img' alt='icon' height='20'/>&nbsp;
            +91 8904755075</h4>
              <br/>
              <hr/>


          <iframe width="700" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className='map1'></iframe>

          <iframe width="370" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className='map2'></iframe>
          
        

        </Grid>

      </Grid>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        
      >
        <Fade in={open}>
          <Box sx={style} >
            <Typography id="transition-modal-title" variant="h6" component="h2" >
              Privacy policies
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Terms_Conditions/>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <Footer/>
    </div>
  )
}
