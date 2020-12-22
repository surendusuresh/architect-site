import React from 'react'
import { Parallax } from 'react-parallax'

const Services = () => (
    <Parallax bgImage='/images/parallax/2.jpg' strength={500}>
        <div id="services" className='content anchor'>
            <div className='content__parallax'>
                <h2 className='content__header'>Services</h2>
                <p className='content__about'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus. Tortor condimentum lacinia quis vel eros donec ac odio.
            </p>
                <br></br>
                <p className='content__about'>
                    Sit amet cursus sit amet dictum sit amet justo. Ultrices sagittis orci a scelerisque purus semper. Feugiat scelerisque varius morbi enim nunc faucibus a. Quam adipiscing vitae proin sagittis nisl. Nec feugiat nisl pretium fusce id. Tincidunt vitae semper quis lectus nulla. Aliquam sem et tortor consequat id porta. Sit amet mattis vulputate enim. Cras semper auctor neque vitae tempus quam. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Sit amet tellus cras adipiscing enim eu. Varius morbi enim nunc faucibus a pellentesque sit. Amet venenatis urna cursus eget. At imperdiet dui accumsan sit amet.
            </p>
                <br></br>
                <p className='content__about'>
                    Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Tincidunt vitae semper quis lectus.
            </p>
            </div>
        </div>
    </Parallax>
)

export default Services