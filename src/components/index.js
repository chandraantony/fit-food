
import grocery from '../assets/img/mainmenu.png'
import React, { useState,useEffect } from 'react'
import { Transition } from '@headlessui/react'

import '../assets/css/transition.css';
import '../assets/css/tailwind.css'
import { Link } from 'react-scroll';


const Index = () => {
    const [image, setImage] = useState(false);

    useEffect(() => {    
        setImage(true)
    }, [])


    return (
        <div className="bg-gray">
        <div className=" md:container md:mx-auto">
            <p className="text-4xl lg:text-center pt-20 md:pt-36 font-bold text-gray-900 md:text-5xl sm:text-4xl px-3 py-3 ">
                <span className="block">Healty Food Launch & Cater for Event</span>               
            </p>
            <div className="px-3 py-6 lg:text-center font-normal text-gray-700 font-semibold">
            <p>
                Ingin makan sehat tanpa perlu ribet 
                <span className="text-green-50 font-bold"> FIT</span>
                <span className="text-red-700 font-bold">FOOD</span>
                <span>.ID </span>
                siap antar ke tempat mu.
            </p >
            <p>
            Ayo Pesan Sekarang!
            </p>
            </div>
            <div className="py-3 px-3 items-center text-center">
                <Link
                type="button"
                to="menu"
                spy={true}
                smooth={true}
                duration={500} 
                className=" bg-green-50 lg:text-lg md:text-auto text-white px-5 py-3  rounded-md font-bold cursor-pointer"
                >Lihat Menu</Link>
            </div> 
                <Transition
                show={image}
                enter="transition ease-out duration-500 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                {(ref) => (
                    <div ref={ref} className="flex justify-center mt-10 md:mt-10 sm:mt-10">
                        <img src={grocery} className="self-auto md:self-end max-h-80 " alt=""></img>
                    </div>
                )}
                </Transition>
            
        </div>
        </div>
    )
}

export default Index;
