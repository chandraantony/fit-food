import React from 'react'
import Menu from '../../assets/img/menu1.jpg'

const RegisterForm = () => {
    return(
        <div className="grid grid-rows md:grid-cols-2 ">
            {/* <div className="items-end justify-center pb-10 rounded-lg text-gray-100 text-center">    */}
                <div className="hidden md:block">
                    <img className="rounded-br-full" src={Menu} alt="#" />
                </div>
                <div className="items-end justify-center pb-10 rounded-lg text-gray-100 text-center z-10">                
                    <div className="mt-10 font-bold text-3xl md:text-4xl">Register</div>
                    <div className="text-sm md:text-md font-semibold mt-5 mx-3">Daftar Sekarang Dapatkan Info Menarik :)</div>
                    <form className="py-10 px-5 md:px-10 space-y-1">
                        <div className="flex flex-col text-left ">
                            <label className="text-sm">Email :</label>
                            <input  className="focus:outline-none px-2 w-full py-1 border-b text-white focus:border-yellow-300 bg-transparent"  type="text" />
                        </div>
                        <div className="text-left pt-5">
                            <label className="text-sm">Password :</label>
                            <input  className="focus:outline-none px-2 w-full py-1 border-b text-white focus:border-yellow-300 bg-transparent"  type="password" />
                        </div>
                        <div className="text-left pt-5">
                            <label className="text-sm">Confirm Password :</label>
                            <input  className="focus:outline-none px-2 w-full py-1 border-b text-white focus:border-yellow-300 bg-transparent"  type="password" />
                        </div>
                        <div className="pt-10 space-y-1 ">                            
                            <button className="w-full rounded-md px-2 py-2 bg-yellow-600  font-bold">Register</button>
                        </div>  
                    </form>
                </div>
            {/* </div> */}
        </div>
    )
}

export default RegisterForm