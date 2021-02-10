import React, { useState } from 'react'
import {  useHistory, useLocation } from 'react-router-dom'


import '../assets/css/tailwind.css'
import { Link, animateScroll as scroll } from "react-scroll";
import {NavLink} from "react-router-dom"
import LoginRegister from './modal/loginRegister';
import {profilePic} from '../utils/data'
import {logout} from '../utils/auth';


const menu = [
  {path : 'about', name : 'About', exc_path: '/'},
  {path : 'menu', name : 'Menu', exc_path: '/'},
  {path : 'instruct', name : 'Instuction',  exc_path: '/'},
  {path : 'testi', name : 'Testimonial',  exc_path: '/'},
]

const menuSmall = [
  {path : 'about', name : 'About', exc_path: '/'},
  {path : 'menu', name : 'Menu', exc_path: '/'},
  {path : 'instruct', name : 'Instuction',  exc_path: '/'},
  {path : 'testi', name : 'Testimonial',  exc_path: '/'},
]



const Nav = (props) =>{  
  const status = props.status
  const location = useLocation();
  const history = useHistory()
  const [modal, setModal ] = useState(false)
  const [isLogin,setIsLogin] = useState(null)
  const [hide, setHidden] = useState(true)
  const [smScreen, setSmScreen] = useState(true)

  const showModal = (type) => {
    setModal(!modal)
    setIsLogin(type)
  }

  const scrollToTop = () => {
    if(location.pathname !== '/'){
      return history.push("/");

    }
    scroll.scrollToTop();
  };
  
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="fixed w-full bg-white shadow mx-auto px-2 sm:px-6 lg:px-8 lg:pl-20 lg:pr-20 ">          
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
                <div onClick={scrollToTop } className="block lg:hidden h-8 w-auto font-bold cursor-pointer" >
                  <span className="text-green-50">FIT </span>
                  <span className="text-red-700">FOOD</span>
                  <span className="text-red">.ID</span>
                </div>
                <div onClick={scrollToTop} className="hidden lg:block h-8 ml-20 w-auto text-2xl font-bold cursor-pointer">
                  <span className="text-green-50">FIT</span>
                  <span className="text-red-700">FOOD</span>
                  <span className="text-red">.ID</span>
                </div>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">         

                  { menu.map ((menu,idx) => 
                    location.pathname === '/' ?              
                    ( 
                    <div  key={idx} >
                        <Link 
                                to={menu.path}
                                spy={true}
                                smooth={true}
                                duration={500} 
                                activeClass="bg-green-50 text-yellow-50 "
                                className="text-gray-900 active:bg-green-50 hover:bg-green-50 hover:text-white px-3 py-1 rounded-md text-sm font-medium cursor-pointer"
                                >
                          {menu.name}
                        </Link> 
                    </div>
                    ) : 
                    (
                    <div key={idx}>
                      <NavLink state={menu.path} to={menu.exc_path}   
                      className="text-gray-900 active:bg-green-50 hover:bg-green-50 hover:text-white px-3 py-1 rounded-md text-sm font-medium cursor-pointer">
                        {menu.name}
                      </NavLink>
                    </div>
                    ))
                  }  

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:mr-20">
              {status ? 
               ( 
                <div> 
                  <div className="ml-3 relative">
                    <div >
                      <button onClick={() => setHidden(!hide)} className="bg-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white" id="user-menu" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={profilePic} alt=""/>
                      </button>
                    </div>               
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu" hidden={hide}>
                      <NavLink to="/myProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</NavLink>
                      <button onClick={logout} className="block px-4 w-full text-left py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</button>
                    </div>
                  </div> 
                </div>
                ) 
                : 
                ( 
                <div>
                <div className="hidden md:block flex space-x-4 hidden sm:block">
                    <button className="bg-gray-100 text-gray-900 hover:bg-red-700 hover:text-white px-4 py-1 rounded-md text-sm font-medium"
                      onClick={() => showModal(true) }
                    >Login</button>
                    <button onClick={() => showModal(false) } className="bg-yellow-600 text-white px-5 py-1 rounded-md text-sm font-medium">Register</button>
                </div>                    
                  { modal ? <LoginRegister show={showModal} isLogin={isLogin}/> : null}
                <div className="block md:hidden">
                      <button></button>
                </div> 
                </div>
                )
              }
            </div>
          </div>
        </div>          
        <div hidden={smScreen} className="lg:hidden sm:ml-6 pt-16 "> 
          <div className="px-2 pt-2 pb-3 space-y-1 w-full fixed bg-white" > 
            { menuSmall.map ((menu,idx) => 
              location.pathname === '/' ?              
            ( 
            <div  key={idx} >
              <Link                         
                to={menu.path}
                onClick = {() => setSmScreen(!smScreen)}
                spy={true}
                smooth={true}
                duration={500} 
                activeClass="bg-green-50 text-yellow-50 "
                className="text-gray-900 hover:bg-green-50 hover:text-white block px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                  {menu.name}
                </Link> 
            </div>
            ) : 
            (
            <div key={idx}>
              <NavLink state={menu.path} to={menu.exc_path} className="text-gray-900 hover:bg-green-50 hover:text-white block px-3 py-2 rounded-md text-sm font-medium cursor-pointer" >
                {menu.name}
              </NavLink>
            </div>
            )
            )}                     
          </div>
        </div>
      </nav>        
    </div>
  );
}

export default Nav;
