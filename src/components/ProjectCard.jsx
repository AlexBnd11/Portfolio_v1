import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.scss';
import close_icon from '../assets/images/close-icon.png';


export default function ProjectCard({ name, cover, github_link, tags, decription, skills, screenshots }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const getImageUrl = (imageName) => {
        return new URL(`../assets/images/projects/${imageName}`, import.meta.url).href;
    };
    
    return (
            <>
            <div className='project_card'>
                <img src={getImageUrl(cover)} alt={name} />
                <div className='project_card_overlay'>
                    <h3 className='project_card_title'>{name}</h3>
                    <button onClick={() => setModalIsOpen(true)}>Voir le projet</button>
                </div>
            </div>
            
            <AnimatePresence>
                {modalIsOpen && (
                    <>
                        <motion.div 
                            className='project_modal_overlay'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setModalIsOpen(false)}
                        />
                        <motion.div
                            className='project_modal'
                            initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.5 }}
                            animate={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
                            exit={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                width: "75vw",
                                transform: "translate(-50%, -50%)"
                            }}
                        >
                            <div className='project_description'>
                                <h4>Description du projet</h4>
                                <div className='project_card_tags_container'>
                                    {github_link && <div className='project_card_github-tag'>
                                        <a href={github_link} target='_blank'>GitHub</a>
                                    </div>}
                                    <div className='project_card_tags'>
                                        {tags.map((tag, index) => (
                                            <span key={index}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <p>{decription}</p>
                                <p>{skills}</p>
                            </div>
                            <div className='project_screenshots'>
                                {screenshots.map((screenshot, index) => (
                                    <img src={getImageUrl(screenshot)} alt={screenshot} key={index} />
                                ))}
                            </div>
                            <div className='project_modal_close' onClick={() => setModalIsOpen(false)}>
                                <img src={close_icon} alt='close' />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};