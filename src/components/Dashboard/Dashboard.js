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
import {Link, useNavigate } from "react-router-dom"

import Avatar from '@mui/material/Avatar';
import EggIcon from '@mui/icons-material/Egg';
import SavingsIcon from '@mui/icons-material/Savings';
import GrassIcon from '@mui/icons-material/Grass';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import TextField from '@mui/material/TextField';

import SetMealIcon from '@mui/icons-material/SetMeal';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LineChart } from '@mui/x-charts/LineChart';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { jwtDecode } from "jwt-decode"




import { PieChart } from '@mui/x-charts/PieChart';

import MUIDataTable from "mui-datatables";
import {useSelector, useDispatch} from 'react-redux'


import {
    
    GetPigProduct,
    GetPoultryProduct, 
     GetEggProduct,
     GetCatFishProduct,
     GetAdmin,
     CreateEggRecord,
     ClearError, ClearMessage,
     GetEggRecord, UpdateEggRecord,
     DeleteEggRecord,
     GetEggStat,
     CreatePigRecord,
     GetPigRecord,
     UpdatePigRecord,
     DeletePigRecord,
     LoggedOut
    
   
    
    } 
from "../../Actions/Actions"






function Dashboard() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('AdminToken')


  useEffect(()=>{
    document.body.style.zoom = "65%";
    dispatch(GetAdmin())
    dispatch(GetPigProduct())
    dispatch(GetPoultryProduct())
    dispatch(GetEggProduct())
    dispatch(GetCatFishProduct())
    dispatch(GetEggRecord())
    dispatch(GetPigRecord())
    dispatch(GetEggStat())
   
  },[])








  const UserInfo = JSON.parse(sessionStorage.getItem('UpdateAdmin'))
  const dispatch = useDispatch()
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedPig, setSelectedPig] = useState();
  const [selectedPen, setSelectedPen] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [link, setLink] = useState('DashBoard')
  const [Product, setProduct] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
const [btnValue, setBtnValue] = useState('Submit')
const [PigBtnValue, setPigBtnValue] = useState('Submit')
const [prod, setProd] = useState(true)
const [openEdit, setOpenEdit] = useState(false);
const [openDelete, setOpenDelete] = useState(false);





  const message = useSelector((state)=>state?.Admin?.message)
  const error = useSelector((state)=>state?.Admin?.error)
  const loading = useSelector((state)=>state?.Admin?.loading)
  const EggRecords = useSelector((state)=>state?.Admin?.EggRecord)
  const PigRecords = useSelector((state)=>state?.Admin?.PigRecord)
  const EggStats = useSelector((state)=>state?.Admin?.EggStat)
const poultry = useSelector((state)=>state?.Admin?.poultyProduct)
const pig = useSelector((state)=>state?.Admin?.pigProduct)
const egg = useSelector((state)=>state?.Admin?.eggProduct)
const catFish = useSelector((state)=>state?.Admin?.catFishProduct)








useEffect(() => {
  let timerRef = null;

  const decoded = jwtDecode(token);

  const expiryTime = (new Date(decoded.exp * 1000)).getTime();
  const currentTime = (new Date()).getTime();

  const timeout = expiryTime - currentTime;
  const onExpire = () => {
    dispatch(LoggedOut());
     navigate('/');
  };

  if (timeout > 0) {
    // token not expired, set future timeout to log out and redirect
    timerRef = setTimeout(onExpire, timeout);
  } else {
    // token expired, log out and redirect
    onExpire();
  }

  // Clear any running timers on component unmount or token state change
  return () => {
    clearTimeout(timerRef);
  };
}, [dispatch, navigate, token]);





const ProductData = {
  product: [

   // { name: "Poultry", category: ["Layers", "Broilers"] },
    { name: "Pig", category: ["Boar", "Dry Sows", "In-pigs", "Growers", "Weaners", "Piglets"] },
    { name: "Egg", category: ["Big", "Small"] },
   // { name: "Cat-fish", category: ["Fingerlings", "Mature"] },
  ]
};




const PigData = {
  PigProduct: [

    { name: "Boar" },
    { name: "DrySows" },
    { name: "In-pigs"  },
    { name: "farrow-pigs" },
    { name: "Growers" },
    { name: "Weaners" },
    { name: "Piglets" },
  ]
};



const PenData = {
  PigProduct: [

    { name: 1, },
    { name: 2,  },
    { name: 3,  },
    { name: 4,  },

  ]
};

