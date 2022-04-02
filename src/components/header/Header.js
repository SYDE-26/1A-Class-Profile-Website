import React from 'react'

export default function Header() {
    return (
      <header className="header">

        <img 
          src="../../../public/header-logo.png"
          alt="Header Logo"
          className="header-logo"
        />

        <button
          className="menu-button"

        ><img 
          src="../../../public/header-menu-item.svg"
          alt="Menu Vector"
          className="menu-image"

        /></button>

      </header>
    );
};
