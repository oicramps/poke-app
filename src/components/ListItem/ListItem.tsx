import { x } from '@xstyled/styled-components';
import React from 'react';
import IPokemonItem from '../../interfaces/PokemonItem';
import Card from '../Card';
import Loading from '../Loading';
import Tag from '../Tag';

interface Props {
  pokemon: IPokemonItem;
  isLoading: boolean;
}

const mapTypeTag = (type: string) => <Tag label={type} color='green' />;

const mapAbilityTag = (type: string) => <Tag label={type} color='danger' />;

const ListItem: React.FC<Props> = ({ pokemon, isLoading }) => {
  return (
    <Card>
      {isLoading ? (
        <x.div w='300' alignItems='center'>
          <Loading isLoading />
        </x.div>
      ) : (
        <x.div display='flex' flex='1' flexDirection='column' maxWidth='300'>
          <x.img w='300' h='300' src={pokemon.image} alt={pokemon.name} />
          <x.p color='black' fontSize='4xl'>
            {pokemon.name}
          </x.p>
          <x.p color='blue-gray-400' fontSize='base'>
            {`#${pokemon.id}`}
          </x.p>
          <x.div display='flex' flexWrap='wrap' mt='4'>
            {pokemon.types.map(mapTypeTag)}
          </x.div>
          <x.div display='flex' flexWrap='wrap' mt='4'>
            {pokemon.abilities.map(mapAbilityTag)}
          </x.div>
        </x.div>
      )}
    </Card>
  );
};

export default ListItem;
