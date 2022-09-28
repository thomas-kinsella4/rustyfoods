import React from "react";
import img1 from "./assets/one.png";
import img2 from "./assets/two.png";
import img3 from "./assets/three.png";

function Description() {
    return (
        <div id="description-div">
             <div className="description-section">
                 <h2>Find</h2>
                 <img src={img1} className="description-img"></img>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
             </div>
             <div className="description-section">
                 <h2>Deliver</h2>
                 <img src={img3} className="description-img"></img>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
             </div>
             <div className="description-section">
                 <h2>Eat</h2>
                 <img src={img2} className="description-img"></img>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
             </div>
        </div>
    )
}

export default Description;