const availableProduct = ProductData.product.find((c) => c.name === selectedProduct);
const availablePig = PigData.PigProduct.find((c) => c.name === selectedPig);
const availableCategory = availableProduct?.category?.find((s) => s.name === selectedProduct);






  

  const handleSwitch = ()=>{
    setProd(!prod)
   
  }



  const [EggRecord, setEggRecord] = useState({

    breed:"",
    penNumber:'',
    totalBirdHoused:'',
    ageHoused:"",
    mortality:"",
    waterConsumption:"",
    feedConsumption:"",
    remark:'',
    culls:"",
    openingBalance:'',
    closingBalance:'',

    eggCollection:{
      firstTray:"",
      secondTray:"",
      thirdTray:"",
      cracks:"",
      production:''
    }

  })
  const {breed, penNumber, totalBirdHoused, ageHoused, mortality, closingBalance, waterConsumption, feedConsumption, remark, culls, eggCollection, openingBalance}  = EggRecord





  
  const [PigRecord, setPigRecord] = useState({

    pen:"",
    category:'',
    room:'',
    quantity:"",
    Mortality:"",


  })
  const {pen, category,room,quantity, Mortality } = PigRecord

  PigRecord.pen = selectedPen
  PigRecord.category = selectedPig



  
  
  const handleChangePig =(e)=>{
    const {name, value} = e.target
    setPigRecord({...PigRecord, [name]:value})

  }


  const handleChange =(e)=>{
    const {name, value} = e.target
    setEggRecord({...EggRecord, [name]:value})

  }


  const HandleSubmit = (e)=>{
    e.preventDefault()
    const data = {
        breed, 
        penNumber,
       totalBirdHoused,
        ageHoused,
         mortality,
         waterConsumption,
         feedConsumption,
         remark,
         culls, 
         eggCollection,
          openingBalance}

  dispatch(CreateEggRecord(data))
 



  }


  const handleUpdate = (e)=>{
    e.preventDefault()
    const data = {
        breed, 
        penNumber,
       totalBirdHoused,
        ageHoused,
         mortality,
         waterConsumption,
         feedConsumption,
         remark,
         culls, 
         eggCollection,
          openingBalance}

  dispatch(UpdateEggRecord(data))


  }



  const handleUpdatePig = (e)=>{
    e.preventDefault()
    const mortality = Mortality
    const data = { pen, category,room,quantity, mortality}

  dispatch(UpdatePigRecord(data))


  }




  const HandleSubmitPig = (e)=>{
    e.preventDefault()
   const mortality = Mortality
    const data = { pen, category,room,quantity, mortality}
 

 dispatch(CreatePigRecord(data))
  



  }




  const handleClickOpenEdit = (record) => {
    setOpenEdit(true);
    sessionStorage.setItem('EggUpdateId', record?.id)
    setEggRecord({...record});
    setBtnValue('Update')
  
  };


  
  const EditPig = (record) => {
    setOpenEdit(true);
    sessionStorage.setItem('PigUpdateId', record?.id)
    setPigRecord({...record});
   
    setPigBtnValue('Update')
  
  };
  
  const handleCloseEdit = () => {
  setOpenEdit(false);
  dispatch(ClearError())
  };
  
  
  
  const handleClickOpenDeleteEgg = (id) => {
 // setOpenDelete(true);
  sessionStorage.setItem('EggId', id)
  dispatch( DeleteEggRecord())

  
  };



  const DeletePig = (id) => {
    // setOpenDelete(true);
     sessionStorage.setItem('PigId', id)
     dispatch( DeletePigRecord())
   
     
     };
     
  
  const handleClickCloseDeleteEgg = () => {
  setOpenDelete(false);
  dispatch(ClearError())
  };
  

  const handleFocus = () => {
    if (error) {
      dispatch(ClearError());
    }
  
 
  };

  setTimeout(()=>{
    if(message){
      dispatch(ClearMessage())
    }
  },1500)
  














  const SetLink = (link)=>{
    setLink(link)
  }

  const SetProduct = (product)=>{
    setProduct(product)
  }

     





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
   

   
   const options = {
     filterType: 'checkbox',
   };



   const EggRecordcolumns = [
    {
     name: "Date Entered",
     label: "Date Entered",
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
     name: "Breed",
     label: "Breed",
     options: {
      filter: true,
      sort: false,
     }
    },


    {
      name: "Age Housed",
      label: "Age Housed",
      options: {
       filter: true,
       sort: false,
      }
     },




     {
      name: "Culls",
      label: "Culls",
      options: {
       filter: true,
       sort: false,
      }
     },


     {
      name: "Feed Consumption",
      label: "Feed Consumption",
      options: {
       filter: true,
       sort: false,
      }
     },

     
     {
      name: "Water Consumption",
      label: "Water Consumption",
      options: {
       filter: true,
       sort: false,
      }
     },





     {
      name: "Pen Number",
      label: "Pen Number",
      options: {
       filter: true,
       sort: false,
      }
     },



     {
      name: "First Tray",
      label: "First Tray",
      options: {
       filter: true,
       sort: false,
      }
     },

     

     {
      name: "Second Tray",
      label: "Second Tray",
      options: {
       filter: true,
       sort: false,
      }
     },



     

     {
      name: "Third Tray",
      label: "Third Tray",
      options: {
       filter: true,
       sort: false,
      }
     },


     

     {
      name: "Cracks",
      label: "Cracks",
      options: {
       filter: true,
       sort: false,
      }
     },


     

     {
      name: "Total Bird Housed",
      label: "Total Bird Housed",
      options: {
       filter: true,
       sort: false,
      }
     },


     {
      name: "Edit",
      label: "Edit",
      options: {
       filter: true,
       sort: false,
      }
     },


     {
      name: "Delete",
      label: "Delete",
      options: {
       filter: true,
       sort: false,
      }
     },
   ];
   



   
   const PigRecordcolumns = [
    {
     name: "Date Entered",
     label: "Date Entered",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Category",
     label: "Category",
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
     name: "Pen",
     label: "Pen",
     options: {
      filter: true,
      sort: false,
     }
    },


    {
      name: "Room",
      label: "Room",
      options: {
       filter: true,
       sort: false,
      }
     },




     {
      name: "Quantity",
      label: "Quantity",
      options: {
       filter: true,
       sort: false,
      }
     },


 

  


     {
      name: "Edit",
      label: "Edit",
      options: {
       filter: true,
       sort: false,
      }
     },


     {
      name: "Delete",
      label: "Delete",
      options: {
       filter: true,
       sort: false,
      }
     },
   ];
   



     
    

   const data =
   EggRecords &&
   EggRecords?.map((record) => {
    // var date = record?.createdAt,
    // newDate = (new Date(date))?.toDateString();

     return {
 
        'Opening Stock': (<h5 style={{marginLeft:30}}>{record?.openingBalance} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
        Section :  (<h5 style={{marginLeft:20}}>{record?.breed} </h5>),
        "Closing Stock":(<h5 style={{marginLeft:30}}>{record?.openingBalance} </h5>)


   

     };
   });
 
    

   const EggRecordData =
   EggRecords &&
   EggRecords?.map((record) => {
    var date = record?.createdAt,
    newDate = (new Date(date))?.toDateString();

     return {
        "Date Entered":  newDate,
        'Opening Stock': (<h5 style={{marginLeft:30}}>{record?.openingBalance} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
        Breed :record?.breed,
        'Age Housed' :  (<h5 style={{marginLeft:30}}>{record?.ageHoused} </h5>),
        Culls :  record?.culls,
        'Feed Consumption': (<h5 style={{marginLeft:30}}>{record?.feedConsumption} </h5>),
        'Water Consumption': (<h5 style={{marginLeft:30}}>{record?.waterConsumption} </h5>),
        'Pen Number': (<h5 style={{marginLeft:30}}>{record?.penNumber} </h5>),
        'First Tray': (<h5 style={{marginLeft:20}}>{record?.eggCollection?.firstTray} </h5>),
        'Second Tray': (<h5 style={{marginLeft:30}}>{record?.eggCollection?.secondTray} </h5>),
        'Third Tray': (<h5 style={{marginLeft:20}}>{record?.eggCollection?.thirdTray} </h5>),
        Cracks: (<h5 style={{marginLeft:20}}>{record?.eggCollection?.cracks} </h5>),
        "Total Bird Housed": (<h5 style={{marginLeft:20}}>{record?.totalBirdHoused} </h5>),

   
        // Remark:  report?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,
       
       

          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}} onClick={() => `${( handleClickOpenEdit(record))}`}/>
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( handleClickOpenDeleteEgg(record?.id))}`} />
          ),

     };
   });
 



   const PigRecordData =
   PigRecords &&
   PigRecords?.map((record) => {
    var date = record?.createdAt,
    newDate = (new Date(date))?.toDateString();

     return {
        "Date Entered":  newDate,
        Category:  record?.category,
        Room:  (<h5 style={{marginLeft:15}}>{record?.room} </h5>),
        Quantity:   (<h5 style={{marginLeft:20}}>{record?.quantity} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
       Pen: (<h5 style={{marginLeft:10}}>{record?.pen} </h5>),

         
          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}} onClick={() => `${( EditPig(record))}`}/>
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( DeletePig(record?.id))}`} />
          ),

     };
   });
 











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
           className="list-group-item list-group-item-action py-2 ripple "
           aria-current="true"
           >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i
            ><span onClick={()=>SetLink('DashBoard')}>DashBoard</span>
        </a>


        <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple "
           >
          <i className="fas fa-chart-area fa-fw me-3"></i
            ><span onClick={()=>SetLink('Vaccination')}>Vaccination</span>
        </a>


      
        <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-lock fa-fw me-3"></i><span onClick={()=>SetLink('Medication')}>Medication</span></a
          >

          <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple "
           aria-current="true"
           >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i
            ><span onClick={()=>SetLink('MonthlyStat')} >Enter Daily Record</span>
        </a>
        <a
           href="#"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-chart-line fa-fw me-3"></i
          ><span onClick={()=>SetLink('Analytics')}>Analytics</span></a
          >

          <li
       
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-chart-bar fa-fw me-3"></i>

