import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br /><br />
<TextField id="outlined-basic" label="Blog Name" variant="outlined" 
/>&nbsp;&nbsp;<br /><br />
<TextField id="outlined-basic" label="Description" variant="outlined" />&nbsp;&nbsp;<br /><br />
<TextField id="outlined-basic" label="Author Name" variant="outlined" />&nbsp;&nbsp;<br /><br />
<Button variant="contained"style={{backgroundColor:"red"}}>save</Button>




    </div>
  )
}

export default Add