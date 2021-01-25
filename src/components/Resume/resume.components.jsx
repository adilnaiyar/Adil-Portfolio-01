import React from 'react';
import { motion } from 'framer-motion'

import Bar from './Bar/bar.components';
import { tools, languages } from './data';


const Resume = () => {
    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container resume"
            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Electronic & Communication Engineering
                        </h5>
                        <p className="resume-card__name">
                            PSIT (2013-2017)
                        </p>
                        <p className="resume-card__details"> I have done B.tech in stream of ECE from Dr. Abdul Kalam Technical university</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Associate IT
                        </h5>
                        <p className="resume-card__name">
                            Daffodill (2019-2020)
                        </p>
                        <p className="resume-card__details">I worked as an Associate IT in Daffodill and build website and web apps.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar key = {language.name} value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar key = {tool.name} value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;