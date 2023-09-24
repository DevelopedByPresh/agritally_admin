import  React,{useState, useEffect} from 'react';


import VisibilityIcon from '@mui/icons-material/Visibility';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import MUIDataTable from "mui-datatables";

import Badge from '@mui/material/Badge';
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
import Card from '@mui/material/Card';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';



import CardContent from '@mui/material/CardContent';
import {useSelector, useDispatch} from 'react-redux'
import {
    
    GetPigProduct,
    GetPoultryProduct, 
    ClearError, 
    DeletePoultryProduct,
     UpdatePoultryProduct, 
     UpdatePigProduct,
     DeletePigProduct,
     ClearMessage,
     GetEggProduct,
     DeleteEggProduct,
     UpdateEggProduct,
     GetCatFishProduct,
     DeleteCatFishProduct,
     UpdateCatFishProduct
    
    } 
from "../../Actions/Actions"







 const AllProductReport=()=> {


    useEffect(()=>{
        document.body.style.zoom = "65%";
        dispatch(ClearError())
        dispatch(GetPigProduct())
        dispatch(GetPoultryProduct())
        dispatch(GetEggProduct())
        dispatch(GetCatFishProduct())
      
      },[])

  







    const dispatch = useDispatch()
      
  const message = useSelector((state)=>state?.Admin?.message)
  const error = useSelector((state)=>state?.Admin?.error)
  const loading = useSelector((state)=>state?.Admin?.loading)
  const poultry = useSelector((state)=>state?.Admin?.poultyProduct)
  const pig = useSelector((state)=>state?.Admin?.pigProduct)
  const egg = useSelector((state)=>state?.Admin?.eggProduct)
  const catFish = useSelector((state)=>state?.Admin?.catFishProduct)




  


  

const pages = ['About Us', 'Contact Us'];
const settings = [ 'Logout', 'Reset Password','Profile', 'Dashboard',];
const [tableBodyHeight, setTableBodyHeight] = useState("400px");

const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
const [searchBtn, setSearchBtn] = useState(true);
const [downloadBtn, setDownloadBtn] = useState(true);
const [printBtn, setPrintBtn] = useState(true);
const [viewColumnBtn, setViewColumnBtn] = useState(true);
const [filterBtn, setFilterBtn] = useState(true);

const none = 0



const UserInfo = JSON.parse(sessionStorage.getItem('Admin'))


  const [open, setOpen] = useState(false);


  const [report, setReport] = useState('');

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [openEdit, setOpenEdit] = useState(false);
  const [openEditPig, setOpenEditPig] = useState(false);
  const [openEditEgg, setOpenEditEgg] = useState(false);
  const [openEditCatFish, setOpenEditCatFish] = useState(false);
  const [openDeletePoultry, setOpenDeletePoultry] = useState(false);
  const [openDeletePig, setOpenDeletePig] = useState(false);
  const [openDeleteCatFish, setOpenDeleteCatFish] = useState(false);
  const [openDeleteEgg, setOpenDeleteEgg] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const [products, setProducts] = useState({

    quantity:'',
    weight:'',
    status:"",
  })

  const { quantity, weight, status} = products





  
//   const ProductData = {
//     product: [
 
//       { name: "poultry", category: ["Layers", "Broilers"] },
//       { name: "pig", category: ["Boar", "Dry Sows", "In-pigs", "Growers", "Weaners", "Piglets"] },
//       { name: "egg", category: ["Big", "Small"] },
//       { name: "cat Fish", category: ["Fingerings", "Mature"] },
  
 
   
 
//     ]
//   };




  
//   const availableProduct = ProductData.product.find((c) => c.name === selectedProduct);
//   const availableCategory = availableProduct?.category?.find((s) => s.name === selectedProduct);


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 1,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '10px 5px',
      fontSize:15
    },
  }));

  const handleChange = (e)=>{
    const {name, value} = e.target
    setProducts({...products, [name]:value})


  }

  const handleUpdatePoultry = (e)=>{
    e.preventDefault()
    const product = { quantity, status}
     dispatch(UpdatePoultryProduct(product))


   

  }

  const handleUpdatePig = (e)=>{
    e.preventDefault()
    const product = { quantity, weight, status}
    dispatch(UpdatePigProduct(product))

   

  }


  const handleUpdateEgg = (e)=>{
    e.preventDefault()
    const product = { quantity, status}
    dispatch(UpdateEggProduct(product))

   

  }

  
  const handleUpdateCatFish = (e)=>{
    e.preventDefault()
    const product = { quantity, weight, status}
    dispatch(UpdateCatFishProduct(product))

   

  }




  const Status= [
    { label: 'Pending' },
    { label: 'Approved'  },

  
  ];
  





  const handleFocus = () => {
    if (error) {
      dispatch(ClearError());
    }
  
    if(message){
      dispatch(ClearMessage())
    }
  
   
  };






