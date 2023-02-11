import React from 'react'
import '../Styles/HeroSection.css';

const fun = ()=>{
    let deleteText= document.querySelector(".container .wrapper . output-box-wrapper .output-box");
    deleteText.innerHTML="";

    let createDiv=document.querySelector(".container .wrapper . output-box-wrapper .output-box");
    createDiv.createElement("ul");
    createDiv.setAttribute("li");


}

function HeroSection() {
  return (
    <div className='container'>
        <div className="wrapper">
            <div className="input-box">
                <div className="input-wrapper">
                    <div> Title</div>
                    <div className="input">
                        <input type="text"/>
                    </div>
                </div>
                <div className="input-wrapper">
                    <div> Author</div>
                    <div className="input">
                        <input type="text"/>
                    </div>
                </div>
                <div className="input-wrapper">
                    <div> ISBN#</div>
                    <div className="input">
                        <input type="text"/>
                    </div>
                </div>
                
                <button type="submit" onClick={fun}>ADD</button>
                
            </div>
            <div className="output-box-wrapper">
                <div className="output-box">
                    No books are added yet
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
