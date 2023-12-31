import React from 'react'
import ContactUs from "./ContactUs"
import {Button, Grid, Typography} from "@mui/material"
const Footer = () => {
  const backendBtn=(e)=>{
    e.preventDefault();
    try{
      localStorage.setItem('url',input)
    }
    catch(err){
      console.log(err)
    }
  }
  const [input, setInput] = React.useState('');
  return (
   <>
    <ContactUs/>
    <div className='bg-black text-white text-center mt-10'>
    <form className='flex flex-col items-center justify-center' onSubmit={backendBtn}>
    <Typography className='pb-5' variant='h6'>Subscribe to our newsletter</Typography>
    <div className='flex flex-row items-center justify-center'>
    <input className='w-96 h-10 rounded-l-lg text-black' type="text" placeholder='Enter your email' value={input} onChange={(e)=>setInput(e.target.value)} required/>
    <Button className='rounded-r-lg' variant='contained' type="submit">Subscribe</Button>
    </div>
    </form>
    </div>
<Grid className='bg-black text-white text-center mt-10'
  container
  sx={{bgcolor:"black",color:"white",py:3}}>
    <Grid item xs={12} sm={6} md={3}>
    <Typography className='pb-5' variant='h6'>Company</Typography>
    <div>
    <Button className='pb-5' variant='h6' gutterBottom>About</Button>
    </div>
   <div><Button className='pb-5' variant='h6' gutterBottom>Blog</Button></div> 
    <div><Button className='pb-5' variant='h6' gutterBottom>Press</Button></div>
   <div><Button className='pb-5' variant='h6' gutterBottom>Jobs</Button></div> 
    <div><Button className='pb-5' variant='h6' gutterBottom>Partners</Button></div>
    
</Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Typography className='pb-5' variant='h6'>Solutions</Typography>
    <div>
    <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
    </div>
   <div><Button className='pb-5' variant='h6' gutterBottom>Analytics</Button></div> 
    <div><Button className='pb-5' variant='h6' gutterBottom>Commerce</Button></div>
   <div><Button className='pb-5' variant='h6' gutterBottom>Support</Button></div> 
    <div><Button className='pb-5' variant='h6' gutterBottom>Insight</Button></div>
   
</Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Typography className='pb-5' variant='h6'>Documentation</Typography>
    <div>
    <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
    </div>
   <div><Button className='pb-5' variant='h6' gutterBottom>Api Status</Button></div> 
    {/* <div><Button className='pb-5' variant='h6' gutterBottom>Press</Button></div>
   <div><Button className='pb-5' variant='h6' gutterBottom>Jobs</Button></div> 
    <div><Button className='pb-5' variant='h6' gutterBottom>Partners</Button></div> */}
   
</Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Typography className='pb-5' variant='h6'>Legal</Typography>
    <div>
    <Button className='pb-5' variant='h6' href='/Terms' gutterBottom>T & C</Button>
    </div>
   <div><Button className='pb-5' variant='h6' gutterBottom href='/PrivacyPolicy'>Privacy</Button></div> 
    {/* <div><Button className='pb-5' variant='h6' gutterBottom>Terms</Button></div> */}
   {/* <div><Button className='pb-5' variant='h6' gutterBottom>Jobs</Button></div> 
    <div><Button className='pb-5' variant='h6' gutterBottom>Partners</Button></div> */}
   
</Grid>
<Grid className='pt-20' item xs={12} sm={12} md={12}>
  <Typography variant='h6'>© 2023, All Rights Reserved</Typography>
  <Typography variant='h6'>Made with ❤️ by <span className='text-blue-500'>ShubhamIITBHU</span></Typography>
  </Grid>
</Grid>

   </>
  )
}

export default Footer