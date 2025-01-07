import React, { useState } from 'react';
import './WhiteKey.scss';
import CChord from '../assets/sounds/c-major-chord.mp3';
import FChord from '../assets/sounds/f-major-chord.mp3';
import GChord from '../assets/sounds/g-major-chord.mp3';

export default function WhiteKey({ noteName, chord, onClick }) {
    const playChord = () => {
        const chordSound = chord === 'C' ? CChord : chord === 'F' ? FChord : GChord;
        const audio = new Audio(chordSound);
        audio.play();
    };

    const handleClick = () => {
        playChord();
        if (onClick) onClick();
    };

    return (
        <div className="white-key" onClick={handleClick}>
            <span>{noteName}</span>
        </div>
    );
};