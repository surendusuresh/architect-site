import React, { useEffect } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import About from './About'
import Portfolio from './Portfolio'
import Awards from './Awards'
import Services from './Services'
import Footer from '../components/Footer'

const Home = (props) => {

   

    return (
        <div id="home">
            <Header />
            <Carousel />
            <div className='container'>
                <About />
                <Services />
                <Portfolio />
                <Awards />                
                <Footer />
            </div>
        </div>
    )
}

export default Home