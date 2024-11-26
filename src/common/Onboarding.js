import React from "react";
import styled, { keyframes } from "styled-components";

const Onboarding = () => {
  return (
    <OnboardingContainer>
      <LogoText>따라앵</LogoText>
      <Subtitle>따라하며 익히는 즐거운 언어 놀이</Subtitle>
    </OnboardingContainer>
  );
};

export default Onboarding;

// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffc107;
  color: white;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;

const LogoText = styled.h1`
  font-family: "HakgyoansimNadeuriTTF-B", sans-serif;
  font-size: 3em;
  margin: 0;
  position: relative;
  display: inline-block;
`;

const Subtitle = styled.p`
  font-family: "NanumSquareRound", sans-serif;
  font-size: 1em;
  margin-top: 10px;
  opacity: 0.9;
`;