const PoultryReport = ()=>{
    setReport('poultry')
    dispatch(GetPoultryProduct())
    dispatch(ClearError())

}


const PigReport = ()=>{
    setReport('pig')
    dispatch(GetPigProduct())
    dispatch(ClearError())

}


const EggReport = ()=>{
    setReport('egg')
    dispatch(GetEggProduct())
    dispatch(ClearError())

}


const CatFishReport = ()=>{
    setReport('catFish')
    dispatch(GetCatFishProduct())
    dispatch(ClearError())

}


const CowReport = ()=>{
    setReport('cow')
    dispatch(ClearError())

}





const CucumberReport = ()=>{
    setReport('cucumber')
    dispatch(ClearError())

}


const ManureReport = ()=>{
    setReport('manure')
    dispatch(ClearError())

}


const PlantainReport = ()=>{
    setReport('plantain')
    dispatch(ClearError())

}


const FeedReport = ()=>{
    setReport('feed')
    dispatch(ClearError())

}




















  


    const handleClickOpenEdit = (report) => {
      setOpenEdit(true);
  
      sessionStorage.setItem('PoultryUpdateId', report?.id)
      setProducts(report);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    sessionStorage.removeItem('PoultryUpdateId')
  };


  const handleClickOpenEditPig = (report) => {
    setOpenEditPig(true);
    sessionStorage.setItem('PigUpdateId', report?.id)
    setProducts(report);

};

const handleCloseEditPig = () => {
  setOpenEditPig(false);
};




const handleClickOpenEditEgg = (report) => {
    setOpenEditEgg(true);
    sessionStorage.setItem('EggUpdateId', report?.id)
    setProducts(report);
   
};

const handleCloseEditEgg = () => {
  setOpenEditEgg(false);
};


const handleClickOpenEditCatFish = (report) => {
    setOpenEditCatFish(true);
    sessionStorage.setItem('CatFishUpdateId', report?.id)
    setProducts(report);

};

const handleCloseEditCatFish = () => {
  setOpenEditCatFish(false);
};





  const handleClickOpenDeletePoultry = (id) => {
    setOpenDeletePoultry(true);
    sessionStorage.setItem('PoultryId', id)
 
};

const handleClickCloseDeletePoultry = () => {
  setOpenDeletePoultry(false);
  dispatch(ClearError())
};


const handleClickOpenDeletePig = (id) => {
    setOpenDeletePig(true);
    sessionStorage.setItem('PigId', id)

};

const handleClickCloseDeletePig = () => {
  setOpenDeletePig(false);
  dispatch(ClearError())
};





const handleClickOpenDeleteEgg = (id) => {
    setOpenDeleteEgg(true);
    sessionStorage.setItem('EggId', id)

};

const handleClickCloseDeleteEgg = () => {
  setOpenDeleteEgg(false);
  dispatch(ClearError())
};



const handleClickOpenDeleteCatFish = (id) => {
    setOpenDeleteCatFish(true);
    sessionStorage.setItem('CatFishId', id)

};

