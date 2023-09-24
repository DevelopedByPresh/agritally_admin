import * as TYPES from "../Actions/ActionTypes"
import axios from "axios"


// AUTHENTICATION START

export const AdminCreated = (data)=>({type:TYPES.CREATE_ADMIN, payload:data});
export const LoggedIn = (data)=>({type:TYPES.LOGIN, payload:data});
export const LoggedOut = ()=>({type:TYPES.LOGOUT,});

// AUTHENTICATION END






// DELETE START

export const StaffDeleted = (data)=>({type:TYPES.DELETE_STAFF,payload:data});
export const PoultryProductDeleted = (data)=>({type:TYPES.DELETE_POULTRY_PRODUCTS,payload:data});
export const PigProductDeleted = (data)=>({type:TYPES.DELETE_PIG_PRODUCTS,payload:data});
export const EggProductDeleted = (data)=>({type:TYPES.DELETE_EGG_PRODUCTS,payload:data});
export const CatFishProductDeleted = (data)=>({type:TYPES.DELETE_CATFISH_PRODUCTS,payload:data});

// DELETE END





// UPDATES START

export const PoultryProductUpdate = (data)=>({type:TYPES.UPDATE_POULTRY_PRODUCTS,payload:data});
export const EggProductUpdate = (data)=>({type:TYPES.UPDATE_EGG_PRODUCTS,payload:data});
export const PigProductUpdate = (data)=>({type:TYPES.UPDATE_PIG_PRODUCTS,payload:data});
export const CatFishProductUpdate = (data)=>({type:TYPES.UPDATE_CATFISH_PRODUCTS,payload:data});
export const StaffUpdated = (data)=>({type:TYPES.UPDATE_STAFF,payload:data});
export const ProfileUpdated = (data)=>({type:TYPES.UPDATE_PROFILE,payload:data});

// UPDATES END




// GETTING ALL PRODUCTS AND STAFF START

export const PoultryProducts = (data)=>({type:TYPES.GET_POULTRY_PRODUCTS,payload:data});
export const AllStaff = (data)=>({type:TYPES.GET_ALL_STAFF,payload:data});
export const PigProducts = (data)=>({type:TYPES.GET_PIG_PRODUCTS, payload:data});
export const EggProducts = (data)=>({type:TYPES.GET_EGG_PRODUCTS, payload:data});
export const CatFishProducts = (data)=>({type:TYPES.GET_CATFISH_PRODUCTS, payload:data});
export const AdminGotten = (data)=>({type:TYPES.GET_ADMIN, payload:data});

