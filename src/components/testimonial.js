import React from 'react'
import { comments }from '../utils/data'

function Testimonial() {
    return(
        <div className="bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto">
                <div className="py-10">
                    <span className="block text-gray-900 text-4xl text-bold text-center md:text-5xl font-bold sm:text-3xl">Testimonial</span>
                    <span className="block py-5 text-center text-gray-700 font-semibold  ">Lihat pendapat para <span className="text-red-700">pelanggan</span> kami</span>
                </div>
                <div className="py-10 px-10">
                    <div className="  grid grid-rows md:grid-cols-3 gap-8">
                    { comments.map((data,idx) => (
                        <div key={idx}>
                            <div className="bg-white w-full rounded-md h-44 max-h-48 py-7 px-7">
                                <span className="block text-2xl font-semibold text-gray-800 ">{data.title}</span>
                                <span className="block text-sm font-light">{data.comment}</span>
                            </div>
                            <img src={data.img} alt="" className="bg-gray-900 rounded-full h-14 w-14 mx-auto mt-10" />
                            <span className="block text-center text-lg font-semibold text-gray-800">{data.name}</span>
                            <span className="block text-center text-sm font-light">{data.location}</span>
                        </div>
                    )) }
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Testimonial;