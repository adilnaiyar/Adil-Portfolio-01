import React from 'react';
import {motion} from 'framer-motion';

import avatar from '../../assets/icons/mighty-coder.svg';
import resume from '../../assets/resume.pdf';
import download from '../../assets/icons/download.svg';
import pin from '../../assets/icons/pin.svg';

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:adil.naiyar@gmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x: '-30vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return(
    <motion.div className="app_sidebar"
        variants={sidebar_variant}
        initial='hidden'
        animate="visible"
    >
        <div className ="sidebar__items">
            <img src={avatar} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar_item">
                <h2> Adil Naiyar </h2>
            </div>
            <div className="sidebar_item">
                <h5> Web Developer </h5>
            </div>
            <div className="sidebar_item">
                <a href={resume} download="resume.pdf">
                    <img src={download} alt="resume" className="sidebar__icon mr-2" /> 
                        Download Resume  
                </a> 
            </div>
            <div className="sidebar_item">
                <img src={pin} alt="location" className="sidebar__icon mr-2" />
                Delhi, India
            </div>
            <div className="sidebar_item">
                <p>adil.naiyar@gmail.com</p>
            </div>
                   
            <div className="sidebar__email" onClick={handleEmailMe}> 
                Email-Me
            </div>
        </div>
    </motion.div>
    );
}

export default Sidebar;