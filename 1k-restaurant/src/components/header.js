import React, { useState } from 'react'

export default function Header(props) {
    const [searchTxt,setSearchTxt] = useState("")
  return (
    <header className='flex justify-between w-full  p-2 px-8 items-center z-10 bg-white shadow pb-4 sticky top-0'>
        <div className='title'>
            <h2 className='text-xl font-semibold'>{props.title}</h2>
        </div>
        <div className=' flex gap-1 items-center'>
            <div className='search rounded-full pr-3 pl-2 border-[1.6px] border-slate-200 hover:border-slate-400 flex items-center'>
                <svg className='w-[20px] h-[20px] fill-black' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
                <input value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}} placeholder='Search here' className='border-none outline-none text-sm h-[35px] w-full p-1 px-4'/>
            </div>
            <div className='bg-[#46A80F] rounded-full flex items-center justify-center p-2 w-[35px] h-[35px] cursor-pointer opacity-80  hover:opacity-100 transition duration-300 ease-in'> 
                <svg className='w-4 h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg>
            </div>
        </div>
        <div className='profile flex items-center  gap-2 cursor-pointer'>
            <span className='text-sm font-medium'>{props.username}</span>
            <img className='w-[40px] h-[40px] rounded-full object-cover' src={props.img}  alt="profile"/>
        </div>
    </header>
  )
}
