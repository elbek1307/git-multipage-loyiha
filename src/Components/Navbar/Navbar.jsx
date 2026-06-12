import "./Navbar.css"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from "./Logo (1).svg";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Service from "../../Pages/ServicePages/Service";

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
          
        
          <ul className={`nav_list ${modal ? 'active' : ''}`}>
            <li className="nav_item"><Link to="home">Home</Link></li>
            <li className="nav_item"><Link to="service">Service</Link></li>
            <li className="nav_item"><Link to="company">Company</Link></li>
            <li className="nav_item"><Link to="career">Career</Link></li>
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