import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
    />
    <ul className="list-container">
      <li className="nav-items">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-items">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-items">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
