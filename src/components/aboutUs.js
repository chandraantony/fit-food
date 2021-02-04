import React from 'react'
import vegie  from '../assets/img/grocery.jpg'
import {daharan}  from '../utils/constant'
import '../assets/css/tailwind.css'

const AboutUs = () => {
    return (
        <div className=" max-w-5xl pt-10 mx-auto">
            <div className="grid grid-rows pt-10 md:grid-cols-2 gap-6 px-5 py-3 ">
                <div className="text-4xl self-center ">
                    <span className="block">Enter the world of<span className="text-green-50 font-bold"> healthy</span></span>
                    <span className="block text-green-50 font-bold">life 
                        <span className="text-gray-900 font-normal"> with</span>
                        <span className="text-red-700 font-bold"> healthy food</span>
                    </span>
                </div>
                <div>
                    <span className="text-lg font-bold">"DHARAN" </span>
                    <span className="text-lg font-normal">{daharan}</span>
                </div>
            </div>
            <div className="pt-10 pb-10 px-5">
                <img src={vegie} className="self-auto md:self-end rounded-lg"></img>
            </div>  
        </div>
    )
}
export default AboutUs