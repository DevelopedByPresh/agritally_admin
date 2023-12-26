import * as TYPES from "../Actions/ActionTypes"
import axios from "axios"


// AUTHENTICATION START

export const AdminCreated = (data)=>({type:TYPES.CREATE_ADMIN, payload:data});
export const LoggedIn = (data)=>({type:TYPES.LOGIN, payload:data});
export const LoggedOut = ()=>({type:TYPES.LOGOUT,});

// AUTHENTICATION END






// DELETE START

export const StaffDeleted = (data)=>({type:TYPES.DELETE_STAFF,payload:data});
export const AdminDeleted = (data)=>({type:TYPES.DELETE_ADMIN,payload:data});
export const ProductDeleted = (data)=>({type:TYPES.DELETE_PRODUCT,payload:data});

// DELETE END





// UPDATES START

export const ProductUpdated = (data)=>({type:TYPES.UPDATE_PRODUCT,payload:data});
export const StaffUpdated = (data)=>({type:TYPES.UPDATE_STAFF,payload:data});
export const AdminUpdated = (data)=>({type:TYPES.UPDATE_ADMIN,payload:data});
export const ProfileUpdated = (data)=>({type:TYPES.UPDATE_PROFILE,payload:data});

// UPDATES END




// GETTING ALL PRODUCTS AND STAFF START

export const PoultryProducts = (data)=>({type:TYPES.GET_POULTRY_PRODUCTS,payload:data});
export const AllProducts= (data)=>({type:TYPES.GET_ALL_PRODUCTS,payload:data});
export const AllStaff = (data)=>({type:TYPES.GET_ALL_STAFF,payload:data});
export const AllAdmin = (data)=>({type:TYPES.GET_ALL_ADMINS,payload:data});
export const PigProducts = (data)=>({type:TYPES.GET_PIG_PRODUCTS, payload:data});
export const EggProducts = (data)=>({type:TYPES.GET_EGG_PRODUCTS, payload:data});
export const CatFishProducts = (data)=>({type:TYPES.GET_CATFISH_PRODUCTS, payload:data});
export const AdminGotten = (data)=>({type:TYPES.GET_ADMIN, payload:data});

// GETTING ALL PRODUCTS AND STAFF END




// EVERYTHING THAT HAS TO DO WITH ORDER START
export const AllOrders = (data)=>({type:TYPES.GET_ALL_ORDERS, payload:data});
export const OrderUpdated = (data)=>({type:TYPES.UPDATE_ORDER, payload:data});
export const OrderDeleted = (data)=>({type:TYPES.DELETE_ORDER, payload:data});


// EVERYTHING THAT HAS TO DO WITH ORDER END




// EVERYTHING THAT HAS TO DO WITH CART START
export const AllCarts = (data)=>({type:TYPES.GET_ALL_CARTS, payload:data});
export const CartDeleted = (data)=>({type:TYPES.DELETE_CART, payload:data});

// EVERYTHING THAT HAS TO DO WITH CART END



// EVERYTHING THAT HAS TO DO WITH TRANSACTION START
export const TransactionCreated = (data)=>({type:TYPES.CREATE_TRANSACTIONS, payload:data});
export const TransactionGotten = (data)=>({type:TYPES.GET_ALL_TRANSACTIONS, payload:data});
export const TransactionUpdated = (data)=>({type:TYPES.UPDATE_TRANSACTION, payload:data});
export const TransactionDeleted = (data)=>({type:TYPES.DELETE_TRANSACTION, payload:data});


// EVERYTHING THAT HAS TO DO WITH TRANSACTION END










// EVERYTHING THAT HAS TO DO WITH EGG RECORD START
export const EggRecord = (data)=>({type:TYPES.CREATE_EGG_RECORD, payload:data});
export const EggRecordGotten = (data)=>({type:TYPES.GET_EGG_RECORD, payload:data});
export const EggRecordUpdated = (data)=>({type:TYPES.UPDATE_EGG_RECORD, payload:data});
export const EggRecordDeleted = (data)=>({type:TYPES.DELETE_EGG_RECORD, payload:data});
export const EggStatGotten = (data)=>({type:TYPES.GET_EGG_STATISTICS, payload:data});

// EVERYTHING THAT HAS TO DO WITH EGG RECORD END




