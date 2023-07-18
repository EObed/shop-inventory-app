import React from "react";
import "./App.css";
import {LoginPage }from "./components/LoginPage";
import Page1 from "./components/Page1";
import {Routes,BrowserRouter,Route} from "react-router-dom"
import SignUpPage from "./components/SignUpPage";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import { Page2 } from "./components/Page2";

function App() {

  const users = useSelector(state => state.users)

  return (
    <BrowserRouter>
    {/* <ProtectedRoute /> */}
    <Routes>
    <Route path="/" exact element={<Page1 />} />
       <Route path="/signup" exact element={ <SignUpPage />} />
      
       <Route path="/login" exact element={ <LoginPage/>}/>
       <Route path="/protectedPage" exact element={ <ProtectedRoute />}/>
       <Route path="/page2" exact element={ <Page2/>}/>
    </Routes>
    </BrowserRouter>
   
    
   
    );
}

export default App;
