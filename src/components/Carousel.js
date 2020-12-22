import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const CarouselPage = () => (
    <div className="content__carousel">
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={4000}>
            <div>
                <img src="/images/carousel/1.jpg" alt="img1" className='content__img' />                
            </div>
            <div>
                <img src="/images/carousel/2.jpg" alt="img2" className='content__img' />                
            </div>
            <div>
                <img src="/images/carousel/3.jpg" alt="img3" className='content__img' />
            </div>
        </Carousel>
    </div>
)

export default CarouselPage