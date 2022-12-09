import React from 'react'
import Slider from "./Slider"
import "./Page1.css"
import { Link } from 'react-router-dom'
function Page1() {
  return (
    <div>
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
                        <button>
                            <Link to="/login"> Log In</Link>
                           
                            </button>
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
                <div className="main-content">
                    <div className="description">
                        <p className="description-heading">
                            <h3>What is the MyShop App?</h3>
                        </p>
                        <p className="description-body">
                            The MyShop App is an on-line shopkeeping app. It has an inventory, to-do list among other tools
                            to make your work as a shop-keeper easier.
                        </p>
                    </div>
                    <div className="text-boxes">
                    <Slider/>
                    </div>
                </div>
            </div>
          
            <div className="footer">
                <div className="logo-down">
                    <img src="/logo1.png" alt="MyShop Logo" className="logo-bottom"></img>
                </div>
                <div className="contact-info">
                    <div className="contact-text">
                        Contact Us:       
                    </div>
                    <div className='phone-number'>
                        <i class="fa fa-phone" aria-hidden="true"></i> 0501316137
                    </div>
                    <div className="whatsapp">
                        <i class="fab fa-whatsapp fa-1.5x"></i> 0572205555
                    </div>
                    <div className='email'>
                        <i class="fa fa-envelope" aria-hidden="true"></i> obedeffum10@gmail.com
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page1