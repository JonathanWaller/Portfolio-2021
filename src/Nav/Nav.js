// import * as Scroll from 'react-scroll';

import './Nav.css'

var Scroll = require('react-scroll');

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const Nav = () => {
    
    return(
        <div className="nav-wrapper">
            <div className="nav-portfolio">Portfolio.</div>
            <div className="nav-links">
                <Link activeClass="active" to="work" spy={true} smooth={true} duration={250} className="nav-link">Work</Link>
                {/* <div>About</div> */}
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={250} className="nav-link">About</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={250} className="nav-link">Contact</Link>
            </div>
        </div>
    )
}

export default Nav;