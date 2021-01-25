import React, { useState } from 'react';
import { motion } from 'framer-motion'

import ProjectData from './data';
import ProjectCard from './projectCard/projectCard.components';
import './project.styles.css';

const Project = () => {
    const project_data = ProjectData;

    const [projects, setProjects] = useState(project_data)
    const [active, setActive] = useState('All')


    const handleFilterCategory = (name) => {
        const new_array = project_data.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const project_variants = {
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
    return(
        <motion.div className = "container projects"
            variants={project_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={
                    () => {
                        setProjects(project_data)
                        setActive("All")
                    }
                }>All</div>
                <div className={active === 'react.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('react.js')}>React</div>
                <div className={active === 'redux' && 'projects__navbar-active'} onClick={() => handleFilterCategory('redux')}>Redux</div>
                <div className={active === 'php' && 'projects__navbar-active'} onClick={() => handleFilterCategory('php')}>PHP</div>
            </div>
            <div className="row">
                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </motion.div>   
    )
}
   

export default Project;