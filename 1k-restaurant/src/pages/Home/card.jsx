import React from "react";
import dish from "../../assets/images/dish2-small.png";
const Card=(props)=>{

    return(
        <div className="card">
            <div className="card-header">
                <img src={dish} alt="dish"/>
            </div>
            <div>
                <div>
                    <span>{props.step}</span>
                </div>
                <div>
                    <span>{props.text}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
