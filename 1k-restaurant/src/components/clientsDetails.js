
import React from 'react'

function ClientDetails(props) {
    return (
        <div className='h-20 w-full border-y flex flex-row justify-around items-center text-center'>
            <td className='w-1/4 flex flex-row justify-evenly items-center'>
                <img className='w-[50px] h-[50px] rounded-full object-cover' src={props.src} alt={props.alt} />
                <div>
                    {props.details}
                    <h5 className='text-xs text-gray-400'>{props.update}</h5>
                </div>
            </td>
            <td className='w-1/4 flex items-center justify-center flex-col'>
                {props.price}
                <h5 className='text-xs text-gray-400'>{props.date}</h5>
            </td>
            <td className='w-1/4 flex items-center justify-center'>
                <button className='bg-[#46A80F] p-2 rounded-xl text-white flex flex-row items-center justify-around'><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className='h-6 w-6' fill='#fff'><path d="M256 128c-81.9 0-145.7 48.8-224 128 67.4 67.7 124 128 224 128 99.9 0 173.4-76.4 224-126.6C428.2 198.6 354.8 128 256 128zm0 219.3c-49.4 0-89.6-41-89.6-91.3 0-50.4 40.2-91.3 89.6-91.3s89.6 41 89.6 91.3c0 50.4-40.2 91.3-89.6 91.3z"/><path d="M256 224c0-7.9 2.9-15.1 7.6-20.7-2.5-.4-5-.6-7.6-.6-28.8 0-52.3 23.9-52.3 53.3s23.5 53.3 52.3 53.3 52.3-23.9 52.3-53.3c0-2.3-.2-4.6-.4-6.9-5.5 4.3-12.3 6.9-19.8 6.9-17.8 0-32.1-14.3-32.1-32z" fill='#fff'/></svg>View Report</button>
            </td>
            <td className='w-1/4 flex items-center justify-evenly'>
                <button className='bg-white border border-[#46A80F] h-10 w-24 rounded-xl'>{props.category}</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 w-6'><g data-name="Layer 2"><g data-name="more-vertical"><rect width="24" height="24" opacity="0" transform="rotate(-90 12 12)"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></g></g></svg>
            </td>
        </div>
    )
}

export default ClientDetails