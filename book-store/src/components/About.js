import React from 'react'
import { Box, Typography } from '@mui/material';

const About = () => {
    return ( <
        div >
        <
        Box display = 'flex'
        flexDirection = 'column'
        alignItems = 'center' >
        <
        Typography variant = 'h1'
        sx = {
            { fontFamily: "merriweatherlight" } } > This is a CRUD application < /Typography> <
        Typography variant = 'h2'
        sx = {
            { fontFamily: "fantasy" } } > Developed with MERN Stack < /Typography> <
        /Box> <
        /div>
    )
}

export default About