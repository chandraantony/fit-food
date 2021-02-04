import React, { Component } from 'react'
import FoodIcon from '../assets/icon/salad.svg'
import BoxIcon from '../assets/icon/box.svg'
import TrucIcon from '../assets/icon/truck.svg'
import smile from '../assets/icon/smile.svg'


const Journey = () => {
    return(
        <div className=" max-w-5xl mx-auto pt-10 pb-20">
            <div className="py-10">
                <span className="block text-gray-900 text-4xl text-bold text-center md:text-5xl font-bold sm:text-3xl">Order Stages</span>
                <span className="block py-5 text-center text-gray-700 font-semibold  ">Pilh menu yang kau suka dan kami antarkan ke lokasi kamu</span>
            </div>
            <div className="bg-yellow-50 rounded-full py-10 px-10">
                <div className=" rounde grid grid-rows md:grid-cols-4 gap-12">
                    <div className="">
                        <div className="bg-yellow-200 mx-auto w-20 h-20 rounded-full">
                            <img className="w-20 h-20 " src={FoodIcon}/>
                        </div>  
                        <div className="text-center text-gray-800 text-md font-bold pt-8">Choose Menu</div>
                        <div className="text-center text-gray-800 text-sm">Pilih menu yang kamu suka</div>
                    </div>

                    <div className="">
                        <div className="bg-yellow-200  mx-auto w-20 h-20 rounded-full">
                            <img className="w-20 h-20" src={BoxIcon}/>
                        </div>  
                        <div className="text-center text-md font-bold pt-8">Packing</div>
                        <div className="text-center text-sm">Setelah pembayaran, kami packing pesananmu</div>
                    </div>

                    <div className="">
                        <div className="bg-yellow-200  mx-auto w-20 h-20 rounded-full">
                            <img className="w-20 h-20 mx-auto my-auto" src={TrucIcon}/>
                        </div>  
                        <div className="text-center text-md font-bold pt-8">Choose Menu</div>
                        <div className="text-center text-md">sdasd</div>
                    </div>

                    <div className="">
                        <div className="bg-yellow-200  mx-auto w-20 h-20 rounded-full">
                            <img className="w-20 h-20 mx-auto my-auto" src={smile}/>
                        </div>  
                        <div className="text-center text-md font-bold pt-8">Choose Menu</div>
                        <div className="text-center text-md">sdasd</div>
                    </div>

     
                </div>

            </div>
        </div>
    )
}

export default Journey;