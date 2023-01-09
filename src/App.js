import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

import RootPage from './containers/root';
import AlgoPage from './containers/algo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/algo' element={<AlgoPage/>} />
        <Route exact path='/' element={<RootPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
