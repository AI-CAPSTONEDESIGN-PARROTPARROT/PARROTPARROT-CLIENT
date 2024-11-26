import React from "react";
import styled from "styled-components";
import character from "../../assets/images/parrot.svg";
import book from "../../assets/images/book-open.svg";
import film from "../../assets/images/film.svg";
import hanger from "../../assets/images/hanger.svg";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  return (
    <Container>
      <TopSection>
        <StatusWrapper>
          {" "}
          <Hanger src={hanger} />
          <LearningStatus>
            <StatusText>
              <Num>10</Num> 개 학습 중
            </StatusText>
          </LearningStatus>
          <ParrotImage>
            <img src={character} alt="Parrot" />
          </ParrotImage>
        </StatusWrapper>
        <TalkingTextWrapper>
          <NameLabel>패럿이</NameLabel>
          <TalkingText>
            안녕! 그동안 잘 지냈어?
            <br /> 나를 누르고 나에게 말을 걸어줘 !!
          </TalkingText>
        </TalkingTextWrapper>
        <ButtonContainer>
          <ActionButton>
            {" "}
            오늘의 영상
            <ActionIcon>
              {" "}
              <img src={film} alt="film Icon" />
            </ActionIcon>
          </ActionButton>
          <ActionButton to="/wordList">
            학습하기
            <ActionIcon>
              <img src={book} alt="book Icon" />
            </ActionIcon>
          </ActionButton>
        </ButtonContainer>
      </TopSection>
    </Container>
  );
};

export default Main;

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-family: "NanumSquareRound";
`;

const TopSection = styled.div`
  background-color: #fef3d6;
  border-radius: 200px 200px 15px 15px;
  width: 100%;
  max-width: 340px;
  height: 508px;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const Hanger = styled.img`
  width: 114px;
`;
const StatusWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
`;

const LearningStatus = styled.div`
  display: flex;
  height: 48px;
  width: 174px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  font-size: 1em;
  margin: 0;
`;

const StatusText = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  color: #000;
  font-family: "HakgyoansimNadeuriTTF-B";
`;
const Num = styled.p`
  margin: 0px 3px 0px 0px;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  color: #f28e4a;
`;

const ParrotImage = styled.div`
  img {
    width: 252px;
    height: 252px;
  }
`;
const TalkingText = styled.div`
  font-size: 16px;
  display: flex;
  width: 313px;
  height: 55px;
  flex-direction: column;
  justify-content: center;
  color: #585858;
  text-align: center;
  background-color: white;
  border-radius: 10px;
`;
const TalkingTextWrapper = styled.div`
  margin: 10px;
  position: absolute;
  bottom: 67px;
`;
const NameLabel = styled.div`
  font-size: 12px;
  border-radius: 10px 10px 0px 0px;
  background-color: #c1c2cd;
  color: white;
  width: 78px;
  height: auto;
  padding: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
  font-family: "NanumSquareRound";
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
`;

const ActionButton = styled.button`
  background-color: #febf1a;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  font-family: "NanumSquareRound";
  display: flex;
  justify-content: start;
  align-items: center;
  width: 150px;
  height: 45px;
  font-weight: 800;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ActionIcon = styled.span`
  position: absolute;
  right: 10px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
