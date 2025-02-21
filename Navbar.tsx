import React from "react";
import "./Navbar.css";
import logo from "./donora.png";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NavbarProps {
  userData: { userType: string; name: string } | null;
}

const Navbar: React.FC<NavbarProps> = ({ userData }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">
            {" "}
            {}
            <img src={logo} alt="DONORA Logo" className="navbar-logo-image" />
            DONORA
          </Link>
        </div>

        <div className="navbar-auth">
          {userData ? (
            <div>
              <span className="navbar-user-name">Welcome, {userData.name}</span>
              <Link to="/logout" className="navbar-logout">
                Logout
              </Link>
            </div>
          ) : (
            <>
              <Link to="/auth?mode=login" className="navbar-login">
                {" "}
                {}
                <FaSignInAlt className="navbar-auth-icon" />
                Login
              </Link>
              <Link to="/auth?mode=register" className="navbar-signup">
                {" "}
                {}
                <FaUserPlus className="navbar-auth-icon" />
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
