import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/header'
import OrderCard from '../../components/OrderCard'
import profileImg from '../../img/test.png'
function Orders() {

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className='flex h-screen overflow-hidden'>
            <NavBar active="orders" />
            <div className='w-full' >
                <Header img={profileImg} username="Mutesa Cedric"/>
                <div className='body w-full border h-screen overflow-auto px-8 py-10 mt-4 rounded-xl ' >
                    <div className='flex justify-between items-center'>
                        <div className=''>
                            <span className='text-2xl'>Orders</span>
                            <p className='text-md text-gray-500'>Monday 12, May 2022</p>
                        </div>
                        <button className='px-10 py-2 border-2 rounded-lg text-xl border-[#46A80F]'> New</button>
                        <button className='px-10 py-2 border rounded-lg text-xl text-white bg-[#46A80F] '> Delivered</button>
                        <button className='px-10 py-2 border rounded-lg text-xl text-white bg-[#46A80F] '> Rejected</button>
                        <button className='px-10 py-2 border rounded-lg text-xl text-white bg-[#46A80F] '> Waiting </button>
                        <button className='px-10 py-2 border rounded-lg text-xl text-white bg-[#46A80F]'> All</button>
                    </div>
                    <div className='flex mt-6 gap-2 overflow-auto  top-20'>
                        <div className='left w-2/3  h-auto '>
                            {num.map((number) => (
                                <OrderCard />
                            ))}
                        </div>
                        <div className='w-1/3 sticky bottom-60'>
                            <div className='w-full border py-2 px-2  bg-gray-100 rounded-xl'>
                                <h1 className='text-xl font-bold '>Add Order</h1>
                                <p className='text-center'> Create new order manually</p>
                                <hr className='mb-4' />
                                <div className='options flex flex-col'>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5 border-b '> <input type="radio" name="o_class" className='mr-4  ' /> Dessert</label>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5 border-b '> <input type="radio" name="o_class"  className='mr-4  ' /> Main</label>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5 border-b '> <input type="radio" name="o_class"  className='mr-4  ' /> Drink</label>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5 border-b '> <input type="radio" name="o_class"  className='mr-4  ' /> Appetizer</label>
                                    <label htmlFor='dessert' className='text-xl py-2 px-5  '> <input type="radio" name="o_class"  className='mr-4  ' /> Starter</label>
                                </div>
                            </div>
                            <div className='w-full border py-2 px-2  bg-gray-100 rounded-xl mt-2'>
                                <h1 className='text-4xl text-center text-[#46A80F]'>6</h1>
                                <p className='text-center'>Delivered</p>
                            </div>
                            <div className='w-full border py-2 px-2  bg-gray-100 rounded-xl mt-2'>
                                <h1 className='text-4xl text-center text-[#46A80F]'>12</h1>
                                <p className='text-center'>Waiting</p>
                            </div>
                            <div className='w-full border py-2 px-2  bg-gray-100 rounded-xl mt-2'>
                                <h1 className='text-4xl text-center text-red-600'>1</h1>
                                <p className='text-center'>Rejected</p>
                            </div>
                            <div className='w-full border py-2 px-2  bg-gray-100 rounded-xl mt-2'>
                                <h1 className='text-4xl text-center text-[#46A80F]'>30</h1>
                                <p className='text-center'>All</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Orders