const handleClickCloseDeleteCatFish = () => {
  setOpenDeleteCatFish(false);
  dispatch(ClearError())
};








setTimeout(()=>{
    if(message){

      dispatch(ClearMessage())


      setOpenDeletePoultry(false);
      setOpenEdit(false);


      setOpenEditPig(false);
      setOpenDeletePig(false);

     setOpenEditEgg(false);
     setOpenDeleteEgg(false);

     setOpenEditCatFish(false);
     setOpenDeleteCatFish(false)
    }
  
 
  },3000)




  useEffect(()=>{
    document.body.style.zoom = "70%";
  
  },[])

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
  





  const PoultryColumns = [
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
         sort: true,
        }
       },
    {
     name: "Section",
     label: "Section",
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
      sort: true,
     }
    },

    {
        name: "Status",
        label: "Status",
        options: {
         filter: true,
         sort: true,
        }
       },


       {
        name: "Remark",
        label: "Remark",
        options: {
         filter: true,
         sort: true,
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


const PigColumns = [
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
         sort: true,
        }
       },
    {
     name: "Section",
     label: "Section",
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
      sort: true,
     }
    },


 

       {
        name: "Weight ",
        label: "Weight ",
        options: {
         filter: true,
         sort: true,
        }
       },

       {
        name: "Status",
        label: "Status",
        options: {
         filter: true,
         sort: true,
        }
       },


       {
        name: "Remark",
        label: "Remark",
        options: {
         filter: true,
         sort: true,
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




   const EggColumns = [
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
         sort: true,
        }
       },
    {
     name: "Size",
     label: "Size",
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
      sort: true,
     }
    },


    {
        name: "Status",
        label: "Status",
        options: {
         filter: true,
         sort: true,
        }
       },


       {
        name: "Remark",
        label: "Remark",
        options: {
         filter: true,
         sort: true,
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


   const CatFishColumns = [
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
         sort: true,
        }
       },
    {
     name: "Section",
     label: "Section",
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
      sort: true,
     }
    },


 

       {
        name: "Weight ",
        label: "Weight ",
        options: {
         filter: true,
         sort: true,
        }
       },

 
       {
        name: "Status",
        label: "Status",
        options: {
         filter: true,
         sort: true,
        }
       },


       {
        name: "Remark",
        label: "Remark",
        options: {
         filter: true,
         sort: true,
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




   const PoultryReportRows =
   poultry &&
   poultry?.map((report) => {

    var date = report?.createdAt,
      newDate = (new Date(date))?.toString();

     return {
        "Date Created":  newDate ,
        Section: report?.section,
        Quantity: report?.quantity,
        'Created By': report?.user?.firstName + ' ' + report?.user?.lastName,
        Status:report?.status,
        Remark:  report?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red'}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green'}}/>,
       
      
          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}} onClick={() => `${( handleClickOpenEdit(report))}`} />
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( handleClickOpenDeletePoultry(report?.id))}`}  />
          ),
   
     };
   });




   const PigReportRows =
   pig &&
   pig?.map((report) => {
    var date = report?.createdAt,
    newDate = (new Date(date))?.toString();

     return {
        "Date Created":  newDate,
        Section: report?.section,
        Quantity: report?.quantity,
        "Weight ": report?.weight + 'kg',
        'Created By':  report?.user?.firstName + ' ' + report?.user?.lastName,
        Status:report?.status,
        Remark:  report?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red'}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green'}}/>,
       
       

          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}}  onClick={() => `${( handleClickOpenEditPig(report))}`} />
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( handleClickOpenDeletePig(report?.id))}`}  />
          ),

     };
   });
 






   const EggReportRows =
   egg &&
   egg?.map((report) => {
    var date = report?.createdAt,
    newDate = (new Date(date))?.toString();

     return {
        "Date Created":  newDate,
        Size: report?.section,
        Quantity: report?.quantity,
        'Created By':  report?.user?.firstName + ' ' + report?.user?.lastName,
        Status:report?.status,
        Remark:  report?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red'}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green'}}/>,
       
       

          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}}  onClick={() => `${( handleClickOpenEditEgg(report))}`} />
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( handleClickOpenDeleteEgg(report?.id))}`}  />
          ),

     };
   });





   
   const CatFishReportRows =
   catFish &&
   catFish?.map((report) => {
    var date = report?.createdAt,
    newDate = (new Date(date))?.toString();

     return {
        "Date Created":  newDate,
        Section: report?.section,
        Quantity: report?.quantity,
        "Weight ": report?.weight + 'kg',
        'Created By':  report?.user?.firstName + ' ' + report?.user?.lastName,
        Status:report?.status,
        Remark:  report?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red'}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green'}}/>,
       
    
          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}}  onClick={() => `${( handleClickOpenEditCatFish(report))}`} />
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( handleClickOpenDeleteCatFish(report?.id))}`}  />
          ),

     };
   });
 



















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
              color: 'inherit',
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


    <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
          mt:1,
          mr:10,
   
          borderRadius: 1,
          cursor:'pointer'
        }}
      >


