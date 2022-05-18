import logo from '../../assets/images/logo-small.png';
const Hero = () => {

    return (
        <div className='w-full h-full'>
            <div className='mb-20'>
                <img src={logo} alt="logo" className=" w-[90px]  h-[80px]"/>
            </div>
            <div className='w-full'>
                <h1 className='font-extrabold text-[64px] leading-[66px] pb-10'>Register your restaurant on <span className="text-[#726D6D]">1k restaurant</span></h1>
                <p className="leading-[25px] text-[24px] pb-10">1K restaurant helps you to manage all your restarant’ s clients and
                    sell food online easily and freely
                </p>
                <button className="bg-[#46A80F] text-white px-6 py-2 rounded-[5px] text-[20px]">Register your restaurant now</button>
            </div>
        </div>
    )
}


export default Hero;