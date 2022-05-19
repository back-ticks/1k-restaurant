
import React from 'react'

function ClientDetails(props) {
    return (
        <div className='h-20 w-full border-y flex flex-row justify-around items-center text-center'>
            <td className='w-1/4 flex flex-row justify-evenly'>
                <img className='w-[40px] h-[40px] rounded-full object-cover' src={props.src} alt={props.alt} />
                <div>
                    {props.details}
                    <h5 className='text-xs text-gray-400'>{props.update}</h5>
                </div>
            </td>
            <td className='w-1/4'>
                {props.price}
                <h5 className='text-xs text-gray-400'>{props.date}</h5>
            </td>
            <td className='w-1/4'>
                <button className='bg-[#46A80F] p-2 rounded-xl hover:bg-white hover:text-[#46A80F] hover:border hover:border-[#46A80F] text-white'>View Report</button>
            </td>
            <td className='w-1/4'>
                <button className='bg-white border border-[#46A80F] h-10 w-24 rounded-xl'>{props.category}</button>
            </td>
        </div>
    )
}

export default ClientDetails