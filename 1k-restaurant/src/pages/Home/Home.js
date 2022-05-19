import Banner from "./banner";
import Card from "./card";
import Footer from "./footer";
import Hero from "./Hero";
import drink from '../../assets/images/drink.png'
import dish1 from '../../assets/images/dish1.png';
import dish2 from '../../assets/images/dish2.png';
const Home = () => {
    return (
        <div className="box-border">
            {/* home div */}
            <div className='flex  h-[86vh] justify-between'>
                <div className=' h-full pt-4 pl-12 w-[55vw]'>
                    <Hero />
                </div>
                <div className="border h-full w-[40vw] bg-[#46A80F] rounded-b-[50%]">
                    <Banner />
                </div>
            </div>
            {/* home div */}

            {/* how it works */}
            <div className="">
                <div className="w-full my-10 flex justify-between items-center pl-12 pr-8">
                    <div className="w-48">
                        <h1 className="font-bold text-xl">How it works</h1>
                    </div>
                    <div className="w-full  bg-[#787272] h-[1px] "></div>
                </div>
                <div className="flex justify-between mt-20 pl-12 pr-10">
                    <Card step={1} text='Register your account' image={dish1} />
                    <Card step={2} text='Create your restaurant profile' image={drink} />
                    <Card step={3} text='Start receiving orders' image={dish2} />
                </div>
            </div>
            {/* how it works */}

            {   /* footer */}
            <div>
                <Footer />
            </div>
            {   /* footer */}
        </div>
    )
}
export default Home;