import React, { useState } from 'react';
import Header from '../../components/header';
import NavBar from '../../components/NavBar';
import OverviewCard from '../../components/overviewCard';
import profileImg from '../../img/test.png'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js'
import {Line,Bar} from 'react-chartjs-2'
import Pcard from '../../components/pCard';
import rest from '../../img/rest.jpg'
import {Link } from 'react-router-dom'


const Overview = () => {

    const today = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    //Drowpdown control state

    const [dropdown,setDropdown] = useState(false)
    const [selectedOption,setSelectedOption] = useState("Hotel")

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
            pointRadius: 8,
            label: 'Drinks',
            data: [12,24,41,55,66,70,89],
            borderColor: 'rgba(51, 160, 44, 1)',
            backgroundColor: 'rgba(51, 160, 44, 1)',
          },
          {
              pointRadius: 8,
            label: 'Appetizzer',
            data: [13,43,56,77,85,86,57,70],
            borderColor: 'rgba(31, 120, 180, 1)',
            backgroundColor: 'rgba(31, 120, 180, 1)',
          },
          {
              pointRadius: 8,
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
            <div className='w-full relative'>
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

                <div className='flex relative'>
                  <div className="cards flex flex-wrap gap-2 p-7 pb-9">
                      <Pcard type="Restaurants" items={resto_Items} />
                      <Pcard type="Hotels" items={hotel_Items} />
                      <Pcard type="Pubs" items={pubs_Items} />
                      <Pcard type="Cafe" items={cafe_Items} />
                  </div>
                  <div className='mt-8 h-[380px] p-2 border-2 border-gray-300 absolute z-10 right-2 rounded-md'>
                    <div className='title text-center'>
                      <h3 className='text-lg font-medium'>Create new</h3>
                    </div>
                    <div className='pt-5'>
                      <p className='text-sm text-gray-500'>New hotel, pub, cafe or Restaurant</p>
                      <div className='dropdown mt-2'>
                          
                          <div className='flex justify-between p-1 px-3 rounded-sm border-2 items-center cursor-pointer' onClick={()=>setDropdown(!dropdown)}>
                            <span>{selectedOption}</span>
                            {dropdown === true && <svg className='w-4 h-4 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>}
                            {dropdown === false && <svg className='w-4 h-4 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>}
                          </div>
                          {dropdown === true && <div className='flex flex-col gap-2 p-2 bg-gray-200 z-10 relative w-full'>
                            <span onClick={(e)=>{setSelectedOption(e.target.innerText);setDropdown(false) }} className='cursor-pointer rounded-md p-2 hover:bg-green-500 hover:text-white block'>Hotel</span>
                            <span onClick={(e)=>{setSelectedOption(e.target.innerText);setDropdown(false) }} className='cursor-pointer rounded-md p-2 hover:bg-green-500 hover:text-white block'>Cafe</span>
                            <span onClick={(e)=>{setSelectedOption(e.target.innerText);setDropdown(false) }} className='cursor-pointer rounded-md p-2 hover:bg-green-500 hover:text-white block'>Restaurant</span>
                            <span onClick={(e)=>{setSelectedOption(e.target.innerText);setDropdown(false) }} className='cursor-pointer rounded-md p-2 hover:bg-green-500 hover:text-white block'>Pub</span>
                          </div>}

                          <Link to='/create'>
                          <button className='p-2 rounded-md bg-[#46A80F] opacity-90 hover:opacity-100 text-white text-sm w-[95%] flex items-center justify-center gap-4 absolute top-36 z-0 left-1'>
                            <span>Create now</span> 
                            <svg className='w-6 h-6 rounded-full fill-[#46A80F] bg-white p-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg> 
                          </button>
                          </Link>
                        
                          <div className='mt-full w-full absolute left-0 right-0 bottom-0'>
                            <img className='w-full h-[180px] object-cover rounded-md' src={rest} alt = "cover"/>

                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>


        </div>
    );
}

export default Overview;
