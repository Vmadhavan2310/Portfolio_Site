import '../Styling/blog.css'
import {Container,Grid} from '@mui/material'

export default function Blog() {
  return (
    <div style={{minHeight:'700px'}}id='blog'>
      <Container maxWidth='xl'  id='blog_container'>
        <Grid container spacing={5}>
          <Grid  item xs={12} sm={4} className="blog content1">
        <img src='https://rakibdewan.com/wp-content/uploads/2021/09/What-Is-Freelancing-The-Way-to-Become-A-Freelancer.png' alt='freelancing' height={450} width={400} id='image'/>
        </Grid>

        <Grid  item xs={12} sm={1}></Grid>


        <Grid  item xs={12} sm={6} className="blog content2">
        <h2 >Freelancing</h2>
        <p>If you are wondering what roles freelancers play, the answer is almost everything.Often freelancers are experts in their respective domains and work independently. However, they can also work in person.Companies of all types and sizes can hire freelancers to complete a project or a task, but freelancers are responsible for paying their own taxes, health insurance, pension and other personal contributions.</p><br/>

        <p>Usually freelancers earn money on a per-job basis, charging hourly or daily rates for their work. We are Providing exception quality of work or service.</p>
        </Grid>

        </Grid>
    </Container>
    </div>
  )
}
