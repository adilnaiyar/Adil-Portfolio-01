import React from 'react';
import {motion} from 'framer-motion';
import './circles.styles.css';

const Circles  = () => {
    const circle_variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3, duration: 0.7,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return(
        <div>
            <motion.div 
                variants={circle_variant}
                initial='hidden'
                animate="visible"
                exit="exit"
                className = "circle1"
            >
            </motion.div>
            <motion.div 
                variants={circle_variant}
                initial='hidden'
                animate="visible"
                exit="exit"
                className = "circle2"
            >
            </motion.div>
        </div>
    )
}

export default Circles;