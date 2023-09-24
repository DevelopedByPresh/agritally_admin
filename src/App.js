
import React,{lazy, Suspense} from "react"
import './App.css';
import SignUp from "./components/SignUp/SignUp"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"
import Login from "./components/Login/Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Dashboard from "./components/Dashboard/Dashboard";
//  import AdminProfile from "./components/AdminProfile/AdminProfile";
 import PrivateRoute from "./components/PrivateRoute";
// import Users from "./components/Dashboard/Users";
// import AllProductReport from "./components/Dashboard/AllProductReport";


const  Dashboard = lazy(()=> import("./components/Dashboard/Dashboard"))
const  AdminProfile = lazy(()=> import("./components/AdminProfile/AdminProfile"))
const  Users = lazy(()=> import("./components/Dashboard/Users"))
const  AllProductReport = lazy(()=> import("./components/Dashboard/AllProductReport"))




function App() {
  return(
<div>



<div className="App">
        <Router>

          <Suspense fallback={<h2 style={{textAlign:'center', marginTop:'30px', fontStyle:'italic', fontWeight:'bold', fontSize:'18px'}}>Please wait...</h2>}>
          <Routes>
            <Route element={<PrivateRoute />}>
                <Route element={<Dashboard/>} path="/Dashboard" exact/>
                <Route element={<AdminProfile/>} path="/AdminProfile"/>
                <Route element={<Users/>} path="/Dashboard/Users"/>
                <Route element={<AllProductReport/>} path="/Dashboard/AllProductReport"/>
            </Route>
            <Route element={<Login/>} path="/"/>
            <Route exact path='/SignUp' element={<SignUp/>}/>
            <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          </Routes>
          </Suspense>
      </Router>
    </div>


    
    </div>
  );
}

export default App;



