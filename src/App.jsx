import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Categories from './pages/categories';
import About_contact from './pages/about_contact';
import Books from './pages/Books';
import Comets from './pages/Comets';
import Constellations from './pages/Constellations';
import Latest_Development from './pages/Latest_Development';
import Observatories from './pages/Observatories';
import Planets from './pages/Planets';
import Videos from './pages/Videos';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Professional Navigation Bar */}
        <nav className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-400">🌌 AstroLearn</h1>
            
            <div className="flex gap-8 text-lg flex-wrap">
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
              <Link to="/categories" className="hover:text-blue-400 transition">Categories</Link>
              <Link to="/Books" className="hover:text-blue-400 transition">Books</Link>
              <Link to="/Comets" className="hover:text-blue-400 transition">Comets</Link>
              <Link to="/Constellations" className="hover:text-blue-400 transition">Constellations</Link>
              <Link to="/Latest_Development" className="hover:text-blue-400 transition">Latest Dev</Link>
              <Link to="/observatories" className="hover:text-blue-400 transition">Observatories</Link>
              <Link to="/Planets" className="hover:text-blue-400 transition">Planets</Link>
              <Link to="/videos" className="hover:text-blue-400 transition">Videos</Link>
              <Link to="/about" className="hover:text-blue-400 transition">About</Link>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          {/* Main Landing / Dashboard Route */}
          <Route path="/" element={<Home />} />
          
          {/* Categories and Content Routes */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Comets" element={<Comets />} />
          <Route path="/Constellations" element={<Constellations />} />
          <Route path="/Latest_Development" element={<Latest_Development />} />
          <Route path="/Planets" element={<Planets />} />
          
          {/* Geolocation Feature Components */}
          <Route path="/observatories" element={<Observatories />} />
          <Route path="/videos" element={<Videos />} />
          
          {/* Content/Identity Routes */}
          <Route path="/About_contact" element={<About_contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;