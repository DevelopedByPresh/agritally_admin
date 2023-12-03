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
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LineChart } from '@mui/x-charts/LineChart';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { jwtDecode } from "jwt-decode"
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




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
     LoggedOut,

     CreateFishRecord,
     GetFishRecord,
     UpdateFishRecord,
     DeleteFishRecord,

     CreatePoultryRecord,
     GetPoultryRecord,
     UpdatePoultryRecord,
     DeletePoultryRecord,
  
    
   
    
    } 
from "../../Actions/Actions"






function Dashboard() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('AdminToken')
  
  const admin = JSON.parse(sessionStorage.getItem('Admin'))

  const id = admin?.id


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
    dispatch(GetPoultryRecord())
    dispatch(GetFishRecord())
   
  },[])








  const UserInfo = JSON.parse(sessionStorage.getItem('UpdateAdmin'))
  const dispatch = useDispatch()
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPig, setSelectedPig] = useState();
  const [selectedPoultry, setSelectedPoultry] = useState();
  const [selectedEgg, setSelectedEgg] = useState();
  const [selectedFish, setSelectedFish] = useState();
  const [selectedPen, setSelectedPen] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [link, setLink] = useState('DashBoard')
  const [Product, setProduct] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
const [btnValue, setBtnValue] = useState('Submit')
const [PigBtnValue, setPigBtnValue] = useState('Submit')
const [FishBtnValue, setFishBtnValue] = useState('Submit')
const [PoultryBtnValue, setPoultryBtnValue] = useState('Submit')
const [prod, setProd] = useState(true)
const [openEdit, setOpenEdit] = useState(false);
const [openDelete, setOpenDelete] = useState(false);



const [tableBodyHeight, setTableBodyHeight] = useState("200px");
const [tableBodyHeight2, setTableBodyHeight2] = useState("300px");

const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
const [searchBtn, setSearchBtn] = useState(true);
const [downloadBtn, setDownloadBtn] = useState(true);
const [printBtn, setPrintBtn] = useState(true);
const [viewColumnBtn, setViewColumnBtn] = useState(true);
const [filterBtn, setFilterBtn] = useState(true);







  const message = useSelector((state)=>state?.Admin?.message)
  const error = useSelector((state)=>state?.Admin?.error)
  const loading = useSelector((state)=>state?.Admin?.loading)
  const EggRecords = useSelector((state)=>state?.Admin?.EggRecord)
  const PigRecords = useSelector((state)=>state?.Admin?.PigRecord)
  const FishRecords = useSelector((state)=>state?.Admin?.FishRecord)
  const PoultryRecords = useSelector((state)=>state?.Admin?.PoultryRecord)
  const EggStats = useSelector((state)=>state?.Admin?.EggStat)
const poultry = useSelector((state)=>state?.Admin?.poultyProduct)
const pig = useSelector((state)=>state?.Admin?.pigProduct)
const egg = useSelector((state)=>state?.Admin?.eggProduct)
const catFish = useSelector((state)=>state?.Admin?.catFishProduct)















