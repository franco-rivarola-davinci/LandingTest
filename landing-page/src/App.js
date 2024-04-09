import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
// import Home from './home/home';
// import About from './about/about';
import Contact from './contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      {/* Resto del contenido de tu aplicación */}
    </div>
  );
}

export default App;