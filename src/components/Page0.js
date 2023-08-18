//Page0.js
import React, { useState, useEffect } from "react";
import axios from "axios"; // axios를 import
import {
  Container,
  CenteredImage,
  Title,
  RankingContainer_0,
  Verticalbar_0,
  RankingContent_0,
  Ranking_0,
  ImageLink,
  ImageLink_0,
  SmallImage_0,
  MainContent_0,
  Box_Divider_0,
  Box_0,
  Box_input_0,
  BoxContainer_0,
  BoxContent_input_0,
  BoxContent_0,
  BoxTitle_0,
  DividerImage_0,
  Button_0,
  Divider_0,
  DictContainer_0,
  DictContent_Main_0,
  DictContent_0,
  DictContent_MainWord_0,
  DictContent_Word_0,
  DictContent_ex_0,
  DictContent_mean_0,
  DictContent_sen_0,
  DictContent_type_0,
  DictContent_word_0,
  Downarrow_0,
  Downcontainer_0,
} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import mainButtonImage from "../mainImg/home_btn.png";
import translateButtonImage from "../mainImg/translate_btn.png";
import downarrowImage from "../mainImg/downarrow.png";
const Page0 = () => {
  const pageNumber = 0;

  const [inputContent, setInputContent] = useState(""); // 입력한 내용
  const [translatedContent, setTranslatedContent] = useState(""); // 번역 결과
  const [translatedContent_type, setTranslatedContent_type] = useState(""); // 번역 결과
  const [translatedContent_mean, setTranslatedContent_mean] = useState(""); // 번역 결과
  const [translatedContent_sen, setTranslatedContent_sen] = useState(""); // 번역 결과
  const [translatedContent_syn, setTranslatedContent_syn] = useState(""); // 번역 결과
  const [translatedContent_input, setTranslatedContent_input] = useState(""); // 번역 결과
  const [translatedValue, setTranslatedValue] = useState(null); // 번역 결과를 상태로 관

  const handleTranslateClick = () => {
    // 입력한 내용과 API 주소를 이용하여 서버에 요청 보내기
    axios
      .post(
        "http://52.79.219.32:8000/transmeme/apitest/",
        {
          content: inputContent, // 요청 매개변수로 입력한 내용 전달
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // 서버로부터 받은 번역 결과 설정
        const translated = response.data.word.subject;
        setTranslatedContent(response.data.word.standard);
        setTranslatedContent_type(response.data.word.generation);
        setTranslatedContent_mean(response.data.word.meaning);
        setTranslatedContent_sen(response.data.ex.example);
        setTranslatedContent_syn(response.data.syno.synonym);
        setTranslatedContent_input(response.data.word.subject);
        setTranslatedValue(translated);
      })
      .catch((error) => {
        console.error("Error during translation:", error);
      });
  };

  // //ranking
  const [rankings, setRankings] = useState([]);
  const [currentRankingIndex, setCurrentRankingIndex] = useState(0);
  useEffect(() => {
    // 서버에서 초기 랭킹 데이터를 받아와서 상태에 저장
    axios
      .post("http://52.79.219.32:8000/transmeme/apitest/")
      .then((response) => {
        const rankingSubjects = response.data.count.map((word) => word.subject);
        setRankings(rankingSubjects);
      })
      .catch((error) => {
        console.error("Error fetching initial rankings:", error);
      });
  }, []);

  useEffect(() => {
    if (translatedValue !== null) {
      const interval = setInterval(() => {
        setCurrentRankingIndex((prevIndex) =>
          prevIndex === rankings.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // 3초마다 순위 변경

      return () => {
        clearInterval(interval);
      };
    }
  }, [translatedValue, rankings]);

  return (
    <Container>
      <MainContent_0>
        <CenteredImage src={mainLogo} />
        <Title>트랜스밈</Title>
        {translatedValue !== null && (
          <RankingContainer_0>
            <Verticalbar_0 />
            <RankingContent_0>많이 찾는 번역</RankingContent_0>
            <Ranking_0>
              {`${currentRankingIndex + 1}위: ${rankings[currentRankingIndex]}`}
            </Ranking_0>
          </RankingContainer_0>
        )}
        <BoxContainer_0>
          <Box_input_0>
            <BoxTitle_0></BoxTitle_0>
            <Box_Divider_0 />
            <BoxContent_input_0
              type="text"
              value={inputContent}
              onChange={(event) => setInputContent(event.target.value)}
            />
            {/* <ImageLink_0 to="/page0"> */}
            <Button_0 onClick={handleTranslateClick}>번역하기</Button_0>
            {/* </ImageLink_0> */}
          </Box_input_0>
          <DividerImage_0 src={translateButtonImage} alt="분리 이미지" />
          <Box_0>
            <BoxTitle_0></BoxTitle_0>
            <Box_Divider_0 />
            <BoxContent_0>{translatedContent}</BoxContent_0>
          </Box_0>
        </BoxContainer_0>
      </MainContent_0>
      {translatedValue !== null && (
        <DictContainer_0>
          <DictContent_Main_0>
            <Downcontainer_0>
              <Downarrow_0 src={downarrowImage}></Downarrow_0>
              <Downarrow_0 src={downarrowImage}></Downarrow_0>
            </Downcontainer_0>

            <DictContent_MainWord_0>
              <DictContent_word_0>{translatedContent_input}</DictContent_word_0>
              <DictContent_type_0>{translatedContent_type}</DictContent_type_0>
            </DictContent_MainWord_0>
            <DictContent_mean_0>{translatedContent_mean}</DictContent_mean_0>
          </DictContent_Main_0>

          <DictContent_0>
            <DictContent_ex_0>
              예문
              <DictContent_sen_0>{translatedContent_sen}</DictContent_sen_0>
              {/* <DictContent_sen_0>{translatedContent_sen}</DictContent_sen_0> */}
            </DictContent_ex_0>
            <DictContent_ex_0>
              유사단어
              <DictContent_Word_0>
                <DictContent_word_0>{translatedContent_syn}</DictContent_word_0>
                <DictContent_type_0></DictContent_type_0>
              </DictContent_Word_0>
              <DictContent_Word_0>
                {/* <DictContent_word_0>{translatedContent_syn}</DictContent_word_0>
                <DictContent_type_0>(M)</DictContent_type_0> */}
              </DictContent_Word_0>
            </DictContent_ex_0>
          </DictContent_0>
        </DictContainer_0>
      )}

      <ImageLink to="/home">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
    </Container>
  );
};

export default Page0;
