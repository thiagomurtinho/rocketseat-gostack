/* eslint-disable react/jsx-no-undef */
import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Thiago' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
