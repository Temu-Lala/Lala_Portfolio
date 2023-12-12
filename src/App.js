import './App.css';
import * as THREE from 'three';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Who from './components/Who';
import Contact from './components/Contact';
import Works from './components/Works';
import Test from './components/Test';
import Hero_3D from './components/Hero_3D';
import Background from './img/background.png';
import Cv from './components/Cv';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relativ text-white">
        <Routes>
          <Route path="/cv" element={<Cv />} />
        </Routes>

        <div className="scroll-content">
          <Hero onClick={() => {}} />
          <Who onClick={() => {}} />
          <Works onClick={() => {}} />
          <Contact onClick={() => {}} />
        </div>

        <div className="fixed inset-0 -z-10 bg-image bg-no-repeat bg-center bg-cover ">
          <Hero_3D class="bg-transparent" />

        </div>
<Footer/>
      </div>
    </Router>
  );
}

export default App;
