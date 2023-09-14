import React from "react";
import Sectionone from "./Sectionone";


export default function Navbar() {
  return (
    <div>
                
        <nav className="navbar">
        
            <input type="checkbox" name="" value="" id="check"/>
            <label for="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <ul>
                <li><a href="#" class=" active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">How its Works</a></li>
                

                <li className="nav-item return-div">
                    <a className="nav-link active color " aria-current="page" href="#"><img src="./media/1.jpg"/></a>
                </li>
                <li className="nav-item signin-location">
                    <a className="nav-link active color" aria-current="page" href="#">Sign in</a>
                </li>
                
                    <button class="Pickup-div">
                        <a href="#">Schedule a pickup</a>
                    </button>
            </ul>
        </nav>

    </div>
    
  )
}
