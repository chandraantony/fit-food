import React, { useState } from 'react'

import '../assets/css/tailwind.css'
import {Link} from 'react-router-dom'
import Login from './modal/login'

function Nav() {
  const [login, setLogin ] = useState(false)
  const [smScreen, setSmScreen] = useState(true)

  return (
    <div >
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 lg:pl-20 lg:pr-20 ">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={() => setSmScreen(!smScreen)} className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg  className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <div onClick={() => <Link to="/"/> } className="block lg:hidden h-8 w-auto font-bold" >
                  <span className="text-green-50">FIT</span>
                  <span className="text-red-700">FOOD</span>
                  <span className="text-red">.ID</span>
                </div>
                
                <Link to="/"  className="hidden lg:block h-8 ml-20 w-auto text-2xl font-bold">
                  <span className="text-green-50">FIT</span>
                  <span className="text-red-700">FOOD</span>
                  <span className="text-red">.ID</span>
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">                
                  <Link to="/menu" className="text-gray-900 hover:bg-green-50 hover:text-white px-3 py-1 rounded-md text-sm font-medium">Menu</Link>
                  <Link to="/Journey" className="text-gray-900 hover:bg-green-50 hover:text-white px-3 py-1 rounded-md text-sm font-medium">Instruction</Link>
                  <Link to="/about" className="text-gray-900 hover:bg-green-50 hover:text-white px-3 py-1 rounded-md text-sm font-medium">About</Link>
                  <Link to="/testimonial" className="text-gray-900 hover:bg-green-50 hover:text-white px-3 py-1 rounded-md text-sm font-medium">Testimonial</Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:mr-20">
              
              <div className="flex space-x-4 hidden sm:block">
                  <button className="bg-gray-100 text-gray-900 hover:bg-red-700 hover:text-white px-4 py-1 rounded-md text-sm font-medium"
                    onClick={() => setLogin(true)}
                  >Login</button>
                  <button className="bg-green-50 text-white px-5 py-1 rounded-md text-sm font-medium">Register</button>
              </div> 
{/* 
              <button className="bg-white p-1 rounded-full text-gray-900 hover:text-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="bg-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="" alt=""/>
                  </button>
                </div>

                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</Link>
                </div>
              </div> */}

            </div>
          </div>
        </div>
        {/* <Login preview={login}></Login> */}
        <div hidden={smScreen} className="lg:hidden sm:ml-6 "> 
          <div className="px-2 pt-2 pb-3 space-y-1" >            
            <Link to="#" className="text-gray-900 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            <Link to="#" className="text-gray-900 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Team</Link>
            <Link to="#" className="text-gray-900 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Instruction</Link>
            <Link to="#" className="text-gray-900 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="#" className="text-gray-900 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to="#" className="text-gray-900 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Register</Link>
          </div>
        </div>
      </nav>        
    </div>
  );
}

export default Nav;
