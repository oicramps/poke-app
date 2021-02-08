import { AxiosResponse } from 'axios';
import api from './api';
import IPokeApiResponse from '../interfaces/PokeApiResponse';
import IPokemonListItem from '../interfaces/PokemonListItem';
import IPokemonItem from '../interfaces/PokemonItem';

interface IPokeListResponse extends IPokeApiResponse {
  results: IPokemonListItem[];
}

const all = async (offset: number): Promise<IPokeListResponse> => {
  try {
    const response = await api.get('pokemon', { params: { offset } });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const single = async (url: string): Promise<IPokemonItem> => {
  try {
    const response = await api.get(url);

    const { id, name, sprites, types, abilities } = response.data;

    return {
      id,
      name,
      image: sprites.other['official-artwork'].front_default,
      types: types.map(({ type }: { type: { name: string } }) => type.name),
      abilities: abilities.map(({ ability }: { ability: { name: string } }) => ability.name),
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  all,
  single,
};
