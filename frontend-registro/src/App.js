import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Registro from './pages/Registro';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Registro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
