import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import api from "../../services/api";

import pokeballImage from "../../assets/img/pokedex.png";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export interface Request {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { navigate } = useNavigation();

  function handleNavigation(pokemonId: number) {
    navigate("About", {
      pokemonId,
    });
  }

  useEffect(() => {
    async function getPokemons() {
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
      setPokemons(payloadPokemons as Pokemon[]);
    }
    getPokemons();
  }, []);

  async function getMoreInfo(url: string) {
    const response = await api.get(url);
    const { id, types } = response.data;

    return { id, types };
  }

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.ContainerImage>
              <S.Header source={pokeballImage} />
            </S.ContainerImage>
            <S.Title>Pokédex</S.Title>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={({ item: pokemon }) => (
          <Card
            data={pokemon}
            onPress={() => {
              handleNavigation(pokemon.id);
            }}
          />
        )}
      />
    </S.Container>
  );
}