{/* <Badge badgeContent={pig?.length} color="success" > */}
<StyledBadge badgeContent={pig?.length} color="success">
<Tooltip title="Click To see Reports on Pigs" sx={{cursor:'pointer'}}>
    <Card sx={{ width: 175, cursor:'pointer' }} className="report" onClick={PigReport}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
        Pig Report 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 


    <StyledBadge badgeContent={poultry?.length} color="success">
    <Tooltip title="Click To see Reports on Poultry" sx={{cursor:'pointer'}}>
    <Card sx={{ width: 175, cursor:'pointer'  }} className="report" onClick={PoultryReport}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
    Poultry Report 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 



    <StyledBadge badgeContent={egg?.length} color="success">
    <Tooltip title="Click To see Reports on Eggs" sx={{cursor:'pointer'}}>
    <Card sx={{ width: 175, cursor:'pointer'}} className="report" onClick={EggReport}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
        Egg Reports 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 




    <StyledBadge badgeContent={catFish?.length} color="success">
    <Tooltip title="Click To see Reports on Cat Fish" sx={{cursor:'pointer'}}  onClick={CatFishReport}>
    <Card sx={{ width: 176, cursor:'pointer'  }} className="report">
      <CardContent>
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
         Cat Fish Reports  
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 


    <StyledBadge badgeContent={`${none}`} color="success">
    <Tooltip title="Click To see Reports on Cow" sx={{cursor:'pointer'}} onClick={CowReport}>
     <Card sx={{ width: 175, cursor:'pointer' }} className="report">
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
          Cow Report 
        </Typography>
      </CardContent>
    </Card> 
    </Tooltip>
    </StyledBadge> 







    

    <StyledBadge badgeContent={`${none}`} color="success">
    <Tooltip title="Click To see Reports on Cucumber" sx={{cursor:'pointer'}}  onClick={CucumberReport}>
    <Card sx={{ width: 175, cursor:'pointer'  }} className="report">
      <CardContent>
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
      Cucumber Report 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 



    <StyledBadge badgeContent={`${none}`} color="success">
    <Tooltip title="Click To see Reports on Manure" sx={{cursor:'pointer'}}  onClick={ManureReport}>
    <Card sx={{ width: 175,  cursor:'pointer' }} className="report">
      <CardContent>  
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
      Manure Report 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 


    <StyledBadge badgeContent={`${none}`} color="success"> 
    <Tooltip title="Click To see Reports on Plantain" sx={{cursor:'pointer'}}  onClick={PlantainReport}>
    <Card sx={{ width: 175, cursor:'pointer'   }} className="report">
      <CardContent>   
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
      Plantain Report 
        </Typography>
      </CardContent>
    </Card >
    </Tooltip>
    </StyledBadge> 




    <StyledBadge badgeContent={`${none}`} color="success"> 
    <Tooltip title="Click To see Reports on Feed" sx={{cursor:'pointer'}}  onClick={FeedReport}>
    <Card sx={{ width: 175, cursor:'pointer'  }} className="report">
      <CardContent>
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
      Feed Report 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 




      </Box><br/>

