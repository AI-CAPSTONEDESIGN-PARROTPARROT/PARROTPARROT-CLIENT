import React from "react";
import styled from "styled-components";
//import { FaSearch } from 'react-icons/fa';
import Menu from "../common/menu";
import Header from "../common/Header";
const WordList = () => {
  const words = [
    { text: "야", date: "2024.10.27", progress: 80 },
    { text: "바", date: "2024.10.23", progress: 75 },
    { text: "나", date: "2024.10.23", progress: 50 },
    { text: "네", date: "2024.10.22", progress: 30 },
    { text: "까까", date: "2024.10.22", progress: 50 },
    { text: "가", date: "2024.10.22", progress: 10 },
    { text: "아니", date: "2024.10.22", progress: 30 },
    { text: "좋아", date: "2024.10.22", progress: 10 },
    { text: "조", date: "2024.10.22", progress: 70 },
    { text: "밥", date: "2024.10.22", progress: 90 },
  ];

  return (
    <WordContainer>
      <Header />
      <SearchWrapper>
        <SearchBar>
          {/* <FaSearch /> */}
          <input type="text" placeholder="연습할 단어를 입력하세요." />
        </SearchBar>
        <SortButton>최근 학습순 ▼</SortButton>
      </SearchWrapper>
      <WordGrid>
        {words.map((word, index) => (
          <WordCard key={index}>
            <WordText>{word.text}</WordText> <Rating>★★★</Rating>
            <ProgressBar>
              <Progress
                style={{ width: `${word.progress}%` }}
                progress={word.progress}
              />
            </ProgressBar>
            <LastStudied>마지막 학습일: {word.date || "-"}</LastStudied>
          </WordCard>
        ))}
      </WordGrid>
      <Menu />
    </WordContainer>
  );
};

export default WordList;
const WordContainer = styled.div`
  background-color: #fef3d6;
  margin: 0;
  font-family: "NanumSquareRound";
  padding-bottom: 120px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 16px auto 0px;
  max-width: 341px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 341px;
  height: 39px;

  input {
    border: none;
    outline: none;
    background: none;
    margin-left: 8px;
    width: 100%;
    font-size: 14px;
    color: #666;
    font-family: "NanumSquareRound";
  }
`;

const SortButton = styled.button`
  background-color: #eeac00;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  width: 108px;
  height: 24px;
  text-align: center;
  font-family: "NanumSquareRound";
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  margin: 10px 20px;
`;

const WordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 16px;
  max-width: 350px;
  margin: 0 auto;
`;

const WordCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 6px;
  text-align: center;
  width: 160px;
  height: auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const WordText = styled.div`
  font-family: "HakgyoansimNadeuriTTF-B";
  font-size: 28px;
  font-weight: bold;
  margin: 5px auto 8px;
  color: #333;
`;

const Rating = styled.span`
  font-size: 14px;
  color: #f39c12;
  position: absolute;
  top: 7px;
  right: 10px;
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  border-radius: 6px;
  height: 8px;
  overflow: hidden;
  margin: 10px 0;
`;

const Progress = styled.div`
  background-color: ${(props) => (props.progress < 70 ? "#FFA600" : "#03CA5B")};
  height: 100%;
  width: ${(props) => props.progress}%;
  border-radius: 6px;
`;

const LastStudied = styled.div`
  font-size: 8px;
  color: #000;
  font-family: "NanumSquareRound";
  text-align: start;
`;
