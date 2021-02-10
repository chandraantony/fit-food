import React from 'react'
import Index from '../index'
import Footer from '../footer'
import Journey from '../journey'
import Testimonial from '../testimonial'
import TodayMenu from '../todayMenu'
import AboutUs from '../aboutUs'


function HomePage () {
    
    return (
        <div>
            <Index />
            <AboutUs />
            <TodayMenu/>
            <Journey />
            <Testimonial />
            <Footer/>
        </div>
    ) 
}

export default HomePage;