import { useState } from 'react';
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/navbar';
import Footer from './components/footer';

import Phome from './pages/home/Phome';
import Sobre from './pages/about/Sobre';
import Register from './pages/Registrer/Register';
import Login from './pages/Login/Login';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
       <NavBar /> 
        <div className="container">
          <Routes>
            <Route path="/" element={<Phome />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
