import React from 'react'
import Menu from '../assets/img/salad.png'

const Footer = () => {
    return(
        <div className="pt-10">
            <div className="block lg:hidden">
            <div className="text-center py-10">
                <button className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 text-gray-100 text-xl rounded-lg py-4 px-4 font-bold">Go to Instagram</button>
            </div>
            </div>
            <div className="hidden lg:block grid grid-rows gap-12 ">
                <div className="sm:px-3 py-10">
                <div className="max-w-5xl mx-auto w-full rounded-lg bg-gradient-to-r from-purple-700 via-pink-500 to-red-500">
                    <div className="grid grid-cols-2">
                        <div className="px-10 py-10">
                            <span className="block text-xl md:text-5xl font-bold text-gray-100">Follow kami di IG </span>
                            <span className="block text-xl md:text-5xl font-bold text-gray-100 pb-10">@fit_foodId</span>
                            <button className="bg-gray-100 text-red-500 text-xl rounded-lg py-4 px-4 font-bold">Go to Instagram</button>
                        </div>
                        <div >
                            <img className="object-none object-left-top w-50 h-50" src={Menu} alt="#" />
                        </div>
                    </div>
                </div>
                </div>
                <div className="hidden md:block bg-gray-900 py-16">
                    <div className="max-w-5xl mx-auto sm:px-3">
                        <div className="grid md:grid-cols-2">
                            <div>
                                <span className="block font-bold text-gray-100">FIT-FOOD-ID</span>
                                <span className="block text-gray-400 pt-2 text-sm font-bold">Outlet</span>
                                <span className="block text-gray-400 pt-2 text-sm font-bold">FAQ</span>
                                <div className="pt-10">
                                    <button className="mr-3"><img alt="#" src="#" className="bg-gray-100 rounded-full w-5 h-5" /></button>
                                    <button className="mr-3"><img alt="#" src="#" className="bg-gray-100 rounded-full w-5 h-5" /></button>
                                    <button className="mr-3"><img alt="#" src="#" className="bg-gray-100 rounded-full w-5 h-5" /></button>                                                                      
                                </div>
                                
                            </div>
                            <div className="grid md:grid-cols-3 mt-3">
                                <div>
                                    <span className="block font-bold text-gray-100">COMPANY</span>
                                    <span className="block pt-8 text-gray-400 text-sm font-bold">About Us</span>
                                    <span className="block text-gray-400 pt-2 text-sm font-bold">Product</span>
                                    <span className="block text-gray-400 pt-2 text-sm font-bold">Outlet</span>
                                    <span className="block text-gray-400 pt-2 text-sm font-bold">FAQ</span>
                                </div>
                                <div>
                                    <span className="block font-bold text-gray-100">COMPANY</span>
                                    <span className="block pt-8 text-gray-400 text-sm font-bold">Term of Services</span>
                                    <span className="block text-gray-400 pt-2 text-sm font-bold">Privarcy </span>

                                </div>
                                <div>
                                    <span className="block font-bold text-gray-100 mb-8">STAY UP TO DATE</span>
                                    <input type="text" className="bg-gray-100 rounded-lg px-3 py-2"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;