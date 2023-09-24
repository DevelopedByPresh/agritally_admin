import React,{useEffect, useState} from "react"
import  "./AdminProfile.css"

import {useDispatch, useSelector} from 'react-redux'
import {LoggedOut} from '../../Actions/Actions'
import {useNavigate} from "react-router-dom"
import {UpdateProfile,      ClearMessage, ClearError} from "../../Actions/Actions"


const AdminProfile = ()=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const UserInfo = JSON.parse(sessionStorage.getItem('UpdateAdmin'))
  const message = useSelector((state)=>state?.Admin?.message)
  const error = useSelector((state)=>state?.Admin?.error)
  const loading = useSelector((state)=>state?.Admin?.loading)


  const [admin, setAdmin] = useState({

    firstName:"",
    lastName:"",
   // email:"",
    date_of_birth:"",
    


  })

  const {firstName, lastName, email, date_of_birth} = admin

  useEffect(()=>{
    if(UserInfo){
      setAdmin(UserInfo)
    }
  },[])



  const handleChange = (e)=>{
    const {name, value} = e.target
    setAdmin({...admin, [name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(UpdateProfile(admin))

  }

  const LogoutUser = ()=>{
    dispatch(LoggedOut())
    sessionStorage.clear()
    navigate('/')

  
  }

  const handleFocus = () => {
    if (error) {
      dispatch(ClearError());
    }
  
 
   
  };


  
setTimeout(()=>{
  if(message){

    dispatch(ClearMessage())
  }

},2500)


  useEffect(()=>{
    document.body.style.zoom = "80%";
  
  },[])



    return(




  <div className="main-conten">
    <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div className="container-fluid">
        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"  target="_blank">{UserInfo?.role}</a>
        {/* <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <div className="form-group mb-0">
            <div className="input-group input-group-alternative">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-search"></i></span>
              </div>
              <input className="form-control" placeholder="Search" type="text"/>
            </div>
          </div>
        </form> */}
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt={UserInfo?.firstName} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QVZBdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold " >{UserInfo?.lastName} {UserInfo?.firstName} </span>
                </div>
              </div>
            </a>
            {/* <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-support-16"></i>
                <span>Support</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#!" className="dropdown-item">
                <i className="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div> */}
          </li>
        </ul>
      </div>
    </nav>
    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
      <span className="mask  opacity-8" style={{backgroundColor:'#012949'}}></span>
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <h1 className="display-2 text-white  font-weight-medium"> {UserInfo?.lastName} {UserInfo?.firstName} </h1>
            <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you have made with your work and manage your Account</p>
            
            <a href="#!" className="btn btn-dark"  onClick={LogoutUser}>Logout</a>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QVZBdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="rounded-circle"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              {/* <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                <a href="#" className="btn btn-sm btn-default float-right">Message</a>
              </div> */}
            </div>
            <div className="cards-body pt-0 pt-md-4">
              <div className="row1">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading" >22</span>
                      <span className="description"  style={{color:'#012949'}}>Order Entries</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description" style={{color:'#012949'}}>Sales</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description" style={{color:'#012949'}}>Reports</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                {UserInfo?.lastName} {UserInfo?.firstName} <span className="font-weight-light">, 27</span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>{UserInfo?.email}
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>{UserInfo?.role} - Agritally
                </div>
                <div>
                  <i className="ni education_hat mr-2"></i>University of Calabar Nigeria
                </div>
                <hr className="my-4"/>
                <p>Ryan —Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ducimus voluptates voluptas?</p>
                {/* <a href="#">Show more</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">My account</h3>
                </div>
                <br/>


                <div className="row align-items-center">

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


{loading &&   
          <div className='loader'></div>}
        
          
          </div>










                {/* <div className="col-4 text-right">
                  <a href="#!" className="btn btn-sm btn-success"  style={{backgroundColor:'#012949'}}>Change Password</a>
                </div> */}
              </div>
            </div>
            <div className="card-body">


              <form>
                <h6 className="heading-small text-muted mb-4">User information</h6>
                <div className="pl-lg-4">



                <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-first-name">First name</label>
                        <input type="text" id="input-first-name" onChange={handleChange} onFocus={handleFocus} className="form-control form-control-alternative" placeholder="First name" name="firstName" value={firstName}/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                        <input type="text" id="input-last-name" onChange={handleChange} onFocus={handleFocus}  className="form-control form-control-alternative" placeholder="Last name" name="lastName" value={lastName}/>
                      </div>
                    </div>
                  </div>







                  <div className="row">

                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-username">Date Of Birth</label>
                        <input type="date" id="input-username" onChange={handleChange} onFocus={handleFocus}  className="form-control form-control-alternative" placeholder="Username" value={date_of_birth} name='date_of_birth'/>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-email">Email address</label>
                        <input type="email" id="input-email" onChange={handleChange}  readOnly className="form-control form-control-alternative"  name="email" value={email} style={{cursor:'not-allowed'}} placeholder="jesse@example.com"/>
                      </div>
                    </div>
                  </div>





               





                </div>
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">Contact information</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-address">Address</label>
                        <input id="input-address" onChange={handleChange}  className="form-control form-control-alternative" placeholder="Home Address" value="10 Abuja Estate Eleme Portharcourt" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-city">City</label>
                        <input type="text" id="input-city" onChange={handleChange} className="form-control form-control-alternative" placeholder="City" value="portharcourt"/>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-country">Country</label>
                        <input type="text" id="input-country" onChange={handleChange} className="form-control form-control-alternative" placeholder="Country" value="Nigeria"/>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" onChange={handleChange} className="form-control form-control-alternative" placeholder="Postal code"/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <hr className="my-4"/> */}
                {/* <h6 className="heading-small text-muted mb-4">About me</h6> */}
                <div className="pl-lg-4">
                  <div className="form-group focused">
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#012949'}} onClick={handleSubmit}>Update Profile</a>
                    {/* <label>About Me</label>
                    <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciuntt.</textarea> */}
                  </div>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  



    )
}


export default AdminProfile;