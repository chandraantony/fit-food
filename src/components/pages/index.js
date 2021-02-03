import React, { Component } from 'react'
import Index from '../index'
import Footer from '../footer'
import Journey from '../journey'
import Testimonial from '../testimonial'
import TodayMenu from '../todayMenu'
import AboutUs from '../aboutUs'

function HomePage () {
    return (
        <div>
            <Index id="/index"/>
            <AboutUs id="/about"/>
            <TodayMenu id="/menu"/>
            <Journey id="/journey"/>
            <Testimonial id="/testimoni"/>
            <Footer/>
        </div>
    ) 
}

export default HomePage;