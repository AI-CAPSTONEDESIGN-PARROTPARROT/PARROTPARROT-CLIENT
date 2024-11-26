import React from "react";
import styled from "styled-components";
const TodayWords = () => {
  return (
    <Container>
      <RecommendedWords>
        <WordsTitle>오늘의 추천 단어</WordsTitle>
        <WordList>
          {["밥", "호랑이", "개구리", "노래"].map((word) => (
            <WordItem key={word}>
              {word} <p>★★★</p>
            </WordItem>
          ))}
        </WordList>
      </RecommendedWords>
    </Container>
  );
};

export default TodayWords;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
`;

const RecommendedWords = styled.div`
  width: auto;
  max-width: 340px;
  background-color: #ffc107;
  border-radius: 15px;
  padding: 10px 0;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
`;

const WordsTitle = styled.div`
  color: white;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  font-family: "NanumSquareRound";
`;

const WordList = styled.div`
  font-family: "HakgyoansimNadeuriTTF-B";

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background-color: #fef3d6;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 70px;
`;

const WordItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  font-size: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  flex-direction: column;
  width: 72px;
  height: 53px;
  p {
    margin: 5px;
  }
`;
