



import * as React from 'react';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, } from '@mui/material/styles';
import {Link, useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';

import { useSelector, useDispatch } from 'react-redux'
import {LoginAdmin, ClearError, ClearMessage} from "../../Actions/Actions"

import "./Login.css"




export default function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const message = useSelector((state)=>state?.Admin?.message)
  const errors = useSelector((state)=>state?.Admin?.error)
  const auth = useSelector((state)=>state?.Admin?.Authenticated)
   const loading = useSelector((state)=>state?.Admin?.loading)

  




  const pages = ['About Us', 'Need Help?'];
  const [anchorElNav, setAnchorElNav] = useState(null);
const [anchorElUser, setAnchorElUser] = useState(null);

const [finishedOrder, setFinishedOrder] = useState(false);
const Email = sessionStorage.getItem('email');


const [user, setUser] = useState({

  email:"",
  password:"",


})

const { email,  password} = user


const handleChange =(e)=>{
  let {name, value} = e.target
  setUser({...user, [name]:value})
}




const handleSubmit = (e) => {
  e.preventDefault();
  const email = Email
  const User = {email, password}
  dispatch(ClearError());
  if(Email){
    dispatch(LoginAdmin(User))
  }else{
    dispatch(LoginAdmin(user))
  }


  }


  
const handleFocus = () => {
  if (errors) {
    dispatch(ClearError());
  }


};



const handleClick = () => {
  if (message) {
    dispatch(ClearMessage())
    sessionStorage.removeItem('email')
    sessionStorage.setItem('authenticated',auth)
    navigate("/Dashboard");
 
  }
};



  setTimeout(() => {
    handleClick()


  }, 2000);



  
useEffect(()=>{
  document.body.style.zoom = "80%";
  dispatch(ClearError());

},[])



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



const defaultTheme = createTheme();



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


  return (

<div>

<AppBar position="static" sx={{  backgroundColor: '#012949' }}>
<Container maxWidth="xl">
  <Toolbar disableGutters>

    <Typography
      variant="h6"
      noWrap
    //  component="a"
   
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'sans-serif',
        fontWeight: 700,
        letterSpacing: '.2rem',
        color:'white',
  
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
      component="a"
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
       <Typography variant="h5" component="div" sx={{textAlign:'center', color:'white',  fontWeight:50}} >
        Hi there, Welcome Back! 
       </Typography>
        <h2 className="fw-bold mb-5" style={{color:'white'}}>Login</h2>
 
        <form onSubmit={handleSubmit}>



        {loading &&
          <div className='loader'></div>}
          <br/>


          {/* {message && 

<div classNameName="alert success alert-success alert-dismissible" role="alert">
<div classNameName="container">

<strong> <i classNameName="fa fa-thumbs-up" aria-hidden="true"></i></strong> {message}!

</div>
</div>
} */}

{errors &&
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'40%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {errors}!




</div>
</div>  
 }

 <br/>










     
          <div className="row">
{Email ? 
            <div className="col-md-6 mb-4">
              <div className="form-outline">
          
                <input type="email" id="form3Example1" className="form-control " placeholder='email' onChange={handleChange}  onFocus={handleFocus} name="email" value={Email} />
            
              </div>
            </div> :

<div className="col-md-6 mb-4">

<div className="form-group focused">
  
                     
                     <input type="email" id="input-first-name"  className="form-control form-control-alternative"  placeholder='email Address' onFocus={handleFocus}   onChange={handleChange} name="email" value={email} />
                   </div>



        
            </div>

}


            <div className="col-md-6 mb-4">

            <div className="form-group outline">
                     
                     <input type="password"  className="form-control form-control-alternative"  placeholder='Password' onFocus={handleFocus}   onChange={handleChange} name="password" value={password} />
                   </div>



         
            </div>
          </div>


         

    

          <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949'}}>
            Login
          </button>

          <Grid container sx={{display:'flex', justifyContent: 'space-between'}}>
               <Grid item >
                 <Link to="/ForgotPassword" variant="body2" style={{color:'#012949'}}>
                  Forgot password?
                 </Link>



               </Grid>
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




























 