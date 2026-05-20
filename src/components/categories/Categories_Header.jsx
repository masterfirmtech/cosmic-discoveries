import './Categories_Header.css';
import { Link } from "react-router-dom";

function Categories_Header() {
  return (
    <header className='categories-header'>

      <div className="header-content">

        <h1>Space Categories</h1>

        <p>
          Explore planets, stars, comets, constellations and more from our universe.
        </p>

        {/* Optional navigation link (using his React Router import) */}
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </header>
  )
}

export default Categories_Header;