import React, {useState} from "react";
import drinkImage from '../signup/wine.jpg';
import { TextField } from '@mui/material';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';

import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";


export default function Login() {
    const navigate = useNavigate()
    const[state, setstate]=useState(false);
    const toogleButton = ()=> {

        setstate(prevstate => !prevstate);
    }

    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")


    useEffect(()=>{

        if(JSON.parse(localStorage.getItem("access_token"))){
            navigate('/overview')
        }
    },[])


    const handleLogin = ()=>{

        setLoading(true)

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "login": email,
        "password": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://backend.supamenu.rw/supapp/api/auth/signin", requestOptions)
        .then(response => response.json())
        .then((result)=>{
            setLoading(false)
            console.log(result)
            if(result.apierror){
                setError("Incorrenct email or password")
            }else{
                if(result.token){
                    localStorage.setItem("access_token", JSON.stringify(result.token.accessToken))
                    localStorage.setItem('refresh_token', JSON.stringify(result.token.refreshToken))
                    const user = {
                        fname: result.firstName,
                        lname: result.lastName,
                        email: result.email,
                    }
                    localStorage.setItem("user", JSON.stringify(user))
                    navigate("/overview")
                }
            }

        })
        .catch((error)=>{
            setLoading(false)
            setError("Something went wrong !")
        });
    }

  return (
    <div className=" h-screen flex font-['Nunito']">
        <div className="bg-white w-3/6 h-screen ">
            <div>
                <div className={`flex flex-col container ml-auto mr-auto w-[490px] relative ${loading?"pointer-events-none opacity-70": ""}`}>
                    <div className="heading mt-36 ml-auto mr-auto ">
                        <h className=" text-[40px] ml-[110px] tracking-wide font-extrabold text-[#46A80F]">Log in to 1k</h>
                        <p className=" mt-14 ml-[40px] text-xl text-slate-500 tracking-widest">Enter you Email and password below</p>
                    </div>
                    <div className="form mt-14 gap-11w-[100px] w-[450px] ml-auto mr-auto">
                    <div className="flex flex-col">
                         <TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="input" label="Email" variant="outlined" size="small"/>
                        </div>
                        <div className="flex flex-col  mt-8">
                        <TextField value={password} onChange={(e)=>setPassword(e.target.value)} id="input" label="Password" variant="outlined" size="small" type={state ? "text" : "password"}/>
                        <div className="relative">
                            <button className="button absolute right-2 -top-[30px]" onClick={toogleButton}>
                            { state ? <AiOutlineEye size={20}/>:
                                <AiOutlineEyeInvisible size={20}></AiOutlineEyeInvisible>
                            } 
                            </button>
                        </div>
                        </div>
                        <div  className="flex flex-col">   
  
                        <div className="err text-red-300 mt-4 text-center">{error}</div>
                         <button onClick={handleLogin} type="button" className="flex w-full border-none rounded-md justify-center items-center text-white font-bold border-2 bg-[#46A80F] mt-10 h-10  shadow-xl " >Log in</button>

                        </div>
                        <div className="flex flex-col mt-8">
                        <Link to='/signup' className="no-underline">
                           <h1 className="ml-16 text-xl text-black">Don't have an account? <a href="./login.jsx" className="font-extrabold text-[#D59101] no-underline">Sign up</a></h1>
                           </Link> 
                        </div>
                        {loading&&<svg role="status" class="w-12 h-12 mr-2 text-transparent animate-spin dark:text-gray-600 fill-green-600 absolute top-1/2 left-[40%]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>}
                    </div>
                </div>
            </div>
        </div>
        <div style={{ backgroundRepeat : "no-repeat" ,  backgroundSize : "cover", backgroundImage: `url(${drinkImage})` }} className="w-3/6 h-screen ">
            </div> 
    </div>
  );
}