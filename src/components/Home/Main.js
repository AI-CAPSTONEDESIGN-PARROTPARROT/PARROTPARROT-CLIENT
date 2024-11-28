import React, { useState, useRef } from "react";
import styled from "styled-components";
import character from "../../assets/images/parrot.svg";
import book from "../../assets/images/book-open.svg";
import film from "../../assets/images/film.svg";
import hanger from "../../assets/images/hanger.svg";
import { Link, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleParrotClick = async () => {
    if (isRecording || isPlaying) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);

        // 오디오 자동 재생
        const audio = new Audio(audioUrl);
        audio.playbackRate = 2.0;
        audio.onplay = () => {
          setIsPlaying(true); // 재생 상태 설정
        };
        audio.onended = () => {
          setIsPlaying(false); // 재생 상태 해제
        };
        audio.play();
      };

      mediaRecorder.start();
      setIsRecording(true);

      // 7초 후 녹음 종료
      setTimeout(() => {
        mediaRecorder.stop();
        setIsRecording(false);
      }, 7000);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  return (
    <Container>
      <TopSection>
        <StatusWrapper>
          <Hanger src={hanger} />
          <LearningStatus>
            <StatusText>
              <Num>10</Num> 개 학습 중
            </StatusText>
          </LearningStatus>
          <ParrotImage onClick={handleParrotClick}>
            <img src={character} alt="Parrot" />
          </ParrotImage>
        </StatusWrapper>
        <TalkingTextWrapper>
          <NameLabel>패럿이</NameLabel>
          <TalkingText>
            {isRecording
              ? "김민지님의 말 듣는중.."
              : isPlaying
              ? "패럿이가 말하는 중.."
              : "안녕! 나를 누르고 나에게 말을 걸어줘 !!"}
          </TalkingText>
        </TalkingTextWrapper>
        <ButtonContainer>
          <ActionButton>
            오늘의 영상
            <ActionIcon>
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
