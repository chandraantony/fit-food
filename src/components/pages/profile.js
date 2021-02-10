import React, { Component, useState } from 'react'
import { profilePic , orderHistory, orderOngoing ,orderConfirm , orderOnDelivery, orderDone , orderOnProcess} from '../../utils/data'
import { Transition } from '@headlessui/react'
import {FaTruckLoading, FaTruck, FaVoteYea, FaRegSmileBeam} from 'react-icons/fa'
import CustomTable from '../table/table'

const fields = [
    {lable: 'Id' , key:'id'},
    {lable: 'Menu' , key:'name'},
    {lable: 'Quantity' , key:'qty' },
    {lable: 'Total Price' , key:'total' },
    {lable: 'Status', key:'status'}
]


 
const Profile = (props) => {
    const [label,setLabel] = useState('')
    const [data,setData] = useState('')
    const [preview,setPreview] = useState(0)
    const myprofile = props 

    const testpri = (ase,data) =>{
        if(preview  === 0){
            setPreview(1)
        }
        setLabel(ase); 
        setData(data)
    }


    
    return (
        <div className="py-24 px-5 bg-gray-50">            
            <div className="flex items-end justify-center">
                <div className="grid grid-rows md:grid-cols-3 w-full gap-4 max-w-6xl ">
                    <div className="rounded-xl">
                            <div className="bg-white shadow rounded-tl-lg rounded-tr-lg py-10">
                                <div className="flex justify-center ">
                                    <img src={profilePic} alt="" className="max-h-52 max-w-52 rounded-full block"></img>

                                </div>
                                <div className="text-gray-800 text-center pt-3"> 
                                    <span className="text-lg font-bold block" >Markonah Kim</span>
                                    <span className="text-sm  font-thin block" >kim@markonah.test</span>
                                </div>
                            </div>
                            <div className="bg-gray-800 rounded-bl-lg rounded-br-lg shadow-lg py-10 px-3">
                                <div className="text-gray-200 text-sm">
                                    <span className="block ml-2 py-1 font-bold">Full Name : </span>
                                    <span className="ml-2 py-1 font-normal text-right">Markonah Kim Marwah </span>
                                    <span className="block ml-2 py-1 font-bold">Email : </span>
                                    <span className="block ml-2 py-1 font-normal">test@test.test</span>
                                    <span className="block ml-2 py-1 font-bold">Phone : </span>
                                    <span className="block ml-2 py-1 font-normal">+6212342992 </span>
                                    <span className="block ml-2 py-1 font-bold">Adress : </span>
                                    <span className="block ml-2 py-1 font-normal">Komplek KPAD Pindah Selatan No 7 Blok D3, Kota Bandung, Kecamatan KairaCondong</span>
                                </div>
                            </div>

                    </div>
                    <div className=" md:col-span-2">
                        <div className="grid md:grid-rows gap-4">
                            <div className="grid md:grid-cols-4 font-bold text-sm gap-4">
                                <div className="bg-gray-800  h-28 rounded-3xl w-full hover:bg-gray-700  shadow   cursor-pointer">
                                    <div onClick={() => testpri('Payment Confrimed',orderConfirm)} className="px-3   py-3 pb-2 text-right text-gray-200">
                                        <span className="block pb-2">Payment Confrimed</span>
                                        <span className="block text-6xl" ><FaVoteYea /></span>
                                    </div>
                                </div>
                                <div className="bg-gray-800 h-28 rounded-3xl w-full hover:bg-gray-700  shadow   cursor-pointer">
                                    <div onClick={() => testpri('On Process',orderConfirm)}  className="px-3 py-3 text-gray-200">
                                        <span className="block pb-2 text-right">On Process</span>
                                        <FaTruckLoading className="text-6xl text-tight" />
                                    </div>
                                </div>
                                <div className="bg-gray-800 h-28 rounded-3xl w-full hover:bg-gray-700  shadow   cursor-pointer">
                                    <div onClick={() => testpri('On Delivery',orderConfirm)}  className="px-3 py-3  text-gray-200">
                                        <span className="block pb-2 text-right">On Delivery</span>
                                        <FaTruck className="text-6xl" />
                                    </div>
                                </div>
                                <div className="bg-gray-800 h-28 rounded-3xl w-full hover:bg-gray-700  shadow   cursor-pointer">
                                    <div onClick={() => testpri('Order Done',orderConfirm)}  className="px-3 py-3 text-gray-200">
                                        <span className="block text-right pb-2">Done</span>
                                        <FaRegSmileBeam className="text-6xl "/>
                                    </div>
                                </div>
                            </div>   
                            <Transition
                            show={preview === 1}
                            enter="transition ease-out duration-200 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            tim
                            leave="transition ease-in duration-200 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                            {(ref) => (
                                <div ref={ref} className="bg-white shadow rounded-lg px-10 py-5">
                                    <div className=" text-right cursor-pointer" onClick={() => setPreview(0)}>X</div>
                                    <span className="block text-xl text-gray-800 ">{label}</span>
                                    <div className="py-10">
                                        <CustomTable data={data} fields={fields} rows="10" />
                                    </div>
                                </div>  
                            )}
                            </Transition>
                          
                            <div className="bg-white shadow rounded-lg px-10 py-5">
                                <span className="block text-xl text-gray-800 ">Order On Going</span>
                                <div className="py-10">
                                    <CustomTable data={orderOngoing} fields={fields} rows="10" />
                                </div>
                            </div>

                            <div className="bg-white shadow rounded-lg px-10 py-5">
                                <span className="block text-xl text-gray-800 ">Order History</span>
                                <div className="py-10">
                                    <CustomTable data={orderHistory} fields={fields} rows="10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )   
}


export default Profile