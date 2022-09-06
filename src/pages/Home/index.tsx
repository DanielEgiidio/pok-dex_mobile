import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import api from "../../services/api";

import * as S from "./styles";

type PokemonType = {
  type: string;
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type Request = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await api.get("/pokemon");
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getMoreInfo(pokemon.url);

            return {
              name: pokemon.name,
              id,
              types,
            };
          })
        );
        setPokemons(payloadPokemons);
      } catch (err) {
        Alert.alert("Algo de errado aconteceu..., tente mais tarde");
        console.log(err);
      }
    }
    getPokemons();
  }, []);

  async function getMoreInfo(url: string) {
    const response = await api.get(url);
    const { id, types } = response.data as Request;

    return { id, types };
  }

  return;
  <S.Container>
    {pokemons.map((item) => (
      <Text>{item.types}</Text>
    ))}
  </S.Container>;
}
