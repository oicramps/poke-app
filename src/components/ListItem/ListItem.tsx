import { x } from '@xstyled/styled-components';
import React from 'react';
import Card from '../Card';

interface Props {
  pokemon: any;
  isLoading: boolean;
}

const ListItem: React.FC<Props> = ({ pokemon = {}, isLoading }) => {
  return (
    <Card>
      {isLoading ? (
        <span>...isLoding</span>
      ) : (
        <x.div display='flex' flex='1' flexDirection='column'>
          <x.img w='200' h='200' src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
          <x.p color='black' fontSize='4xl'>
            {pokemon.name}
          </x.p>
          <x.p color='blue-gray-400' fontSize='base'>
            {`#${pokemon.id}`}
          </x.p>
        </x.div>
      )}
    </Card>
  );
};

export default ListItem;
