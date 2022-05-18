import React from 'react';
import Header from '../../components/header';
import NavBar from '../../components/NavBar';
import OverviewCard from '../../components/overviewCard';
import profileImg from '../../img/test.png'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js'
import Line from 'react-chartjs-2'


const Overview = () => {
    const today = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <div className='w-screen overflow-x-hidden h-full flex'>
            <NavBar active={'overview'} />

            <div className='w-full'>
                <Header title={'Overview'} img={profileImg} username={"Mutesa Cedric"} />

                <div className='cards flex gap-2 px-5 py-7'>
                    <OverviewCard value={60} name={"Clients"} />
                    <OverviewCard value={12345036} name={"Revenues (RWF)"} />
                    <OverviewCard value={43477} name={"Orders"} />
                    <OverviewCard value={1245} name={"Orders per hour"} />
                    <OverviewCard value={43477} name={"Orders per hour"} />
                </div>

                <div className='trend px-5'>
                    <div className='title'>
                        <h2 className='text-lg font-medium'>Today trends</h2>
                        <h3 className='text-gray-400 text-xs font-semibold'>{days[today.getDay()]}, {today.getDate()}, {months[today.getMonth()]}, {today.getFullYear()}</h3>
                    </div>

                    <div className='graph'>
                        <canvas id='ctx'>

                        </canvas>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Overview;
