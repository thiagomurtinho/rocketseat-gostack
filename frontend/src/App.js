import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import Header from './components/Header';

function App() {
  const [project, setProject] = useState([]);

  function handleAddProject() {
    setProject([...project, `New project ${Date.now()}`]);
  }

  useEffect(() => {
    api.get('projects').then((res) => {
      setProject(res.data);
    });
  }, []);

  return (
    <>
      <Header title="Projects" />
      <ul>
        {project.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
