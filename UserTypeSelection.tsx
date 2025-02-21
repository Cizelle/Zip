import React from "react";
import "./UserTypeSelection.css";
import { Link } from "react-router-dom";
import logo from "./donora.png";

interface UserTypeSelectionProps {
  onSelect: (userType: string) => void;
}

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ onSelect }) => {
  return (
    <div className="user-type-selection-container">
      <div className="user-type-selection-card">
        <div className="donora-title-container">
          <div className="donora-title-logo">
            <img src={logo} alt="Donora Logo" />
          </div>
          <span className="donora-title">DONORA</span>
        </div>
        <h2 className="user-type-selection-subtitle">Select User Type</h2>
        <div className="user-type-selection-buttons">
          <Link to="/auth?type=donor" onClick={() => onSelect("donor")}>
            <button className="user-type-selection-button donor-button">
              Donor
            </button>
          </Link>
          <Link to="/auth?type=recipient" onClick={() => onSelect("recipient")}>
            <button className="user-type-selection-button recipient-button">
              Recipient
            </button>
          </Link>
          <Link to="/auth?type=hospital" onClick={() => onSelect("hospital")}>
            <button className="user-type-selection-button hospital-button">
              Hospital
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
