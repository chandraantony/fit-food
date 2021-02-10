import React, { useState } from 'react'
import Menu from '../../assets/img/menu1.jpg'
import { login } from '../../utils/auth';
import useCustomForm from '../form'


const initialValues = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const [msg, setMsg] = useState('')
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    } = useCustomForm({
        initialValues,
        onSubmit: values => checkLogin(values)
    })
    
    const checkLogin = (val) => {     
        const data = val.values 
        if(data.email === 'test@test' && data.password === 'password') {
            return login(data)
        }
        return setMsg ('Email atau Password Salah !')
    }

    return(
    <div className="grid grid-rows md:grid-cols-2 ">
        <div className="items-end justify-center pb-10 rounded-lg text-gray-100 text-center">                
            <div className="mt-10 font-bold text-3xl md:text-4xl">SIGN-IN</div>

            <div className="text-sm md:text-md font-semibold mt-5 mx-3">Selamat Datang Kembali Teman-Fit :)</div>

            <form className="py-10 px-5 md:px-10 space-y-1" onSubmit={handleSubmit}>

                <div className="flex flex-col text-left ">
                    <label className="text-sm">Email :</label>
                    <input 
                    onChange={handleChange}
                    value={values.name}
                    name="email" 
                    className="focus:outline-none px-2 w-full py-1 border-b text-white focus:border-yellow-300 bg-transparent"  type="text" />
                </div>
                <div className="text-left pt-5">
                    <label className="text-sm">Password :</label>
                    <input
                    onChange={handleChange}
                    value={values.name} 
                    name="password" 
                    className="focus:outline-none px-2 w-full py-1 border-b text-white focus:border-yellow-300 bg-transparent"  type="password" />
                </div>  
                <div className="font-bold text-sm pt-3">
                    {msg}
                </div>              
                <div className="pt-20 space-y-1 ">                            
                    <button type="submit" className="w-full rounded-md px-2 py-2 bg-yellow-600  font-bold">Sign-In</button>
                </div>                
            </form>
        </div>
        <div className="  hidden md:block">
            <img className="rounded-tl-full" src={Menu} alt="#" />
        </div>
    </div>
    )
}

export default LoginForm;
