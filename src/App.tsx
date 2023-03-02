import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Shape from './pages/Shape/Shape';
import FormItem from './pages/Form/Form';
import Buttoni18n from './components/Buttoni18n';
import Calculator from './pages/Calculator/Calculator';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Buttoni18n></Buttoni18n>
      <Routes>
      <Route path="/shape" element={<Shape />} />
      <Route path="/form" element={<FormItem />}/>
      <Route path="/calculator" element={<Calculator />}/>
      <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
