import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./Home.css";
import {Container,CenteredImage, Page1Container,TransferLogo
,PageLink,TransferIC,PageContainer,Section, PagesIC, PageitContainer,Rectangle25
,ExamIcon,ExamRectangle,ExamRectangle2,MZTest, MZTestTitle, Container1,MZPower
,Container2} from "./TitleStyle.js";
import mainLogo from "../mainImg/title_en.png";
import transferLogo from "../mainImg/title_kr.png";
import transferICImage from "../mainImg/transfer_ic.png";
import mztestIC from "../mainImg/mztest_btn.png";
import transmemeIC from "../mainImg/transmeme_btn.png";
import quizIC from "../mainImg/quiz_btn.png";
import dictIC from "../mainImg/dict_btn.png";

const Home = () => {
  return (
    <Container>
      <CenteredImage src={mainLogo} />
      
      <PageLink to="/page0">
            <Container>
            <TransferIC src={transmemeIC} alt="Transfer IC" />
          </Container>
          </PageLink>

      <PageContainer>
        
        <Section>
          <PageLink to="/page1_start">
            <Container>
            <TransferIC src={mztestIC} alt="Transfer IC" style={{ margin: '30px' }} />
          </Container>
          </PageLink>
        </Section>
      

        <Section>
          <PageLink to="/page2">
            <Container>
            <TransferIC src={quizIC} alt="Transfer IC" />
          </Container>
          </PageLink>
        </Section>
      
        <Section>
          <PageLink to="/page3">
            <Container>
            <TransferIC src={dictIC} alt="Transfer IC" style={{ margin: '35px' }}/>
          </Container>
          </PageLink>
        </Section>

      </PageContainer>
    </Container>
  );
};

export default Home;
