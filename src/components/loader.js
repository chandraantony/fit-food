import React, { useEffect, useState } from 'react'



function PageLoader() {
    return(
        <div className="fixed z-20 inset-0 overflow-y-auto" >
            <div className="flex items-end justify-center pt-4 px-2 pb-20 md:px-10 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="false">
                    <div  className="absolute inset-0 bg-gray-200 opacity-75" > </div>
                </div>
                <div className="relative flex justify-center items-center h-screen">
                    <div className="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
                    <div className="inline-block animate-ping ease duration-300 w-5 h-5 bg-black mx-2"></div>
                    <div className="inline-block animate-pulse ease duration-300 w-5 h-5 bg-black mx-2"></div>
                    <div className="inline-block animate-bounce ease duration-300 w-5 h-5 bg-black mx-2"></div>
                </div>
               
            </div>
        </div>
    )
}

export default PageLoader;