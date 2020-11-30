import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [project, setProject] = useState([
    'Desenvolviemento de App',
    'Front-end web',
  ]);

  function handleAddProject() {
    setProject([...project, `New project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {project.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
