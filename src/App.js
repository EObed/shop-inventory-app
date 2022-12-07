import React from "react";
import "./App.css";
import Slider from "./components/Slider";


function App() {
  return (
        <div className="main-page">
            <div className="title-bar">
                <div>
                    <img src="/logo1.png" alt="MyShop Logo"></img>
                </div>
                <div className="header">
                    <h1>Welcome to the MyShop App</h1>
                </div>
                <div className="buttons">
                    <div>
                        <button>Log In</button>
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="content-box">
                <div className="content-header">
                    <p>Shopkeeping Made Easier</p>
                </div>
                <div className="text-boxes">
                  <Slider/>
                </div>
            </div>
        </div>
    );
}

export default App;
