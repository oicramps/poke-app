import { x } from '@xstyled/styled-components';
import React from 'react';
import { useQueries } from 'react-query';
import IPokemonListItem from '../../interfaces/PokemonListItem';
import api from '../../services/api';
import ListItem from '../ListItem';

interface Props {
  pokemons: IPokemonListItem[];
}

const List: React.FC<Props> = ({ pokemons }) => {
  const pokemonQueries = useQueries(
    pokemons.map(({ name, url }) => {
      return {
        queryKey: ['pokemon', name],
        queryFn: () => api.get(url),
      };
    }),
  );

  const mapPokemonItem = ({ data, isLoading }: { data: any; isLoading: boolean }, index: number) => {
    return <ListItem pokemon={data?.data} isLoading={isLoading} key={index} />;
  };

  return (
    <x.div display='flex' flexWrap='wrap' justifyContent='space-between'>
      {pokemonQueries.map(mapPokemonItem)}
    </x.div>
  );
};

export default List;
