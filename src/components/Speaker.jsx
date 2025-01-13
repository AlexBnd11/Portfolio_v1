import React from 'react';
import './Speaker.scss';
import Mute from '../assets/images/mute-icon.svg';
import Unmute from '../assets/images/unmute-icon.svg';
import { useAudio } from '../context/AudioContext';
import { motion } from 'framer-motion';

export default function Speaker() {
    const { isMuted, toggleMute } = useAudio();

    return (
        <div className='speaker'>
            <motion.img 
                src={isMuted ? Mute : Unmute} 
                alt={isMuted ? "Son désactivé" : "Son activé"}
                onClick={toggleMute}
                style={{ cursor: 'pointer' }}
                animate={{ 
                    rotate: isMuted ? 360 : 0,
                    scale: [1, 0.8, 1]
                }}
                transition={{ 
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.4
                }}
                whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
            />
        </div>
    );
}