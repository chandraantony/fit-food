
import React from 'react'
import  {menu} from '../utils/data'
import {Link} from 'react-router-dom'
import '../assets/css/tailwind.css'

function TodayMenu(){
    return (
        <div id="menu" name="menu" className="max-w-4xl mx-auto py-10">
            <div className="py-10">
                <span className="block text-gray-900 text-4xl text-bold text-center md:text-5xl font-bold sm:text-3xl">Our Menu Today</span>
                <span className="block py-5 text-center text-gray-700 font-semibold  ">Pilih menu hari ini yang kamu suka</span>
            </div>
            <div className="grid grid-rows py-10 px-3 md:grid-cols-2 gap-x-28 gap-y-10 h-auto">
                <div className="bg-gray-100 rounded-md ">
                    <img  src={menu[0].img_prev} width="300" className="mx-auto" alt=""></img>
                    <div className="px-5 py-5">
                        <span className="block text-4xl text-gray-800 font-bold">{menu[0].name}</span>
                        <span className="block pt-3 text-gray-800  font-semibold">{menu[0].desc}</span>
                    </div>
                    <div className="px-5 py-1">
                        <span className="block text-yellow-500 text-4xl font-semibold">Rp. {menu[0].price}</span>
                    </div>
                    <div className="pt-10">
                        <Link to={{
                            pathname : '/foodorder',
                            state : menu[0]
                        }}>
                        <button className="w-full rounded-md bg-gray-800 px-5 py-5 text-center font-bold text-gray-100 text-lg">
                            Pesan Sekarang
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-gray-800 rounded-md">
                    <img  src={menu[1].img_prev} width="300" className="mx-auto" alt=""></img>
                    <div className="px-5 py-5">
                        <span className="block text-4xl text-gray-100 font-bold">{menu[1].name}</span>
                        <span className="block pt-3 text-gray-100  font-semibold">{menu[1].desc}</span>
                    </div>
                    <div className="px-5 py-1">
                        <span className="block text-yellow-500 text-4xl font-semibold">{menu[1].price}</span>
                    </div>
                    <div className="pt-10">
                        <Link to={{
                            pathname : '/foodorder',
                            state : menu[1]
                        }}>                     
                        <button className="w-full border-2 border-gray-300 rounded-md bg-gray-100 px-5 py-5 text-center font-bold text-gray-800 text-lg">Pesan Sekarang</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodayMenu;