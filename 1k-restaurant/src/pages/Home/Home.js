import Banner from "./banner";
import Card from "./card";
import Footer from "./footer";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="box-border">
            {/* home div */}
            <div className='flex  h-[86vh] justify-between'>
                <div className=' h-full w-[55vw]'>
                    <Hero />
                </div>
                <div className="border h-full w-[40vw] bg-[#46A80F] rounded-b-[50%]">
                    <Banner />
                </div>
            </div>
            {/* home div */}

            {/* how it works */}
            {/* <div>
                <div>
                    <h1>How it works</h1>
                    <span></span>
                </div>
                <div>   
                    <Card step={1} text='Register your account' />
                    <Card step={2} text='Create your restaurant profile' />
                    <Card step={3} text='Start receiving orders' />
                </div>
            </div> */}
            {/* how it works */}

             {   /* footer */}
                {/* <div>
                    <Footer/>
                </div> */}
             {   /* footer */}
        </div>
    )
}
export default Home;