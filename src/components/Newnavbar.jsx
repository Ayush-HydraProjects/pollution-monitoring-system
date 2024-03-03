import React from 'react'

const Newnavbar = () => {
    return (
        <nav className="navbar">
          <div className="logo">
            <a href="/">Pollution Tracker</a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/air-pollution">Air Pollution</a></li>
            <li><a href="/water-pollution">Water Pollution</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      );
}

export default Newnavbar