{/* 
      {loading && error === false ?
          <div className='loader'></div> : ""}
          <br/> 
          <br/>  */}

   

 
{report === 'pig' ?

    <div style={{width:1500, margin:'0 auto', alignItems:'center', textAlign:'center'}}>
<MUIDataTable
  title={ `Pig Report `}
  data={PigReportRows}
  columns={PigColumns}
  options={options}
 

/>


</div>: ""}




{report === 'poultry'  ?

    <div style={{width:1500, margin:'0 auto', alignItems:'center', textAlign:'center'}}>
<MUIDataTable
  title={ `Poultry Report `}
  data={PoultryReportRows}
  columns={PoultryColumns}
  options={options}
  sx={{alignItems:'center', textAlign:'center'}}

 

/>


</div>:  ""}<br/>








{report === 'egg'  ?

    <div style={{width:1500, margin:'0 auto', alignItems:'center', textAlign:'center'}}>
<MUIDataTable
  title={ 'Egg Report' }
  data={EggReportRows}
  columns={EggColumns}
  options={options}

 

/>


</div>:  ""}




{report === 'catFish'  ?

    <div style={{width:1500, margin:'0 auto', alignItems:'center', textAlign:'center'}}>
<MUIDataTable
  title={ `Cat Fish Report`}
  data={CatFishReportRows}
  columns={CatFishColumns}
  options={options}

 

/>


</div>:  ""}














<div style={{marginTop: '70px'}}>






{report === 'cow' ?
 <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
No Report on Cows yet! 
   </Typography>
 

: ""}

{report === 'feed' ?
 <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
No Report on Feeds yet! 
   </Typography>
 

: ""}


{report === 'cucumber' ?
 <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
No Report on Cucumber yet! 
   </Typography>
 

: ""}

{report === 'plantain' ?
 <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
No Report on Plantain yet! 
   </Typography>
 

: ""}



{report === 'manure' ?
 <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3} }>
No Report on Manure yet! 
   </Typography>
 

: ""}





</div>











    



{/* 
Edit Modal */}

    
    <div>
      
      <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"

      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Poultry Report"}
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
          <br/> 


        
        {/* <Box sx={{ml:-30}}>

              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Product...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedProduct}
                  fullWidth
                  onFocus={handleFocus}
                  input={<OutlinedInput label="Select State..." />}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  {ProductData.product.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box> */}
          


           
              {/* <FormControl sx={{ width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  
                  id="demo-multiple-name"
                  value={selectedCategory}
                  onFocus={handleFocus}
                  input={<OutlinedInput label="Select Local Government..." />}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {availableProduct?.category.map((e, key) => (
                    <MenuItem key={key} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> 
               */}
          
     

          <Box sx={{display:'flex', justifyContent: 'center'}}>

          <Box >
<TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 400 }}
          onChange={handleChange}
          name='quantity'
          value={quantity}
          onFocus={handleFocus}
        
        /> 
        </Box>




        

