import React from 'react'
import NavBar from '../../components/NavBar'
import Header from '../../components/header'
import profileImg from '../../img/test.png'
import ClientDesc from '../../components/clientsDesc'
import { Link } from 'react-router-dom'

function Client() {
    return (
        <div className=' w-full h-screen flex-row flex overflow-hidden'>
            <NavBar active={'clients'} />
            <div className='leftPart w-full overflow-auto flex flex-col ml-2 items-center'>
                <Header title={'Clients'} img={profileImg} username="Mutesa Cedric"/>
                <div className='lists flex flex-col w-[100%] mt-2 h-[85%]'>
                    <div className='w-[100%] justify-evenly items-center'>
                        <p className='text-lg font-semibold px-4'>New Client</p>
                        <div className='relative flex items-center justify-center'>
                            <input type={'text'} placeholder='Add new client' className='border-b-2 w-full border-gray-400 outline-none px-4'></input>
                            <span><Link to='/addClient'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className='h-6 w-6 absolute top-0 left-[95%] cursor-pointer'><path fill="#46A80F" fill-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" clip-rule="evenodd"></path></svg></Link></span>
                        </div>
                    </div>
                    <ClientDesc />
                </div>
            </div>
        </div>
    )
}

export default Client