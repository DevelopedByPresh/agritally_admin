






import * as React from 'react';

import Button from '@mui/material/Button';

// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "react-router-dom"

import { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';


import MenuItem from '@mui/material/MenuItem';



export default function ForgotPassword() {


  const pages = ['About Us', 'Need Help?'];

  const [anchorElNav, setAnchorElNav] = useState(null);
const [anchorElUser, setAnchorElUser] = useState(null);

const [finishedOrder, setFinishedOrder] = useState(false);



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Agritally
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
  // navigate('/Login')
};

const defaultTheme = createTheme();



  
  useEffect(()=>{
    document.body.style.zoom = "80%";
  
  },[])







  return (
  

    <div>

<AppBar position="static" sx={{  backgroundColor: '#012949' }}>
<Container maxWidth="xl">
  <Toolbar disableGutters>

    <Typography
      variant="h6"
      noWrap
      component="a"
   
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'sans-serif',
        fontWeight: 700,
        letterSpacing: '.2rem',
  
        textDecoration: 'none',
  
      }}
    >
      Agritally
    </Typography>

    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>

    <Typography
      variant="h5"
      noWrap
  //    component="a"
      href="#"
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Agritally
    </Typography>
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>

 
  </Toolbar>
</Container>
</AppBar>


  

    <section className="text-center">
<div className="p-5 bg-image" style={{ backgroundColor: '#012949' , height: "300px"}}></div>

<div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: "-200px", background: "hsla(0, 0%, 100%, 0.2)", backdropFilter: "blur(150px)"}}>
  <div className="card-body py-5 px-md-5">

    <div className="row d-flex justify-content-center">
      <div className="col-lg-8">
     

        <Typography variant="h5" component="div" sx={{textAlign:'center', color:'white',   fontWeight:50}} >
        Reset Password  
       </Typography>
       <br/>
 
        <form>
     
          <div className="row">
            <div className="col-md-6 mb-4">

            <div className="form-group focused">
                     
                     <input type="password" id="input-first-name"  className="form-control form-control-alternative"  placeholder='Password' />
                   </div>
              {/* <div className="form-outline">
                <input type="text" id="form3Example1" className="form-control" placeholder='First Name' />
            
              </div> */}
            </div>
            <div className="col-md-6 mb-4">

            <div className="form-group focused">
                     
                     <input type="password" id="input-first-name"  className="form-control form-control-alternative"  placeholder='Password' />
                   </div>


              {/* <div className="form-outline">
                <input type="text" id="form3Example2" className="form-control" placeholder='First Name' />
              
              </div> */}
            </div>
          </div>


         

    

          <button  className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949'}}>
            Reset Password
          </button>

          <Grid container sx={{display:'flex', justifyContent: 'space-between'}}>
           
               <Grid item >
                 <Link to="/SignUp" variant="body2" style={{color:'#012949'}}>
                   {"Don't have an account? Sign Up"}                   
                   </Link>

               </Grid>               
               </Grid>
            <Copyright sx={{ mt: 5 }} />
        

          
      

   
        </form>
      </div>
    </div>
  </div>
</div>
</section> 


</div>
  );
}




























 