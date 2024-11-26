import React from "react";
import styled from "styled-components";

const WeeklyGraph = () => {
  return (
    <Container>
      <WeeklyReport>
        <h3>10월 1주차</h3>
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
  padding: 20px;
  font-family: "NanumSquareRound";
`;

const WeeklyReport = styled.div`
  margin: 20px 0;
  text-align: center;
  background-color: #fff;
  h3 {
    background-color: #febf1a;
  }
`;

const Subtitle = styled.h3`
  font-size: 1em;
  margin-bottom: 10px;
`;

const BarChart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: flex-end;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarHeight = styled.div`
  width: 24px;
  background-color: #333;
  border-radius: 5px;
`;

const DayLabel = styled.span`
  font-size: 12px;
  margin-top: 8px;
`;
