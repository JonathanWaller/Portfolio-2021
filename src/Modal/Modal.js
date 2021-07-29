import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import "@reach/dialog/styles.css";
import { AnimatePresence, motion } from "framer-motion"
import Gallery from '../Gallery/Gallery'
import { GitHub } from 'react-feather';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import './Modal.css';


const Modal = ({
    isOpen,
    handleClose,
    children,
    title,
    desc,
    images,
    projectLink
}) => {
    const MotionDialogContent = motion(DialogContent);
    const MotionDialogOverlay = motion(DialogOverlay);
    
    return (
        <AnimatePresence>
        {isOpen && (
            <MotionDialogOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: .1}}
            exit={{ opacity: 0 }}
            onDismiss={handleClose}
            className="modal_popover"
            >
                <MotionDialogContent
                    initial={{y: -20}}
                    animate={{y: 0}}
                    aria-label="Sidebar menu"
                    className="modal_container"
                >
                    <Gallery
                        images={images}
                    />
                    <div className="modal_title">{ title }</div>
                    <div className="modal_desc">{desc}</div>
                    <a
                        className="homePage_btn"
                        
                        href={projectLink ? projectLink : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        // className="modal_github"
                    >
                        View code
                        <span><GitHub size="16"/></span>
                    </a>
                    
                </MotionDialogContent>
            </MotionDialogOverlay>
        )}
        </AnimatePresence>
    );
}

export default Modal;