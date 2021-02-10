import React, {useEffect, useState} from 'react'
import OrderInfo from './orderInfo'
import Summary from './orderSummary'
import {Redirect} from 'react-router-dom'
import {Transition} from '@headlessui/react'
import PaymentMethod from './paymentMethod';

import '../assets/css/tailwind.css'
import '../assets/css/transition.css'
import PageLoader from './loader'
import { isLogin } from '../utils/auth'

const OrderDetail = (arg) => {
    const info = arg.location.state
    const loginStatus = isLogin()
    const back = arg.history.goBack

    const [status, setStatus] = useState(1)
    const [loading, setLoading] = useState(false)
    const [paid ,setPaid ] = useState(false)

    const confirmPay = () => {
        if(status === 1){
            return setStatus(2);
        }
        if(loginStatus){
            setLoading(true)
            setTimeout(() => {
                setPaid(true)
            }, 2000);
        }else{
            return alert('Please Login First')
        }

    }
    const goingBack = () => {
        if(status === 2 ){
           return setStatus(1);
        }
        return back();
    }

    if(info  === undefined || info === null || info === ""){
        return <Redirect  to="/"/>
    }


    return (
        <div className="bg-yellow-100 px-3 pt-20 md:pt-14">
            {loading ? <PageLoader /> : null }
            {paid ? <Redirect to="/myProfile" push /> : null }
            <div className="max-w-5xl md:pt-20 mx-auto">
                <div className="grid grid-cols-2 ">
                <div className="text-gray-800 text-xl font-bold md:text-2xl">
                    Order Detail
                </div>
                <div className="text-right">
                    <span className="text-gray-800 text-xl font-bold md:text-2xl block">{status} / 2</span>
                </div>
                </div>
                <div className="grid grid-rows md:grid-cols-3 gap-4 py-10 h-auto">
                    <div className="bg-white shadow rounded-lg md:col-span-2">
                    <Transition
                    show={status === 1}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    tim
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    {(ref) => (
                        <div ref={ref}>
                            <OrderInfo ref={ref} data={info} hidden={ status === 1} />
                        </div>
                    )}
                    </Transition>

                    <Transition
                    show={status === 2}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    tim
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    {(ref) => (
                        <div ref={ref}>
                            <PaymentMethod ref={ref} hidden={status === 2}/>
                        </div>
                    )}
                    </Transition>
                    </div>
                    <div>
                        <div className="rounded-lg bg-white shadow">
                            <Summary data={info} />
                            <button onClick={confirmPay} className="bg-gray-800 text-lg text-gray-100 font-bold rounded-md w-full py-3 px-3">{status === 1 ? 'Pilih Metode Pembayaran' : 'Bayar' }</button>
                        </div>
                    </div>

                </div>
                {/* <Link to={arg.history.goBack}>asdasdasd</Link> */}
                <button onClick={goingBack} className="text-xl font-bold mb-10">{`<< Kembali`}</button>
            </div>
        </div>
    )
}

export default OrderDetail;