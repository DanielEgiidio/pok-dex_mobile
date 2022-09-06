import React from "react";
import AnimatedLottieView from "lottie-react-native";

import * as S from "./styles";

import pokemonAnimation from "./pokemon.json";

export function Welcome() {
  const AnimatedLottieView = require("lottie-react-native");

  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
        </S.WrapperAnimation>
      </S.Content>
      <S.Footer>
        <S.Title>Bem Vindo</S.Title>
        <S.SubTitle>Encontre todos os pokémons em um só lugar</S.SubTitle>
      </S.Footer>
    </S.Container>
  );
}
