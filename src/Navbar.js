import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <h1 className="navbar-title">Manga Sphere</h1>
      <ul className="navbar-links" role="menubar">
        <li className="navbar-item" role="none">
          <Link to="/" className="navbar-link" role="menuitem">{t('Home')}</Link>
        </li>
        <li className="navbar-item" role="none">
          <Link to="/all-mangas" className="navbar-link" role="menuitem">{t('All Mangas')}</Link>
        </li>
        <li className="navbar-item" role="none">
          <Link to="/trends" className="navbar-link" role="menuitem">{t('Trends')}</Link>
        </li>
        <li className="navbar-item" role="none">
          <Link to="/my-list" className="navbar-link" role="menuitem">{t('My List')}</Link>
        </li>
        <li className="navbar-item" role="none">
          <Link to="/forum" className="navbar-link" role="menuitem">{t('Forum')}</Link>
        </li>
        <li className="navbar-item language-buttons" role="none">
          <button onClick={() => changeLanguage('en')} className="language-button" aria-label="Switch to English">English</button>
          <button onClick={() => changeLanguage('fr')} className="language-button" aria-label="Switch to French">Français</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
