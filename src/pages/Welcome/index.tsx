import React from "react";
import AnimatedLottieView from "lottie-react-native";

import * as S from "./styles";

import pokemonAnimation from "./pokemon.json";

export function Welcome() {
  const AnimatedLottieView = require("lottie-react-native");

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
        <S.Button>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
        a
      </S.Bottom>
    </S.Container>
  );
}
