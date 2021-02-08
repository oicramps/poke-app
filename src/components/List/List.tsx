import { x } from '@xstyled/styled-components';
import React from 'react';
import { useQueries } from 'react-query';
import IPokemonItem from '../../interfaces/PokemonItem';
import IPokemonListItem from '../../interfaces/PokemonListItem';
import api from '../../services/api';
import pokemonService from '../../services/pokemonService';
import ListItem from '../ListItem';

interface Props {
  pokemons: IPokemonListItem[] | undefined;
}

const List: React.FC<Props> = ({ pokemons = [] }) => {
  const pokemonQueries = useQueries(
    pokemons.map(({ name, url }) => {
      return {
        queryKey: ['pokemon', name],
        queryFn: () => pokemonService.single(url),
      };
    }),
  );

  const mapPokemonItem = ({ data, isLoading }: { data: any; isLoading: boolean }) => {
    return <ListItem pokemon={data} isLoading={isLoading} key={data?.id} />;
  };

  return (
    <x.div display='flex' flexWrap='wrap' justifyContent='space-between'>
      {pokemonQueries.map(mapPokemonItem)}
    </x.div>
  );
};

export default List;
