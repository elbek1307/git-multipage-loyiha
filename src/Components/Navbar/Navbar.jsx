import "./Navbar.css"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from "./Logo (1).svg";

export default function Navbar() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <header>
      <nav>
        <div className="container">
          <img src={Logo} alt="Logo" className="nav_logo" />
          
          {/* Burger bosilganda 'active' classi qo'shiladi */}
          <ul className={`nav_list ${modal ? 'active' : ''}`}>
            <li className="nav_item"><a href="#">Home</a></li>
            <li className="nav_item"><a href="#">Service</a></li>
            <li className="nav_item"><a href="#">Company</a></li>
            <li className="nav_item"><a href="#">Career</a></li>
            <li className="nav_item"><a href="#">Blog</a></li>
            <li className="nav_item"><a href="#">Contact us</a></li>
            <li className="nav_item"><a href="#">Clone project &rarr;</a></li>
          </ul>

          <div className="burger_icon" onClick={toggleModal}>
            {modal ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>
      </nav>
    </header>
  );
}