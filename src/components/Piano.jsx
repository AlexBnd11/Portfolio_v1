import React, { useState, useEffect } from 'react';
import BlackKey from './BlackKey';
import WhiteKey from './WhiteKey';
import './piano.scss';
import { motion } from 'framer-motion';

export default function Piano({onToggleAbout, onToggleProjects, onToggleContact, displayAbout, displayProjects, displayContact}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyles = isMobile ? {
    position: 'static',
    marginTop: '20px',
  } : {
    position: 'absolute',
    top: displayAbout ? '0%' : '25%',
    left: '50%',
    transform: 'translateX(-50%)'
  };

  return (
    <motion.div 
      className="piano"
      style={containerStyles}
      animate={!isMobile ? {
        top: displayAbout ? '0%' : '25%',
        left: displayProjects 
          ? '13%' 
          : displayContact 
            ? '87%' 
            : '50%',
        x: '-50%',
        scale: displayAbout ? 0.8 : 1
      } : {}}
      transition={{ 
        duration: 0.2,
        type: "spring",
        bounce: 0.3,
        stiffness: 80
      }}
    >
      <div className="piano">
        <WhiteKey 
          noteName="À propos" 
          chord="C"
          onClick={onToggleAbout}
        />
        <BlackKey />
        <WhiteKey 
          noteName="Projets" 
          chord="F"
          onClick={onToggleProjects}
        />
        <BlackKey />
        <WhiteKey
          noteName="Contact"
          chord="G"
          onClick={onToggleContact}
        />
      </div>
    </motion.div>
  );
};