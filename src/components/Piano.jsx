import React, { useState, useEffect } from 'react';
import BlackKey from './BlackKey';
import WhiteKey from './WhiteKey';
import './piano.scss';
import { motion } from 'framer-motion';

export default function Piano({onToggleAbout, onToggleProjects, onToggleContact, displayAbout, displayProjects, displayContact}) {
  const calculateScale = () => {
    if (window.innerWidth > 1920) return 1;
    if (window.innerWidth < 1000) return 1;
    return window.innerWidth / 1920;
  };

  const [scale, setScale] = useState(calculateScale());

  useEffect(() => {
    const handleResize = () => {
      setScale(calculateScale());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      className="piano"
      style={{
        position: 'absolute',
        top: displayAbout ? '-5%' : '25%',
        left: '50%',
      }}
      animate={{
        top: displayAbout ? '-5%' : '25%',
        left: displayProjects 
          ? '13%' 
          : displayContact 
            ? '87%' 
            : '50%',
        x: '-50%',
        scale: displayAbout ? 0.8 * scale : scale
      }}
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