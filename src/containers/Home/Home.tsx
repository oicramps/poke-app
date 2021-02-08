import React, { useState } from 'react';
import { useQuery } from 'react-query';
import List from '../../components/List';
import Loading from '../../components/Loading';
import pokemonService from '../../services/pokemonService';

const Home: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data, isLoading } = useQuery(['all-pokemons', offset], () => pokemonService.all(offset));

  if (isLoading) return <Loading isLoading />;

  return <List pokemons={data?.results} />;
};

export default Home;
