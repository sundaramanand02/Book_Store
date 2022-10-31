import React from 'react'
import { Typography, Box } from '@mui/material';

const styles = {
  paperContainer: {
    height:148,
    backgroundImage: `url(${"https://images.unsplash.com/photo-1623771702313-39dc4f71d275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPostition:'center',
    opacity:'0.5'
  }
};


const Home = () => {
  return (
    <>
    <div style={styles.paperContainer}>
      
    </div>
    <div>
    <Box display='flex' flexDirection='column' alignItems='center' sx={{backgroundColor:'#7d9ccf' }}>
        <Typography variant='h1' sx={{ fontFamily: "merriweatherlight"  }}><i>MyBooK Store</i></Typography>
        <Typography variant='h3' sx={{ fontFamily: "Garamond " }}>  Created By- <u>Sundaram Anand </u>  </Typography>
      </Box>
    </div>
    </>
  )
}

export default Home