<Link to="/Dashboard/AllProductReport">
           <span style={{color:'black'}}>All Product Reports</span> 
           </Link>
           </li>
       

       
    
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
       

            {link === 'DashBoard' &&

            
            <div className="page-content">
                 <Box sx={{  display: 'flex',
          justifyContent: 'center',
          textAlign:'center',
          alignItems:'center',}}> 

<h3 style={{marginRight:'10px',fontWeight:'bold', fontSize:25 }}>Animal</h3> <FormControlLabel control={<Switch defaultChecked  onClick={handleSwitch}/>}   size="large" /> <h3 style={{marginLeft:'-15px',fontWeight:'bold', fontSize:25 }}>Crop</h3>
</Box>



{/* 
      first Row Start */}

            
                <div className="analytics">

{prod ===true ?
                <div className="card" style={{width:'110%'}} onClick={()=>SetProduct('eggs')}  >
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
                    </div> : ""}




                    {prod ===true ?
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
                    </div>: ""}





                    {prod ===true ?
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
</div> : ""}




     {prod ===true ?
                <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Carrot</h2>
                            <GrassIcon sx={{fontSize:40, color:'#012949'}}/>

                      
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                           
                        </div>
                    </div>: ""}



                    {prod ===true ?
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
                    </div>: ""}


                    {prod === false ?

                    <div className="card" style={{width:'110%'}} onClick={()=>SetProduct('pigs')} >
                        <div className="card-head">
                            <h2>Pigs</h2>
                            <SavingsIcon sx={{fontSize:40, color:'#012949'}}/>
                           
                        </div>
                        <div className="card-progress">
                        <small>In Stock : {pig?.length}</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                            
                        </div>
                    </div> : ""}




                    {prod === false ?

<div className="card" style={{width:'110%'}} onClick={()=>SetProduct('pigs')} >
    <div className="card-head">
        <h2>Cow</h2>
        <SavingsIcon sx={{fontSize:40, color:'#012949'}}/>
       
    </div>
    <div className="card-progress">
    <small>In Stock : {pig?.length}</small><br/>
    <small>$653,200</small><br/>
        <small>Monthly revenue growth</small>
        
    </div>
</div> : ""}




                    
                    

                 {prod ===false ?

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
                    </div> : ""}

                   
                    {prod ===false ?
                    
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
 </div>: ""}



                 {prod ===false ?

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
                    </div>: ""}


                    {prod ===false ?

                    <div className="card total" style={{width:'13%', height:'20%', marginTop:'30px', position:'fixed', right:50}}>
                        <div className="card-head">
                            <h2>Total Sales </h2>
                        
                            <MonetizationOnIcon sx={{fontSize:40, color:'#012949'}}/>
                        </div>
                        <div className="card-progress">
                          
                        <small>$653,200</small><br/>
                        <small>Monthly revenue growth</small>
                        <h3>(Animals)</h3>
                        </div>
                    </div>: ""}


                    {prod ===true ?
                    <div className="card total" style={{width:'13%', height:'20%', marginTop:'30px', position:'fixed', right:50}}>
                        <div className="card-head">
                            <h2>Total Sales</h2>
                        
                            <MonetizationOnIcon sx={{fontSize:40, color:'#012949'}}/>
                        </div>
                        <div className="card-progress">
                          
                        <small>$653,200</small><br/>
                        <small>Monthly revenue growth</small>
                        <h3>(Crop)</h3>
                        </div>
                    </div>:""}



                    

                </div>

                {/* 
      first Row end */}

               




               {/* Second Row start */}
               

                <div className="analytics">


           
                {prod ===true ?
                    <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Lettuce</h2>
                            <EmojiNatureIcon sx={{fontSize:40, color:'#012949'}}/>

                      
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                           
                        </div>
                    </div>: ""}



                    {prod ===true ?
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
                    </div>: ""}


                    {prod ===true ?
         <div className="card" style={{width:'110%'}}>
    <div className="card-head">
        <h2>Paw-Paw</h2>
        <EggIcon sx={{fontSize:40, color:'#012949'}}/>
    </div>
    <div className="card-progress">
    <small>In Stock : 0</small><br/>
    <small>$653,200</small><br/>
    <small>Monthly revenue growth</small>
    </div>
        </div> : ""}




     {prod ===true ?
                <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Mango</h2>
                            <GrassIcon sx={{fontSize:40, color:'#012949'}}/>

                      
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                           
                        </div>
                    </div>: ""}


                    {prod ===true ?
                <div className="card" style={{width:'110%'}}>
                        <div className="card-head">
                            <h2>Okra</h2>
                            <GrassIcon sx={{fontSize:40, color:'#012949'}}/>

                      
                        </div>
                        <div className="card-progress">
                        <small>In Stock : 0</small><br/>
                        <small>$653,200</small><br/>
                            <small>Monthly revenue growth</small>
                           
                        </div>
                    </div>: ""}


             











                    {prod === false ?

<div className="card" style={{width:'110%'}} onClick={()=>SetProduct('pigs')} >
    <div className="card-head">
        <h2>Layers</h2>
        <SavingsIcon sx={{fontSize:40, color:'#012949'}}/>
       
    </div>
    <div className="card-progress">
    <small>In Stock : {pig?.length}</small><br/>
    <small>$653,200</small><br/>
        <small>Monthly revenue growth</small>
        
    </div>
</div> : ""}




{prod === false ?

<div className="card" style={{width:'110%'}} onClick={()=>SetProduct('pigs')} >
<div className="card-head">
<h2>Fingerlings</h2>
<SavingsIcon sx={{fontSize:40, color:'#012949'}}/>

</div>
<div className="card-progress">
<small>In Stock : {pig?.length}</small><br/>
<small>$653,200</small><br/>
<small>Monthly revenue growth</small>

</div>
</div> : ""}







{prod ===false ?

<div className="card" style={{width:'110%'}}>
    <div className="card-head">
        <h2>Boars</h2>
        <GrassIcon sx={{fontSize:40, color:'#012949'}}/>
      
    </div>
    <div className="card-progress">
    <small>In Stock : {poultry?.length}</small><br/>
    <small>$653,200</small><br/>
        <small>Monthly revenue growth</small>
     
    </div>
</div> : ""}


{prod ===false ?

<div className="card" style={{width:'110%'}}>
<div className="card-head">
<h2>PigLets</h2>
<SetMealIcon sx={{fontSize:40, color:'#012949'}}/>
</div>
<div className="card-progress">
<small>In Stock : {catFish?.length}</small><br/>
<small>$653,200</small><br/>
<small>Monthly revenue growth</small>

</div>
</div>: ""}



{prod ===false ?

<div className="card" style={{width:'110%'}}>
    <div className="card-head">
        <h2>Dry Sows</h2>
        <EmojiNatureIcon sx={{fontSize:40, color:'#012949'}}/>
    </div>
    <div className="card-progress">
    <small>In Stock : 0</small><br/>
    <small>$653,200</small><br/>
    <small>Monthly revenue growth</small>

     
    </div>
</div>: ""}


          




</div>

{/* Second Row End */}
<br/>
<br/>




<Box    sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          borderRadius: 1,
          cursor:'pointer'
        }}>



