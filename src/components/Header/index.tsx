import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { path } = useRouteMatch();

  return (
    <Container size={size}>
      <header>
        <Link to="/">
          <img src={Logo} alt="GoFinances" />
        </Link>
        <nav>
          <Link to="/" className={path === '/' ? 'active' : ''}>
            Listagem
          </Link>

          <Link to="/import" className={path === '/import' ? 'active' : ''}>
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
