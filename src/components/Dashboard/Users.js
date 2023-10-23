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

import {useSelector, useDispatch} from 'react-redux'
import { ClearError, GetAllStaff, DeleteStaff, UpdateStaff,  ClearMessage} from "../../Actions/Actions"






 const Users=()=> {


  useEffect(()=>{
    document.body.style.zoom = "70%";
  
  },[])

  const UserInfo = JSON.parse(sessionStorage.getItem('Admin'))

  
  const dispatch = useDispatch()
      
  const message = useSelector((state)=>state?.Admin?.message)
  const error = useSelector((state)=>state?.Admin?.error)
  const loading = useSelector((state)=>state?.Admin?.loading)
  const staff = useSelector((state)=>state?.Admin?.staff)


  

const pages = ['About Us', 'Contact Us'];
const settings = [ 'Logout', 'Reset Password','Profile', 'Dashboard',];
const [open, setOpen] = useState(false);

  
const [anchorElNav, setAnchorElNav] = useState(null);
const [anchorElUser, setAnchorElUser] = useState(null);

const [openEdit, setOpenEdit] = useState(false);
const [openDeleteUser, setOpenDeleteUser] = useState(false);

const [user, setUser] = useState({
  role:''
})

const {role} = user


const handleChange = (e)=>{
  const {name, value} = e.target
  setUser({...user, [name]:value})
}

const UpdateSingleStaff =(e)=>{
  e.preventDefault()
  const user = {role}
  
  dispatch(UpdateStaff(user))
 
}








const Role= [
  { label: 'staff' },
  { label: 'owner'  },
  { label: 'manager' },
  { label: 'admin' },
  { label: 'superAdmin' },

];



useEffect(()=>{
  dispatch(GetAllStaff())
},[])









  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleClickOpenEdit = (user) => {
      setOpenEdit(true);
      sessionStorage.setItem('UserUpdateId', user?._id)
     setUser({...user});
    
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    dispatch(ClearError())
  };



  const handleClickOpenDeleteUser = (id) => {
    setOpenDeleteUser(true);
    sessionStorage.setItem('userId', id)
  
};

const handleClickCloseDeleteUser = () => {
  setOpenDeleteUser(false);
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
      setOpenDeleteUser(false);
      setOpenEdit(false);
     
    }
  
 
  },3000)





  const columns = [
    {
     name: "First Name",
     label: "First Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Last Name",
     label: "Last Name",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Date Of Birth",
     label: "Date Of Birth",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "Email Address",
      label: "Email Address",
      options: {
       filter: true,
       sort: false,
      }
     },

     
     {
      name: "Phone Number",
      label: "Phone Number",
      options: {
       filter: true,
       sort: false,
      }
     },

     {
      name: "Staff Role",
      label: "Staff Role",
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
   staff &&
   staff?.map((user) => {

     return {
        "First Name": user?.firstName,
        "Last Name": user?.lastName,
        'Date Of Birth':user?.date_of_birth,
        'Email Address': user?.email,
        'Phone Number':user?.phone,
        'Staff Role':user?.role,
        Edit:   (
          <EditIcon  sx={{cursor:'pointer', color:'blue'}}  onClick={() => `${( handleClickOpenEdit(user))}`} />
        ),

        Delete:   (
          <DeleteIcon  sx={{cursor:'pointer', color:'red'}}  onClick={() => `${( handleClickOpenDeleteUser(user?._id))}`}  />
        ),

  
     };
   });









   
   const options = {
     filterType: 'checkbox',
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
            <Tooltip >
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







    {staff?.length > 0 ?

<Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15,} }>
   All Existing Staff   
</Typography>: ""}

<br/>





   

{staff?.length > 0 ?


<div style={{width:1800, marginLeft:80}}>
<MUIDataTable
  title={ `Number of Staff : ${data?.length}`}
  data={data}
  columns={columns}
  options={options}
/>

</div> :

<Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
     No Existing Staff At the Moment! 
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
        <DialogTitle id="alert-dialog-title">
          {" Order Entry Details"}
        </DialogTitle>
      
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        Customer Name : Precious Mike
          </DialogContentText>
          <br/>

          <DialogContentText id="alert-dialog-description">
          Date Of Entry : 03 - 2 -2023
          </DialogContentText>
          <br/>


          <DialogContentText id="alert-dialog-description">
        Order Amount : $234.78
          </DialogContentText>
          <br/>


          <DialogContentText id="alert-dialog-description">
        Total Quantity&nbsp;(g) : 34.98
          </DialogContentText>
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
          {"Change Staff's Role"}
        </DialogTitle>

        <form>
        <Box
        sx={{
          p: 1,
          m: 1,
          mt:5,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >


{message && 

<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'60%', margin:'0px auto'}}>
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
                <InputLabel id="demo-multiple-name-label">Change Role...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={role}
                  name="role"
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
   
        <DialogActions>
        <div className="form-group focused" style={{marginRight:10}}>
         <button type="submit" className="btn btn-success btn-block mb-4"  style={{backgroundColor:'#012949', }}  onClick={UpdateSingleStaff} >
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
        open={openDeleteUser}
        onClose={handleClickCloseDeleteUser}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Are You Sure You Want To Delete this Staff?"}
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


 <Box sx={{ display: 'flex',justifyContent: 'center',p: 1, m: 1,mt:1,bgcolor: 'background.paper',borderRadius: 1, }}>
         <div className="form-group focused" style={{marginRight:10}}>


         <button type="submit" className="btn btn-success btn-block mb-4"  style={{backgroundColor:'#012949', }}  onClick={handleClickCloseDeleteUser} >
            Cancel
          </button>
                 
                 </div>
                 <div className="form-group focused" style={{marginRight:10}}>

                 <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'red', }}   onClick={()=>dispatch(DeleteStaff())} >
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
export default Users;




  
