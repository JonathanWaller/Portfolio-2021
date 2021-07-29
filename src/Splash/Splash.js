import Typed from "react-typed";

import { GitHub, Linkedin } from 'react-feather';

import './Splash.css';

const Splash = () => {
    
    return(
        <div className='splash-container'>
            {/* <div className='splash-text'> */}
                <div className='name-wrapper'>
                    <h1 className="name">
                         {/* <Typed strings={["Jonathan Waller"]} typeSpeed={60} /> */}
                         Jonathan Waller
                    </h1>
                </div>
                <div className='outer-box'>
                    <div className='text-box'>
                        <div className='inner-text'>
                            {/* Full Stack Web Developer */}
                            <Typed
                                strings={[
                                    "Full Stack Web Developer",
                                    "Frontend Developer",
                                    "DeFi",
                                    "Blockchain"
                                ]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                            />
                        </div>
                    </div>
                </div>
                <div className='brands-wrapper'>
                    <a href='https://github.com/JonathanWaller' className='github'>
                        <GitHub size="34"/>
                    </a>
                    <a href='https://www.linkedin.com/in/wallerjonathan/' className='github'>
                        <Linkedin size="34"/>
                    </a>
                </div>
                <div className="splash-subtext">
                    Building digital products and experience
                </div>
            {/* </div>  */}
        </div>
    )
}


export default Splash;