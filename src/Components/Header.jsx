import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>🌿 Organika Store</h1>
      <nav>
        <a href="#catalog">Catalog</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

