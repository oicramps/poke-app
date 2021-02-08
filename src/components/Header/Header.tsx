import { x } from '@xstyled/styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import logo from '../../assets/images/logo.svg';
import { Navbar, NavbarItem } from './styled';

const Header: React.FC = () => {
  return (
    <x.div my='10' display='flex' flexDirection='column' alignItems='center'>
      <img src={logo} alt='Pokémon App' />
      <Navbar>
        <NavbarItem exact to='/'>
          <AiOutlineHome size={25} />
          Home
        </NavbarItem>
        <NavbarItem to='/favorites'>
          <AiOutlineStar size={25} />
          Favorites
        </NavbarItem>
      </Navbar>
    </x.div>
  );
};

export default Header;
