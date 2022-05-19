import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/header'
import profileImg from '../../img/test.png'
import clientCard from '../../components/clientCard'

function Client() {
    return (
        <div className='main w-screen h-[100vh] flex flex-row justify-center'>
            <NavBar active={'clients'} />
            <div className='leftPart h-full w-[77%] flex flex-col justify-between items-center'>
                <Header title={'Clients'} img={profileImg} username={'Groot'} />
                <div className='lists flex h-[85%] flex-col w-[100%]'>
                    <div className='new h-[10%] flex flex-col justify-evenly'>
                        <p className='text-lg font-semibold px-4'>New Client</p>
                        <input type={'text'} placeholder='Add new client' className='border-b-2 border-gray-500 outline-none px-4'></input>
                    </div>
                    <clientCard />
                </div>
            </div>
        </div>
    )
}

export default Client