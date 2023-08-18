//page1_result
// Page1.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  fontFace,
  Container,
  Container_1,
  Container_1_result,
  CenteredImage_1_result,
  Background1_1_result,
  Comment_nickname,
  Comment_content,
  Title_1_start,
  WhiteBox_1_result,
  Title_1_result,
  Background_1_result,
  RotateLine_1_result,
  TimeLabel_1_result,
  CommentBubble_1_result,
  NameLabel_1_result,
  TimeLine_1_result_1,
  TimeLine_1_result_2,
  ImageLink,
  SmallImage_0,
  MainContent_0,
  Typecontent_1_result,
  Type_1_result,
  TypeImage_1_result,
  ShareButton_1_result,
  MainContainer_1,
  FeatureContainer_1,
  Commentbutton_1,
  Feature_1,
  FeatureContent_1,
  ColorTitle_1,
  InputContainer_1_start,
  InputField_1_start,
  InputLabel_1_start,
  InputLabelContainer_1_start,
  StartLink_1,
  Divider_0,
  CommentContainer_1,
  Comment_time,
  CommentTitle_1,
  CommentBox_1,
  Commentlist_date,
  Commentlistcontainer,
  Verticalbar_1,
  Verticalbar_comment,
  DataContainer_1,
  DataTitle_1,
  ImageLink_1,
  NextButton_1,
  DateLabel_1_result,
  StatisticContainer1_1_result,
  StatisticContainer_1_result,
  StatisticTitle_1_result,
  Line_1_result,
  AbsoluteImage_1_result,
  ColoredCircleBackground_1_result,
  ColoredCircleForeground_1_result,
  ColoredCirclesWrapper_1_result,
  PercentageLabel_1_result,
  NumberSpan_1_result,
  GenerationLabel_1_result,
  InputField_1_result,
  CommentInfoContainer,
} from "../TitleStyle";
import mainButtonImage from "../../mainImg/home_btn.png";
import mainLogo from "../../mainImg/mainlogo.png";
import sharebutton from "../../mainImg/share_btn.png";
import o_btn from "../../mainImg/o_btn.png";
import o_btn_remove from "../../mainImg/o_btn_remove.png";
import x_btn from "../../mainImg/x_btn.png";
import ggondae from "../../mainImg/ggondae_ic.png";
import kingman from "../../mainImg/kingman_ic.png";

