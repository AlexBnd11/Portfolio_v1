import React from 'react';
import './Projects.scss';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ProjectCard';

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
                    <h2>Projets réalisés</h2>
                    <ProjectCard />
                    <h3>Ils me font confiance :</h3>
                </motion.section>
            )}
        </AnimatePresence>
    )
}