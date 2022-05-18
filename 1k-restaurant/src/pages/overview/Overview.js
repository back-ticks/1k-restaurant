import React, { useState } from 'react';
import Header from '../../components/header';
import NavBar from '../../components/NavBar';
import OverviewCard from '../../components/overviewCard';
import profileImg from '../../img/test.png'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js'
import {Line} from 'react-chartjs-2'
import Pcard from '../../components/pCard';



const Overview = () => {

    const today = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    //Drowpdown control state

    const [dropdown,setDropdown] = useState(false)

    //Chart js

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Today trends detailed graph',
        },
    },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

     const data = {
        labels,
        datasets: [
          {
            label: 'Drinks',
            data: [12,24,41,55,66,70,89],
            borderColor: 'rgba(51, 160, 44, 1)',
            backgroundColor: 'rgba(51, 160, 44, 1)',
          },
          {
            label: 'Appetizzer',
            data: [13,43,56,77,85,86,57,70],
            borderColor: 'rgba(31, 120, 180, 1)',
            backgroundColor: 'rgba(31, 120, 180, 1)',
          },
          {
            label: 'Pizza',
            data: [35,63,63,71,53,46,60],
            borderColor: 'rgba(166, 206, 227, 1)',
            backgroundColor: 'rgba(166, 206, 227, 1)',
          },

        ],
      };

      //Details

      const hotel_Items = [
        {name: "Onomo hotel",sales: 46000},
        {Marriot: "Marriot hotel",sales: 1204022}
      ]
      const resto_Items = [
        {name: "Veni vidi", sales: 420642},
        {name: "Chez dush", sales: 115622},
      ]

      const pubs_Items = [
        {name: "Kgl fire", sales: 94140},
        {name: "NYPD K", sales: 35862},
      ]

      const cafe_Items = [
        {name: "KGL cafe", sales: 45676},
        {name: "Bacticks Cafe", sales: 45728},
      ]

    return (
        <div className='w-screen max-w-screen overflow-x-hidden h-screen flex'>
            <NavBar active={'overview'} />

            <div className='w-full'>
                <Header title={'Overview'} img={profileImg} username={"Mutesa Cedric"} />

                <div className='cards flex gap-2 px-5 py-7 flex-wrap'>
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
                        <Line options={options} data={data} />
                    </div>
                </div>

                <div className='flex'>
                  <div className="cards flex flex-wrap gap-2 p-7 pb-9">
                      <Pcard type="Restaurant" items={resto_Items} />
                      <Pcard type="Restaurant" items={resto_Items} />
                      <Pcard type="Restaurant" items={resto_Items} />
                      <Pcard type="Restaurant" items={resto_Items} />
                  </div>
                  <div className='w-[230px]'>
                    <div className='title'>
                      <h3>Create new</h3>
                    </div>
                    <div className=''>
                      <p>New hotel, pub, cafe or Restaurant</p>
                      <div className='dropdown'>

                      </div>
                    </div>
                  </div>
                </div>
            </div>


        </div>
    );
}

export default Overview;