const Page1_result = () => {
  const storedNickname = localStorage.getItem("nickname");
  const storedGeneration = localStorage.getItem("generation");

  const [grade, setGrade] = useState(null);
  const [fOne, setFOne] = useState(null);
  const [fTwo, setFTwo] = useState(null);
  const [fThree, setFThree] = useState(null);
  const location = useLocation();
  const resultData = location.state;
  const [questionInfos, setQuestionInfos] = useState([]);

  const [inputComment, setInputComment] = useState("");
  const [CommentList, setCommentList] = useState([]);
  const [dateList, setdateList] = useState([]);

  const handleCommentClick = (event) => {
    // 입력한 내용과 API 주소를 이용하여 서버에 요청 보내기
    axios
      .post(
        "http://52.79.219.32:8000/oldmantest/test/update_comment",
        {
          // 요청 매개변수로 입력한 내용 전달
          nickname: storedNickname,
          generation: storedGeneration,
          comment: inputComment,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // 서버로부터 받은 comment 결과 설정
        setdateList(response.data.date_list);
        const Clist = response.data.CommentList;
        setCommentList(
          Clist.map((cinfo) => ({
            nickname: cinfo.nickname,
            content: cinfo.content,
            time: cinfo.time,
            date: cinfo.date,
          }))
        );
      })
      .catch((error) => {
        console.error("Error during translation:", error);
      });
  };

  useEffect(() => {
    if (resultData) {
      axios
        .post("http://52.79.219.32:8000/oldmantest/test", resultData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const receivedGrade = response.data.grade.grade;
          const receivedFOne = response.data.grade.Fone;
          const receivedFTwo = response.data.grade.Ftwo;
          const receivedFThree = response.data.grade.Fthird;
          setGrade(receivedGrade);
          setFOne(receivedFOne);
          setFTwo(receivedFTwo);
          setFThree(receivedFThree);
          console.log("Grade:", receivedGrade);
          console.log("FOne:", receivedFOne);
          console.log("FTwo:", receivedFTwo);
          console.log("FThree:", receivedFThree);

          const questionList = response.data.QuestionList;
          console.log("Statistic:", questionList);
          setQuestionInfos(
            questionList.map((info) => ({
              id: info.question_info.id,
              Plgx: info.question_info.Plgx,
              Plgm: info.question_info.Plgm,
              Plgz: info.question_info.Plgz,
              Prgx: info.question_info.Prgx,
              Prgm: info.question_info.Prgm,
              Prgz: info.question_info.Prgz,
            }))
          );

          setdateList(response.data.date_list);
          const Clist = response.data.CommentList;
          setCommentList(
            Clist.map((cinfo) => ({
              nickname: cinfo.nickname,
              content: cinfo.content,
              time: cinfo.time,
              date: cinfo.date,
            }))
          );
        })
        .catch((error) => {
          console.error("Error sending data to server:", error);
          // Handle error
        });
    }
  }, [resultData]);

  let typeImageSrc = ""; // 이미지 경로를 담을 변수 초기화
  if (grade === "요즘꼰대") {
    typeImageSrc = ggondae; // 옛날꼰대면 이미지 경로
  } else if (grade === "뼛속MZ") {
    typeImageSrc = kingman; // 다른 경우 이미지 경로
  } else {
    typeImageSrc = kingman;
  }

  // 페이지 번호를 변수 로 설정
  return (
    <Container>
      <Container_1>
        <CenteredImage_1_result src={mainLogo} />
        <Typecontent_1_result>
          당신은&nbsp;<Type_1_result>"{grade}"</Type_1_result>&nbsp;입니다.
        </Typecontent_1_result>
        <TypeImage_1_result src={typeImageSrc}></TypeImage_1_result>
      </Container_1>
      <MainContainer_1>
        <FeatureContainer_1>
          <Feature_1>{grade} 특징</Feature_1>
          <FeatureContent_1>
            1. &nbsp;{fOne}
            <br />
            <br />
            2. &nbsp;{fTwo} <br />
            <br /> 3. &nbsp;{fThree} <br />
            <br />
          </FeatureContent_1>
        </FeatureContainer_1>
        {/* ========================================================= */}
        <CommentContainer_1>
          <CommentBox_1>
            <CommentTitle_1>COMMENT</CommentTitle_1>
            <Verticalbar_1></Verticalbar_1>

            <InputField_1_result
              type="text"
              value={inputComment}
              onChange={(event) => setInputComment(event.target.value)}
            />
            <Commentbutton_1 onClick={handleCommentClick}>등록</Commentbutton_1>
          </CommentBox_1>
        </CommentContainer_1>

        <Container_1_result>
          <Title_1_result>실시간 COMMENT</Title_1_result>
          <Commentlistcontainer style={{ margin: "150px 50px" }}>
            {dateList.map((date) => (
              <Commentlist_date key={date}>
                <strong>{date}</strong>
                {CommentList.map((cinfo) => {
                  if (cinfo.date === date) {
                    return (
                      <div key={cinfo.time}>
                        <CommentInfoContainer>
                          <Comment_nickname>{cinfo.nickname}</Comment_nickname>
                          <Verticalbar_comment />
                          <Comment_content>{cinfo.content}</Comment_content>
                          <Comment_time>{cinfo.time}</Comment_time>
                        </CommentInfoContainer>
                      </div>
                    );
                  }
                  return null;
                })}
              </Commentlist_date>
            ))}
          </Commentlistcontainer>
        </Container_1_result>

        {/* ========================================================= */}

        <StatisticContainer1_1_result>
          <Background1_1_result />
          <StatisticTitle_1_result>통계</StatisticTitle_1_result>
          <Line_1_result></Line_1_result>
          {questionInfos.map((info) => (
            <div key={info.id}>
              <ColoredCircleBackground_1_result
                left={info.id % 2 !== 0 ? 280 : 690}
                top={120 + 250 * Math.floor((info.id - 1) / 2)}
                src={o_btn_remove}
              />
              <ColoredCircleForeground_1_result
                left={info.id % 2 !== 0 ? 410 : 820}
                top={120 + 250 * Math.floor((info.id - 1) / 2)}
                src={x_btn}
              />
              <GenerationLabel_1_result
                left={info.id % 2 !== 0 ? 150 : 560}
                top={190 + 250 * Math.floor((info.id - 1) / 2)}
              >
                X세대
              </GenerationLabel_1_result>
              <GenerationLabel_1_result
                left={info.id % 2 !== 0 ? 150 : 560}
                top={230 + 250 * Math.floor((info.id - 1) / 2)}
              >
                M세대
              </GenerationLabel_1_result>
              <GenerationLabel_1_result
                left={info.id % 2 !== 0 ? 150 : 560}
                top={270 + 250 * Math.floor((info.id - 1) / 2)}
              >
                Z세대
              </GenerationLabel_1_result>
              <PercentageLabel_1_result
                left={info.id % 2 !== 0 ? 280 : 690}
                top={190 + 250 * Math.floor((info.id - 1) / 2)}
              >
                {info.Plgx}%
              </PercentageLabel_1_result>
              <PercentageLabel_1_result
                left={info.id % 2 !== 0 ? 280 : 690}
                top={230 + 250 * Math.floor((info.id - 1) / 2)}
              >
                {info.Plgm}%
              </PercentageLabel_1_result>
              <PercentageLabel_1_result
                left={info.id % 2 !== 0 ? 280 : 690}
                top={270 + 250 * Math.floor((info.id - 1) / 2)}
              >
                {info.Plgz}%
              </PercentageLabel_1_result>
              <PercentageLabel_1_result
                left={info.id % 2 !== 0 ? 410 : 820}
                top={190 + 250 * Math.floor((info.id - 1) / 2)}
              >
                {info.Prgx}%
              </PercentageLabel_1_result>
              <PercentageLabel_1_result
                left={info.id % 2 !== 0 ? 410 : 820}
                top={230 + 250 * Math.floor((info.id - 1) / 2)}
              >
                {info.Prgm}%
              </PercentageLabel_1_result>
              <PercentageLabel_1_result
                left={info.id % 2 !== 0 ? 410 : 820}
                top={270 + 250 * Math.floor((info.id - 1) / 2)}
              >
                {info.Prgz}%
              </PercentageLabel_1_result>
              <NumberSpan_1_result
                left={info.id % 2 !== 0 ? 160 : 560}
                top={120 + 250 * Math.floor((info.id - 1) / 2)}
                color="black"
              >
                0<ColorTitle_1>{info.id}</ColorTitle_1>
              </NumberSpan_1_result>
            </div>
          ))}
        </StatisticContainer1_1_result>

        <ImageLink_1 to="/home">
          <NextButton_1>홈으로</NextButton_1>
        </ImageLink_1>
      </MainContainer_1>
    </Container>
  );
};
export default Page1_result;
