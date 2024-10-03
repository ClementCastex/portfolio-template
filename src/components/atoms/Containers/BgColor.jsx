import React from "react";
import styled from "styled-components";

const StyledBgColor = styled.div`
  background: ${({ color, theme }) =>
    color ||
    `linear-gradient(-45deg, #402162, ${theme.colors.backgroundLight}, #402162)`};
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const BgColor = ({ color, children }) => {
  return <StyledBgColor color={color}>{children}</StyledBgColor>;
};

export default BgColor;