// EVERYTHING THAT HAS TO DO WITH EGG RECORD START
export const PigRecord = (data)=>({type:TYPES.CREATE_PIG_RECORD, payload:data});
export const PigRecordGotten = (data)=>({type:TYPES.GET_PIG_RECORD, payload:data});
export const PigRecordUpdated = (data)=>({type:TYPES.UPDATE_PIG_RECORD, payload:data});
export const PigRecordDeleted = (data)=>({type:TYPES.DELETE_PIG_RECORD, payload:data});

// EVERYTHING THAT HAS TO DO WITH EGG RECORD END




// EVERYTHING THAT HAS TO DO WITH POULTRY RECORD START
export const PoultryRecord = (data)=>({type:TYPES.CREATE_POULTRY_RECORD, payload:data});
export const PoultryRecordGotten = (data)=>({type:TYPES.GET_POULTRY_RECORD, payload:data});
export const PoultryRecordUpdated = (data)=>({type:TYPES.UPDATE_POULTRY_RECORD, payload:data});
export const PoultryRecordDeleted = (data)=>({type:TYPES.DELETE_POULTRY_RECORD, payload:data});

// EVERYTHING THAT HAS TO DO WITH POULTRY RECORD END





// EVERYTHING THAT HAS TO DO WITH FISH RECORD START
export const FishRecord = (data)=>({type:TYPES.CREATE_FISH_RECORD, payload:data});
export const FishRecordGotten = (data)=>({type:TYPES.GET_FISH_RECORD, payload:data});
export const FishRecordUpdated = (data)=>({type:TYPES.UPDATE_FISH_RECORD, payload:data});
export const FishRecordDeleted = (data)=>({type:TYPES.DELETE_FISH_RECORD, payload:data});

// EVERYTHING THAT HAS TO DO WITH FISH RECORD END






// CLEAR ERROR, LOADING  AND  CLEAR MESSAGE

export const isLoading = () => ({ type: TYPES.LOADING });

export const Error = (error) => ({ type: TYPES.ERROR, payload: error });

export const ClearError = () => (dispatch) => {
    dispatch({ type: TYPES.CLEAR });
  };
  export const ClearMessage = () => (dispatch) => {
    dispatch({ type: TYPES.CLEARMESSAGE });
  };








  // AUTHENTICATION START

