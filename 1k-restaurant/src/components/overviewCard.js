import React from 'react'

export default function OverviewCard(props) {
  return (
    <div className='border-2 border-gray-200 w-[235px] h-[150px] rounded-md flex flex-col items-center justify-center gap-4 hover:scale-105 cursor-pointer transition duration-300 ease-in'>
        <p className='text-2xl font-semibold'>{props.value}</p>
        <p className='text-lg font-normal'>{props.name}</p>
    </div>
  )
}
