import React, {useState} from "react";
import drinkImage from '../signup/wine.jpg';
import { TextField } from '@mui/material';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';




export default function Login() {
 
    const[state, setstate]=useState(false);
    const toogleButton = ()=> {

        setstate(prevstate => !prevstate);
    }

    const HandleLogin = ()=>{
        
    }

  return (
    <div className=" h-screen flex font-['Nunito']">
        <div className="bg-white w-3/6 h-screen ">
            <div>
                <div className="flex flex-col container ml-auto mr-auto w-[490px]">
                    <div className="heading mt-36 ml-auto mr-auto ">
                        <h className=" text-[40px] ml-[110px] tracking-wide font-extrabold text-[#46A80F]">Log in to 1k</h>
                        <p className=" mt-14 ml-[40px] text-xl text-slate-500 tracking-widest">Enter you Email and password below</p>
                    </div>
                    <div className="form mt-14 gap-11w-[100px] w-[450px] ml-auto mr-auto">
                    <div className="flex flex-col">
                         <TextField id="input" label="Email" variant="outlined" size="small"/>
                        </div>
                        <div className="flex flex-col  mt-8">
                        <TextField id="input" label="Password" variant="outlined" size="small" type={state ? "text" : "password"}/>
                        <div className="relative">
                            <button className="button absolute right-2 -top-[30px]" onClick={toogleButton}>
                            { state ? <AiOutlineEye size={20}/>:
                                <AiOutlineEyeInvisible size={20}></AiOutlineEyeInvisible>
                            } 
                            </button>
                        </div>
                        </div>
                        <div  className="flex flex-col">   
                        <Link to='/overview' className="w-full  ">
                         <button type="button" className="flex w-full border-none rounded-md justify-center items-center text-white font-bold border-2 bg-[#46A80F] mt-10 h-10  shadow-xl " >Log in</button>
                        </Link> 
                        </div>
                        <div className="flex flex-col mt-16">
                        <Link to='/signup' className="no-underline">
                           <h1 className="ml-16 text-xl text-black">Don't have an account? <a href="./login.jsx" className="font-extrabold text-[#D59101] no-underline">Sign up</a></h1>
                           </Link> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div style={{ backgroundRepeat : "no-repeat" ,  backgroundSize : "cover", backgroundImage: `url(${drinkImage})` }} className="w-3/6 h-screen ">
            </div> 
    </div>
  );
}