<FormControl sx={{  width: 320, ml:7, alignItems:'center' }}>
                <InputLabel id="demo-multiple-name-label">Change Status...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={status}
                  name="status"
                  fullWidth
                 // onFocus={handleFocus}
                  input={<OutlinedInput label="Select State..." />}
                  onChange={handleChange}
                >
                  {Status.map((value, key) => (
                    <MenuItem key={key} value={value.label}> 
                      
                      {value.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>







 
    </Box><br/>
    </Box><br/>




    </form><br/>






 

   
        <DialogActions sx={{display:'flex', justifyContent: 'space-between'}}>

      
      

        <div className="form-group focused" style={{marginRight:15}}>
                  <a href="#!" className="btn btn-danger"   onClick={handleCloseEdit}>Cancel </a>
                  
                 </div>


                 <div className="form-group focused" style={{marginLeft:15}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleUpdatePoultry}>Update </a>
                  
                 </div>
 



  
         
        </DialogActions>
      </Dialog>
    </div>



    <div>
      
      <Dialog
        open={openEditPig}
        onClose={handleCloseEditPig}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"

      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Pig Report"}
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
          <br/> 


        
        {/* <Box sx={{ml:-30}}>

              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Product...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedProduct}
                  fullWidth
                  onFocus={handleFocus}
                  input={<OutlinedInput label="Select State..." />}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  {ProductData.product.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box> */}
          


           
              {/* <FormControl sx={{ width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  
                  id="demo-multiple-name"
                  value={selectedCategory}
                  onFocus={handleFocus}
                  input={<OutlinedInput label="Select Local Government..." />}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {availableProduct?.category.map((e, key) => (
                    <MenuItem key={key} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> 
               */}
          
     <Box sx={{display:'flex', justifyContent: 'center'}}>

<Box sx={{ marginRight:5}}>
<TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 400 }}
          onChange={handleChange}
          name='quantity'
          value={quantity}
          onFocus={handleFocus}
        
        /> 
        </Box>




        <Box >
<TextField
          label="Weight (kg)"
          id="outlined-start-adornment"
          sx={{ width: 330 }}
          onChange={handleChange}
          name='weight'
          value={weight}
          onFocus={handleFocus}
        
        /> 



</Box>




<FormControl sx={{  width: 320, ml:7, alignItems:'center' }}>
                <InputLabel id="demo-multiple-name-label">Change Status...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={status}
                  name="status"
                  fullWidth
                 // onFocus={handleFocus}
                  input={<OutlinedInput label="Select State..." />}
                  onChange={handleChange}
                >
                  {Status.map((value, key) => (
                    <MenuItem key={key} value={value.label}> 
                      
                      {value.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

</Box>







 
    </Box><br/>




    </form><br/>

 

   
        <DialogActions  sx={{display:'flex', justifyContent: 'space-between'}}>

      

        <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-danger"   onClick={handleCloseEditPig}>Cancel </a>
                  
                 </div>


                 <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleUpdatePig}>Update </a>
                  
                 </div>
 



  
         
        </DialogActions>
      </Dialog>
    </div>
    




    <div>
      
      <Dialog
        open={openEditEgg}
        onClose={handleCloseEditEgg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"

      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Egg Report"}
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
          <br/> 


   
          
     <Box sx={{display:'flex', justifyContent: 'center'}}>

<Box sx={{ marginRight:5}}>
<TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 400 }}
          onChange={handleChange}
          name='quantity'
          value={quantity}
          onFocus={handleFocus}
        
        /> 
        </Box>






        <FormControl sx={{  width: 320, ml:7, alignItems:'center' }}>
                <InputLabel id="demo-multiple-name-label">Change Status...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={status}
                  name="status"
                  fullWidth
                 // onFocus={handleFocus}
                  input={<OutlinedInput label="Select State..." />}
                  onChange={handleChange}
                >
                  {Status.map((value, key) => (
                    <MenuItem key={key} value={value.label}> 
                      
                      {value.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>



</Box>







 
    </Box><br/>




    </form><br/>

 

   
        <DialogActions sx={{display:'flex', justifyContent: 'space-between'}}>

      

        <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-danger"  onClick={handleCloseEditEgg}>Cancel </a>
                  
                 </div>
 

                 <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleUpdateEgg}>Update </a>
                  
                 </div>
 



  
         
        </DialogActions>
      </Dialog>
    </div>
    



    <div>
      
      <Dialog
        open={openEditCatFish}
        onClose={handleCloseEditCatFish}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"

      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Cat Fish Report"}
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
          <br/> 


        
      
          
     <Box sx={{display:'flex', justifyContent: 'center'}}>

<Box sx={{ marginRight:5}}>
<TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 400 }}
          onChange={handleChange}
          name='quantity'
          value={quantity}
          onFocus={handleFocus}
        
        /> 
        </Box>




        <Box >
<TextField
          label="Weight (kg)"
          id="outlined-start-adornment"
          sx={{ width: 330 }}
          onChange={handleChange}
          name='weight'
          value={weight}
          onFocus={handleFocus}
        
        /> 



</Box>


  
<FormControl sx={{  width: 320, ml:7, alignItems:'center' }}>
                <InputLabel id="demo-multiple-name-label">Change Status...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={status}
                  name="status"
                  fullWidth
                 // onFocus={handleFocus}
                  input={<OutlinedInput label="Select State..." />}
                  onChange={handleChange}
                >
                  {Status.map((value, key) => (
                    <MenuItem key={key} value={value.label}> 
                      
                      {value.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

</Box>







 
    </Box><br/>




    </form><br/>

 

   
        <DialogActions sx={{display:'flex', justifyContent: 'space-between'}}>

      

        <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-danger"   onClick={handleCloseEditCatFish}>Cancel </a>
                  
                 </div>


                 
        <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleUpdateCatFish}>Update </a>
                  
                 </div>
 



  
         
        </DialogActions>
      </Dialog>
    </div>
    




{/* end Of edit Modal */}











{/* Delete Modal */}



    <div>
      
      <Dialog
        open={openDeletePoultry}
        onClose={handleClickCloseDeletePoultry}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
     

        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Are You Sure You Want To Delete this Product Report?"}
        </DialogTitle>
        <br/>
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
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleClickCloseDeletePoultry}>Cancel </a>
                  
                 </div>

                 <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'red', }} onClick={()=>dispatch(DeletePoultryProduct())}> Delete </a>
                  
                 </div>

       
 
    </Box>














 

   
       
      </Dialog>
    </div>









    <div>
      
      <Dialog
        open={openDeletePig}
        onClose={handleClickCloseDeletePig}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
     

        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Are You Sure You Want To Delete this Product Report?"}
        </DialogTitle>
        <br/>
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
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleClickCloseDeletePig}>Cancel </a>
                  
                 </div>

                 <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'red', }} onClick={()=>dispatch(DeletePigProduct())}> Delete </a>
                  
                 </div>

       
 
    </Box>














 

   
       
      </Dialog>
    </div>





    <div>
      
      <Dialog
        open={openDeleteEgg}
        onClose={handleClickCloseDeleteEgg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
     

        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Are You Sure You Want To Delete this Product Report?"}
        </DialogTitle>
        <br/>
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
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleClickCloseDeleteEgg}>Cancel </a>
                  
                 </div>

                 <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'red', }} onClick={()=>dispatch(DeleteEggProduct())}> Delete </a>
                  
                 </div>

       
 
    </Box>














 

   
       
      </Dialog>
    </div>





    <div>
      
      <Dialog
        open={openDeleteCatFish}
        onClose={handleClickCloseDeleteCatFish}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"

      >
     

        <DialogTitle id="alert-dialog-title" sx={{textAlign:'center'}}>
          {"Are You Sure You Want To Delete this  Cat Fish Product Report?"}
        </DialogTitle>
        <br/>
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
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949', }} onClick={handleClickCloseDeleteCatFish}>Cancel </a>
                  
                 </div>

                 <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'red', }} onClick={()=>dispatch(DeleteCatFishProduct())}> Delete </a>
                  
                 </div>

       
 
    </Box>














 

   
       
      </Dialog>
    </div>




    {/* End of Delete Modal */}

    {/* <Copyright sx={{ mt: 5 }} /> */}


    
    </div>
  );
}
export default AllProductReport;




  