<div style={{marginTop:30}}>

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






<div style={{width:800, marginRight:20}}>
<MUIDataTable
  title={"Poultry"}
  data={data}
  columns={columns}
  options={options}
 

/>


</div>


<div style={{width:800}}>
<MUIDataTable
  title={"Pigs"}
  data={data}
  columns={columns}
  options={options}
/>

</div>


</Box>



              
            
            </div>}

         




            {link === 'MonthlyStat' &&
            
            <div className="page-contents">

<Box sx={{ml:5}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Product...</InputLabel>
                <Select
                  sx={{ width: 450, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedProduct || ""}
                  fullWidth
               onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedProduct(e.target.value)}>
                  {ProductData.product.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>



              
          {loading && error === false ?
          <div className='loader'></div> : ""}
          <br/>


          {message && 

<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'20%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center', margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong> <i className="fa fa-thumbs-up" aria-hidden="true"></i></strong> {message}!

</div>
</div>
}

{error &&
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'40%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {error}!




</div>
</div>  
 }









      {selectedProduct === 'Egg' ?    
      <Box> 

<Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>         


<Box >
           <TextField
          label="Breed"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type="text"
         onChange={handleChange}
         name='breed'
         value={breed}
         onFocus={handleFocus}
        
        /> 
        </Box>
        <Box >
           <TextField
          label="Pen Number"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='penNumber'
         value={penNumber}
         onFocus={handleFocus}
      
        /> 
        </Box>

        <Box >
        <TextField
          label="Culls"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'  
         onChange={handleChange}
         name='culls'
         value={culls}
         onFocus={handleFocus}
       
        /> 
        </Box>
  


        <Box >
           <TextField
          label="Age Housed"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='ageHoused'
         value={ageHoused}
         onFocus={handleFocus}
       
        /> 
        </Box>

        <Box >
           <TextField
          label="Mortality"
          id="outlined-start-adornment"
          sx={{ width: 250}}
          type='number'
         onChange={handleChange}
          name='mortality'
          value={mortality}
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Cracks"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, cracks: e.target.value },
            })
          }
          value={EggRecord.eggCollection.cracks}
          name='cracks'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>




        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:3,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>         


<Box >
           <TextField
          label="Water Consumption"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
          onChange={handleChange}
         name='waterConsumption'
         value={waterConsumption}
         onFocus={handleFocus}
    
        /> 
        </Box>
        <Box >
           <TextField
          label="Feed Consumption"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='feedConsumption'
         value={feedConsumption}
         onFocus={handleFocus}
        /> 
        </Box>

        <Box >
           <TextField
          label="Total Bird Housed"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='totalBirdHoused'
         value={totalBirdHoused}
         onFocus={handleFocus}
      
        /> 
        </Box>


        <Box >
           <TextField
          label="First Tray"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, firstTray: e.target.value },
            })
          }
      
         name='firstTray'
          value={EggRecord.eggCollection.firstTray}
          onFocus={handleFocus}
        /> 
        </Box>

        <Box >
           <TextField
          label="Second Tray"
          id="outlined-start-adornment"
          sx={{ width: 250}}
          type='number'
          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, secondTray: e.target.value },
            })
          }
          value={EggRecord.eggCollection.secondTray}
         name='secondTray'
   
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Third Tray"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'

          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, thirdTray: e.target.value },
            })
          }
          value={EggRecord.eggCollection.thirdTray}
          name='thirdTray'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>




        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:3,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>    



                <Box >
           <TextField
          label="Production"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, production: e.target.value },
            })
          }
          value={EggRecord.eggCollection.production}
          name='production'
          onFocus={handleFocus}
        /> 
        </Box>     



        <Box >
           <TextField
          label="Opening Balance"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
          name='openingBalance'
         value={openingBalance}
          onFocus={handleFocus}
        /> 
        </Box>

        <Box >
           <TextField
          label="Closing Balance"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='closingBalance'
         value={closingBalance}
         onFocus={handleFocus}
  
        /> 
        </Box>



        <Box >
           <TextField
          label="Remark..."
          id="outlined-start-adornment"
          sx={{ width: 550 }}
          type='text'
          onChange={handleChange}
          name='remark'
          value={remark}
          onFocus={handleFocus}
         
        /> 
        </Box>


