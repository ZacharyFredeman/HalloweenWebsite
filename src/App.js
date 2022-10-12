import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import Treat from './components/TrickTreat/Treat';
import Trick from './components/TrickTreat/Trick';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} exact/>
            <Route path="/signin" element={<SignIn/>} exact/>
            <Route path="/trick" element={<Trick/>} exact/>
            <Route path="/treat" element={<Treat/>} exact/>
        </Routes>
      </Router>
  );
}

export default App;
