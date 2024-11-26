import React from "react";
import styled from "styled-components";
const CompleteWord = () => {
  return (
    <div>
      <WordList>
        <Title>주간 학습 단어</Title>
        <WordItem>
          <WordText>밥</WordText>
          <ProgressContainer>
            <ProgressBar width="40%" />
          </ProgressContainer>
          <PlayButton>▶</PlayButton>
        </WordItem>
        <WordItem>
          <WordText>바</WordText>
          <ProgressContainer>
            <ProgressBar width="90%" />
          </ProgressContainer>
          <PlayButton>▶</PlayButton>
        </WordItem>
        <WordItem>
          <WordText>까까</WordText>
          <ProgressContainer>
            <ProgressBar width="50%" />
          </ProgressContainer>
          <PlayButton>▶</PlayButton>
        </WordItem>
        <WordItem>
          <WordText>네</WordText>
          <ProgressContainer>
            <ProgressBar width="70%" />
          </ProgressContainer>
          <PlayButton>▶</PlayButton>
        </WordItem>
      </WordList>
    </div>
  );
};

export default CompleteWord;
const WordList = styled.div`
  margin-top: 16px;
  font-family: "NanumSquareRound";
`;
const Title = styled.div`
  margin: 18px;
  color: #001c2c;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
`;

const WordItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
`;

const WordText = styled.div`
  flex: 1;
`;

const ProgressContainer = styled.div`
  flex: 3;
  background-color: #e0e0e0;
  border-radius: 4px;
  height: 8px;
  margin: 0 8px;
`;

const ProgressBar = styled.div`
  background-color: #ffc107;
  width: ${(props) => props.width};
  height: 100%;
  border-radius: 4px;
`;

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
