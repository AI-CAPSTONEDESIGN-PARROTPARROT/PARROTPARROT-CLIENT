import React from "react";
import styled from "styled-components";
import Menu from "../common/menu";

import Main from "../components/Home/Main";
import TodayWords from "../components/Home/TodayWords";

const Home = () => {
  return (
    <Container>
      <Header>
        <MenuButton>☰</MenuButton>
        <Title>김민지</Title>
      </Header>
      <Content>
        <Main />
        <TodayWords />
      </Content>{" "}
      <Menu />
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  font-family: "HakgyoansimNadeuriTTF-B";
  height: 100vh;
  padding-bottom: 140px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 15px;
  background-color: #febf1a;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #ffffff;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
  margin: 0 0 0 16px;
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
