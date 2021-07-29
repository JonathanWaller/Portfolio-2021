import Particles from 'react-particles-js';
import Typed from "react-typed";

const Landing = () => {
    
    return(
        <div style={{background: 'yellow'}}>
            landing page
            {/* <Particles /> */}
            {/* <Particles 
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} /> */}
                
                <Typed strings={["Mahmudul Alam"]} typeSpeed={40} />
                <Typed
                    strings={[
                        "Frontend Developer",
                        "Backend Developer",
                        "Native App Developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
        </div>
    )
}

export default Landing;