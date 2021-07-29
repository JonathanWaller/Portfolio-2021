import {useState} from 'react';
import Modal from '../Modal/Modal';

import './Card.css'

const Card = ({
    title,
    desc,
    imgSrc,
    projectLink,
    images
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <div
            className="card"
            style={{backgroundImage: `url(${imgSrc})`}}
        >
            <div className="content"
                onClick={()=>setIsModalOpen(true)}
            >
                <h1 className="header">{title}</h1>
                <p className="text">{desc}</p>
                <div
                    className="btn"
                    onClick={()=>setIsModalOpen(true)}
                >
                    Explore
                </div>
            </div>
            
            <Modal
                isOpen={isModalOpen}
                title={title}
                desc={desc}
                images={images}
                projectLink={projectLink}
                handleClose={()=>setIsModalOpen(false)}
            />
        </div>
    )
}

export default Card;