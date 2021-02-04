import React, { useEffect, useState } from 'react'
import '../assets/css/tailwind.css'
import {Link} from 'react-router-dom'



const FoodOrder = (arg) => {
    const menuTest = arg.location.state
    const [counter, setCounter] = useState(1);
    const settingCounter = (arg) =>{
        if(arg != 'min'){
            setCounter(counter + 1)
        }else{
            if(counter <= 1) return;
            setCounter(counter -1)
        }
    }

    return (
        <div className="max-w-5xl mx-auto py-20 px-5 md:pt-32 md:px-0">
            <div className="grid grid-rows gap-12 md:grid-cols-2 ">
                <div className="shadow-lg bg-gray-50 rounded-xl px-10 py-10 ">
                    <img src={menuTest.img} alt="" className=" max-h-72 mx-auto"></img>
                </div>
                <div className="shadow-lg bg-gray-900 pt-10 md:pt-10 rounded-xl">   
                    <div className="grid grid-rows md:grid-cols-3">
                        <div className=" md:col-span-2 px-10 md:h-72 max-h-72">
                            <span className="block text-gray-100 text-3xl font-bold">{menuTest.name}</span>
                            <span className="block text-sm pt-8 font-bold text-gray-100">{menuTest.desc}</span>
                        </div>
                        <div className="">
                            <span className="block text-yellow-300 text-3xl pb-10 font-bold px-10 md:py-7 md:px-0" >Rp. {menuTest.price}</span>

                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div >
                            <span className="px-10 text-xl text-gray-100 font-bold">Jumlah</span>
                        </div>
                        <div>

                        </div>
                        <div>
                            <div className=" border-2 w-32 border-white grid grid-cols-3  text-center font-bold text-gray-100">
                                <button onClick={() => settingCounter('min')} className="border-r-2 px-3 py-2 border-white font-bold hover:bg-gray-500 hover:text-gray-900 ">-</button>
                                <div className="border-r-2 px-3 py-2 border-white">{counter}</div>
                                <button onClick={() => settingCounter()} className="px-3 py-2 font-bold hover:bg-gray-500 hover:text-gray-900 ">+</button>
                            </div>
                        </div>
                    </div> 
                    <div className="pt-10 ">
                        <Link to={{
                            pathname : '/orderDetail',
                            state : {
                                menu : menuTest,
                                counter : counter
                            }
                        }}>
                            <button className="py-2 px-2 bg-gray-100 w-full font-gray-800 text-lg font-bold">Order Sekarang</button> 
                        </Link>       
                    </div>           

                </div>
            </div>


        </div>
    )
}

export default FoodOrder;