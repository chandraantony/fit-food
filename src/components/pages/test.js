
import React, { useRef, useState } from 'react'
import '../../assets/css/tailwind.css'
import { Transition } from '@headlessui/react'
import { CSSTransition } from 'react-transition-group';


function SimpleToggle() {
        // const [inProp, setInProp] = useState(false);
        // const ref = useRef()
        // return (
        //   <div>
        //     <CSSTransition in={inProp} timeout={500} classNames="my-node">
        //       <div ref={ref}>
        //         ikjoijhihkjh
        //       </div>
        //     </CSSTransition>
        //     <button type="button" onClick={() => setInProp(true)}>
        //       Click to Enter
        //     </button>
        //   </div>
        // );
      
    const [isOpen, setIsOpen] = useState(false)
    return (


<div className="relative flex justify-center items-center h-screen">
    <div className="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
    <div className="inline-block animate-ping ease duration-300 w-5 h-5 bg-black mx-2"></div>
    <div className="inline-block animate-pulse ease duration-300 w-5 h-5 bg-black mx-2"></div>
    <div className="inline-block animate-bounce ease duration-300 w-5 h-5 bg-black mx-2"></div>
</div>


    )
}


export default SimpleToggle;