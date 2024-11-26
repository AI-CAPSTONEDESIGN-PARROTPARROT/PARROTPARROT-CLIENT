import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderWrapper>
      <Title>목표 단어</Title>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #febf1a;
`;
const Title = styled.h2`
  color: white;
  font-family: NanumSquareRound;
  font-size: 20px;
  letter-spacing: -0.39px;
  font-weight: 800;
`;
