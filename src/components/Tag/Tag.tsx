import { x } from '@xstyled/styled-components';
import React from 'react';

interface Props {
  label: string;
  color?: string;
}

const Tag: React.FC<Props> = ({ label, color = 'blue-gray-400' }) => {
  return (
    <x.div mt='1' mr='2' py='1' px='4' color='white' bg={color} borderRadius='md'>
      {label}
    </x.div>
  );
};

export default Tag;
