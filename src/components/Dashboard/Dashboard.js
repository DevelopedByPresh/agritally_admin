import React, {useState, useEffect} from 'react'
import "./Dashboard.css";


import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Link } from "react-router-dom"

import Avatar from '@mui/material/Avatar';
import EggIcon from '@mui/icons-material/Egg';
import SavingsIcon from '@mui/icons-material/Savings';
import GrassIcon from '@mui/icons-material/Grass';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

import SetMealIcon from '@mui/icons-material/SetMeal';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import { PieChart } from '@mui/x-charts/PieChart';

import MUIDataTable from "mui-datatables";
import {useSelector, useDispatch} from 'react-redux'


import {
    
    GetPigProduct,
    GetPoultryProduct, 
     GetEggProduct,
     GetCatFishProduct,
     GetAdmin
   
    
    } 
from "../../Actions/Actions"






function Dashboard() {
  const UserInfo = JSON.parse(sessionStorage.getItem('UpdateAdmin'))
  const dispatch = useDispatch()

     
  useEffect(()=>{
    document.body.style.zoom = "65%";
    dispatch(GetAdmin())
    dispatch(GetPigProduct())
    dispatch(GetPoultryProduct())
    dispatch(GetEggProduct())
    dispatch(GetCatFishProduct())
  
  },[])

  const poultry = useSelector((state)=>state?.Admin?.poultyProduct)
  const pig = useSelector((state)=>state?.Admin?.pigProduct)
  const egg = useSelector((state)=>state?.Admin?.eggProduct)
  const catFish = useSelector((state)=>state?.Admin?.catFishProduct)

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);



  const columns = [
    {
     name: "Section",
     label: "Section",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Opening Stock",
     label: "Opening Stock",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Mortality",
     label: "Mortality",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Closing Stock",
     label: "Closing Stock",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
   
   const data = [
    { Section: "Joe James", "Opening Stock": "Test Corp", Mortality: "Yonkers", "Closing Stock": "NY" },
    { Section: "John Walsh",  "Opening Stock": "Test Corp", Mortality: "Hartford", "Closing Stock": "CT" },
    { Section: "Bob Herm", "Opening Stock": "Test Corp", Mortality: "Tampa", "Closing Stock": "FL" },
    { Section: "James Houston", "Opening Stock": "Test Corp", Mortality: "Dallas",  "Closing Stock": "TX" },
   ];
   
   const options = {
     filterType: 'checkbox',
   };



   const columns2 = [
    {
     name: "Section",
     label: "Section",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Opening Stock",
     label: "Opening Stock",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Mortality",
     label: "Mortality",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Closing Stock",
     label: "Closing Stock",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
   
    
   const data2= [
    { Section: "Joe James", "Opening Stock": "Test Corp", Mortality: "Yonkers", "Closing Stock": "NY" },
    { Section: "John Walsh",  "Opening Stock": "Test Corp", Mortality: "Hartford", "Closing Stock": "CT" },
    { Section: "Bob Herm", "Opening Stock": "Test Corp", Mortality: "Tampa", "Closing Stock": "FL" },
    { Section: "James Houston", "Opening Stock": "Test Corp", Mortality: "Dallas",  "Closing Stock": "TX" },
   ];
   const options2 = {
     filterType: 'checkbox',
   };








  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));



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




  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };







  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  







  



    
    
    return (
      <div >


<header>
  <nav
       id="sidebarMenu"
       className="collapse d-lg-block sidebar collapse bg-white"
       >
    <div className="position-sticky">

      <h2 style={{marginLeft:'25px', fontSize:'20px', textTransform:'capitalize', color:'#012949'}}>{UserInfo?.lastName} {UserInfo?.firstName}</h2><br/>
      <div className="list-group list-group-flush mx-3 mt-4">
        <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple active"
           aria-current="true"
           >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>Monthly Statistics</span>
        </a>
        <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple "
           >
          <i className="fas fa-chart-area fa-fw me-3"></i
            ><span>Vaccination</span>
        </a>


        
        <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-lock fa-fw me-3"></i><span>Medication</span></a
          >

          <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple "
           aria-current="true"
           >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>Monthly Statistics</span>
        </a>
        <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-chart-line fa-fw me-3"></i
          ><span>Analytics</span></a
          >

          <li
       
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-chart-bar fa-fw me-3"></i>

<Link to="/Dashboard/AllProductReport">
           <span style={{color:'black'}}>All Product Reports</span> 
           </Link>
           </li>
       
        <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple"
           >
          <i className="fas fa-chart-pie fa-fw me-3"></i><span>Daily Statistics</span>
        </a>
  
          <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-lock fa-fw me-3"></i><span>Medication</span></a
          >
    
          <li className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i>
           <Link to="/Dashboard/Admins" >
           <span style={{color:'black'}}>My Team</span> 
           </Link>
           </li>
      
      




          <li className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i>
           <Link to="/Dashboard/Users" >
           <span style={{color:'black'}}>All Staff</span> 
           </Link>
           </li>

       


          <li className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i>
          <Link to="/Dashboard/Orders">
           <span style={{color:'black'}}>All Orders</span> 
           </Link>
           </li>
           

          <li className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i>
           <Link to="/Dashboard/Carts" >
           <span style={{color:'black'}}>All Carts</span> 
           </Link>
           </li>


           <li className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i>
           <Link to="/Dashboard/Transactions" >
           <span style={{color:'black'}}>All Transactions</span> 
           </Link>
           </li>


           
  
   
      </div>
    </div>
  </nav>



    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{  backgroundColor: '#012949' }}>
        <Toolbar> 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> 
           <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
         <label htmlFor="menu-toggle" >  <span className="las la-bars" style={{marginLeft:15, paddingRight:10}}></span></label> Agritally Admin DashBoard
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>







              
            </IconButton>


            <Link to="/AdminProfile">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
             // onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{mr:5}}
            >
           <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QVZBdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            </IconButton>
           </Link>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box> 








</header>





























    <div className="main-content" >
        <main >

            
            
            <div className="page-content">
            
                <div className="analytics">


                <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Eggs</h2>
                            <EggIcon sx={{fontSize:40, color:'#012949'}}/>
                            {/* <span className="las la-eye"></span> */}
                        </div>
                        <div className="card-progress">
                            <small>In Stock : {egg?.length}</small><br/>
                            <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                        
                        </div>
                    </div>

                    <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Pigs</h2>
                            <SavingsIcon sx={{fontSize:40, color:'#012949'}}/>
                           
                        </div>
                        <div className="card-progress">
                        <small>In Stock : {pig?.length}</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                            
                        </div>
                    </div>



                    
                    

                 

                    <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Poultry</h2>
                            <GrassIcon sx={{fontSize:40, color:'#012949'}}/>
                          
                        </div>
                        <div className="card-progress">
                        <small>In Stock : {poultry?.length}</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                         
                        </div>
                    </div>

                   

                    
<div className="card" style={{width:'110%'}}>
    <div className="card-head">
        <h2>Cat Fish</h2>
        <SetMealIcon sx={{fontSize:40, color:'#012949'}}/>
    </div>
    <div className="card-progress">
    <small>In Stock : {catFish?.length}</small><br/>
    <small>$653,200</small><br/>
    <small>Monthly revenue growth</small>
      
    </div>
</div>



             

                    <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Broilers</h2>
                            <EmojiNatureIcon sx={{fontSize:40, color:'#012949'}}/>
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                        <small>$653,200</small><br/>
                        <small>Monthly revenue growth</small>

                         
                        </div>
                    </div>


                 

                    <div className="card" style={{width:'100%', height:'150%', marginTop:20}}>
                        <div className="card-head">
                            <h2>Total Sales</h2>
                            <MonetizationOnIcon sx={{fontSize:40, color:'#012949'}}/>
                        </div>
                        <div className="card-progress">
                          
                        <small>$653,200</small><br/>
                        <small>Monthly revenue growth</small>
                        </div>
                    </div>



                    

                </div>

               


                <div className="analytics">
                <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Plantain</h2>
                            <GrassIcon sx={{fontSize:40, color:'#012949'}}/>

                      
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                          
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                           
                        </div>
                    </div>






<div className="card" style={{width:'110%'}}>
    <div className="card-head">
        <h2>Garden Eggs</h2>
        <EggIcon sx={{fontSize:40, color:'#012949'}}/>
    </div>
    <div className="card-progress">
    <small>In Stock : 0</small><br/>
    <small>$653,200</small><br/>
    <small>Monthly revenue growth</small>
    </div>
</div>

                <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Feed</h2>
                            <GrassIcon sx={{fontSize:40, color:'#012949'}}/>

                      
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                           
                        </div>
                    </div>




                    <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Cucumber</h2>
                            <EmojiNatureIcon sx={{fontSize:40, color:'#012949'}}/>

                      
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                           
                        </div>
                    </div>





                    








                    <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Vegetables</h2>
                            <EmojiNatureIcon sx={{fontSize:40, color:'#012949'}}/>

                      
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                           
                        </div>
                    </div>




</div><br/>




<Box    sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
       
     
   
          borderRadius: 1,
          cursor:'pointer'
        }}>



<div style={{marginTop:80}}>

<h4>Egg Sales</h4>
<PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Layer 1' },
            { id: 1, value: 15, label: 'Layer 2' },
            { id: 2, value: 20, label: 'Layer 3' },
          ],
        },
      ]}
      width={500}
      height={200}

      sx={{mr:20}}

    />

</div>






<div style={{width:600, marginRight:20}}>
<MUIDataTable
  title={"Poultry"}
  data={data}
  columns={columns}
  options={options}
 

/>


</div>


<div style={{width:600}}>
<MUIDataTable
  title={"Pigs"}
  data={data2}
  columns={columns2}
  options={options2}
/>

</div>


</Box>



              
            
            </div>
            
        </main>
        
    </div>











    <Copyright sx={{ mt: 10 }} />


      </div>
    );
    }

export default Dashboard;
