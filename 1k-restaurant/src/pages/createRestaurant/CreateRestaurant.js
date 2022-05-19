import React, { useState } from 'react'
import Header from '../../components/header'
import logo from '../../img/logo.png'
import profileImg from '../../img/test.png'
import RestaurantInfo from './restaurantInfo'
import RestaurantMenu from './restaurantMenu'
import RestaurantType from './restaurantType'

export default function CreateRestaurant() {

    //State for controlling steps
    const [activeStep, setActiveStep] = useState(1)

    //syles class
    const styleClass = "bg-[#46A80F] text-white"
  return (
    <div className='w-full h-screen overflow-auto'>
        <Header img={profileImg} title={<img className='w-12 h-12' src={logo} alt="logo"/>} />

        <div className='px-8 py-12 flex justify-center'>
            <div className='card relative bg-[#EDEDED] w-[300px] h-[300px]'>
                <div className='bg-black opacity-20 h-[40%]'></div>
                <div className='relative bottom-16 m-auto w-fit'>
                    <img className='w-[150px] h-[150px] object-cover rounded-full' src={profileImg} alt="Profile" />
                    <div className='pt-2'>
                        <h2 className='text-lg font-semibold text-center'>Mutesa Cedric</h2>
                        <p className='text-center text-gray-500'>The restaurant owner</p>
                    </div>
                </div>

            </div>
            <div className='px-12'>
                <div className='steps flex gap-6'>
                    <div className={`item flex gap-4 items-center shadow-md p-4 px-8  rounded-md ${activeStep === 1 ? styleClass: "bg-[#c1c0c0]"}`}>
                        <div className='bg-white shadow-md rounded-full flex justify-center items-center p-3 w-[50px] h-[50px]'>
                            <p className='text-4xl font-bold text-[#46A80F]'>1</p>
                        </div>
                        <div>
                            <h2 className='font-medium text-lg'>Restaurant info</h2>
                            <p className='text-sm  opacity-50'>Restaurant address,</p>
                            <p className='text-sm  opacity-50'>owner details</p>
                        </div>
                    </div>
                    <div className={`item flex gap-4 items-center shadow-md p-4 px-8  rounded-md ${activeStep === 2 ? styleClass: "bg-[#c1c0c0]"}`}>
                        <div className='bg-white shadow-md rounded-full flex justify-center items-center p-3 w-[50px] h-[50px]'>
                            <p className='text-4xl font-bold text-[#46A80F]'>2</p>
                        </div>
                        <div>
                            <h2 className='font-medium text-lg'>Restaurant Type</h2>
                            <p className='text-sm  opacity-50'>Restaurant type and</p>
                            <p className='text-sm  opacity-50'>timings</p>
                        </div>
                    </div>
                    <div className={`item flex gap-4 items-center shadow-md p-4 px-8  rounded-md ${activeStep === 3 ? styleClass: "bg-[#c1c0c0]"}`}>
                        <div className='bg-white shadow-md rounded-full flex justify-center items-center p-3 w-[50px] h-[50px]'>
                            <p className='text-4xl font-bold text-[#46A80F]'>3</p>
                        </div>
                        <div>
                            <h2 className='font-medium text-lg'>Create your menu</h2>
                            <p className='text-sm  opacity-50'>Available meals and</p>
                            <p className='text-sm  opacity-50'>other offerings</p>
                        </div>
                    </div>
                </div>


                <div className='w-full p-10 border-2 border-gray-200  mt-5 rounded-md'>
                    {activeStep === 1 && <RestaurantInfo next={()=>setActiveStep(2)}/>}
                    {activeStep === 2 && <RestaurantType next={()=>setActiveStep(3)}/>}
                    {activeStep === 3 && <RestaurantMenu/>}
                </div>
            </div>
        </div>
    </div>
  )
}
