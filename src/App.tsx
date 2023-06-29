import React from 'react';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
};

export default App;
