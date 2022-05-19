import React,{useState} from "react";
import foodImage from '../signup/food.jpg'
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function SignUp() {

    const[state, setstate]=useState(false);
    const toogleButton = ()=> {

        setstate(prevstate => !prevstate);
    }
 
  return (
    <div className=" h-screen flex font-['nunito']">
        <div className="bg-white w-3/6 h-screen ">
            <div>
                <div className="flex flex-col container ml-auto mr-auto">
                    <div className="heading mt-16">
                        <h className="font-extrabold text-3xl ml-52 tracking-wide  text-[#46A80F] font-Nunito">Create a new account</h>
                    </div>
                    <div className="form mt-16 gap-11  ml-auto mr-auto  w-[450px] ">
                        <div className="flex flex-col">
                         <TextField id="input" label="First Name" variant="outlined" size="small"/>
                        </div>
                        <div className="flex flex-col  mt-4">
                        <TextField id="input" label="Last Name" variant="outlined" size="small" font="'Nunito', sans-serif;"/>
                        </div>
                        <div className="flex flex-col  mt-4">
                        <TextField id="input" label="Phone" variant="outlined" size="small"/>
                        </div>
                        <div className="flex flex-col  mt-4">
                        <TextField id="input" label="Email" variant="outlined" size="small"/>
                        </div>
                        <div className="flex flex-col  mt-4">
                        <TextField id="input" label="Password" variant="outlined" size="small" type={state ? "text" : "password"}/>
                        <div className="absolute w-8 bottom-[265px] right-[1020px]">
                        <button className="button absolute bottom-[43px] right-[-70px]" onClick={toogleButton}>
                           { state ? <AiOutlineEye size={25}/>:
                               <AiOutlineEyeInvisible size={25}></AiOutlineEyeInvisible>
                           } 
                        </button>
                        </div>
                        </div>
                        <div  className="flex flex-col  mt-4">
                           <button type="button" className="flex rounded-md justify-center items-center text-white font-bold border-2 bg-[#46A80F] mt-10 h-10  shadow-xl" >Sign up</button>
                        </div>
                        <div className="flex flex-col mt-16">
                            <Link to='/login' className="no-underline">
                           <h1 className="ml-16 no-underline text-black  text-xl">Already have an account? <a href="/login" className="font-extrabold text-[#D59101] no-underline">Log in</a></h1>
                           </Link>
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