export const CreateAdmin = (data) => (dispatch) => {
    dispatch(isLoading());
    axios.post(`${process.env.REACT_APP_API}/admin/register`, data,)
      .then((response) => {
        dispatch(AdminCreated(response?.data?.message));
        
     
 
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message ))
        console.log(error.response?.data)
        
      });
  };


  export const LoginAdmin = (data) => (dispatch) => {
    dispatch(isLoading());
    axios.post(`${process.env.REACT_APP_API}/admin/login`, data,)
      .then((response) => {
        dispatch(LoggedIn(response?.data?.message));
        sessionStorage.setItem('Admin', JSON.stringify(response?.data?.data))
        sessionStorage.setItem('AdminToken', response?.data?.data?.accessToken)
    
   

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message || error?.response.data?.error))
      
        
      });
  };



  // AUTHENTICATION END





  // GETTING PRODUCTS AND STAFF START


  export const GetPoultryProduct = () => (dispatch) => {
  //  dispatch(isLoading());

    const AdminToken = sessionStorage.getItem('AdminToken');
    

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/product/getAll/?category=Poultry`,  { headers: authorization })
      .then((response) => {
        dispatch(PoultryProducts(response?.data?.data));
   
   
     
      

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))


        
      });
  };



    
  export const GetPigProduct = () => (dispatch) => {
   // dispatch(isLoading());

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/product/getAll/?category=Pig`,  { headers: authorization })
      .then((response) => {
        dispatch(PigProducts(response?.data?.data));
  
     
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
    
        
      });
  };

      
  export const GetEggProduct = () => (dispatch) => {
  //  dispatch(isLoading());

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/product/getAll/?category=Egg`,  { headers: authorization })
      .then((response) => {
        dispatch(EggProducts(response?.data?.data));

     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };





      
  export const GetCatFishProduct = () => (dispatch) => {
   // dispatch(isLoading());

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/product/getAll/?category=Cat-fish`,  { headers: authorization })
      .then((response) => {
        dispatch(CatFishProducts(response?.data?.data));
    
      
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };





  export const GetAllProducts = () => (dispatch) => {
    // dispatch(isLoading());
     const AdminToken = sessionStorage.getItem('AdminToken');
 
     const authorization = {
       "Content-Type": "application/json",
        Authorization: `Bearer ${AdminToken}`,
     };
   
     axios.get(`${process.env.REACT_APP_API}/product/getAll`, { headers: authorization })
       .then((response) => {
         dispatch(AllProducts(response?.data?.data));
       
    
     
      
   
       })
       .catch((error) => {
         dispatch(Error(error?.response?.data?.error))
     
 
         
       });
   };
 








  
  export const GetAllStaff = () => (dispatch) => {
   // dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/user/getAll`, { headers: authorization })
      .then((response) => {
        dispatch(AllStaff(response?.data?.data));
      
   
    
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
    

        
      });
  };




    
  export const GetAllAdmins = () => (dispatch) => {
    dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/admin/getAll`, { headers: authorization })
      .then((response) => {
        dispatch(AllAdmin(response?.data?.data));
 
    
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))

        
      });
  };





  export const GetAdmin = () => (dispatch) => {
  //  dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');
    const admin = JSON.parse(sessionStorage.getItem('Admin'))
    const id = admin?.id

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/admin/get/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(AdminGotten(response?.data?.data));
        sessionStorage.setItem('UpdateAdmin', JSON.stringify(response?.data?.data))
    
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))

        
      });
  };



  // GETTING PRODUCTS AND STAFF END





// DELETE ALL PRODUCTS AND STAFF START




  export const DeleteProduct = () => (dispatch) => {
    const id = sessionStorage.getItem('ProductDeleteID')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

  

    dispatch(isLoading());
    axios.delete(`${process.env.REACT_APP_API}/product/delete/${id}`, { headers: authorization } )
      .then((response) => {
        dispatch(ProductDeleted(response?.data?.message));


      dispatch(GetPoultryProduct());
      dispatch(GetPigProduct());
      dispatch(GetEggProduct());
      dispatch(GetCatFishProduct());


      dispatch(GetAllProducts());
    
      //  sessionStorage.setItem('Admin', JSON.stringify(response?.data?.data))
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
   

        
      });
  };





 


  export const DeleteStaff = () => (dispatch) => {
    const id = sessionStorage.getItem('userId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

    dispatch(isLoading());
    axios.delete(`${process.env.REACT_APP_API}/user/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(StaffDeleted(response?.data?.message));
        dispatch(GetAllStaff());
      
 

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
      
        
      });
  };







  
  export const DeleteAdmin = () => (dispatch) => {
    const id = sessionStorage.getItem('AdminId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

    dispatch(isLoading());
    axios.delete(`${process.env.REACT_APP_API}/admin/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(AdminDeleted(response?.data?.message));
        dispatch(GetAllAdmins());
 

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
       
      
        
      });
  };

// DELETE ALL PRODUCTS AND STAFF END










// UPDATING ALL PRODUCTS AND STAFF START



  export const UpdateProduct = (product, id) => (dispatch) => {
    const id = sessionStorage.getItem('ProductUpdateId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    dispatch(isLoading());
    axios.patch(`${process.env.REACT_APP_API}/product/update/${id}`, product,  {headers:authorization})
      .then((response) => {
        dispatch(ProductUpdated(response?.data?.message));
        dispatch(GetPoultryProduct());
        
        dispatch(GetPigProduct());
        dispatch(GetEggProduct());
        dispatch(GetCatFishProduct());
  
      

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
    
        
      });
  };



  export const UpdateStaff = (staff,) => (dispatch) => {
    const id = sessionStorage.getItem('UserUpdateId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    dispatch(isLoading());
    axios.patch(`${process.env.REACT_APP_API}/user//update-profile/${id}`, staff,  {headers:authorization})
      .then((response) => {
        dispatch(StaffUpdated(response?.data?.message));
        dispatch(GetAllStaff());
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
  
        
      });
  };







  export const UpdateAdmin = (staff,) => (dispatch) => {
    const id = sessionStorage.getItem('AdminUpdateId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    dispatch(isLoading());
    axios.patch(`${process.env.REACT_APP_API}/admin/update-profile/${id}`, staff,  {headers:authorization})
      .then((response) => {
        dispatch(AdminUpdated(response?.data?.message));
        dispatch(GetAllAdmins());
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
  
        
      });
  };



  export const UpdateProfile = (profile) => (dispatch) => {
    const admin = JSON.parse(sessionStorage.getItem('Admin'))
    const id = admin?.id

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    dispatch(isLoading());
    axios.patch(`${process.env.REACT_APP_API}/admin/update-profile/${id}`, profile,  {headers:authorization})
      .then((response) => {
        dispatch(ProfileUpdated(response?.data?.message));
        dispatch(GetAdmin());
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
  
        
      });
  };





  // UPDATING ALL PRODUCTS AND STAFF END






  // EVERYTHING THAT HAS TO DO WITH ORDERS START


  
  export const GetAllOrders = () => (dispatch) => {
   // dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/order/getAll/`, { headers: authorization })
      .then((response) => {
        dispatch(AllOrders(response?.data?.data));
    
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))

        
      });
  };






  
  export const UpdateOrder = (order,) => (dispatch) => {
    const id = sessionStorage.getItem('OrderUpdateId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    //dispatch(isLoading());
    axios.patch(`${process.env.REACT_APP_API}/order/update/${id}`, order,  {headers:authorization})
      .then((response) => {
        dispatch(OrderUpdated(response?.data?.message));
        dispatch(GetAllOrders());
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
  
        
      });
  };




  export const DeleteOrder = () => (dispatch) => {
    const id = sessionStorage.getItem('orderId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

   // dispatch(isLoading());
    axios.delete(`${process.env.REACT_APP_API}/order/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(OrderDeleted(response?.data?.message));
        dispatch(GetAllOrders());
 

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };


  // EVERYTHING THAT HAS TO DO WITH ORDERS END



 






  

  // EVERYTHING THAT HAS TO DO WITH ORDERS START


  
  export const GetAllCart = () => (dispatch) => {
   // dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  
    axios.get(`${process.env.REACT_APP_API}/cart/getAll/`, { headers: authorization })
      .then((response) => {
        dispatch(AllCarts(response?.data?.data));
      
   
    
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))

        
      });
  };










  export const DeleteCart = () => (dispatch) => {
    const id = sessionStorage.getItem('CartId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

    dispatch(isLoading());
    axios.delete(`${process.env.REACT_APP_API}/cart/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(CartDeleted(response?.data?.message));
        dispatch(GetAllCart());
 

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };


  // EVERYTHING THAT HAS TO DO WITH ORDERS END


  

  




    

  // EVERYTHING THAT HAS TO DO WITH TRANSACTIONS START




  export const CreateTransactions = (data) => (dispatch) => {
     dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

   
     axios.post(`${process.env.REACT_APP_API}/transaction/add`, data, { headers: authorization })
       .then((response) => {
         dispatch(TransactionCreated(response?.data?.message));
    
    
     
   
       })
       .catch((error) => {
         dispatch(Error(error?.response?.data?.message))
     
    
  
   
         
       });
   };
  




   export const GetAllTransactions = () => (dispatch) => {
   // dispatch(isLoading());
   const AdminToken = sessionStorage.getItem('AdminToken');


   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${AdminToken}`,
   }

  
    axios.get(`${process.env.REACT_APP_API}/transaction/getAll`,  { headers: authorization })
      .then((response) => {
        dispatch(TransactionGotten(response?.data?.data));
     
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
 
  
        
      });
  };
 

  
  export const UpdateTransaction = (data) => (dispatch) => {
    dispatch(isLoading());
   const AdminToken = sessionStorage.getItem('AdminToken');
  const  id= sessionStorage.getItem('TransactionUpdateId')

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${AdminToken}`,
   }

  
    axios.patch(`${process.env.REACT_APP_API}/transaction/update/${id}`,data,  { headers: authorization })
      .then((response) => {
        dispatch(TransactionUpdated(response?.data?.message));
        dispatch(GetAllTransactions());
    
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
     
 
  
        
      });
  };
 
  



  export const DeleteTransaction = () => (dispatch) => {
    dispatch(isLoading());
   const AdminToken = sessionStorage.getItem('AdminToken');
  const  id= sessionStorage.getItem('TransactionId')

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${AdminToken}`,
   }

  
    axios.delete(`${process.env.REACT_APP_API}/transaction/delete/${id}`,  { headers: authorization })
      .then((response) => {
        dispatch(TransactionDeleted(response?.data?.message));
        dispatch(GetAllTransactions());

   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
   
 
  
        
      });
  };
 






 


  // EVERYTHING THAT HAS TO DO WITH TRANSACTIONS END











  // EVERYTHING THAT HAS TO DO WITH EGG RECORD START



  export const CreateEggRecord = (data) => (dispatch) => {
    dispatch(isLoading());
   const AdminToken = sessionStorage.getItem('AdminToken');

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${AdminToken}`,
   }

  
    axios.post(`${process.env.REACT_APP_API}/egg/`, data, { headers: authorization })
      .then((response) => {
        dispatch(EggRecord(response?.data?.message));
        dispatch(GetEggRecord());
   
   
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
    
   
 
  
        
      });
  };
 




  export const GetEggRecord = () => (dispatch) => {
  // dispatch(isLoading());
  const AdminToken = sessionStorage.getItem('AdminToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${AdminToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/egg`,  { headers: authorization })
     .then((response) => {
       dispatch(EggRecordGotten(response?.data?.data));
   
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };









 export const UpdateEggRecord = (data) => (dispatch) => {
  dispatch(isLoading());
 const AdminToken = sessionStorage.getItem('AdminToken');
const  id= sessionStorage.getItem('EggUpdateId')

 const authorization = {
   "Content-Type": "application/json",
    Authorization: ` Bearer ${AdminToken}`,
 }


  axios.patch(`${process.env.REACT_APP_API}/egg/${id}`,data,  { headers: authorization })
    .then((response) => {
      dispatch(EggRecordUpdated(response?.data?.message));
      dispatch(GetEggRecord());
     
  
 
  

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.message))
   


      
    });
};





export const DeleteEggRecord = () => (dispatch) => {
 // dispatch(isLoading());
 const AdminToken = sessionStorage.getItem('AdminToken');
const  id= sessionStorage.getItem('EggId')

 const authorization = {
   "Content-Type": "application/json",
    Authorization: ` Bearer ${AdminToken}`,
 }


  axios.delete(`${process.env.REACT_APP_API}/egg/${id}`,  { headers: authorization })
    .then((response) => {
      dispatch(EggRecordDeleted(response?.data?.message));
      dispatch(GetEggRecord());
   

 
  

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))
 
 


      
    });
};



export const GetEggStat = () => (dispatch) => {
  // dispatch(isLoading());
  const AdminToken = sessionStorage.getItem('AdminToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${AdminToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/egg/statistics`,  { headers: authorization })
     .then((response) => {
       dispatch(EggStatGotten(response?.data?.data));
    
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };





  // EVERYTHING THAT HAS TO DO WITH EGG RECORD END


























  
  // EVERYTHING THAT HAS TO DO WITH PIG RECORD START



  export const CreatePigRecord = (data) => (dispatch) => {
    dispatch(isLoading());
   const AdminToken = sessionStorage.getItem('AdminToken');

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${AdminToken}`,
   }

  
    axios.post(`${process.env.REACT_APP_API}/pig/`, data, { headers: authorization })
      .then((response) => {
        dispatch(PigRecord(response?.data?.message));
        dispatch(GetPigRecord());
   
   
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
    
   
 
  
        
      });
  };
 




  export const GetPigRecord = () => (dispatch) => {
  // dispatch(isLoading());
  const AdminToken = sessionStorage.getItem('AdminToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${AdminToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/pig`,  { headers: authorization })
     .then((response) => {
       dispatch(PigRecordGotten(response?.data?.data));
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };









 export const UpdatePigRecord = (data) => (dispatch) => {
  dispatch(isLoading());
 const AdminToken = sessionStorage.getItem('AdminToken');
const  id= sessionStorage.getItem('PigUpdateId')

 const authorization = {
   "Content-Type": "application/json",
    Authorization: ` Bearer ${AdminToken}`,
 }


  axios.patch(`${process.env.REACT_APP_API}/pig/${id}`,data,  { headers: authorization })
    .then((response) => {
      dispatch(PigRecordUpdated(response?.data?.message));
      dispatch(GetPigRecord());
     
  
 
  

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.message))
   


      
    });
};





export const DeletePigRecord = () => (dispatch) => {
 // dispatch(isLoading());
 const AdminToken = sessionStorage.getItem('AdminToken');
const  id= sessionStorage.getItem('PigId')

 const authorization = {
   "Content-Type": "application/json",
    Authorization: ` Bearer ${AdminToken}`,
 }


  axios.delete(`${process.env.REACT_APP_API}/pig/${id}`,  { headers: authorization })
    .then((response) => {
      dispatch(PigRecordDeleted(response?.data?.message));
      dispatch(GetPigRecord());
   

 
  

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))
 
 


      
    });
};


  // EVERYTHING THAT HAS TO DO WITH PIG RECORD END




















  
  // EVERYTHING THAT HAS TO DO WITH POULTRY RECORD START



  export const CreatePoultryRecord = (data) => (dispatch) => {
    dispatch(isLoading());
   const AdminToken = sessionStorage.getItem('AdminToken');

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${AdminToken}`,
   }

  
    axios.post(`${process.env.REACT_APP_API}/poultry/`, data, { headers: authorization })
      .then((response) => {
        dispatch(PoultryRecord(response?.data?.message));
        dispatch(GetPoultryRecord());
   
   
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
    
   
 
  
        
      });
  };
 




  export const GetPoultryRecord = () => (dispatch) => {
  // dispatch(isLoading());
  const AdminToken = sessionStorage.getItem('AdminToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${AdminToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/poultry`,  { headers: authorization })
     .then((response) => {
       dispatch(PoultryRecordGotten(response?.data?.data));
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };




 export const UpdatePoultryRecord = (data) => (dispatch) => {
  dispatch(isLoading());
 const AdminToken = sessionStorage.getItem('AdminToken');
const  id= sessionStorage.getItem('PoultryUpdateId')

 const authorization = {
   "Content-Type": "application/json",
    Authorization: ` Bearer ${AdminToken}`,
 }


  axios.patch(`${process.env.REACT_APP_API}/poultry/${id}`,data,  { headers: authorization })
    .then((response) => {
      dispatch(PoultryRecordUpdated(response?.data?.message));
      dispatch(GetPoultryRecord());
     
  
 
  

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.message))
   


      
    });
};





