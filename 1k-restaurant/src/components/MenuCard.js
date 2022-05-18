import React from 'react'

function MenuCard() {
  return (
    <div className='w-full h-fit p-2  flex my-1 border border-gray-300 rounded'>
    <div className='w-fit'>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/11/diabolo-mockail-440-x400-c795884.jpg" alt='' className=' rounded-md  h-[100px] w-auto' />
    </div>
    <div className='info w-2/3 ml-2'   >
        <p className='text-gray-500'>  Kaffir lime vodka, Lemongrass, Ginger,citrus</p>
        <p className='text-[#46A80F]'>Classic wine  </p>
        <div className='font-bold'><span>RWF,  5000</span> </div>
    </div>
</div>
  )
}

export default MenuCard