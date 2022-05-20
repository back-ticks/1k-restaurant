import React from 'react'

export default function RestaurantType(props) {
  return (
    <div className="flex flex-col text-[23px] justify-between pr-24 overflow-auto">
      <div className="flex flex-col mb-4">
        <h1 className="pb-4">Restaurant Type (restaurant, hotel, coffeshop, other)</h1>
        <input type="text" placeholder="Restaurant" className="border outline-none focus:border-gray-500 border-gray-300 px-4 py-1 rounded-[5px] mb-4 placeholder:text-[#8A8A8A] placeholder:text-[20px]" />
        <input type="text" placeholder="African" className=" border border-gray-300 px-4 py-1 outline-none focus:border-gray-500 rounded-[5px] placeholder:text-[#8A8A8A] placeholder:text-[20px]" />
      </div>
      <div className="flex flex-col mb-8">
        <h1 className="pb-4">Opening Hours</h1>
        <div className="flex justify-between">
          <input type="tel" placeholder="Owner's name" className="outline-none focus:border-gray-500 border border-gray-300 px-4 py-1 rounded-[5px] placeholder:text-[#8A8A8A] placeholder:text-[20px]" />
          <input type="email" placeholder="Owner's email" className="outline-none focus:border-gray-500 border border-gray-300 px-4 py-1 rounded-[5px] placeholder:text-[#8A8A8A] placeholder:text-[20px]" />
        </div>
      </div>
      <div className="flex flex-col relative mb-4">
        <h1 className="pb-4">Upload Images (pictures or logo)</h1>
        <input type="file"  className=" opacity-0 z-50 border border-gray-300 px-4 py-1 rounded-[5px] placeholder:text-[#8A8A8A] placeholder:text-[20px]"/>
        <div className="absolute w-full top-12 text-center border border-gray-300 px-4 py-1 rounded-[5px]">
          Choose images 
        </div>
      </div>
      <button className="text-white bg-[#46A80F] px-6 py-2 rounded-[5px] text-[23px] leading-8" onClick={props.next}>
        Next
      </button>
    </div>
  )
}
