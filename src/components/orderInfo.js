import React, {forwardRef} from 'react'
import { moneyFormat, RandomString } from '../utils/helper';
import moment from 'moment'

// const data = ['Name', 'Address' , 'Contact', 'Email']

const OrderInfo = (arg, ref) => {
    const data = arg.data
    const hidden = arg.hidden
    return (
        <div ref={ref} className="px-5 pt-10 pb-20 " hidden={!hidden}>
            <div className="text-gray-700 text-md md:text-md font-bold md:h-96 md:max-h-96">
                <span className="block text-lg">Order Info</span>
                <div className ="grid grid-cols-2 text-sm pt-3">
                    <div className="text-left">
                        <span className="font-medium ">
                            { `Order Id : fit-food-${RandomString(5)}` }
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="font-medium ">
                            { moment().format('MMMM DD, YYYY') }
                        </span>
                    </div>
                </div>
                <div className="pt-5">
                    <hr className="border border-gray-800 "></hr>
                </div>
                <div className="bg-gray-200 px-3 py-2 grid grid-cols-3 font-normal">
                    <div className="text-left font-semibold">
                        Food Name
                    </div>
                    <div className="text-center font-semibold">
                        Qty
                    </div>
                    <div className="text-right font-semibold">
                        Price
                    </div>
                </div>

                <div className="bg-gray-100 px-3 py-2 grid grid-cols-3 font-normal">
                    <div className="text-left">
                        {data.menu.name}
                    </div>
                    <div className="text-center ">
                        {data.counter}
                    </div>
                    <div className="text-right ">
                        {moneyFormat(data.menu.price)}
                    </div>
                </div>
                



                <span className="block text-lg pt-5">Personal Info</span>
                <div className="pt-2">
                    <hr className="border border-gray-800 "></hr>
                </div>
                <div className="bg-gray-200 px-3 py-2 grid grid-cols-2 font-normal">
                    <div className="text-left">
                        Nama
                    </div>
                    <div className="text-right font-semibold">
                        Chandra Suroso
                    </div>
                </div>
                <div className="bg-gray-100 px-3 py-2 grid grid-cols-2 font-normal">
                    <div className="text-left">
                        Address
                    </div>
                    <div className="text-right font-semibold">
                        Jalan KPAD Pindad Utara Blok D.7 N0.1
                    </div>
                </div>

                <div className="bg-gray-200 px-3 py-2 grid grid-cols-2 font-normal">
                    <div className="text-left">
                        Contact
                    </div>
                    <div className="text-right font-semibold">
                        081220203023
                    </div>
                </div>
                <div className="bg-gray-100 px-3 py-2 grid grid-cols-2 font-normal">
                    <div className="text-left">
                        Email
                    </div>
                    <div className="text-right font-semibold">
                        test@email.com
                    </div>
                </div>

            </div>
        </div>
    )
}


export default forwardRef(OrderInfo) ;