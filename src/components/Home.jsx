import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';

const Home = () => {
  var[data,setdata]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        console.log(response.data);
        setdata(response.data);
    })
    },[])

  return (
    <div>
        <TableContainer>
      <Table>
        <TableHead >
          <TableRow>
            <TableCell style={{color:'red',fontWeight: 'bolder' }}>ID</TableCell>
            <TableCell style={{color:'red',fontWeight: 'bolder'}}>TITLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((val,i)=>{
                return(
                    <TableRow   >
                        <TableCell  sx={{ backgroundColor: i % 2 === 0 ? '#f0f0f0' :'inherit', fontSize: '14px' }}>{val.id}</TableCell>
                        <TableCell  sx={{ backgroundColor: i % 2 === 0 ? '#f0f0f0' :'inherit', fontSize: '14px' }}>{val.title}</TableCell>

                    </TableRow>
                )
            })}
          </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home