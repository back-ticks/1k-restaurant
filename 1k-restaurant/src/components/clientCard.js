import React from 'react'

function ClientCard(props) {
    return (
        <div className='w-full h-[52px] flex flex-row items-center justify-between text-center px-4 mt-4 border-y-2 text-black'>
            <td>
                <div className='details flex flex-row justify-evenly items-center text-center'>
                    {/* <div className='h-8 w-8 bg-slate-500'></div> */}
                    <div className='details'>
                        <h1 className='font-thin'>{props.name}</h1>
                        <p className='text-xs font-thin'>{props.updated}</p>
                    </div>
                </div>
            </td>
            <td>
                <div className='sales'>
                    <h1>{props.price}</h1>
                    <p className='text-xs font-thin'>{props.date}</p>
                </div>
            </td>
            <td>
                <div className='report'>
                    <button className='bg-[#46A80F] rounded-xl h-10 w-24'>View Report</button>
                </div>
            </td>
            <td>
                <div>
                    <button className='border border-[#46A80F] rounded-xl h-10 w-20'>{props.business}</button>
                </div>
            </td>
        </div>
    )
}

export default ClientCard