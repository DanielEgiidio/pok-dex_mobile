import React from "react";
import AnimatedLottieView from "lottie-react-native";

import * as S from "./styles";

import pokemonAnimation from "./pokemon.json";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";

export function Welcome() {
  const AnimatedLottieView = require("lottie-react-native");

  const { navigate } = useNavigation();

  function handleNavigateToHome() {
    navigate("Home");
  }

  return (
    <S.Container>
      <S.Content>
        <S.WrapperIcon>
          <S.IconContent>
            <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
          </S.IconContent>
        </S.WrapperIcon>

        <S.Title>Bem Vindo</S.Title>
        <S.SubTitle>Encontre todos os pokémons em um só lugar</S.SubTitle>
      </S.Content>

      <S.Bottom>
        <Button title="Entrar" onPress={handleNavigateToHome} />
      </S.Bottom>
    </S.Container>
  );
}
