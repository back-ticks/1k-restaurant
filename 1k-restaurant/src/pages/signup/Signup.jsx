import React,{useState} from "react";
import foodImage from '../signup/food.jpg'
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'
export default function SignUp() {
    const navigate  = useNavigate()
    const[state, setstate]=useState(false);
    const toogleButton = ()=> {

        setstate(prevstate => !prevstate);
    }

    //Inputs

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    //Error variable

    const [error, setError] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()

        //Validation is done on the bacckend so NO STRESS !

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": email,
        "firstName": fname,
        "lastName": lname,
        "mobile": phone,
        "password": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://backend.supamenu.rw/supapp/api/auth/admin/signup", requestOptions)
        .then(response => response.json())
        .then((result)=>{
            console.log(result.apierror)

            if(result.apierror){
                setError(result.apierror.message)

                if(result.apierror.message === "Validation error"){
                    
                    for (const key in result.apierror.details){
                        setError(result.apierror.details[key])
                    }
                }
            }else if(result.success === "true"){
                //There is no JWT KEY so ==>
                const user = {
                    email: email,
                    phone: phone
                }
                localStorage.setItem('1k_user',JSON.stringify(user))
                navigate('/create')
            }
        })
        .catch(error => console.log('error', error));

     
    }
 
  return (
    <div className=" h-screen flex font-['nunito']">
        <div className="bg-white w-3/6 h-screen ">
            <div>
                <div className="flex flex-col container ml-auto mr-auto">
                    <div className="heading mt-16">
                        <h className="font-extrabold text-3xl ml-[250px] tracking-wide  text-[#46A80F] font-Nunito">Create a new account</h>
                    </div>
                    <div className="form mt-16 gap-11  ml-auto mr-auto  w-[450px] ">
                        <form action="#" onSubmit={(e)=>handleSubmit(e)} >
                            <div className="flex flex-col">
                            <TextField value={fname} onChange={(e)=>setFname(e.target.value)} id="input" label="First Name" variant="outlined" size="small"/>
                            </div>
                            <div className="flex flex-col  mt-4">
                            <TextField value={lname} onChange={(e)=>setLname(e.target.value)} id="input" label="Last Name" variant="outlined" size="small" font="'Nunito', sans-serif;"/>
                            </div>
                            <div className="flex flex-col  mt-4">
                            <TextField value={phone} onChange={(e)=>setPhone(e.target.value)} id="input" label="Phone" variant="outlined" size="small"/>
                            </div>
                            <div className="flex flex-col  mt-4">
                            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="input" label="Email" variant="outlined" size="small"/>
                            </div>
                            <div className="flex flex-col  mt-4">
                            <TextField value={password} onChange={(e)=>setPassword(e.target.value)} id="input" label="Password" variant="outlined" size="small" type={state ? "text" : "password"}/>
                            <div className="relative">
                                <button className="button absolute right-2 -top-[30px]" onClick={toogleButton}>
                                { state ? <AiOutlineEye size={20}/>:
                                    <AiOutlineEyeInvisible size={20}></AiOutlineEyeInvisible>
                                } 
                                </button>

                                <span className="block mt-3 text-red-500 text-center">{error}</span>
                            </div>
                            </div>
                        
                        <div  className="flex flex-col">
                        <button type="submit" className="flex w-full border-none rounded-md justify-center items-center text-white font-bold border-2 bg-[#46A80F] mt-10 h-10  shadow-xl" >Sign up</button>
                            
                        </div>
                        <div className="flex flex-col mt-16">
                            <Link to='/login' className="no-underline">
                                <h1 className="ml-16 no-underline text-black  text-xl">Already have an account? <a href="/login" className="font-extrabold text-[#D59101] no-underline">Log in</a></h1>
                           </Link>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ backgroundRepeat : "no-repeat" ,  backgroundSize : "cover", backgroundImage: `url(${foodImage})` }} className="w-3/6 h-screen ">
            </div> 
    </div>
  );
}