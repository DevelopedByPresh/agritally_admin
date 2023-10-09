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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {useSelector, useDispatch} from 'react-redux'
import { ClearError, UpdateOrder,DeleteOrder,  ClearMessage,GetAllOrders} from "../../Actions/Actions"






 const Orders=()=> {
    const dispatch = useDispatch()

  useEffect(()=>{
    document.body.style.zoom = "70%";
    dispatch(GetAllOrders())
    
  
  },[])

  const UserInfo = JSON.parse(sessionStorage.getItem('Admin'))

  

      
  const message = useSelector((state)=>state?.Admin?.message)
  const error = useSelector((state)=>state?.Admin?.error)
  const loading = useSelector((state)=>state?.Admin?.loading)

  const orders = useSelector((state)=>state?.Admin?.orders)


  

const pages = ['About Us', 'Contact Us'];
const settings = [ 'Logout', 'Reset Password','Profile', 'Dashboard',];
const [open, setOpen] = useState(false);

const [tableBodyHeight, setTableBodyHeight] = useState("400px");

const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
const [searchBtn, setSearchBtn] = useState(true);
const [downloadBtn, setDownloadBtn] = useState(true);
const [printBtn, setPrintBtn] = useState(true);
const [viewColumnBtn, setViewColumnBtn] = useState(true);
const [filterBtn, setFilterBtn] = useState(true);
const [anchorElNav, setAnchorElNav] = useState(null);
const [anchorElUser, setAnchorElUser] = useState(null);

const [openEdit, setOpenEdit] = useState(false);
const [openDeleteOrder, setOpenDeleteOrder] = useState(false);
const [singleOrder, setSingleOrder] = useState({})

const dateOfEntry = singleOrder?.createdAt
const FormattedDate = (new Date(dateOfEntry))?.toString();

const [order, setOrder] = useState({
  status:''
})

const {status} = order


const handleChange = (e)=>{
  const {name, value} = e.target
  setOrder({...order, [name]:value})
}

const UpdateSingleOrder =(e)=>{
  e.preventDefault()
  const data = {status}
  
  dispatch(UpdateOrder(data))
 
}








const Role= [
  { label: 'Pending' },
  { label: 'Approved'  },


];


const handleFocus = ()=>{
    if(error){
        dispatch(ClearError())
    }
}



  const handleClickOpen = (order) => {
    setSingleOrder(order)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleClickOpenEdit = (order) => {
      
      setOpenEdit(true);
      sessionStorage.setItem('OrderUpdateId', order?.id)
     setOrder(order);
    
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    dispatch(ClearError())
  };



  const handleClickOpenDeleteOrder = (id) => {
    setOpenDeleteOrder(true);
    sessionStorage.setItem('orderId', id)
};

const handleClickCloseDeleteOrder = () => {
  setOpenDeleteOrder(false);
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
      setOpenDeleteOrder(false);
      setOpenEdit(false);
     
    }
  
 
  },3000)





  const columns = [
    {
     name: "Date Of Entry",
     label: "Date Of Entry",
     options: {
      filter: true,
      sort: true,
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
     name: "Unit Price",
     label: "Unit Price",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "Total",
      label: "Total",
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
      name: "Remark",
      label: "Remark",
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
   orders &&
   orders?.map((order) => {
    var date = order?.createdAt,
    newDate = (new Date(date))?.toString();

     return {
        "Date Of Entry":  newDate,
        Quantity: order?.cartId?.cartItems?.[0]?.quantity,
        'Unit Price':  '₦' + order?.cartId?.cartItems?.[0]?.price,
        'Total': ' ₦' + order?.cartId?.cartItems?.[0]?.subtotal,
        Status: order?.status,
        Remark:  order?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red'}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green'}}/>,
       

          Details:   (
            <VisibilityIcon  sx={{cursor:'pointer', color:'blue'}}  onClick={() => `${( handleClickOpen(order))}`} />
          ),
          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}}  onClick={() => `${( handleClickOpenEdit(order))}`} />
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}  onClick={() => `${( handleClickOpenDeleteOrder(order?.id))}`}  />
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







  return (
    <div>


<AppBar position="static" sx={{  backgroundColor: '#012949' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to="/Dashboard" style={{color:'white'}}>
          <Typography
            variant="h6"
            noWrap
           // component="a"
      
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




    {orders?.length > 0 ?

    <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15,} }>
   All Orders Created By Every Staff
   </Typography>: ""}

<br/>




   

{orders?.length > 0 ?


    <div style={{width:1800, marginLeft:80}}>
<MUIDataTable
  title={ `Number of Orders : ${data?.length}`}
  data={data}
  columns={columns}
  options={options}
 

/>
</div> : 



<Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
     No Existing Orders At the Moment! 
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
        <div id="alert-dialog-title h3" style={{marginTop:20, marginLeft:25}}>
          <h3 style={{display:'inline'}}> Order  Details  </h3> <h3 style={{display:'inline', marginLeft:'90px'}}> Your Order Transaction Id : {singleOrder?.cartId?._id}</h3> 
        </div>
      
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

           Order Status :  {singleOrder?.status}, Edit To Approve!          {singleOrder?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:10, marginTop:-0.5}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green'}}/>},
          </DialogContentText>
          <br/>

          <DialogContentText id="alert-dialog-description">
          Date Of Entry : {`${FormattedDate}`}
          </DialogContentText>
          <br/>

          <DialogContentText id="alert-dialog-description">
        Total Quantity : {singleOrder?.cartId?.cartItems?.[0]?.quantity}
          </DialogContentText><br/>


          <DialogContentText id="alert-dialog-description">
        Order Unit Price :  ₦ { singleOrder?.cartId?.cartItems?.[0]?.price}
          </DialogContentText>
          <br/>


          <DialogContentText id="alert-dialog-description">
        Order Sub Total :  ₦ { singleOrder?.cartId?.cartItems?.[0]?.subtotal}
          </DialogContentText>
          <br/>


       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>





{/* Edit Modal */}

    
    <div>
      
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
        <DialogTitle id="alert-dialog-title">
          {"Approve Order"}
        </DialogTitle>




        <form>
        
        <Box
        sx={{
       
          p: 1,
          m: 1,
          mt:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >


{message && 

<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'40%', margin:'0px auto'}}>
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
    
          
     

<Box sx={{textAlign:'center',  alignItems:'center'}}>


  
<FormControl sx={{  width: 320, alignItems:'center' }}>
                <InputLabel id="demo-multiple-name-label">Edit Order...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={status}
                  name="status"
                  onFocus={handleFocus}
                  fullWidth
                 // onFocus={handleFocus}
                  input={<OutlinedInput label="Select State..." />}
                  onChange={handleChange}
                >
                  {Role.map((value, key) => (
                    <MenuItem key={key} value={value.label}> 
                      
                      {value.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

        </Box>

    </Box><br/>




    </form>
    <br/>
        <DialogActions>
        <div className="form-group focused" style={{marginRight:10}}>

        <button type="submit" className="btn btn-success btn-block mb-4"  style={{backgroundColor:'#012949', }} onClick={UpdateSingleOrder} >
            Update
          </button> 
                 </div>
        </DialogActions>
      </Dialog>
    </div>

{/* End of Edit Modal */}






{/* Delete Modal */}

    <div>
      
      <Dialog
        open={openDeleteOrder}
        onClose={handleClickCloseDeleteOrder}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
     

        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Are You Sure You Want To Permanently delete This Order?"}
        </DialogTitle>




        {message && 

<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'50%', margin:'0px auto'}}>
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

<button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'red', }} onClick={()=>dispatch(DeleteOrder())}>
            Delete
          </button>                  
                 </div>




<div className="form-group focused" style={{marginRight:10}}>
<button type="submit" className="btn btn-success btn-block mb-4"  style={{backgroundColor:'#012949', }} onClick={handleClickCloseDeleteOrder}>
            Delete
          </button>  
                  
                 </div>

              

       
 
    </Box>














 

   
       
      </Dialog>
    </div>

{/* end of delete Modal */}






    <Copyright sx={{ mt: 5 }} />


    
    </div>
  );
}
export default Orders;




  