// GETTING ALL PRODUCTS AND STAFF END




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
    dispatch(isLoading());

    const AdminToken = sessionStorage.getItem('AdminToken');
    

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    };
  
    axios.get(`http://localhost:5000/poultry/getAll`,  { headers: authorization })
      .then((response) => {
        dispatch(PoultryProducts(response?.data?.data));
     
      

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))


        
      });
  };



    
  export const GetPigProduct = () => (dispatch) => {
    dispatch(isLoading());

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    };
  
    axios.get(`http://localhost:5000/pig/getAll/`,  { headers: authorization })
      .then((response) => {
        dispatch(PigProducts(response?.data?.data));
     
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
    
        
      });
  };

      
  export const GetEggProduct = () => (dispatch) => {
    dispatch(isLoading());

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    };
  
    axios.get(`http://localhost:5000/egg/getAll/`,  { headers: authorization })
      .then((response) => {
        dispatch(EggProducts(response?.data?.data));

     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };





      
  export const GetCatFishProduct = () => (dispatch) => {
    dispatch(isLoading());

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    };
  
    axios.get(`http://localhost:5000/catFish/getAll/`,  { headers: authorization })
      .then((response) => {
        dispatch(CatFishProducts(response?.data?.data));
        console.log(response)
      
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };










  
  export const GetAllStaff = () => (dispatch) => {
    dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  
    axios.get(`http://localhost:5000/user/getAll`, { headers: authorization })
      .then((response) => {
        dispatch(AllStaff(response?.data?.data));
    
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))

        
      });
  };





  export const GetAdmin = () => (dispatch) => {
    dispatch(isLoading());
    const AdminToken = sessionStorage.getItem('AdminToken');
    const admin = JSON.parse(sessionStorage.getItem('Admin'))
    const id = admin?._id

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




  export const DeletePoultryProduct = () => (dispatch) => {
    const id = sessionStorage.getItem('PoultryId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }


    dispatch(isLoading());
    axios.delete(`http://localhost:5000/poultry/delete/${id}`, { headers: authorization } )
      .then((response) => {
        dispatch(PoultryProductDeleted(response?.data?.message));
        dispatch(GetPoultryProduct());
    
      //  sessionStorage.setItem('Admin', JSON.stringify(response?.data?.data))
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))

        
      });
  };



  export const DeletePigProduct = () => (dispatch) => {
    const id = sessionStorage.getItem('PigId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

    dispatch(isLoading());
    axios.delete(`http://localhost:5000/pig/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(PigProductDeleted(response?.data?.message));
        dispatch(GetPigProduct());
    
      //  sessionStorage.setItem('Admin', JSON.stringify(response?.data?.data))
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };


  export const DeleteEggProduct = () => (dispatch) => {
    const id = sessionStorage.getItem('EggId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

    dispatch(isLoading());
    axios.delete(`http://localhost:5000/egg/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(EggProductDeleted(response?.data?.message));
        dispatch(GetEggProduct());
     
      //  sessionStorage.setItem('Admin', JSON.stringify(response?.data?.data))
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
   
        
      });
  };



  export const DeleteCatFishProduct = () => (dispatch) => {
    const id = sessionStorage.getItem('CatFishId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: ` Bearer ${AdminToken}`,
    }

    dispatch(isLoading());
    axios.delete(`http://localhost:5000/catFish/delete/${id}`, { headers: authorization })
      .then((response) => {
        dispatch(CatFishProductDeleted(response?.data?.message));
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

// DELETE ALL PRODUCTS AND STAFF END










// UPDATING ALL PRODUCTS AND STAFF START



  export const UpdatePoultryProduct = (product, id) => (dispatch) => {
    const id = sessionStorage.getItem('PoultryUpdateId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    dispatch(isLoading());
    axios.patch(`http://localhost:5000/poultry/update/${id}`, product,  {headers:authorization})
      .then((response) => {
        dispatch(PoultryProductUpdate(response?.data?.message));
        dispatch(GetPoultryProduct());
      

  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
    
        
      });
  };




  export const UpdateEggProduct = (product, id) => (dispatch) => {
    const id = sessionStorage.getItem('EggUpdateId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    dispatch(isLoading());
    axios.patch(`http://localhost:5000/egg/update/${id}`, product,  {headers:authorization})
      .then((response) => {
        dispatch(EggProductUpdate(response?.data?.message));
        dispatch(GetEggProduct());
  
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
    
        
      });
  };




  
  export const UpdateCatFishProduct = (product, id) => (dispatch) => {
    const id = sessionStorage.getItem('CatFishUpdateId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    dispatch(isLoading());
    axios.patch(`http://localhost:5000/catFish/update/${id}`, product,  {headers:authorization})
      .then((response) => {
        dispatch(CatFishProductUpdate(response?.data?.message));
        dispatch(GetCatFishProduct());
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
      
        
      });
  };







  export const UpdatePigProduct = (product, id) => (dispatch) => {
    const id = sessionStorage.getItem('PigUpdateId')

    const AdminToken = sessionStorage.getItem('AdminToken');

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${AdminToken}`,
    };
  


    dispatch(isLoading());
    axios.patch(`http://localhost:5000/pig/update/${id}`, product,  {headers: authorization})
      .then((response) => {
        dispatch(PigProductUpdate(response?.data?.message));
        dispatch(GetPigProduct());

  
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
    axios.patch(`http://localhost:5000/user/update/${id}`, staff,  {headers:authorization})
      .then((response) => {
        dispatch(StaffUpdated(response?.data?.message));
        dispatch(GetAllStaff());
     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
  
        
      });
  };




  export const UpdateProfile = (profile) => (dispatch) => {
    const admin = JSON.parse(sessionStorage.getItem('Admin'))
    const id = admin?._id

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





 



  

  