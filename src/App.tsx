import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Gallery from './components/Gallery';
import Prcing from './components/Prcing';
import Contact from './components/Contact';
import BmiCalculator from './components/BmiCalculator';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <WorkoutSessions />
        <Gallery />
        <Prcing />
        <Contact />
        <BmiCalculator />
        <Footer />
        <ToastContainer theme='dark' position='top-center'/>
      </Router>
    </>
  )
}

export default App
