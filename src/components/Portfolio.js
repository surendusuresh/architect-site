import React from 'react'
import Gallery from 'react-grid-gallery';
import { images } from './GalleryImages'

const Portfolio = () => {

    return (
        <div className='content anchor' id="portfolio">
            <h2 className='content__header'>Portfolio</h2>
            <Gallery images={images} />
        </div>
    )
}

export default Portfolio