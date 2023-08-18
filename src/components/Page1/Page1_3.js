// Page1.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  fontFace,
  Container,
  CenteredImage,
  Title,
  ImageLink,
  ImageLink_1,
  SmallImage_0,
  ColorTitle_1,
  Container_1,
  Title_1,
  Question_1,
  ButtonContainer_1,
  AgreeButtonContainer_1,
  DisAgreeButtonContainer_1,
  AgreeButton_1,
  DisagreeButton_1,
  AgreeContent_1,
  DisagreeContent_1,
  NextButton_1,
} from "../TitleStyle";
import mainButtonImage from "../../mainImg/home_btn.png";
import mainLogo from "../../mainImg/mainlogo.png";
import o_btn from "../../mainImg/o_btn.png";
import x_btn from "../../mainImg/x_btn.png";
import styled from "styled-components";

const Page1_3 = () => {
  const pageNumber = 1; // 페이지 번호를 변수 로 설정
  return (
    <Container>
      <Container_1>
        <Title_1>
          0<ColorTitle_1>3</ColorTitle_1>
        </Title_1>
        <Question_1>
          오전 9시 정시 출근 괜찮다 VS 최소 10분 ~ 30분 전에는 출근해야한다.
        </Question_1>
        <ButtonContainer_1>
          <AgreeButtonContainer_1>
            <AgreeButton_1></AgreeButton_1>
            <AgreeContent_1>동의</AgreeContent_1>
          </AgreeButtonContainer_1>
          <DisAgreeButtonContainer_1>
            <DisagreeButton_1></DisagreeButton_1>
            <DisagreeContent_1>비동의</DisagreeContent_1>
          </DisAgreeButtonContainer_1>
        </ButtonContainer_1>
      </Container_1>
      <ImageLink_1 to="/page1_result">
        <NextButton_1>다음</NextButton_1>
      </ImageLink_1>
    </Container>
  );
};

export default Page1_3;
