import React, { useState } from 'react';
import BlackKey from './BlackKey';
import WhiteKey from './WhiteKey';
import About from './pages/About';
import './piano.scss';

export default function Piano() {

  
  
  return (
    <div className="piano">
      <WhiteKey 
        noteName="À propos" 
        chord="C"
        />
      <BlackKey />
      <WhiteKey noteName="Projets" chord="F"/>
      <BlackKey />
      <WhiteKey noteName="Contact" chord="G"/>
    </div>
  );
};