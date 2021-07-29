import React from 'react';
import { Carousel } from "react-responsive-carousel";

const Gallery = ({images}) => {
        const display = images && images.map( ( image, index ) => {
            return(
                <img 
                    key={index}
                    src={ image } 
                    alt='screenshot' 
                />
            )
        })
        
        return(
            <div>
                {
                    images
                    ?
                    <Carousel infiniteLoop stopOnHover >
                        { display }
                    </Carousel>
                    :
                    null
                }
                
            </div>
        )
};

export default Gallery;