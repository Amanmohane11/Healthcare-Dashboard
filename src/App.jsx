import React from 'react';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';

const App = () => {
  return (
    <div>
      {/* Common header component rendered on all pages */}
      <Header />
      <Routes>
        {/* Main route showing the Main component */}
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
