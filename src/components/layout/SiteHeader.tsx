// src/components/layout/SiteHeader.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./SiteHeader.css";

const NAV_ITEMS = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
];

const SiteHeader: React.FC = () => {
  return (
    <header className="site-header">
      {/* logo goes HOME */}
      <NavLink to="/" className="site-header__logo">
        Iva Park
      </NavLink>

      <nav className="site-header__nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }: { isActive: boolean }) =>
              "site-header__link" +
              (isActive ? " site-header__link--active" : "")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
