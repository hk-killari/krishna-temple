import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Darshan from './pages/Darshan';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Donations from './pages/Donations';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="om-loader">ॐ</div>
          <h2>శ్రీ వేణుగోపాల స్వామి దేవస్థానం</h2>
          <p>Loading...</p>
        </div>
        <style>{`
          .loading-screen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #095456 0%, #0d7377 100%);
          }
          .loading-content {
            text-align: center;
            color: white;
          }
          .om-loader {
            font-size: 5rem;
            color: #d4a84b;
            animation: pulse 1.5s ease-in-out infinite;
            font-family: 'Tiro Devanagari Sanskrit', serif;
          }
          .loading-content h2 {
            margin-top: 20px;
            font-size: 1.8rem;
          }
          .loading-content p {
            color: #d4a84b;
            margin-top: 10px;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/darshan" element={<Darshan />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
