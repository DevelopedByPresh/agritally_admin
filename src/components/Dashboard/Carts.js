import  React,{useState, useEffect} from 'react';



import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MUIDataTable from "mui-datatables";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'

import DeleteIcon from '@mui/icons-material/Delete';

import VisibilityIcon from '@mui/icons-material/Visibility';

import {useSelector, useDispatch} from 'react-redux'
import { ClearError,  ClearMessage,GetAllCart, DeleteCart, } from "../../Actions/Actions"






 const Carts=()=> {
    const dispatch = useDispatch()

  useEffect(()=>{
    document.body.style.zoom = "70%";
    dispatch(GetAllCart())
    
  
  },[])

  const UserInfo = JSON.parse(sessionStorage.getItem('Admin'))

  

      
  const message = useSelector((state)=>state?.Admin?.message)
  const error = useSelector((state)=>state?.Admin?.error)
  const loading = useSelector((state)=>state?.Admin?.loading)
  const Carts = useSelector((state)=>state?.Admin?.cart)
 


  

const pages = ['About Us', 'Contact Us'];
const settings = [ 'Logout', 'Reset Password','Profile', 'Dashboard',];
const [open, setOpen] = useState(false);

const [tableBodyHeight, setTableBodyHeight] = useState("400px");
const [tableBodyHeight2, setTableBodyHeight2] = useState("200px");

const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
const [searchBtn, setSearchBtn] = useState(true);
const [downloadBtn, setDownloadBtn] = useState(true);
const [printBtn, setPrintBtn] = useState(true);
const [viewColumnBtn, setViewColumnBtn] = useState(true);
const [filterBtn, setFilterBtn] = useState(true);
const [anchorElNav, setAnchorElNav] = useState(null);
const [anchorElUser, setAnchorElUser] = useState(null);


const [openDeleteCart, setOpenDeleteCart] = useState(false);
const [singleCart, setSingleCart] = useState([])


const handleFocus = ()=>{
    if(error){
        dispatch(ClearError())
    }
}



  const handleClickOpen = (cartItems) => {
  
    setSingleCart(cartItems)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const handleClickOpenDeleteCart = (id) => {
    setOpenDeleteCart(true);
    sessionStorage.setItem('CartId', id)
};

const handleClickCloseDeleteCart = () => {
  setOpenDeleteCart(false);
  dispatch(ClearError())
};





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
  

  setTimeout(()=>{
    if(message){

      dispatch(ClearMessage())
      setOpenDeleteCart(false);

     
    }
  
 
  },3000)





  const columns2 = [

    {
     name: "Quantity",
     label: "Quantity",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: " Unit Price",
     label: " Unit Price",
     options: {
      filter: true,
      sort: false,
     }
    },
  


     {
      name: "Total Amount",
      label: "Total Amount",
      options: {
       filter: true,
       sort: false,
      }
     },


   




    
   ];

   const columns = [
    {
     name: "Date Created",
     label: "Date Created",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Created By",
     label: "Created By",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Number of Cart",
     label: "Number of Cart",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "Status",
      label: "Status",
      options: {
       filter: true,
       sort: false,
      }
     },

     
 

     {
      name: "Total Amount",
      label: "Total Amount",
      options: {
       filter: true,
       sort: false,
      }
     },


   
    {
      name: "Details",
      label: "Details",
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



   const data2 =
   singleCart &&
   singleCart?.map((cart) => {
 

 

     return {
  
        'Quantity': cart?.quantity,
        ' Unit Price': '₦' + cart?.price,
    
        "Total Amount": '₦' + cart?.subtotal,
     

   

     };
   });
 


   const data =
   Carts &&
   Carts?.map((cart) => {
    var date = cart?.createdAt,
    newDate = (new Date(date))?.toString();

    const noCart = cart?.cartItems?.length
 

     return {
        "Date Created":  newDate,
        'Created By': cart?.user?.firstName + " " + cart?.user?.lastName,
        'Number of Cart': noCart,
        Status: cart?.active?.toLocaleString(),
        "Total Amount":'₦' + cart?.total,
     

          Details:   (
            <VisibilityIcon  sx={{cursor:'pointer', color:'blue'}}  onClick={() => `${( handleClickOpen(cart?.cartItems))}`} />
          ),
     

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}  onClick={() => `${( handleClickOpenDeleteCart(cart?._id))}`}  />
          ),
  

     };
   });
 









    
  const options = {
    filterType: 'checkbox',

    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
  
    tableBodyHeight,
    tableBodyMaxHeight,
  };


  const options2 = {
    filterType: 'checkbox',

    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
  
    tableBodyHeight2,
    tableBodyMaxHeight,
  };







  return (
    <div>


<AppBar position="static" sx={{  backgroundColor: '#012949' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
     <Link to="/Dashboard" style={{color:'white'}}>
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
              color: 'inherit',
              textDecoration: 'none',
        
            }}
          >
            Agritally
          </Typography>
          </Link>

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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile">
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" />
              </IconButton> */}

<Link to="/AdminProfile">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt={UserInfo?.lastName} src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" />
              </IconButton>
              </Link>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <br/>
    <br/>




    {Carts?.length > 0 ?

<Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15,} }>
All Carts Created By Every Staff
</Typography>: ""}

<br/>







   {Carts?.length >0 ?




<div style={{width:1800, marginLeft:80}}>
<MUIDataTable
  title={ `Number of Cart : ${data?.length}`}
  data={data}
  columns={columns}
  options={options}
 

/>


</div> :  

<Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
     No Cart created By Staff yet! 
   </Typography>}





<div>
   
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent><br/>
          
    <div style={{width:800, margin:"0 auto", alignItems:'center', textAlign:'center'}}>
<MUIDataTable
  title={ `Number of Cart Created : ${singleCart?.length}`}
  data={data2}
  columns={columns2}
  options={options2}
 

/>


</div>
    


       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>











{/* Delete Modal */}

    <div>
      
      <Dialog
        open={openDeleteCart}
        onClose={handleClickCloseDeleteCart}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Are You Sure You Want To Permanently delete This Cart?"}
        </DialogTitle>




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
          <br/> 
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
<button type="submit" className="btn btn-success btn-block mb-4"  style={{backgroundColor:'red', }}  onClick={()=>dispatch(DeleteCart())} >
            Delete
          </button>
                 </div>




<div className="form-group focused" style={{marginRight:10}}>
<button type="submit" className="btn btn-success btn-block mb-4"  style={{backgroundColor:'#012949', }} onClick={handleClickCloseDeleteCart} >
            Cancel
          </button>
                 </div>
    </Box>


      </Dialog>
    </div>

{/* end of delete Modal */}






    {/* <Copyright sx={{ mt: 5 }} /> */}


    
    </div>
  );
}
export default Carts;




  
