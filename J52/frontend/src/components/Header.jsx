import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header
      style={{
        backgroundColor: 'var(--color-header-bg)',
        color: 'var(--color-header-text)',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontFamily: "'Alfa Slab One', cursive",
            fontSize: "1.6rem",
            letterSpacing: "1px"
          }}
        >
          J52s
        </div>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <NavLink to="/dashboard" className="header-link">
            Dashboard
          </NavLink>
          <NavLink to="/summary" className="header-link">
            Summary
          </NavLink>
          <NavLink to="/reports" className="header-link">
            Reports
          </NavLink>
          <button
            type="button"
            onClick={handleLogout}
            className="header-logout-btn"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
