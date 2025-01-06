import React, { useState } from 'react';
import BlackKey from './BlackKey';
import WhiteKey from './WhiteKey';
import './piano.scss';

export default function Piano() {
  return (
    <div className="piano">
      <WhiteKey noteName="Projets" />
        <BlackKey />
      <WhiteKey noteName="À propos" />
        <BlackKey />
      <WhiteKey noteName="Contact" />
    </div>
  );
};