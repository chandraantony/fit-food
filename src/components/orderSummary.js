import React from 'react'
import { moneyFormat } from '../utils/helper';

const Summary = (arg) => {
    const data = arg.data

    return (
        <div className="px-5 py-5">
            <div className="text-gray-700 text-lg md:text-lg font-bold">
                <span className="block">Order Summary</span>
                <div className ="grid grid-cols-3 pt-3">
                    <div className="col-span-2 text-sm pt-1">
                        <span className="block">
                            {data.menu.name}
                        </span>
                        <span className="text-blue-500">
                             x{data.counter}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="font-medium text-lg">
                            { moneyFormat(data.menu.price) }
                        </span>
                    </div>
                </div>
                <div className="pt-5">
                    <hr className="border border-gray-800 "></hr>
                </div>
                <div className="pt-10 md:pt-24">
                    <div className="grid grid-cols-2">
                        <div className="text-left">
                            Total
                        </div>
                        <div className="text-right">
                            {moneyFormat(data.menu.price*data.counter)}
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

    )
}

export default Summary;
