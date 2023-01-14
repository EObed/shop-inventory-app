import React from "react";
import "./App.css";
import {LoginPage }from "./components/LoginPage";
import Page1 from "./components/Page1";
import {Routes,BrowserRouter,Route} from "react-router-dom"
import SignUpPage from "./components/SignUpPage";
import { useSelector } from "react-redux";

function App() {

  const users = useSelector(state => state.users)

  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" exact element={<Page1 />} />
       <Route path="/login" exact element={<LoginPage/>} />
       <Route path="/signup" exact element={<SignUpPage />}/>
    </Routes>
    </BrowserRouter>
   
    
   
    );
}

export default App;
