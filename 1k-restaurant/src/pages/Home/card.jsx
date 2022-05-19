import React from "react";

const Card=(props)=>{
    return(
        <div className="shadow-md hover:shadow-lg w-96 relative h-[310px] flex items-center justify-between pb-16 mb-24 flex-col">
            <div className="absolute bg-[#46A80F] w-full h-[14px]">
            </div>
            <div className="">
                <img src={props.image} alt="dish" className=""/>
            </div>
            <div className="flex justify-between items-center mt-10 pl-14 pr-4">
                <div className="text-3xl font-semi-bold pr-4 border-r-2 py-2 border-gray-500">
                    <span>{props.step}</span>
                </div>
                <div className="text-xl font-semi-bold pl-4 text-center">
                    <span>{props.text}</span>
                </div>
            </div>
        </div>
    );
}
export default Card;
