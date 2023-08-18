import React from "react";
import { Link } from "react-router-dom";
import {
  CenteredImage_main,
  Container,
  Downarrow_main,
  StartLink_main,
  Title_main,
} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import downarrowImage from "../mainImg/downarrow.png";

const Main = () => {
  return (
    <Container>
      <CenteredImage_main src={mainLogo} />
      <Title_main>트랜스밈</Title_main>
      <Downarrow_main src={downarrowImage} />
      <Downarrow_main src={downarrowImage} />
      <StartLink_main to="/home">시작하기</StartLink_main>
    </Container>
  );
};
export default Main;
