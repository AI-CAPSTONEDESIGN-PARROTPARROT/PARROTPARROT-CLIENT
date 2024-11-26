import React from 'react';
import styled from 'styled-components';

const Success = () => {
  return (
    <Container>
      <Header>
        {/* <BackButton><FaArrowLeft /></BackButton> */}
        <Title>밥</Title>
      </Header>
      
      <Content>
        <Message>축하해요!<br />“밥” 발음에 성공했어요~!</Message>
        <CelebrationImage src="parrot-celebration.png" alt="Celebrating Parrot" />
        
        <ButtonGroup>
          <ActionButton>학습 완료하기</ActionButton>
          <ActionButton>학습 더 하기</ActionButton>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default Success;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family:Pretendard;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const Title = styled.h2`
  flex-grow: 1;
  text-align: center;
  font-size: 1.2em;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Message = styled.p`
  font-size: 1.2em;
  color: #333;
  margin: 10px 0;
  line-height: 1.4;
`;

const CelebrationImage = styled.img`
  width: 150px;
  height: auto;
  margin: 20px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
`;

const ActionButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  width: 100%;
`;
