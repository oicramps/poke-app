import { x } from '@xstyled/styled-components';
import React from 'react';
import { StyledCard } from './styled';

const Card: React.FC = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
