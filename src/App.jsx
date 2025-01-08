import './App.scss';
import React, { useState } from 'react';
import Piano from './components/Piano';
import About from './components/pages/About';
import Projects from './components/pages/Projects';


export default function App() {
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayProjects, setDisplayProject] = useState(false);
  
  const handleToggles = () => {
    if (displayAbout) {
      setDisplayProject(false);
    }
    if (displayProjects) {
      setDisplayAbout(false);
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


  return (
    <main>
      <Piano 
        onToggleAbout={handleToggleAbout} 
        onToggleProjects={handleToggleProject}
        displayAbout={displayAbout} 
        displayProjects={displayProjects}
      />
      <About display={displayAbout} />
      <Projects display={displayProjects} />
    </main>
  );
};
