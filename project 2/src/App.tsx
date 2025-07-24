import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeatsLibrary from './components/BeatsLibrary';
import ListenNow from './components/ListenNow';
import Covers from './components/Covers';
import LivePrograms from './components/LivePrograms';
import Store from './components/Store';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <BeatsLibrary />
      <ListenNow />
      <Covers />
      <LivePrograms />
      <Store />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;