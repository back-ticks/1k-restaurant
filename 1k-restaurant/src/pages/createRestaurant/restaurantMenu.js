import React from 'react'
import { Link } from 'react-router-dom'

export default function RestaurantMenu() {
  return (
    <div className="flex flex-col text-[23px] justify-between overflow-auto">
      <div className="flex items-center justify-between w-full">
        <button className="px-10 py-4 border rounded-lg text-xl bg-[#46A80F] text-white">
          <span>Drink</span>
        </button>
        <button className='px-10 hover:bg-[#46A80F] hover:text-white py-4 border rounded-lg text-xl border-[#46A80F] text-[#46A80F] '>
          <span>Starter</span>
        </button>
        <button className='px-10 py-4 border rounded-lg text-xl hover:bg-[#46A80F] hover:text-white border-[#46A80F] text-[#46A80F] '>
          <span>Appetizer</span>
        </button>
        <button className='px-10 py-4 border rounded-lg text-xl border-[#46A80F] text-[#46A80F] hover:bg-[#46A80F] hover:text-white'>
          <span>Dessert</span>
        </button>
        <button className='px-10 py-4 border rounded-lg text-xl border-[#46A80F] text-[#46A80F] hover:bg-[#46A80F] hover:text-white'>
          <span>Main</span>
        </button>
      </div>
      <div className='flex flex-col justify-between py-4'>
        <div className="w-full pr-[134px]">
          <h1>Name</h1>
          <input type="text" placeholder="Menu Name" className="border-b w-full outline-none focus:border-gray-500 border-gray-300  py-1 rounded-[5px] mb-4 placeholder:text-[#8A8A8A] placeholder:text-[20px]" />
        </div>
        <div className="w-full pr-[134px]">
          <h1>Price</h1>
          <input type="text" placeholder="Menu Name" className="border-b w-full outline-none focus:border-gray-500 border-gray-300  py-1 rounded-[5px] mb-4 placeholder:text-[#8A8A8A] placeholder:text-[20px]" />
        </div>
        <div className="w-full pr-[134px]">
          <h1>Menu Description</h1>
          <input type="text" placeholder="Menu Name" className="border-b w-full outline-none focus:border-gray-500 border-gray-300  py-1 rounded-[5px] mb-4 placeholder:text-[#8A8A8A] placeholder:text-[20px]" />
        </div>
        <div className="w-full pr-[134px] relative">
          <h1>image</h1>
          <input type="file" placeholder="Menu Name" className="border-b z-50 w-full opacity-0" />
          <div className="absolute top-10 -z-50 w-[82%] border-b text-[#8A8A8A]">Upload Image</div>
        </div>
        <div className="flex my-5">
          <button className="border border-[#46A80F] text-[#46A80F] py-2 px-8 rounded-xl" >Add more</button>
          <svg className="mt-4 ml-8" width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9375 9.625V0H14.0625V9.625H0.5V12.375H14.0625V22H17.9375V12.375H31.5V9.625H17.9375Z" fill="#46A80F" />
          </svg>
        </div>
        <Link to="/overview">
          <button className="text-white w-max rounded-lg border-none mt-4 bg-[#46A80F] px-12 py-1">finish</button>
        </Link>
      </div>
    </div>
  )
}
