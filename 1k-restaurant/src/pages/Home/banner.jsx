import Person from '../../assets/images/person-vector.png';
import dish from '../../assets/images/dish-home.png';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className=" pl-36 pr-20 flex mt-6">
                <div className="flex items-center justify-between border-r-2">
                    <Link to="/login">
                      <button className="bg-white shadow-md px-8 py-2 rounded-3xl mr-12"><span className=' font-bold leading-[25px] text-[20px]'>Sign in</span> </button>
                    </Link>
                    <svg className="mr-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8711 13.5V8.5C15.8711 5.43 14.2311 2.86 11.3711 2.18V1.5C11.3711 0.67 10.6911 0 9.86107 0C9.03107 0 8.37107 0.67 8.37107 1.5V2.18C5.50107 2.86 3.87107 5.42 3.87107 8.5V13.5L2.57107 14.79C1.94107 15.42 2.38107 16.5 3.27107 16.5H16.4411C17.3311 16.5 17.7811 15.42 17.1511 14.79L15.8711 13.5ZM9.86107 19.5C10.9611 19.5 11.8611 18.6 11.8611 17.5H7.86107C7.86107 18.6 8.75107 19.5 9.86107 19.5ZM4.64107 2.23C5.06107 1.85 5.07107 1.2 4.67107 0.8C4.29107 0.42 3.67107 0.41 3.28107 0.78C1.57107 2.34 0.391071 4.46 0.0110709 6.84C-0.0789291 7.45 0.391071 8 1.01107 8C1.49107 8 1.91107 7.65 1.99107 7.17C2.29107 5.23 3.25107 3.5 4.64107 2.23ZM16.4711 0.78C16.0711 0.41 15.4511 0.42 15.0711 0.8C14.6711 1.2 14.6911 1.84 15.1011 2.22C16.4811 3.49 17.4511 5.22 17.7511 7.16C17.8211 7.64 18.2411 7.99 18.7311 7.99C19.3411 7.99 19.8211 7.44 19.7211 6.83C19.3411 4.46 18.1711 2.35 16.4711 0.78Z" fill="white" />
                    </svg>
                </div>
                <div className="flex items-center justify-between ml-6">
                    <h1 className="pr-8 text-md text-white text-[20px] font-[400]">Groot</h1>
                    <img src={Person} alt='person' className='mt-3'/>
                </div>
            </div>
            <div className="mt-8  flex items-center justify-center">
                <img src={dish} alt="dish" className="mr-8"/>
            </div>
        </div>
    )
}

export default Banner;