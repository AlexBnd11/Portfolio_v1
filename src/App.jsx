import './App.scss';
import React, { useState } from 'react';
import Piano from './components/Piano';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Speaker from './components/Speaker';
import { AudioProvider } from './context/AudioContext';

export default function App() {
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayProjects, setDisplayProject] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);

  const handleToggleAbout = () => {
    if (displayAbout) {
      setDisplayAbout(false);
    } else {
      setDisplayProject(false);
      setDisplayContact(false);
      setDisplayAbout(true);
    }
  };

  const handleToggleProject = () => {
    if (displayProjects) {
      setDisplayProject(false);
    } else {
      setDisplayAbout(false);
      setDisplayContact(false);
      setDisplayProject(true);
    }
  };

  const handleToggleContact = () => {
    if (displayContact) {
      setDisplayContact(false);
    } else {
      setDisplayAbout(false);
      setDisplayProject(false);
      setDisplayContact(true);
    }
  };

  return (
    <AudioProvider>
      <main>
        <Piano 
          onToggleAbout={handleToggleAbout} 
          onToggleProjects={handleToggleProject}
          onToggleContact={handleToggleContact}
          displayAbout={displayAbout} 
          displayProjects={displayProjects}
          displayContact={displayContact}
        />
        <About display={displayAbout} />
        <Projects display={displayProjects} />
        <Contact display={displayContact} />
        <Speaker />
      </main>
    </AudioProvider>
  );
};
