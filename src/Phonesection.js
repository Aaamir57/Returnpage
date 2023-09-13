import React from 'react'

export default function Phonesection() {
  return (
<div>
      
    <div className="container text-center">
        <div className="row phone-section" >
            <div className="col-sm-12 col-md-12 col-lg-5">
                <img src="./media/20.png"/>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">

                <h3>We’ll handle the stress of packaging your returns </h3>
                <div className=" toggle">
                    <button id="flip1"><span>Don't have a printer?</span></button>
                    <p id="panel1">We take care of all the printing for digital labels.</p>
                    
                </div>
                <div className=" toggle">
                    <button id="flip2"><span>Don't have a box?</span></button>
                    <p id="panel2">We take care of all the printing for digital labels.</p>
                </div>
                <div className=" toggle">
                    <button id="flip3"><span>Who has a roll of tape lying around?</span></button>
                    <p id="panel3">We take care of all the printing for digital labels.</p>
                </div>       
            </div>            
        </div>
    </div>
</div>
  )
}
