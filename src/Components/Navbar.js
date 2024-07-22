// components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import useAuth from '../Hooks/useAuthenticate';
import { auth } from '../firebase';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');

    // console.error('Error signing out:');
  };

  return (
    <nav className="container-nav">
      <h4>Shopping-List-App</h4>
      <div className={`counter-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
      </div>
     
      <>
        {currentUser ? (
          <Link onClick={handleLogout} className="nav-logn">LogOut</Link>
        ) : (
          <div className="nav-sign">
            <Link to="/sign-up" className="nav-logn" onClick={() => setIsMobileMenuOpen(false)}>SignUp</Link>
            <Link to="/login" className="nav-logn" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
          </div> )}
      </>
      <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
