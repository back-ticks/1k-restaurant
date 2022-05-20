import React from 'react'
import ClientDetails from './clientsDetails'
import profileImg from '../img/test.png'

function ClientDesc(props) {
    return (
        <div className='flex flex-col justify-center items-center text-white'>
            <div className='w-full'>
                <div className=' h-[60px] w-full bg-[#46A80F] items-center flex flex-row justify-between px-5'>
                    <p>All Clients</p>
                    <div className='flex flex-row justify-evenly w-[15%]'>
                        <section className='flex flex-row items-center justify-around'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='h-6 w-6'><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z" fill='#fff'/></svg>
                            Sort
                        </section>
                        <section className='flex flex-row items-center justify-around'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1792" height="1792" viewBox="0 0 1792 1792" className='h-6 w-6'><path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z" fill='#fff'/></svg>
                            Filter
                        </section>
                    </div>
                </div>
                <div className='flex items-center w-full'>
                    <table className='w-full flex flex-col bg-[#46A80F] items-center'>
                        <tr className='w-full h-[60px] flex flex-row justify-around items-center'>
                            <th>
                                Client details
                            </th>
                            <th>
                                Sales
                            </th>
                            <th>
                                Detailed report
                            </th>
                            <th>
                                Category
                            </th>
                        </tr>
                        <tr className='w-full h-full flex flex-col justify-around items-center bg-white text-black'>
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                            <ClientDetails details='Groot Hotel' price='4955.99$' date='8th Nov 1987' category='Hotel' update='2 days ago' src={profileImg} alt='Bushido' />
                        </tr>
                    </table>
                </div>
            </div>
            <button className='bg-[#46A80F] h-10 self-start w-28 mx-3 my-3 rounded-md flex flex-row items-center justify-evenly'>See More <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className='h-6 w-6'><path d="M184.7 413.1l2.1-1.8 156.5-136c5.3-4.6 8.6-11.5 8.6-19.2 0-7.7-3.4-14.6-8.6-19.2L187.1 101l-2.6-2.3C182 97 179 96 175.8 96c-8.7 0-15.8 7.4-15.8 16.6v286.8c0 9.2 7.1 16.6 15.8 16.6 3.3 0 6.4-1.1 8.9-2.9z" fill='#fff'/></svg></button>
        </div >
    )
}

export default ClientDesc