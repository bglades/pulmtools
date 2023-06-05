import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';
import { CardActionArea } from '@mui/material';
import MyDay from '../../pages/myDay/MyDay';
import { Link } from "react-router-dom";



export default function BasicCard() {

const volumeCalc = (num) => {
  
}

  return (
    <>
    <Box sx={{
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontFamily: 'Lora',
    color: "#444"
      }}
    >
    <div className='card-one'>
    <Card sx={{ minWidth: 275 }}>
     <CardActionArea href='./TodoList'>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Todo List
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Figure out what you need to do.
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='card-two'>
    <Card sx={{ minWidth: 275 }}>
    <CardActionArea href='./calculator'>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Calculators and Charts
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Calculate tidal volumes and more
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='card-three'>
    <Card sx={{ minWidth: 275 }}>
   
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Round Keeper
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
      </CardContent>

     
    </Card>
    </div>
    <div className='card-four'>
    <Card sx={{ minWidth: 275 }}>
    <CardActionArea href='./resources'>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Resources
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Where we source our information
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    
    </div>
  </Box>
 </>
  );
}