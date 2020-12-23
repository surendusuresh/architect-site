import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

const About = () => (
    <div id="about" className='content anchor'>
        <h2 className='content__header'>Green Square Architects</h2>
        <p className='content__content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus. Tortor condimentum lacinia quis vel eros donec ac odio.
        </p>
        <br></br>
        <p className='content__content'>
            Sit amet cursus sit amet dictum sit amet justo. Ultrices sagittis orci a scelerisque purus semper. Feugiat scelerisque varius morbi enim nunc faucibus a. Quam adipiscing vitae proin sagittis nisl. Nec feugiat nisl pretium fusce id. Tincidunt vitae semper quis lectus nulla. Aliquam sem et tortor consequat id porta. Sit amet mattis vulputate enim. Cras semper auctor neque vitae tempus quam. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Sit amet tellus cras adipiscing enim eu. Varius morbi enim nunc faucibus a pellentesque sit. Amet venenatis urna cursus eget. At imperdiet dui accumsan sit amet.
        </p>
        <br></br>
        <p className='content__content'>
            Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Tincidunt vitae semper quis lectus.
        </p>
        <p className='content__content'>
        <NavHashLink
            to="/#services"
            smooth
            className="content__link"            
        >Services</NavHashLink>
        </p>
    </div>
)

export default About