export const DeletePoultryRecord = () => (dispatch) => {
 // dispatch(isLoading());
 const AdminToken = sessionStorage.getItem('AdminToken');
const  id= sessionStorage.getItem('PoultryId')

 const authorization = {
   "Content-Type": "application/json",
    Authorization: ` Bearer ${AdminToken}`,
 }


  axios.delete(`${process.env.REACT_APP_API}/poultry/${id}`,  { headers: authorization })
    .then((response) => {
      dispatch(PoultryRecordDeleted(response?.data?.message));
      dispatch(GetPoultryRecord());
   

 
  

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))
 
 


      
    });
};


  // EVERYTHING THAT HAS TO DO WITH POULTRY RECORD END












  
  
  // EVERYTHING THAT HAS TO DO WITH fish RECORD START



  export const CreateFishRecord = (data) => (dispatch) => {
    dispatch(isLoading());
   const AdminToken = sessionStorage.getItem('AdminToken');

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${AdminToken}`,
   }

  
    axios.post(`${process.env.REACT_APP_API}/fish/`, data, { headers: authorization })
      .then((response) => {
        dispatch(FishRecord(response?.data?.message));
        dispatch(GetFishRecord());
   
   
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
    
   
 
  
        
      });
  };
 




  export const GetFishRecord = () => (dispatch) => {
  // dispatch(isLoading());
  const AdminToken = sessionStorage.getItem('AdminToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${AdminToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/fish`,  { headers: authorization })
     .then((response) => {
       dispatch(FishRecordGotten(response?.data?.data));
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };




 export const UpdateFishRecord = (data) => (dispatch) => {
  dispatch(isLoading());
 const AdminToken = sessionStorage.getItem('AdminToken');
const  id= sessionStorage.getItem('FishUpdateId')

 const authorization = {
   "Content-Type": "application/json",
    Authorization: ` Bearer ${AdminToken}`,
 }


  axios.patch(`${process.env.REACT_APP_API}/fish/${id}`,data,  { headers: authorization })
    .then((response) => {
      dispatch(FishRecordUpdated(response?.data?.message));
      dispatch(GetFishRecord());
     
  
 
  

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.message))
   


      
    });
};





export const DeleteFishRecord = () => (dispatch) => {
 // dispatch(isLoading());
 const AdminToken = sessionStorage.getItem('AdminToken');
const  id= sessionStorage.getItem('FishId')

 const authorization = {
   "Content-Type": "application/json",
    Authorization: ` Bearer ${AdminToken}`,
 }


  axios.delete(`${process.env.REACT_APP_API}/fish/${id}`,  { headers: authorization })
    .then((response) => {
      dispatch(FishRecordDeleted(response?.data?.message));
      dispatch(GetFishRecord());
   

 
  

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))
 
 


      
    });
};


  // EVERYTHING THAT HAS TO DO WITH Fish RECORD END
