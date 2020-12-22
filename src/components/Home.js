import React, { useEffect } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = (props) => {

    useEffect(() => {
        const hash = props.history.location.hash
        if (hash && document.getElementById(hash.substr(1))) {
            document.getElementById(hash.substr(1)).scrollIntoView({ behavior: "smooth" })
        }
    }, [props.history.location.hash])

    return (
        <div id="home">
            <Header />
            <Carousel />
            <div className='container'>
                <About />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home