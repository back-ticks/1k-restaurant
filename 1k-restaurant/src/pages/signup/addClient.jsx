import React, { useState } from "react";
import foodImage from "../signup/food.jpg";
import resto from "../../assets/images/resto.jpg";
import { Link} from 'react-router-dom'
export default function AddClient() {


  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAdress] = useState("")
  const [phone,setPhone] = useState("")
  const [date,setDate] = useState("2022-02-05");
  const [representative,setRepresentative] = useState("")
  const [loading,setLoading] = useState(false)
  const [o_hours,setO_hours] = useState("12:00")
  const [c_hours,setC_hours] = useState("21:00")

  console.log(localStorage.getItem("access_token"))

  return (
    <div className=" h-screen flex font-['Nunito']">
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${resto})`,
        }}
        className="w-[670px] h-screen flex "
      >
        <div className=" ml-auto mr-auto mt-60">
          <h className="text-3xl text-white font-extrabold">Add client</h>
            <p className="text-white mt-3 mr-5">Fill in all the client details</p>
        </div>
      </div>
      <div className="bg-white w-[900px] h-screen flex ">
        <div className=" w-[650px] ml-auto mr-auto mt-12" >
          <div className="flex flex-col">
              <label className="font-bold">Client name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="client's name" className=" border-b-2 pl-2 h-10 outline-none focus:border-b-black"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Opening hours</label>
              <input value={o_hours} onChange={(e)=>setO_hours(e.target.value)}  type="time" placeholder="opening hours" className=" border-b-2 pl-2 h-10 rounded-sm outline-none focus:border-b-black"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Closing hours</label>
              <input value={c_hours} onChange={(e)=>setC_hours(e.target.value)}  type="time" placeholder="closing hours" className=" border-b-2 pl-2 h-10 rounded-sm outline-none focus:border-b-black"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Representantive</label>
              <input value={representative} onChange={(e)=>setRepresentative(e.target.value)} type="text" placeholder="Names" className="border-b-2  pl-2 h-10 rounded-sm outline-none focus:border-b-black"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Date of creation</label>
              <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" placeholder="Month and year" className="border-b-2  pl-2 h-10 rounded-sm outline-none focus:border-b-black"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Address</label>
              <input value={address} onChange={(e)=>setAdress(e.target.value)} type="text" placeholder="province, district, sector, cell" className="border-b-2  pl-2 h-10 rounded-sm outline-none focus:border-b-black"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" className="border-b-2  pl-2 h-10 rounded-sm outline-none focus:border-b-black"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Phone</label>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Phone" className="border-b-2 pl-2 h-10 rounded-sm active:border-blue-600 outline-none focus:border-b-black "></input>
          </div>
          <div className="mt-10">
            <button type="button" className="flex  justify-center items-center text-white font-bold border-2 bg-[#46A80F] mt-10 h-10 w-36  shadow-xl outline-none focus:border-b-black" >Add client</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}
