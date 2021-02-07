import { x } from '@xstyled/styled-components';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import List from '../../components/List';
import pokemonService from '../../services/pokemonService';

const Home: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data, isLoading } = useQuery(['all-pokemons', offset], () => pokemonService.all(offset));

  if (isLoading) return <div>loading...</div>;

  return <List pokemons={data?.data.results} />;
};

export default Home;
