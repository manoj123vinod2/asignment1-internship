import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<AppBar position="static" sx={{ backgroundColor: 'red' }}>
<Toolbar>
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG
          </Typography>
          <Button style={{ color: 'white', backgroundColor: 'orange' }} href='/'>home</Button>&nbsp;&nbsp;
          <Button style={{ color: 'white', backgroundColor: 'orange' }} href='/add'>add</Button>&nbsp;&nbsp;
</Toolbar>
</AppBar>


    </div>
  )
}

export default Navbar