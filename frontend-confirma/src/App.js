import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Confirmacion from './pages/Confirmacion';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Confirmacion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
