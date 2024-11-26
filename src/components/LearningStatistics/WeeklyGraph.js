import React from "react";
import styled from "styled-components";

const WeeklyGraph = () => {
  return (
    <Container>
      <WeeklyReport>
        <Date>10월 1주차</Date>
        <BarChart>
          {["월", "화", "수", "목", "금", "토", "일"].map((day, index) => (
            <Bar key={index}>
              <BarHeight style={{ height: `${index * 15 + 20}px` }} />
              <DayLabel>{day}</DayLabel>
            </Bar>
          ))}
        </BarChart>
      </WeeklyReport>
    </Container>
  );
};

export default WeeklyGraph;

const Container = styled.div`
  font-family: "NanumSquareRound";
  width: 341px;
  height: 200px;
  background: #fef3d6;
`;

const WeeklyReport = styled.div`
  margin: 0;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
`;

const Date = styled.div`
  background-color: #febf1a;
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  font-family: "NanumSquareRound";
  color: #fff;
  width: 341px;
  height: 36.373px;
  border-radius: 10px 10px 0px 0px;
`;

const BarChart = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: flex-end;
  border-radius: 0px 0px 10px 10px;
  font-family: "NanumSquareRound";
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarHeight = styled.div`
  width: 24px;
  background-color: #c1c2cd;
  border-radius: 5px;
`;

const DayLabel = styled.span`
  font-size: 12px;
  margin-top: 8px;
`;