{btnValue === 'Submit' ?
        <Box sx={{mt:2}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmit} >
            Submit
          </button> 
             
        </Box> : ""} 


{btnValue === 'Update' ?
<Box sx={{mt:2}}>
<button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={handleUpdate} >
    Update
  </button> 
     
</Box> : ""}








    
        </Box>

        </Box> 
        

        : ""}
 <br/> 


















     

    


          
            
 {selectedProduct === 'Egg' &&  EggRecords?.length > 0 ?   


<div >
<MUIDataTable
  title={"Egg Record"}
  data={EggRecordData}
  columns={EggRecordcolumns}
  options={options2}
/>

</div> : ""}






   
            
            </div>   }











            {selectedProduct === 'Pig' ?    
      <Box> 

<Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>   




        <Box sx={{mr:25}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 350, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedPig || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedPig(e.target.value)}>
                  {PigData.PigProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>   

                      <Box sx={{mr:25}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Pen...</InputLabel>
                <Select
                  sx={{ width: 350, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedPen || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedPen(e.target.value)}>
                  {PenData.PigProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>    




        <Box >
        <TextField
          label="Room"
          id="outlined-start-adornment"
          sx={{ width: 350}}
          type='number'  
         onChange={handleChangePig}
         name='room'
         value={room}
         onFocus={handleFocus}
       
        /> 
        </Box>
  


    
        <Box >
           <TextField
          label="Mortality"
          id="outlined-start-adornment"
          sx={{ width: 350}}
          type='number'
         onChange={handleChangePig}
          name='Mortality'
          value={Mortality}
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 350}}
          type='number'
          onChange={handleChangePig} 
          value={quantity}
          name='quantity'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>

        {/* <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmitPig} >
            Submit
          </button> 
             
        </Box>  */}





        {PigBtnValue === 'Submit' ?
        <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmitPig} >
            Submit
          </button> 
             
        </Box> : ""} 


{PigBtnValue === 'Update' ?
 <Box sx={{mt:2, float:'right', mr:10}}>

<button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={handleUpdatePig} >
    Update
  </button> 
     
</Box> : ""}


        </Box> 




     
        

        : ""}




            
 {selectedProduct === 'Pig' &&  PigRecords?.length > 0 ?   


<div style={{marginTop:'100px', width:1800, margin:'100px auto 0 auto'}} >
<MUIDataTable
  title={"Pig Record"}
  data={PigRecordData}
  columns={PigRecordcolumns}
  options={options2}
/>

</div> : ""}




















            
            {link === 'Vaccination' &&
            
            <div className="page-content">
            
             <h3 style={{textAlign: 'center'}}>No Record on Vaccination!</h3>

               










              
            
            </div>}

               
            {link === 'Medication' &&
            
            <div className="page-content">
            
             <h3 style={{textAlign: 'center'}}>No Record on Medication!</h3>

               










              
            
            </div>}


            {link === 'Analytics' &&
            
            <div className="page-content">
            
             <h3 style={{textAlign: 'center'}}>No Record Yet!!</h3>

               










              
            
            </div>}




{/* {Product === 'eggs' ?
            <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />: ""} */}
            
        </main>
        
    </div>











{/* Delete Modal */}

    <div>
      
      <Dialog
        open={openDelete}
        onClose={handleClickCloseDeleteEgg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
     

        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Are You Sure You Want To Permanently Delete this Egg Record?"}
        </DialogTitle>



{/* 
        {message && 

<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'80%', margin:'0px auto'}}>
<div className="container"  style={{textAlign:'center', margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong> <i className="fa fa-thumbs-up" aria-hidden="true"></i></strong> {message}!

</div>
</div>
}

{error &&
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'80%', margin:'0px auto'}}>
<div className="container"  style={{textAlign:'center', margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {error}!




</div>
</div>  
 }



{loading && error === false ?
          <div className='loader'></div> : ""}
          <br/>  */}



        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          mt:1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >


<div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleClickCloseDeleteEgg}>Cancel </a>
                  
                 </div>

                 <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'red', }} onClick={()=>dispatch(DeleteEggRecord())}> Delete </a>
                  
                 </div>

       
 
    </Box>














 

   
       
      </Dialog>
    </div>

{/* end of delete Modal */}





    {/* <Copyright sx={{ mt: 10 }} /> */}


      </div>
    );
    }

export default Dashboard;
