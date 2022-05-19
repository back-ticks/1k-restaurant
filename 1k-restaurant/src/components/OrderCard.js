import React from 'react'

function OrderCard() {
  return (
    <div className='w-full h-fit p-2  flex my-1 border border-gray-300 rounded'>
    <div className='w-fit'>
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/11/diabolo-mockail-440-x400-c795884.jpg" alt='' className=' rounded-md  h-[100px] w-auto' />
    </div>
    <div className='info w-2/3 ml-2'   >
        <h1 className='font-bold'>Order 1</h1>
        <p className='text-gray-500'>  Kaffir lime vodka, Lemongrass, Ginger,citrus</p>
        <p className='text-[#46A80F]'>Tom Yummy     <span className='px-2 rounded-full text-white bg-[#46A80F]'>20</span></p>
        <div className='flex  justify-between'><span>RWF,  5000</span> <span className='text-[#46A80F]'>Table 3</span> <span>Guest: +250 788 927 469</span></div>
    </div>
</div>
  )
}

export default OrderCard