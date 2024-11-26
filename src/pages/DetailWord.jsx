import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/images/ricebowl.svg";
import arrowR from "../assets/images/rightarrow.png";
import arrowL from "../assets/images/leftarrow.svg";

const DetailWord = () => {
  const [progress, setProgress] = useState(0);
  const [recording, setRecording] = useState(false);
  const [message, setMessage] = useState("");

  const handleRecord = () => {
    setRecording(!recording);
    if (!recording) {
      // Simulate recording and updating progress
      setTimeout(() => {
        setProgress(28);
        setMessage("다시 한번 시도해볼까요?");
      }, 2000);
    } else {
      setMessage("");
    }
  };

  return (
    <Container>
      <Header>
        <BackButton>←</BackButton>
        <Title>밥</Title>
      </Header>
      <Content>
        <ImageWrapper>
          <Arrow src={arrowL} />
          <FoodImage src={img} alt="Rice Bowl" />
          <Arrow src={arrowR} />
        </ImageWrapper>
        <ProgressContainer>
          <ProgressBar progress={progress} />
          <ProgressText>발음 점수: {progress}%</ProgressText>
        </ProgressContainer>
        <RecordingArea>
          {recording ? (
            <Waveform>🎤</Waveform>
          ) : (
            <PromptText>소리를 듣고 따라해볼까요?</PromptText>
          )}
          <RetryMessage>{message}</RetryMessage>
        </RecordingArea>
        <Button onClick={handleRecord}>
          {recording ? <StopIcon>■</StopIcon> : <RecordIcon>●</RecordIcon>}
        </Button>
      </Content>
    </Container>
  );
};

export default DetailWord;

const Container = styled.div`
  font-family: "NanumSquareRound";
  background-color: #fff7e6;
  padding: 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  background-color: #ffc107;
  color: #fff;
  font-size: 18px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 28px;
  display: flex;
  color: #fff;
  text-align: center;
  font-family: "HakgyoansimNadeuriTTF-B";
  margin: 0px 0px 0px 130px;
  font-weight: 600;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  width: 341px;
  height: 341px;
  border-radius: 10px;
  background: #fff;
`;

const Arrow = styled.img`
  font-size: 24px;
  margin: 0 16px;
  cursor: pointer;
`;

const FoodImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  margin: 20px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  margin: 16px 0;
  text-align: center;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  height: 8px;
  background-color: #ffc107;
  border-radius: 4px;
  transition: width 0.5s ease-in-out;
`;

const ProgressText = styled.p`
  margin: 8px 0;
  font-size: 14px;
`;

const RecordingArea = styled.div`
  margin-top: 16px;
  text-align: center;
  display: flex;
  width: 341px;
  height: 144px;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-radius: 10px;
`;

const PromptText = styled.p`
  font-size: 16px;
  color: #666;
  color: #dbdbdb;
`;

const RetryMessage = styled.p`
  margin-top: 8px;
  color: #e74c3c;
  font-size: 14px;
`;

const Waveform = styled.div`
  font-size: 48px;
  color: #ffc107;
`;

const Button = styled.button`
  background-color: #ffc107;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;
`;

const RecordIcon = styled.span`
  font-size: 30px;
`;

const StopIcon = styled.span`
  font-size: 30px;
`;
