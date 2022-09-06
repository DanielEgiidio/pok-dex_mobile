import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Content = styled.View`
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const WrapperAnimation = styled.View`
  width: 300px;
  height: 300px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: 40px;
    margin-top: 20px; ;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: 14px;
    margin-top: 10px;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    background-color: ${theme.colors.backgroundCard.water};
  `}
`;
