import React from 'react'
import '../../assets/css/tailwind.css'
import Food from '../../assets/img/pumpkin.png'

function NotFound () {
    return(
        <div className="max-w-lg mx-auto py-20 px-5">
            <div className="grid grid-rows rounded-3xl bg-gray-900 w-full">
            <img className="h-32" src={Food}></img>
                <div className="py-20 px-20">                    
                    <span className="block text-white text-7xl font-bold">404</span>
                    <span className="block text-gray-400 text-7xl font-bold">Not Found</span>
                </div>
                   
            </div>
        </div>
    )
}

export default NotFound;