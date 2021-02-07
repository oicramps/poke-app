import { x } from '@xstyled/styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <x.div my='10' display='flex' flexDirection='column' alignItems='center'>
      <img src={logo} alt='Pokémon App' />
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/favorites'>Favorites</NavLink>
        </li>
      </ul>

      <hr />
    </x.div>
  );
};

export default Header;
