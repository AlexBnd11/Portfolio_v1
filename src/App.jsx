import './App.scss';
import React, { useState } from 'react';
import Piano from './components/Piano';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

export default function App() {
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayProjects, setDisplayProject] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);

  const handleToggles = () => {
    if (displayAbout) {
      setDisplayProject(false);
      setDisplayContact(false);
    }
    if (displayProjects) {
      setDisplayAbout(false);
      setDisplayContact(false);
    }
    if (displayContact) {
      setDisplayAbout(false);
      setDisplayProject(false);
    }
};
  const handleToggleAbout = () => {
    setDisplayAbout(!displayAbout);
    handleToggles();
  };

  const handleToggleProject = () => {
    setDisplayProject(!displayProjects);
    handleToggles();
  };

  const handleToggleContact = () => {
    setDisplayContact(!displayContact);
    handleToggles();
  };



  return (
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
    </main>
  );
};
