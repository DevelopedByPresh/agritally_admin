import * as TYPES from "../Actions/ActionTypes"




const initialState = {
    Authenticated: false,
    user:{},
    message:null,
    error:null,
    loading:false,
    poultyProduct:[],
    pigProduct:[],
    eggProduct:[],
    catFishProduct:[],
    staff:[],
    Admin:[],
    orders:[],
    cart:[],
    Admins:[],
    transactions:[]
}


const AdminReducer = (state=initialState, action) =>{
    switch(action.type){
        case TYPES.LOADING:
            return{
                ...state,
                loading: true
            }








            // AUTHENTICATION START

        case TYPES.CREATE_ADMIN:
            return{
                ...state,
                message: action.payload,
                error:null,
                loading:false
            }

            case TYPES.LOGIN:
                return{
                    ...state,
                    loading:false,
                    error:null,
                    message: action.payload,
                    Authenticated:true

                }


                case TYPES.LOGOUT:
                  return{
                      ...state,
                      loading:false,
                      error:null,
                      message: null,
                      Authenticated:false
  
                  }

                  // AUTHENTICATION END
















                // ERROR, CLEAR MESSAGE, CLEAR ERROR START


                case TYPES.ERROR:
                    return {
                      ...state,
                      error: action.payload,
                      loading: false,
                      message: null,
                    };




                    case TYPES.CLEARMESSAGE:
                    return {
                     ...state,
                      loading: false,
                      message: null,
       
                    };
              
              
                  case TYPES.CLEAR:
                    return {
                      ...state,
                        error: false,
                        loading: false,
                    } ;



               // ERROR, CLEAR MESSAGE, CLEAR ERROR END










                    case TYPES.ADD_PRODUCTS:
                      return {
                        ...state,
                        error: false,
                        loading: false,
                        message:action.payload
                      };











                      // Get Products and  staff start


                      case TYPES.GET_POULTRY_PRODUCTS:
                        return {
                          ...state,
                          error: false,
                          loading: false,
                          poultyProduct:action.payload
                        };



                      case TYPES.GET_EGG_PRODUCTS:
                        return {
                          ...state,
                          error: false,
                          loading: false,
                          eggProduct:action.payload
                        };

                      
                    case TYPES.GET_PIG_PRODUCTS:
                      return {
                        ...state,
                        error: false,
                        loading: false,
                        pigProduct:action.payload
                      };


                      case TYPES.GET_CATFISH_PRODUCTS:
                        return {
                          ...state,
                          error: false,
                          loading: false,
                          catFishProduct:action.payload
                        };

                        case TYPES.GET_ALL_STAFF:
                      return {
                        ...state,
                        error: false,
                        loading: false,
                        staff:action.payload
                      };


                      case TYPES.GET_ALL_ADMINS:
                        return {
                          ...state,
                          error: false,
                          loading: false,
                          Admins:action.payload
                        };


                      case TYPES.GET_ADMIN:
                        return {
                          ...state,
                          error: false,
                          loading: false,
                        Admin:action.payload  
                        };

                      // get Products and staff End














                      // Delete Products and Staff Start

                       case TYPES.DELETE_PRODUCT:
                      return {
                        ...state,
                        error: false,
                        loading: false,
                        message:action.payload
                      };


                     


                      case TYPES.DELETE_STAFF:
                        return {
                          ...state,
                          error: false,
                          loading: false,
                          message:action.payload
                        };

                        // Delete Products and Staff End


















                      // Update Products And Staff Start


                        case TYPES.UPDATE_PRODUCT:
                          return {
                            ...state,
                            error: false,
                            loading: false,
                            message:action.payload
                          };


                         

                             case TYPES.UPDATE_STAFF:
                            return {
                              ...state,
                              error: false,
                              loading: false,
                              message:action.payload
                            };



                            case TYPES.UPDATE_ADMIN:
                              return {
                                ...state,
                                error: false,
                                loading: false,
                                message:action.payload
                              };
  

                            case TYPES.UPDATE_PROFILE:
                              return {
                                ...state,
                                error: false,
                                loading: false,
                                message:action.payload
                              };


                            // update Product and Staff End





                            // EVERYTHING THAT HAS TO DO WITH ORDERS START

                            case TYPES.GET_ALL_ORDERS:
                              return {
                                ...state,
                                error: false,
                                loading: false,
                                orders:action.payload
                              };


                                
                            case TYPES.UPDATE_ORDER:
                              return {
                                ...state,
                                error: false,
                                loading: false,
                                message:action.payload
                              };




                                
                            case TYPES.DELETE_ORDER:
                              return {
                                ...state,
                                error: false,
                                loading: false,
                                message:action.payload
                              };




                            // EVERYTHING THAT HAS TO DO WITH ORDERS END
    
  






                             // EVERYTHING THAT HAS TO DO WITH CART START

                             case TYPES.GET_ALL_CARTS:
                              return {
                                ...state,
                                error: false,
                                loading: false,
                                cart:action.payload
                              };


                                
                        
                                
                            case TYPES.DELETE_CART:
                              return {
                                ...state,
                                error: false,
                                loading: false,
                                message:action.payload
                              };




                            // EVERYTHING THAT HAS TO DO WITH CART END






                                     // EVERYTHING THAT HAS TO DO WITH TRANSACTIONS START

                                     case TYPES.CREATE_TRANSACTIONS:
                                      return {
                                        ...state,
                                        error: false,
                                        loading: false,
                                        message:action.payload
                                       
                                      };
        
        
                                      case TYPES.GET_ALL_TRANSACTIONS:
                                        return {
                                          ...state,
                                          error: false,
                                          loading: false,
                                          transactions:action.payload
                                         
                                        };
        
                                        
                                        case TYPES.UPDATE_TRANSACTION:
                                          return {
                                            ...state,
                                            error: false,
                                            loading: false,
                                            message:action.payload
                                           
                                          };
        
                                          
                                          case TYPES.DELETE_TRANSACTION:
                                            return {
                                              ...state,
                                              error: false,
                                              loading: false,
                                              message:action.payload
                                             
                                            };
              
                                
                             
        
        
        
                                    // EVERYTHING THAT HAS TO DO WITH TRANSACTIONS END
    
  


                     default:
                        return state
    }
}


export default AdminReducer