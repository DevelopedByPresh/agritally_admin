
import React,{lazy, Suspense} from "react"
import './App.css';
import SignUp from "./components/SignUp/SignUp"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"
import Login from "./components/Login/Login"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import PrivateRoute from "./components/PrivateRoute";



const  Dashboard = lazy(()=> import("./components/Dashboard/Dashboard"))
const  AdminProfile = lazy(()=> import("./components/AdminProfile/AdminProfile"))
const  Users = lazy(()=> import("./components/Dashboard/Users"))
const  Admins = lazy(()=> import("./components/Dashboard/Admins"))
const  Orders = lazy(()=> import("./components/Dashboard/Orders"))
const  Carts = lazy(()=> import("./components/Dashboard/Carts"))
const  Transactions = lazy(()=> import("./components/Dashboard/Transactions"))
const  AllProductReport = lazy(()=> import("./components/Dashboard/AllProductReport"))
const  NotFound = lazy(()=> import("./components/NotFound/NotFound"))





function App() {
  return(
<div>



<div className="App">
        <Router>

          <Suspense fallback={<h2 style={{textAlign:'center', marginTop:'40px', fontStyle:'italic', fontWeight:'bold', fontSize:'18px'}}>Working on it....</h2>}>
          <Routes>
            <Route element={<PrivateRoute />}>
                <Route element={<Dashboard/>} path="/Dashboard" exact/>
                <Route element={<AdminProfile/>} path="/AdminProfile"/>
                <Route element={<Users/>} path="/Dashboard/Users"/>
                <Route element={<Admins/>} path="/Dashboard/Admins"/>
                <Route element={<Orders/>} path="/Dashboard/Orders"/>
                <Route element={<Carts/>} path="/Dashboard/Carts"/>
                <Route element={<Transactions/>} path="/Dashboard/Transactions"/>
                <Route element={<AllProductReport/>} path="/Dashboard/AllProductReport"/>
            </Route>
            <Route element={<Login/>} path="/"/>
            <Route exact path='/SignUp' element={<SignUp/>}/>
            <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          </Suspense>
      </Router>
    </div>


    
    </div>
  );
}

export default App;



