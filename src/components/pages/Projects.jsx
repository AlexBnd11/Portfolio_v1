import React from 'react';
import './Projects.scss';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import ProjectsData from '../../assets/data/projects_data.json';

export default function Project({ display }) {

    return (
        <AnimatePresence>
            {display && (
                <motion.section 
                    className='projects'
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.1 }}
                    transition={{ 
                        duration: 0.3,
                    }}
                >
                    <h2>Mes dernières réalisations</h2>
                    <div className='projects_cards_container'>
                        {ProjectsData.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                name={project.name}
                                cover={project.cover}
                                github_link={project.github_link}
                                tags={project.tags}
                                decription={project.decription}
                                skills={project.skills}
                                screenshots={project.screenshots}
                            />
                        ))}
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}