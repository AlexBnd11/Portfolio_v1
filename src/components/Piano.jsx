import React, { useState } from 'react';
import BlackKey from './BlackKey';
import WhiteKey from './WhiteKey';
import './piano.scss';
import { motion } from 'framer-motion';

export default function Piano({onToggleAbout, onToggleProjects, displayAbout, displayProjects}) {
  return (
    <motion.div 
      className="piano"
      style={{
        position: 'absolute',
        transform: 'translateX(-50%)',
        left: displayProjects ? '15%' : '43%',
        top: displayAbout ? '5%' : '30%',
      }}
      animate={{
        top: displayAbout ? '5%' : '30%',
        left: displayProjects ? '9%' : '42%',
        scale: displayAbout ? 0.75 : 1
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
        <WhiteKey noteName="Contact" chord="G"/>
      </div>
    </motion.div>
  );
};