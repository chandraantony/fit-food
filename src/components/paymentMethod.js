import React from 'react'
import { moneyFormat, RandomString } from '../utils/helper';

// const data = ['Name', 'Address' , 'Contact', 'Email']

const PaymentMethod = (arg) => {
    const hidden = arg.hidden

    return (
        <div className="px-5 pt-10 pb-20 " hidden={!hidden}>
            <div className="text-gray-700 text-lg md:text-lg font-bold h-96">
                <span className="block">Order Info</span>
                <div className ="grid grid-cols-2 text-sm pt-3">
                    <div className="text-left">
                        <span className="font-medium ">
                            { `Order Id : fit-food-${RandomString(5)}` }
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="font-medium ">
                          asdasd
                        </span>
                    </div>
                </div>
                




            </div>
        </div>
    )
}


export default PaymentMethod ;