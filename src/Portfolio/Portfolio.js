import Fade from "react-reveal/Fade"
import Card from '../Card/Card'
import './Portfolio.css'

import laavishBlank from '../images/laavish/laavish-blank.png'
import restayBlank from '../images/restay/restay-blank.png'
import freelancerBlank from '../images/freelancer/freelancer-blank.png'

//greenwood
import borrow from '../images/greenwood/WIP-BORROW.png'
import loans from '../images/greenwood/WIP - LOANS.png'
import greenwoodBlank from '../images/greenwood/green-blank.png'

//restay
import restaySplash from '../images/restay/splash.png'
import properties from '../images/restay/properties.png'
import property from '../images/restay/property.png';
import property2 from '../images/restay/property2.png';

//freelancer
import freelancerSplash from '../images/freelancer/splash.png';
import feed from '../images/freelancer/feed.png';
import post from '../images/freelancer/post.png';
import profile from '../images/freelancer/profile.png';

//laavish
import laavishSplash from '../images/laavish/splash.png';
import store from '../images/laavish/store.png';
import store2 from '../images/laavish/store2.png';
import cart from '../images/laavish/cart.png';
import editCart from '../images/laavish/editCart.png';

const Portfolio = () => {
    
    const projects = [
        {
            title: 'Borrow Aggregator',
            desc: 'Freelance project for a startup in the DeFi industry',
            imgSrc: greenwoodBlank,
            projectLink: 'https://github.com/greenwood-finance/greenwood-v2-interface',
            images: [borrow, loans]
        },
         {
            title: 'Restay',
            desc: 'Property management utility for organizing and managing rental properties',
            imgSrc: restayBlank,
            projectLink: 'https://github.com/JonathanWaller/Personal_Project-Rentals',
            images: [ restaySplash, properties, property, property2 ]
        },
         {
            title: 'Freelancer',
            desc: 'Web application which allows small businesses and freelancers (web developers/designers) to interact and source work in a common setting',
            imgSrc: freelancerBlank,
            projectLink: 'https://github.com/project-freelance/project-freelance',
            images: [ freelancerSplash, feed, profile, post ]
        },
         {
            title: 'Laavish',
            desc: `Ecommerce site dedicated to men's fashion and accessories`,
            imgSrc: laavishBlank,
            projectLink: 'https://github.com/JonathanWaller/Shop',
            images: [ laavishSplash, store, store2, cart, editCart ] 
        }
    ]
    
    return(
        <div className="section" id="work">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1 className="work-header" name="work">Work</h1>
                    </Fade>
                    <div className="grid">
                        <Fade bottom cascade>
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                desc={project.desc}
                                imgSrc={project.imgSrc}
                                projectLink={project.projectLink}
                                images={project.images}
                            />
                        ))}
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;