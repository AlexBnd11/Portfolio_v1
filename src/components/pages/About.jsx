import React from 'react';
import './About.scss';
import Card from '../Card';
import frontLogo from '../../assets/images/front-end-logo.png';
import backLogo from '../../assets/images/back-end-logo.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function About({ display }) {
    return (
        <AnimatePresence>
            {display && (
                <motion.section 
                    className='about'
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.1 }}
                    transition={{ 
                        duration: 0.3,
                    }}
                >
                    <div className='about_left'>
                        <h1>Alex Bonniard</h1>
                        <h2>Développeur Front-end</h2>
                        <p>
                            Formé en Marketing Digital (Master), l'appel du code m'a poussé à me reconvertir. <br />
                            Passionné par le code et la création de sites web, 
                            je me spécialise actuellement dans la réalisation de sites vitrines.
                            Je suis actuellement disponible pour toute demande de projet front-end.
                        </p>
                        <p>Musicien chevronné depuis mon enfance, je propose également des cours de piano sur mon temps libre.</p>
                    </div>
                    <div className='cards'>
                        <Card 
                            text1="HTML5, CSS, Javascript & React"
                            text2="Git, Docker, Wordpress, Motion, Suite Adobe"
                            logoLink={frontLogo}
                            title1="Languages & Frameworks :"
                            title2="Outils :"
                        />
                        <Card 
                            text1="Node.js, Express & PHP"
                            text2="MangoDB & MySQL"
                            logoLink={backLogo}
                            title1="Languages & Frameworks :"
                            title2="Base de données :"
                        />
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};