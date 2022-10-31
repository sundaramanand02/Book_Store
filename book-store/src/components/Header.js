import React,{ useState } from 'react';
import { AppBar,Tab,Tabs,Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const Header = () => { 
    const [value,setValue]=useState();
  return (
    <div>
        <AppBar sx={{ backgroundColor :'#232F3D' }} position="sticky">
        <Toolbar>
            <NavLink to='/' sx={{color:'white'}}>
                <Typography>
                    <LibraryBooksIcon/>
                </Typography>
            </NavLink>
             {/* <Typography><LibraryBooksIcon/></Typography> */}
             <Typography variant='h3' sx={{ fontFamily: "merriweatherlight" ,textAlign:'center'}}><i><center>SA BookS</center></i></Typography>
             <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}
             sx={{ml:'auto'}}>
                <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                <Tab LinkComponent={NavLink} to="/books" label="Books" />
                <Tab LinkComponent={NavLink} to="/about" label="About Us" />
             </Tabs>
        </Toolbar>
       
        </AppBar>
    </div>
  );
};

export default Header;