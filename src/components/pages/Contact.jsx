import React, { useState } from 'react';
import './Contact.scss';
import { motion, AnimatePresence } from 'framer-motion';
import SocialCard from '../SocialCard';

export default function Contact({ display }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState({
        message: '',
        type: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setStatus({ message: 'Envoi en cours...', type: 'loading' });
        
        try {
            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message })
            });

            const data = await response.json();

            if (response.ok) {
                setEmail('');
                setMessage('');
                setStatus({ 
                    message: 'Message envoyé !', 
                    type: 'success' 
                });
            } else {
                setStatus({ 
                    message: data.message || 'Un e-mail et un message sont requis.', 
                    type: 'error' 
                });
            }
        } catch (error) {
            setStatus({ 
                message: 'Erreur de connexion au serveur', 
                type: 'error' 
            });
        }
    };

    return (
        <AnimatePresence>
            {display && (
                <motion.section className='contact'
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.1 }}
                    transition={{ 
                        duration: 0.3,
                    }}
                >
                    <h2>Contactez-moi</h2>
                    {status.message && (
                        <motion.div className={`status-message ${status.type}`}
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.1 }}
                            transition={{ 
                                duration: 0.3,
                            }}>
                            {status.message}
                        </motion.div>
                    )}
                    <div className='contact_content'>
                        <div className='contact_left'>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">E-mail</label>
                                <input 
                                type="text" 
                                id="email" 
                                placeholder="Votre e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                />
                                <label htmlFor="message">Message</label>
                                <textarea 
                                id="message" 
                                placeholder="Votre message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                />
                                <input type="submit" value="Envoyer" id="submit-button"/>
                            </form>
                        </div>
                        <div className='contact_right'>
                            <h3>Rejoignez-moi sur les réseaux</h3>
                            <div className='contact_right_cards-container'>
                                <SocialCard
                                    logo="github-logo.png"
                                    title="GitHub"
                                    fontColor="white"
                                    color="#1a1a1a"
                                    link="https://github.com/AlexBnd11"

                                />
                                <SocialCard
                                    logo="linkedin-logo.png"
                                    title="LinkedIn"
                                    fontColor="white"
                                    color="#0077B5"
                                    link="https://www.linkedin.com/in/alex-bonniard-25957817a/"
                                />
                                <SocialCard
                                    logo="x-logo.png"
                                    title="X"
                                    fontColor="white"
                                    color="black"
                                    link="https://x.com/AlexBnd_Dev"
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}