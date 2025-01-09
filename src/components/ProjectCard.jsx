import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectCard.scss';


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
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Détails du projet"
                className='project_modal'
                overlayClassName='project_modal_overlay'
            >
                <div className='project_description'>
                    <div className='project_card_github-tag'>
                        {github_link && <a href={github_link}>Lien GitHub</a>}
                    </div>
                    <h4>Description du projet</h4>
                    <div className='project_card_tags'>
                        {tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                    <p>{decription}</p>
                    <br></br>
                    <p>{skills}</p>
                </div>
                <div className='project_screenshots'>
                    {screenshots.map((screenshot, index) => (
                        <img src={getImageUrl(screenshot)} alt={screenshot} key={index} />
                    ))}
                </div>
            </Modal>
        </>
    );
};