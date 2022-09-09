import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border-radius: 70px;
    background: ${theme.colors.boxType.water};
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
  `}
`;
