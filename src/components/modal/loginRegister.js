import React  from 'react'
import '../../assets/css/tailwind.css'
import '../../assets/css/transition.css'
import LoginForm from '../form/login'
import RegisterForm from '../form/register'


function LoginRegister({show,isLogin}) {
    return(
        <div className="fixed z-10 inset-0 overflow-y-auto" hidden={false}>
            <div className="flex items-end justify-center pt-4 px-2 pb-20 md:px-10 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="false">
                    <div  className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => show(false) }> </div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>                
                <div className="inline-block  rounded-lg align-bottom bg-red-800 opacity-95 text-left transform transition-all sm:my-8 sm:align-middle md:max-w-4xl" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="absolute top-0 right-0 w-16 text-right cursor-pointer">
                    <button className="bg-white rounded-xl opacity-75 px-3 py-1 font-bold text-gray-800 text-xl" onClick={() => show(false) }>X</button>
                </div>
                    {isLogin ? <LoginForm/> : <RegisterForm/> }                    
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;