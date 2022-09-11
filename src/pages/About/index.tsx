import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Alert, ScrollView, Text } from "react-native";
import * as S from "./styles";
import api from "../../services/api";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import circle from "../../assets/img/circle.png";
import { FadeAnimation } from "../../components/FadeAnimation";

import dots from "../../assets/img/dots.png";

type RouteParams = {
  pokemonId: number;
};

type Stats = {
  base_stat: 62;
  stat: {
    name: string;
  };
};

type Abilities = {
  ability: {
    name: string;
  };
};

export type TypeName =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "normal"
  | "bug"
  | "flying"
  | "eletric"
  | "ground";

type PokemonType = {
  type: {
    name: TypeName;
  };
};

type PokemonProps = {
  id: number;
  name: string;
  stats: Stats[];
  abilities: Abilities[];
  color: string;
  types: PokemonType[];
};

export function About() {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const { colors } = useTheme();

  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);
        const { stats, abilities, id, name, types } = response.data;

        const currentType = types[0].type.name as TypeName;
        const color = colors.backgroundCard[currentType];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
        });
      } catch (err) {
        Alert.alert("Aconteceu algum erro");
      } finally {
        setLoad(false);
      }
    }
    getPokemonDetail();
  }, []);

  return (
    <>
      {load ? (
        <>
          <Text style={{ marginTop: 200 }}>Carregando</Text>
        </>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
          <S.Header type={pokemon.types[0].type.name}>
            <S.BackButton>
              <Feather name="chevron-left" size={24} color="#FFF" />
            </S.BackButton>
            <S.ContentImage>
              <S.CircleImage source={circle} />
              <FadeAnimation>
                <S.PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                  }}
                />
              </FadeAnimation>
            </S.ContentImage>

            <S.Content>
              <S.PokemonId>#{pokemon.id}</S.PokemonId>
              <S.PokemonName>{pokemon.name}</S.PokemonName>

              <S.PokemonTypeContainer>
                {pokemon.types.map(({ type }) => (
                  <S.PokemonType type={type.name} key={type.name}>
                    <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
                  </S.PokemonType>
                ))}
              </S.PokemonTypeContainer>
            </S.Content>
            <S.DotsImage source={dots} />
          </S.Header>

          <S.Container>
            <S.Title type={pokemon.types[0].type.name}>Base Stats</S.Title>
          </S.Container>
        </ScrollView>
      )}
    </>
  );
}
