import React, { useState, forwardRef } from 'react'
import { paymentMethod } from '../utils/data'



const PaymentMethod = (arg,ref) => {
    const hidden = arg.hidden
    const [list, setList] = useState([])

    const OnSelected = (data) => {
       setList(data)
    }
    

    return (
        <div ref={ref} className="px-5 pt-10 pb-20 " hidden={!hidden}>
            <div className="text-gray-700 text-lg md:text-lg font-bold ">
                <span className="block">Pilih Metode Pembayaran</span>
                <div className="py-3">
                        <hr className="border border-gray-400 "></hr>
                </div>
                <div className ="grid  grid-cols-2  md:max-w-xl pt-10  text-sm  ">
                    { paymentMethod.map ((data ,idx) => (
                        <div className="text-center " key={idx}>
                        <button onClick={ () => OnSelected (data.list)} className="border shadow-sm rounded-xl focus:bg-gray-800 focus:text-gray-100  hover:bg-gray-800 hover:text-gray-100 text-lg py-10 px-10 md:text-5xl text-red-gray-100 md:py-12 md:px-12">
                            {data.icon}
                        </button>
                        <span className="block pt-3">{data.type}</span>
                        </div>
                    ))}
                </div> 
                <div className="md:max-w-xl mx-auto pt-7">
                    <span className="text-sm font-semibold">Pilih Penyedia Layanan</span>
                    <div className="py-3">
                        <hr className="border border-gray-400 "></hr>
                    </div>
                    <div className="grid grid-cols-3 ">
                    {
                        list.map((data,idx) => (
                        <div key={idx} className="pb-10">
                            <input name="radio" type="radio" ></input>
                            <img src ={data.icon} alt="" className="inline ml-3 my-auto h-7 w-14 rounded-md " ></img>
                            <span className="text-sm ml-2 ">{data.name}</span>
                        </div>
                        ))
                    }
                    </div>   
                </div>
      
            </div>
        </div>
    )
}


export default forwardRef(PaymentMethod) ;