import React from "react";
import foodImage from '../signup/food.jpg'

export default function SignUp() {
 
  return (
    <div className="bg-green-500 h-screen flex">
        <div className="bg-white w-3/6 h-screen ">
            <div>
                <div className="flex flex-col container ml-auto mr-auto w-[490px]">
                    <div className="heading mt-16">
                        <h className="font-extrabold text-3xl ml-16 tracking-widest text-[#46A80F]">Create a new account</h>
                    </div>
                    <div className="form mt-16 gap-11">
                        <div className="flex flex-col">
                            <label>First Name</label>
                            <input type="text"  className="border-2 border-grey pl-2 h-10 rounded-sm"></input>
                        </div>
                        <div className="flex flex-col">
                            <label>Last Name</label>
                            <input type="text"  className="border-2 border-grey pl-2 h-10 rounded-sm"></input>
                        </div>
                        <div className="flex flex-col">
                            <label>Phone</label>
                            <input type="text"  className="border-2 border-grey pl-2 h-10 rounded-sm"></input>
                        </div>
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input type="text"  className="border-2 border-grey pl-2 h-10 rounded-sm"></input>
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input type="password"  className="border-2 border-grey pl-2 h-10 rounded-sm"></input>
                        </div>
                        <div  className="flex flex-col">
                           <button type="button" className="flex rounded-md justify-center items-center text-white font-bold border-2 bg-[#46A80F] mt-10 h-10  shadow-xl" >Sign up</button>
                        </div>
                        <div className="flex flex-col mt-16">
                           <h1 className="ml-28">Already have an account? <a href="login.jsx" className="font-extrabold text-[#D59101]">Log in</a></h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div style={{ backgroundRepeat : "no-repeat" ,  backgroundSize : "cover", backgroundImage: `url(${foodImage})` }} className="w-3/6 h-screen ">
            </div> 
    </div>
  );
}