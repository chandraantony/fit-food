import React, {useState} from 'react'
import '../assets/css/tailwind.css'
import OrderInfo from './orderInfo'
import Summary from './orderSummary'
import { CSSTransition } from 'react-transition-group';
import PaymentMethod from './paymentMethod';

const OrderDetail = (arg) => {
    const info = arg.location.state
    const back = arg.history.goBack

    const [status, setStatus] = useState(1)

    const confirmPay = () => {
        if(status == 1){
            return setStatus(2);
        }
        return;
    }

    const goingBack = () => {
        if(status == 2 ){
           return setStatus(1);
        }
        return back();
    }

    return (
        <div className="bg-yellow-100 px-3 pt-20 md:pt-14">
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
                        <OrderInfo data={info} hidden={ status === 1} />
                        <PaymentMethod hidden={status === 2}/>
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