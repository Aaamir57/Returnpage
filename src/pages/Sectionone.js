import React from "react";


export default function Sectionone() {
  return (

<div>
    <div className="container-fluid text-center section1-bg"
    style={{backgroundImage: "url('./media/2.png')"}}>
        <div className="row">
            <div className="col cooo">
                <h3>
                    Return your product
                    without Leaving
                    <span>Your Home!</span>
                </h3>
                <p>
                    We pick up returns purchased from any online retailer.<br/>
                    No more printing labels, packaging or trips to the post office
                </p>
                <div className="mainbutton-div">
                    <button className="button-div1">
                        <a href="#">Get Started</a> 
                    </button>
                    <button className="button-div2">
                        <a href="#">Our Pricing</a>
                    </button>  
                    <br/>
                        
                </div>
                <div className="input-container ">
                    <i className="fa-solid fa-location-pin icon"></i>
                    <input className="input-field" type="text" placeholder="Enter Zip Code" name="email"/>
                </div>

            </div>
            <div className="col main-buton-right">
            </div>  
        </div>
    </div>


</div>
  )
}
