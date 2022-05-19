import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/header'
import profileImg from '../../img/test.png'
import ClientDesc from '../../components/clientsDesc'

function Client() {
    return (
        <div className='main w-[99%] flex flex-row'>
            <NavBar active={'clients'} />
            <div className='leftPart w-[80%] flex flex-col ml-2 items-center'>
                <Header title={'Clients'} img={profileImg} username={'Groot'} />
                <div className='lists flex flex-col w-[100%] mt-2 h-[85%]'>
                    <div className='w-[100%] justify-evenly items-center'>
                        <p className='text-lg font-semibold px-4'>New Client</p>
                        <input type={'text'} placeholder='Add new client' className='border-b-2 w-full border-gray-500 outline-none px-4'></input>
                    </div>
                    <ClientDesc />
                </div>
            </div>
        </div>
    )
}

export default Client