import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/header'
import axios from 'axios'
import MenuCard from '../../components/MenuCard'

function Menu() {
const [loading,setLoading]  = useState(false)
const [menuitems, setMenuitems] = useState(null)

  useEffect(()=> {
//setLoading(true)
    console.log("Hello WOrld");
     const getMenus = async () => {
     const response = await axios.get("https://196.223.240.154:8099/supapp/api/menu-items")
     setMenuitems(response)
    }
    getMenus();
   // setLoading(false);
        
  },[])

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className='flex pr-[5vw] '>
            <NavBar />
            <div className='w-full' >
                <Header />
                <div className='body w-full border h-fit px-8 py-10 mt-4 rounded-xl' >
                    <div className='flex justify-between items-center'>
                        <div className=''>
                            <span className='text-2xl'>Menus</span>
                            <p className='text-md text-gray-500'>Monday 12, May 2022</p>
                        </div>
                        <button className='px-10 py-4 border-2 rounded-lg text-xl border-[#46A80F]'> Drinks </button>
                        <button className='px-10 py-4 border rounded-lg text-xl text-white bg-[#46A80F] '> Starter</button>
                        <button className='px-10 py-4 border rounded-lg text-xl text-white bg-[#46A80F] '> Appetizer</button>
                        <button className='px-10 py-4 border rounded-lg text-xl text-white bg-[#46A80F] '> Desert </button>
                        <button className='px-10 py-4 border rounded-lg text-xl text-white bg-[#46A80F]'> Main</button>
                    </div>
                    <div className='flex mt-6 gap-2 sticky top-20'>
                     {!loading && (   <div className='left w-2/3  h-full'>
                            {num.map((number) => (
                                <MenuCard />
                            ))}
                        </div>)}
                       {loading && ( <div className='left w-2/3  h-[60vh] flex items-center justify-center'>
                            Loading...
                        </div>)}
                        <div className='w-1/3 sticky bottom-60'>
                            <div className='w-full border py-2 px-2  bg-gray-100 rounded-xl'>
                                <h1 className='text-xl font-bold '>Add Menu item</h1>
                                <p className='text-center'> Create new menu item</p>
                                <hr className='mb-4' />
                                <div className='options flex flex-col'>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5 border-b '> <input type="radio" className='mr-4  ' /> Dessert</label>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5 border-b '> <input type="radio" className='mr-4  ' /> Main</label>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5 border-b '> <input type="radio" className='mr-4  ' /> Drink</label>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5 border-b '> <input type="radio" className='mr-4  ' /> Appetizer</label>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5  '> <input type="radio" className='mr-4  ' /> Starter</label>
                                </div>
                            </div>
                         
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Menu