useEffect(() => {
  let timerRef = null;

  if(token){

  

  const decoded = jwtDecode(token);

  const expiryTime = (new Date(decoded.exp * 1000)).getTime();
  const currentTime = (new Date()).getTime();

  const timeout = expiryTime - currentTime;
  const onExpire = () => {
    dispatch(LoggedOut());
    sessionStorage.clear()
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


}
}, [dispatch, navigate, token]);





const ProductData = {
  product: [

    { name: "Poultry", category: ["Layers", "Broilers"] },
    { name: "Pig", category: ["Boar", "Dry Sows", "In-pigs", "Growers", "Weaners", "Piglets"] },
    { name: "Egg", category: ["Big", "Small"] },
    { name: "Fish", category: ["Fingerlings", "Mature"] },
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


const EggData = {
  EggProduct: [

    { name: "Big" },
    { name: "Small" },
  
  ]
};



const PoultryData = {
  PoultryProduct: [

    { name: "Layers" },
    { name: "Broilers" },
  
  ]
};





const FishData = {
  FishProduct: [

    { name: "Fingerlings" },
    { name: "Mature" },
  
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
const availablePoultry = PoultryData.PoultryProduct.find((c) => c.name === selectedPoultry);
const availableFish = FishData.FishProduct.find((c) => c.name === selectedFish);
const availableEgg = EggData.EggProduct.find((c) => c.name === selectedEgg);
const availableCategory = availableProduct?.category?.find((s) => s.name === selectedProduct);







  

  const handleSwitch = ()=>{
    setProd(!prod)
   
  }

const [status, setStatus] = useState('Approved')

  const [EggRecord, setEggRecord] = useState({
    user:'',
    category:"",
    penNumber:'',
    totalBirdHoused:'',
    ageHoused:"",
    mortality:"",
    waterConsumption:"",
    feedConsumption:"",
    remark:'',
    culls:"",
    // openingBalance:'',
    // closingBalance:'',

    eggCollection:{
      firstTray:"",
      secondTray:"",
      thirdTray:"",
      cracks:"",
      production:''
    }

  })
  const { penNumber, totalBirdHoused, ageHoused, mortality,  waterConsumption, feedConsumption, remark, culls, eggCollection, }  = EggRecord
  
  EggRecord.user = id
  EggRecord.category = selectedEgg




  
  const [PigRecord, setPigRecord] = useState({
    user:'',
    pen:"",
    category:'',
    room:'',
    quantity:"",
    mortality:"",


  })
  const {pen, category,room,quantity,  user } = PigRecord

  PigRecord.pen = selectedPen
  PigRecord.category = selectedPig
  PigRecord.user = id



    
  const [PoultryRecord, setPoultryRecord] = useState({
    User:'',
    category:'',
    quantity:"",
    mortality:"",


  })
 // const {cat,qty, mort, User } = PoultryRecord



 const [FishRecord, setFishRecord] = useState({
  User:'',
  category:'',
  quantity:"",
  mortality:"",
  weight:""


})
// const {cat,qty, mort, User } = PoultryRecord



const handleChangeFish =(e)=>{
  const {name, value} = e.target
  setFishRecord({...FishRecord, [name]:value})

}
 

  const handleChangePoultry =(e)=>{
    const {name, value} = e.target
    setPoultryRecord({...PoultryRecord, [name]:value})

  }

  
  
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
    const category = selectedEgg
    const data = {
      user,
      category, 
        penNumber,
       totalBirdHoused,
        ageHoused,
         mortality,
         waterConsumption,
         feedConsumption,
         remark,
         culls, 
         eggCollection,
        
        }

  dispatch(CreateEggRecord(data))
 
  }



  const HandleSubmitPoultry = (e)=>{
    e.preventDefault()
    const user = id
    const category = selectedPoultry
    const mortality = PoultryRecord.mortality
    const quantity = PoultryRecord.quantity
    const data = {category,user, mortality, quantity}

  dispatch(CreatePoultryRecord(data))
 
  }



  const HandleSubmitFish = (e)=>{
    e.preventDefault()
    const user = id
    const category = selectedFish
    const mortality = FishRecord.mortality
    const quantity = FishRecord.quantity
    const weight = FishRecord.weight
    const data = {category,user, mortality, quantity, weight}

  dispatch(CreateFishRecord(data))
 
  }


  const handleUpdate = (e)=>{
    e.preventDefault()
    var category = selectedEgg
    if(category === '' || category === undefined || category === null){
     var category = sessionStorage.getItem('EggCategory')

    }else{
     var category = selectedEgg
    }
   

 
    const data = {
        category, 
        penNumber,
       totalBirdHoused,
        ageHoused,
         mortality,
         waterConsumption,
         feedConsumption,
         remark,
         culls, 
         eggCollection,
       
        }

  dispatch(UpdateEggRecord(data))

  }



  const handleUpdateFish = (e)=>{
    e.preventDefault()
    const user = id
    const category = selectedFish
    const mortality = FishRecord.mortality
    const quantity = FishRecord.quantity
    const weight = FishRecord.weight
    const data = {category,user, mortality, quantity, weight}

  dispatch(UpdateFishRecord(data))
  }






  const handleUpdatePoultry = (e)=>{
    e.preventDefault()

    var category = selectedPoultry
    if(category === '' || category === undefined || category === null){
     var category = sessionStorage.getItem('PoultryCategory')

    }else{
     var category = selectedPoultry
    }
  

    const user = id
    const mortality = PoultryRecord.mortality
    const quantity = PoultryRecord.quantity
    const data = {category,user, mortality, quantity}

  dispatch(UpdatePoultryRecord(data))
  }















  const handleUpdatePig = (e)=>{
    e.preventDefault()
    const mortality = PigRecord.mortality
    const data = { pen, category,room,quantity, mortality}

  dispatch(UpdatePigRecord(data))


  }




  const HandleSubmitPig = (e)=>{
    e.preventDefault()
    const mortality = PigRecord.mortality
    const data = { user,pen, category,room,quantity, mortality}
 

 dispatch(CreatePigRecord(data))
  



  }




  const handleClickOpenEdit = (record) => {
    setOpenEdit(true);

    sessionStorage.setItem('EggUpdateId', record?.id)
    sessionStorage.setItem('EggCategory', record?.category)
    setEggRecord({...record});
    setBtnValue('Update')
  
  };


  
  const EditPig = (record) => {
    setOpenEdit(true);
    sessionStorage.setItem('PigUpdateId', record?.id)
    setPigRecord({...record});
   
    setPigBtnValue('Update')
  
  };



  const EditPoultry = (record) => {
    setOpenEdit(true);
    sessionStorage.setItem('PoultryUpdateId', record?.id)
    sessionStorage.setItem('PoultryCategory', record?.category)
    setPoultryRecord({...record});
   
    setPoultryBtnValue('Update')
  
  };



  const EditFish = (record) => {
    setOpenEdit(true);
    sessionStorage.setItem('FishUpdateId', record?.id)
    setFishRecord({...record});
   
    setFishBtnValue('Update')
  
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


     
  const DeletePoultry = (id) => {
    // setOpenDelete(true);
     sessionStorage.setItem('PoultryId', id)
     dispatch( DeletePoultryRecord())
   
     
     };


     
  const DeleteFish = (id) => {
    // setOpenDelete(true);
     sessionStorage.setItem('FishId', id)
     dispatch( DeleteFishRecord())
   
     
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
  




const Approve = (record)=>{
    sessionStorage.setItem('PoultryUpdateId', record?.id)
  const category = record?.category
  const data = {category, status}
  dispatch(UpdatePoultryRecord(data))
}



const ApprovePig = (record)=>{
  sessionStorage.setItem('PigUpdateId', record?.id)
  const category = record?.category
  const data = {category, status}
  dispatch(UpdatePigRecord(data))
}



const ApproveFish = (record)=>{
  sessionStorage.setItem('FishUpdateId', record?.id)
  const category = record?.category
  const data = {category, status}
  dispatch(UpdateFishRecord(data))
}


const ApproveEgg = (record)=>{

  sessionStorage.setItem('EggUpdateId', record?.id)
  const category = record?.category
  const data = {category, status}
  dispatch(UpdateEggRecord(data))
}








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
    // {
    //  name: "Opening Stock",
    //  label: "Opening Stock",
    //  options: {
    //   filter: true,
    //   sort: false,
    //  }
    // },
    {
     name: "Mortality",
     label: "Mortality",
     options: {
      filter: true,
      sort: false,
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
      name: "Age Housed",
      label: "Age Housed",
      options: {
       filter: true,
       sort: false,
      }
     },




    //  {
    //   name: "Culls",
    //   label: "Culls",
    //   options: {
    //    filter: true,
    //    sort: false,
    //   }
    //  },


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


     

    //  {
    //   name: "Total Bird Housed",
    //   label: "Total Bird Housed",
    //   options: {
    //    filter: true,
    //    sort: false,
    //   }
    //  },

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
       filter: false,
       sort: false,
      }
     },


     {
      name: "Action",
      label: "Action",
      options: {
       filter: false,
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
       filter: false,
       sort: false,
      }
     },


     {
      name: "Action",
      label: "Action",
      options: {
       filter: false,
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






    
 





    
   const PoultryRecordcolumns = [
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
     name: "Quantity",
     label: "Quantity",
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
       filter: false,
       sort: false,
      }
     },


     {
      name: "Action",
      label: "Action",
      options: {
       filter: false,
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
   







   const FishRecordcolumns = [
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
     name: "Weight",
     label: "Weight",
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
      name: "Mortality",
      label: "Mortality",
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
       filter: false,
       sort: false,
      }
     },


     {
      name: "Action",
      label: "Action",
      options: {
       filter: false,
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
   PoultryRecords &&
   PoultryRecords?.map((record) => {
    // var date = record?.createdAt,
    // newDate = (new Date(date))?.toDateString();

     return {
 
        'Opening Stock': (<h5 style={{marginLeft:30}}>{record?.openingBalance} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
        Section :  (<h5 style={{marginLeft:20}}>{record?.category} </h5>),
        "Closing Stock":(<h5 style={{marginLeft:30}}>{record?.openingBalance} </h5>)


   

     };
   });



   const data2 =
   PigRecords &&
   PigRecords?.map((record) => {
    // var date = record?.createdAt,
    // newDate = (new Date(date))?.toDateString();

     return {
 
        'Opening Stock': (<h5 style={{marginLeft:30}}>{record?.openingBalance} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
        Section :  (<h5 style={{marginLeft:20}}>{record?.category} </h5>),
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
       // 'Opening Stock': (<h5 style={{marginLeft:30}}>{record?.openingBalance} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
        Category :record?.category,
        'Age Housed' :  (<h5 style={{marginLeft:30}}>{record?.ageHoused} </h5>),
       // Culls :  record?.culls,
        'Feed Consumption': (<h5 style={{marginLeft:30}}>{record?.feedConsumption} </h5>),
        'Water Consumption': (<h5 style={{marginLeft:30}}>{record?.waterConsumption} </h5>),
        'Pen Number': (<h5 style={{marginLeft:30}}>{record?.penNumber} </h5>),
        'First Tray': (<h5 style={{marginLeft:20}}>{record?.eggCollection?.firstTray} </h5>),
        'Second Tray': (<h5 style={{marginLeft:30}}>{record?.eggCollection?.secondTray} </h5>),
        'Third Tray': (<h5 style={{marginLeft:20}}>{record?.eggCollection?.thirdTray} </h5>),
        Cracks: (<h5 style={{marginLeft:20}}>{record?.eggCollection?.cracks} </h5>),
        "Total Bird Housed": (<h5 style={{marginLeft:20}}>{record?.totalBirdHoused} </h5>),
        Status:record?.status,

        Remark:  record?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,

    
        Action:  record.status === 'Pending' ?      <button type="submit" className="btn btn-success btn-block mb-4" style={{ marginLeft:'-20px', marginTop:'20px', backgroundColor:'green', width: 100, height:'40px'}}     onClick={() => `${( ApproveEgg(record))}`}> Approve</button> : <button type="submit" cursor='not-allowed' className="btn btn-success btn-block mb-4" style={{ marginLeft:'-20px',backgroundColor:'gray',padding:'10px', cursor:'not-allowed', color:'black',width: 100, height:'40px', marginTop:'20px',border:'none', outline:'none'}}> Approved </button>,
     

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
        Status:record?.status,
        Room:  (<h5 style={{marginLeft:15}}>{record?.room} </h5>),
        Quantity:   (<h5 style={{marginLeft:20}}>{record?.quantity} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
       Pen: (<h5 style={{marginLeft:10}}>{record?.pen} </h5>),

       Remark:  record?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,

    
       Action:  record.status === 'Pending' ?      <button type="submit" className="btn btn-success btn-block mb-4" style={{ marginLeft:'-20px', marginTop:'20px', backgroundColor:'green', width: 100, height:'40px'}}     onClick={() => `${( ApprovePig(record))}`}> Approve</button> : <button type="submit" cursor='not-allowed' className="btn btn-success btn-block mb-4" style={{ marginLeft:'-20px',backgroundColor:'gray',padding:'10px', cursor:'not-allowed', color:'black',width: 100, height:'40px', marginTop:'20px',border:'none', outline:'none'}}> Approved </button>,
     

         
          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}} onClick={() => `${( EditPig(record))}`}/>
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( DeletePig(record?.id))}`} />
          ),

     };
   });
 



   




   
   const PoultryRecordData =
   PoultryRecords &&
   PoultryRecords?.map((record) => {
    var date = record?.createdAt,
    newDate = (new Date(date))?.toDateString();

     return {
        "Date Entered":  newDate,
        Category:  record?.category,
        Status:record?.status,
        Quantity:   (<h5 style={{marginLeft:20}}>{record?.quantity} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
      
       Remark:  record?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,

       Action:  record.status === 'Pending' ?      <button type="submit" className="btn btn-success btn-block mb-4" style={{ marginLeft:'-20px', marginTop:'20px', backgroundColor:'green', width: 100, height:'40px'}}     onClick={() => `${( Approve(record))}`}> Approve</button> : <button type="submit" cursor='not-allowed' className="btn btn-success btn-block mb-4" style={{ marginLeft:'-20px',backgroundColor:'gray',padding:'10px', cursor:'not-allowed', color:'black',width: 100, height:'40px', marginTop:'20px',border:'none', outline:'none'}}> Approved </button>,
     
          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}} onClick={() => `${( EditPoultry(record))}`}/>
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( DeletePoultry(record?.id))}`} />
          ),

     };
   });



   const FishRecordData  =
   FishRecords &&
   FishRecords?.map((record) => {
    var date = record?.createdAt,
    newDate = (new Date(date))?.toDateString();

     return {
        "Date Entered":  newDate,
        Category:  record?.category,
        Mortality:(<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
        Status:record?.status,
        Quantity:   (<h5 style={{marginLeft:20}}>{record?.quantity} </h5>),
      Weight :(<h5 style={{marginLeft:20}}>{record?.weight}Kg  </h5>),
      
       Remark:  record?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,

       Action:  record.status === 'Pending' ?      <button type="submit" className="btn btn-success btn-block mb-4" style={{ marginLeft:'-20px', marginTop:'20px', backgroundColor:'green', width: 100, height:'40px'}}     onClick={() => `${( ApproveFish(record))}`}> Approve</button> : <button type="submit" cursor='not-allowed' className="btn btn-success btn-block mb-4" style={{ marginLeft:'-20px',backgroundColor:'gray',padding:'10px', cursor:'not-allowed', color:'black',width: 100, height:'40px', marginTop:'20px',border:'none', outline:'none'}}> Approved </button>,
     

          Edit:   (
            <EditIcon  sx={{cursor:'pointer', color:'blue'}} onClick={() => `${( EditFish(record))}`}/>
          ),

          Delete:   (
            <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( DeleteFish(record?.id))}`} />
          ),

     };
   });
 
 









   const options2 = {
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



  const options3 = {
    filterType: 'checkbox',

    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
  
    tableBodyHeight: tableBodyHeight2,
   tableBodyMaxHeight,
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

{/* 
           <li className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i>
           <Link to="/Dashboard/Transactions" >
           <span style={{color:'black'}}>All Transactions</span> 
           </Link>
           </li> */}


           
  
   
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
  options={options2}
 

/>


</div>


<div style={{width:800}}>
<MUIDataTable
  title={"Pigs"}
  data={data2}
  columns={columns}
  options={options2}
/>

</div>


</Box>



              
            
            </div>}

         




            {link === 'MonthlyStat' &&
            
            <div className="page-contents">


<Box sx={{ justifyContent: 'center', alignItems:'center', textAlign:"center", mt:2 }}>
              <FormControl sx={{  width: 600 }}>
                <InputLabel id="demo-multiple-name-label" >Select Product To Enter Record...</InputLabel>
                <Select
                  sx={{ width: 600, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedProduct || ""}
                  fullWidth
              // onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product To Enter Record..." />}
                  onChange={(e) => setSelectedProduct(e.target.value)}>
                  {ProductData.product.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>
              <br/>



              {/* {selectedProduct === null ? 
              <h3 style={{ textAlign: 'center', marginTop:'40px', fontFamily:'sans-serif' }}>Please Select Product To Start Entering Record!</h3>:""}

 */}



              
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
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'30%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {error}!




</div>
</div>  
 }









      {selectedProduct === 'Egg' && link === 'MonthlyStat'  ?    
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


            <Box sx={{mr:12}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 250, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedEgg || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedEgg(e.target.value)}>
                  {EggData.EggProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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



        {/* <Box >
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
        </Box> */}



        <Box >
           <TextField
          label="Remark..."
          id="outlined-start-adornment"
          sx={{ width: 1100 }}
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


















     

    


          
            
 {selectedProduct === 'Egg' &&  EggRecords?.length > 0  && link === 'MonthlyStat'?   


<div >
<MUIDataTable
  title={"Egg Record"}
  data={EggRecordData}
  columns={EggRecordcolumns}
  options={options3}
/>

</div> : ""}






   
            
            </div>   }







            {selectedProduct === 'Pig'  && link === 'MonthlyStat' ?    
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
          name='mortality'
          value={PigRecord?.mortality}
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




            
 {selectedProduct === 'Pig' &&  PigRecords?.length > 0 && link === 'MonthlyStat' ?   


<div style={{marginTop:'100px', width:1800, margin:'100px auto 0 auto'}} >
<MUIDataTable
  title={"Pig Record"}
  data={PigRecordData}
  columns={PigRecordcolumns}
  options={options3}
/>

</div> : ""}

















{/* Poultry Start */}




{selectedProduct === 'Poultry'  && link === 'MonthlyStat'?    
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




        <Box sx={{mr:50}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 550, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedPoultry || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedPoultry(e.target.value)}>
                  {PoultryData.PoultryProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>   

    
        <Box >
           <TextField
          label="Mortality"
          id="outlined-start-adornment"
          sx={{ width: 550}}
          type='number'
         onChange={handleChangePoultry}
          name='mortality'
          value={PoultryRecord.mortality}
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 550}}
          type='number'
          onChange={handleChangePoultry} 
          value={PoultryRecord.quantity}
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






        {PoultryBtnValue === 'Submit' ?
        <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmitPoultry} >
            Submit
          </button> 
             
        </Box> : ""} 


{PoultryBtnValue === 'Update' ?
 <Box sx={{mt:2, float:'right', mr:10}}>

<button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={handleUpdatePoultry} >
    Update
  </button> 
     
</Box> : ""}


        </Box> 


        : ""}




            
 {selectedProduct === 'Poultry' &&  PoultryRecords?.length > 0 && link === 'MonthlyStat' ?   


<div style={{marginTop:'100px', width:1800, margin:'100px auto 0 auto'}} >
<MUIDataTable
  title={"Poultry Record"}
  data={PoultryRecordData}
  columns={PoultryRecordcolumns}
  options={options3}
/>

</div> : ""}



{/* poultry stop */}








{/* Fish Start */}




{selectedProduct === 'Fish' && link === 'MonthlyStat' ?    
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




        <Box sx={{mr:30}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 400, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedFish || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedFish(e.target.value)}>
                  {FishData.FishProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>   

    
        <Box >
           <TextField
          label="Mortality"
          id="outlined-start-adornment"
          sx={{ width: 400}}
          type='number'
         onChange={handleChangeFish}
          name='mortality'
          value={FishRecord.mortality}
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 400}}
          type='number'
          onChange={handleChangeFish} 
          value={FishRecord.quantity}
          name='quantity'
          onFocus={handleFocus}
        /> 
        </Box>



        <Box >
           <TextField
          label="weight"
          id="outlined-start-adornment"
          sx={{ width: 400}}
          type='number'
          onChange={handleChangeFish} 
          value={FishRecord.weight}
          name='weight'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>

        {/* <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmitPig} >
            Submit
          </button> 
             
        </Box>  */}






        {FishBtnValue === 'Submit' ?
        <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmitFish} >
            Submit
          </button> 
             
        </Box> : ""} 


{FishBtnValue === 'Update' ?
 <Box sx={{mt:2, float:'right', mr:10}}>

<button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={handleUpdateFish} >
    Update
  </button> 
     
</Box> : ""}


        </Box> 


        : ""}




            
 {selectedProduct === 'Fish' &&  FishRecords?.length > 0 && link === 'MonthlyStat' ?   


<div style={{marginTop:'100px', width:1800, margin:'100px auto 0 auto'}} >
<MUIDataTable
  title={"Fish Record"}
  data={FishRecordData}
  columns={FishRecordcolumns}
  options={options3}
/>

</div> : ""}



{/* Fish stop */}




























































            
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
