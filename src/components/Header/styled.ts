import { NavLink } from 'react-router-dom';
import styled from '@xstyled/styled-components';

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150;
  background-color: blue-gray-50;
  width: 100%;
  margin: 20 0;
`;

export const NavbarItem = styled(NavLink)`
  position: relative;
  background-color: transparent;
  color: dark;
  text-decoration: none;
  font-weight: medium;
  font-size: 3xl;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200;
  height: 100%;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: primary;
  }

  &.active {
    background-color: blue-gray-200;
    color: primary;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      margin: 0 auto;
      width: 0;
      height: 0;
      border-top: 10px solid ${({ theme }) => theme.colors['blue-gray-200']};
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
`;
