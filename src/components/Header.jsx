import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="page-header">
      <div className="header-content">
        <button
          className="logo-button"
          onClick={handleLogoClick}
          type="button"
          aria-label="Voltar para a página inicial"
        >
          <img
            src="https://mondrian.claro.com.br/assets/logo/claro.svg"
            alt="Claro"
            className="logo"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
