import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="React Title one">
        <h3>Children</h3>
      </Header>
      <Header title="React Title two" />
    </>
  );
}

export default App;
