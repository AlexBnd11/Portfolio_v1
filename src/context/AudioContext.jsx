import React, { createContext, useState, useContext } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute }}>
            {children}
        </AudioContext.Provider>
    );
} 

export function useAudio() {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudio doit être utilisé dans un AudioProvider');
    }
    return context;
} 