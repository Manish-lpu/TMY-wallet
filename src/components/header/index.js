import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
        TMY Wallet
          <i class="fi-rr-credit-card" />.
        </div>
        <div className="header-button">
          <a
            href="https://github.com/Manish-lpu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original colored" />
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
