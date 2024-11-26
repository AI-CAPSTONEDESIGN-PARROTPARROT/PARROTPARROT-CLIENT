import React from "react";
import Menu from "../common/menu";
import character from "../assets/images/parrottop.svg";
import styled from "styled-components";
import WeeklyGraph from "../components/LearningStatistics/WeeklyGraph";
import CompleteWord from "../components/LearningStatistics/CompleteWord";
const LearningStatistics = () => {
  const weeklyWords = [
    { word: "밥", score: 40, color: "#fca103" },
    { word: "방", score: 88, color: "#2eac64" },
    { word: "자", score: 52, color: "#fca103" },
    { word: "나", score: 70, color: "#2eac64" },
  ];

  return (
    <Container>
      <Header>
        {/* <BackButton><FaArrowLeft /></BackButton> */}
        <Title>패럿이님의 발음 리포트</Title>
      </Header>

      <StatsSummary>
        <Stat>
          <strong>N일째</strong> <br />
          연속 학습 중
        </Stat>
        <Stat>
          <strong>N개 단어 </strong>
          <br />
          학습 완료
        </Stat>
        <Stat>
          <strong>총 N일</strong> <br />
          누적 학습
        </Stat>{" "}
        <ParrotImage src={character} alt="Parrot" />
      </StatsSummary>

      <WeeklyGraph />
      <CompleteWord />
      <Menu />
    </Container>
  );
};

export default LearningStatistics;

const Container = styled.div`
  padding: 20px;
  background-color: #fef3d6;
  font-family: "NanumSquareRound";
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.2em;
`;

const ParrotImage = styled.img`
  width: 126px;
  height: 80px;
`;

const StatsSummary = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0;
  background-color: #fff;
  padding: 0px 10px;
  border-radius: 10px;
  width: 341px;
  height: 80px;
`;

const Stat = styled.div`
  font-size: 12px;
  color: #333;
  text-align: center;
  line-height: 1.4;
  margin: 6px;

  strong {
    font-size: 17px;
    font-weight: 800;
  }
`;
