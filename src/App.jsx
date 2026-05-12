import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Observatories from './pages/Observatories';
import About from './pages/About';
import Contact from './pages/Contact';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Professional Navigation Bar */}
        <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-400">🌌 AstroLearn</h1>
            
            <div className="flex gap-8 text-lg">
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
              <Link to="/observatories" className="hover:text-blue-400 transition">Observatories</Link>
              <Link to="/videos" className="hover:text-blue-400 transition">Videos</Link>
              <Link to="/about" className="hover:text-blue-400 transition">About</Link>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="text-center py-32 px-6">
              <h1 className="text-6xl font-bold mb-6">Welcome to AstroLearn</h1>
              <p className="text-2xl text-gray-400">Explore the Universe • Learn Astronomy</p>
            </div>
          } />
          
          <Route path="/observatories" element={<Observatories />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;