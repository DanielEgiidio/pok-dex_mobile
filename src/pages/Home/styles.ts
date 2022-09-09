import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
    padding: 20px;
    position: relative;
  `}
`;

export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    width: 220px;
    margin-top: 45px;
    height: 180px;
    opacity: 0.6;
    transform: rotate(10deg);
  `}
`;

export const ContainerImage = styled.View`
  width: 200px;
  align-items: center;
  margin-left: 80px;
  height: 200px;
  margin-bottom: 100px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    margin-top: -70px;
  `}
`;
