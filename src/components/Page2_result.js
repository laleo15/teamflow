import React from "react";
import {
  Container,
  CenteredImage,
  Title,
  Number,
  QuizBox,
  BlackText,
  BalanceContainer,
  LeftButtonContainer,
  RightButtonContainer,
  VS,
  VSContainer,
  Divider_0,
  NotSelectContainer,
  SelectContainer,
  ImageContainer,
  MainContainer,
  ResultText,
  ResultContainer,
  ShareImageContainer,
  GoHomeBox,
  ProblemContainer,
  BalanceResultContainer
} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import o_ic from "../mainImg/o_ic.png";
import x_ic from "../mainImg/x_ic.png";
import share_btn from "../mainImg/share_btn.png";
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100vw;
    text-align: center;
`;
const Page2_result = () => {
  const location = useLocation();
  const { results, ten_quiz, answerLocations } = location.state;
  const totalScore = results.reduce((score, isCorrect) => (isCorrect ? score + 1 : score), 0);

  return (
    <ProblemContainer>
      <CenteredImage src={mainLogo} />
      <Title>신조어테스트</Title>
      {ten_quiz.map((quiz, index) => (
        <StyledDiv key={index}>
          <Number>
            <span>0</span>{index + 1}
          </Number>
          <QuizBox>
            <BlackText>{quiz.subject}</BlackText>
          </QuizBox>
          <BalanceResultContainer>
          <BalanceContainer>
            <MainContainer>
              <SelectContainer>{answerLocations[index] ? quiz.answer : quiz.wrong}</SelectContainer>
              <ImageContainer>
                <img src={!results[index] ? o_ic : x_ic} alt="Image" />
              </ImageContainer>
            </MainContainer>
            <VSContainer>
              <VS>VS</VS>
            </VSContainer>
            <MainContainer>
              <SelectContainer>
                {answerLocations[index] ? quiz.wrong : quiz.answer}
              </SelectContainer>
              <ImageContainer>
                <img src={results[index] ? o_ic : x_ic} alt="Image" />
              </ImageContainer>
            </MainContainer>
          </BalanceContainer></BalanceResultContainer>
          <Divider_0></Divider_0>
        </StyledDiv>
      ))}
      <ResultContainer>
        <ResultText>내 점수는: {totalScore}점</ResultText>
      </ResultContainer>
      <GoHomeBox to="/home">
        <BlackText>홈으로</BlackText>
      </GoHomeBox>
    </ProblemContainer>
  );
};

export default Page2_result;