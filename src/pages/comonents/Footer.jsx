import React from 'react'
import {Grid} from "@mui/material"
const Footer = () => {
  return (
   <>
<Grid className='bg-gray-900 text-white p-10' container spacing={2}>
<Grid item xs={12} md={4}>
<h1 className='text-2xl font-bold'>About Us</h1>
<p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>

</Grid>
<Grid item xs={12} md={4}>
<h1 className='text-2xl font-bold'>Contact Us</h1>
<p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
</Grid>
<Grid item xs={12} md={4}>
<h1 className='text-2xl font-bold'>Social Media</h1>
<p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
</Grid>

</Grid>
   </>
  )
}

export default Footer