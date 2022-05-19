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
                        <section>
                            Sort
                        </section>
                        <section>
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
        </div >
    )
}

export default ClientDesc