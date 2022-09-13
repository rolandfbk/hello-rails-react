import React from 'react';
import Greeting from './Greeting';
import { Route, Routes } from "react-router-dom"

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<div><Greeting /></div>} />
    </Routes>
  </>
);

export default App;