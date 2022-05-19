import React from "react";
import foodImage from "../signup/food.jpg";
import resto from "../../assets/images/resto.jpg";

export default function AddClient() {
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
        </div>
      </div>
      <div className="bg-white w-[900px] h-screen flex ">
        <div className=" w-[650px] ml-auto mr-auto mt-12" >
          <div className="flex flex-col">
              <label className="font-bold">Client name</label>
              <input type="text" placeholder="client's name" className=" border-b-2 pl-2 h-10 "></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Category</label>
              <input type="text" placeholder="Choose cattegory" className=" border-b-2 pl-2 h-10 rounded-sm"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Representantive</label>
              <input type="text" placeholder="Names" className="border-b-2  pl-2 h-10 rounded-sm"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Date of creation</label>
              <input type="text" placeholder="Month and year" className="border-b-2  pl-2 h-10 rounded-sm"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Address</label>
              <input type="text" placeholder="province, district, sector, cell" className="border-b-2  pl-2 h-10 rounded-sm"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Email</label>
              <input type="text" placeholder="Email" className="border-b-2  pl-2 h-10 rounded-sm"></input>
          </div>
          <div className="flex flex-col mt-4">
              <label className="font-bold">Phone</label>
              <input type="text" placeholder="Phone" className="border-b-2 pl-2 h-10 rounded-sm active:border-blue-600 "></input>
          </div>
          <div className="mt-10">
        <button type="button" className="flex  justify-center items-center text-white font-bold border-2 bg-[#46A80F] mt-10 h-10 w-36  shadow-xl" >Add client</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}
