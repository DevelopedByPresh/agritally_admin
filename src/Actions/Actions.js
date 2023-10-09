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
    axios.post(`http://localhost:5000/admin/register`, data,)
      .then((response) => {
        dispatch(AdminCreated(response?.data?.message));
 
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
        
      });
  };


  export const LoginAdmin = (data) => (dispatch) => {
    dispatch(isLoading());
    axios.post(`http://localhost:5000/admin/login`, data,)
      .then((response) => {
        dispatch(LoggedIn(response?.data?.message));
        sessionStorage.setItem('Admin', JSON.stringify(response?.data?.data))
        sessionStorage.setItem('AdminToken', response?.data?.token)
   

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
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
  
    axios.get(`http://localhost:5000/product/getAll/?category=Poultry`,  { headers: authorization })
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
  
    axios.get(`http://localhost:5000/product/getAll/?category=Pig`,  { headers: authorization })
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
  
    axios.get(`http://localhost:5000/product/getAll/?category=Egg`,  { headers: authorization })
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
  
    axios.get(`http://localhost:5000/product/getAll/?category=Cat-fish`,  { headers: authorization })
      .then((response) => {
        dispatch(CatFishProducts(response?.data?.data));
    
      
     
  
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
  
    axios.get(`http://localhost:5000/admin/users/getAll`, { headers: authorization })
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
  
    axios.get(`http://localhost:5000/admin/getAll`, { headers: authorization })
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
  
    axios.get(`http://localhost:5000/admin/get/${id}`, { headers: authorization })
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
    axios.delete(`http://localhost:5000/product/delete/${id}`, { headers: authorization } )
      .then((response) => {
        dispatch(ProductDeleted(response?.data?.message));

        
        dispatch(GetPoultryProduct());
        dispatch(GetPigProduct());
        dispatch(GetEggProduct());
        dispatch(GetEggProduct());
        dispatch(GetCatFishProduct());
       
    
      //  sessionStorage.setItem('Admin', JSON.stringify(response?.data?.data))
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))

        
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
    axios.delete(`http://localhost:5000/user/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(StaffDeleted(response?.data?.message));
        dispatch(GetAllStaff());
 

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
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
    axios.delete(`http://localhost:5000/admin/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(AdminDeleted(response?.data?.message));
        dispatch(GetAllAdmins());
 

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
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
    axios.patch(`http://localhost:5000/product/update/${id}`, product,  {headers:authorization})
      .then((response) => {
        dispatch(ProductUpdated(response?.data?.message));
        dispatch(GetPoultryProduct());
        dispatch(GetPigProduct());
        dispatch(GetEggProduct());
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
  


  //  dispatch(isLoading());
    axios.patch(`http://localhost:5000/user//update-profile/${id}`, staff,  {headers:authorization})
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
  


   // dispatch(isLoading());
    axios.patch(`http://localhost:5000/admin/update-profile/${id}`, staff,  {headers:authorization})
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
    axios.patch(`http://localhost:5000/admin/update-profile/${id}`, profile,  {headers:authorization})
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
  
    axios.get(`http://localhost:5000/order/getAll/`, { headers: authorization })
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
    axios.patch(`http://localhost:5000/order/update/${id}`, order,  {headers:authorization})
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
    axios.delete(`http://localhost:5000/order/delete/${id}`, { headers: authorization })
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
    dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  
    axios.get(`http://localhost:5000/cart/getAll/`, { headers: authorization })
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
    axios.delete(`http://localhost:5000/cart/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(CartDeleted(response?.data?.message));
        dispatch(GetAllCart());
 

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };


  // EVERYTHING THAT HAS TO DO WITH ORDERS END


  

  