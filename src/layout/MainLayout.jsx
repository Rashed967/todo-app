import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { Box, Grid } from '@mui/material';
// import SwipeableTemporaryDrawer from '../components/SideBar/SideBar';
import theme from '../theme/Theme';
import SideBar from '../components/SideBar/SideBar';

const MainLayout = () => {
    return (
        <>        
           <NavBar></NavBar>  
            

        <Box sx={{width : "100%", background : theme.palette.info.main }}>
        <Grid container spacing={0}>
            <Grid item xs={4} sm={4} md={2}>
            <Box width="100%" height="350px" sx={{background : theme.palette.secondary.main, color : theme.palette.info.main}}>

        {/* <SwipeableTemporaryDrawer /> */}

        

        <SideBar></SideBar>
            </Box>
            </Grid>


            <Grid item xs={8} sm={8} md={10}>
            <Box p={0} m={0} width="100%" height="350px" sx={{background : "orange"}}>
                
            <Outlet />
            </Box>
            </Grid>
        </Grid>
        </Box>

           
        </>
    );
};

export default MainLayout;