
import React from 'react'
import Menu1 from '../assets/img/salad.png'
import Menu2 from '../assets/img/pumpkin.png'
import '../assets/css/tailwind.css'

function TodayMenu(){
    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="py-10">
                <span className="block text-gray-900 text-4xl text-bold text-center md:text-5xl font-bold sm:text-3xl">Our Menu Today</span>
                <span className="block py-5 text-center text-gray-700 font-semibold  ">Pilih menu hari ini yang kamu suka</span>
            </div>
            <div className="grid grid-rows py-10 px-3 md:grid-cols-2 gap-x-28 gap-y-10">
                <div className="relative bg-gray-100 rounded-md">
                    <img  src={Menu1} width="300" className="mx-auto" alt=""></img>
                    <div className="px-5 py-5">
                        <span className="block text-4xl text-gray-800 font-bold">Sweet Avocado Salad</span>
                        <span className="block pt-3 text-gray-800 font-semibold">Terasa segar di mulut berkat saus yang berasal dari minyak zaitun, air jeruk lemon, dan madu.</span>
                    </div>
                    <div className="px-5 py-1">
                        <span className="block text-yellow-500 text-4xl font-semibold">Rp. 35.000</span>
                    </div>
                    <div className="pt-10">
                    <button className="md:absolute inset-x-0 bottom-0 w-full rounded-md bg-gray-800 px-5 py-5 text-center font-bold text-gray-100 text-lg">Pesan Sekarang</button>
                    </div>
                </div>
                <div className="bg-gray-800 rounded-md">
                    <img  src={Menu2} width="300" className="mx-auto" alt=""></img>
                    <div className="px-5 py-5">
                        <span className="block text-4xl text-gray-100 font-bold">Pumpkin Chicken Soup</span>
                        <span className="block pt-3 text-gray-100  font-semibold">Labu kuning kaya akan serat makanan sehingga dicerna secara perlahan oleh tubuh kita.</span>
                    </div>
                    <div className="px-5 py-1">
                        <span className="block text-yellow-500 text-4xl font-semibold">Rp. 35.000</span>
                    </div>
                    <div className="pt-10">
                        <button className="w-full border-2 border-gray-300 rounded-md bg-gray-100 px-5 py-5 text-center font-bold text-gray-800 text-lg">Pesan Sekarang</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodayMenu;