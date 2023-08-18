//titlestyle

import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import logoFont from "../fonts/logo.ttf";
import mainFont from "../fonts/main.ttf";
import o_btn from "../mainImg/o_btn.png";
import x_btn from "../mainImg/x_btn.png";
import o_ic from "../mainImg/o_ic.png";
import image5 from "../mainImg/image 5.png";

export const fontFace = css`
  @font-face {
    font-family: "logo_f"; /* 원하는 폰트 이름 설정 */
    src: url(${logoFont}) format("truetype"); /* 폰트 파일 경로 설정 */
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "main_f";
    src: url(${mainFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
`;

export const Container2 = styled.div`
  width: 200px
  align-items: center;
  position: relative;
`

export const CenteredImage = styled.img`
  padding: 50px;
  width: 200px;
`;

//Home.js
export const Page1Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 20px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  color: black;
  ${fontFace};
`;

export const TransferLogo = styled.img`
  width: 180px;
  margin-top : 25px;
`;

export const Title = styled.h1`
  font-size: 60px;
  margin-top: -30px;
  font-family: "logo_f", sans-serif;
  font-weight: 300;
  ${fontFace};
`;
export const TransferIC = styled.img`
  /* Add your .transfer_ic styles here */
  display: flex;
`;

export const PageLink = styled(NavLink)`
 text-decoration: none; /* 밑줄 없애기 */
`;

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top : 50px;
`;

export const Section = styled.div`
  flex: 1;
  height: 400px;
  padding: 20px;
  border: 1px solid #ccc;
`;

export const PagesIC = styled.img`
  height: 280px;
`
export const PageitContainer = styled.div`
  position: relative
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
`;

// exam_ic
export const ExamIcon = styled.img`
  position: absolute;
  width: 220px;
  height: 220px;
  left: 145px;
  top: 810px;
`;

export const ExamRectangle = styled.div`
  position: absolute;
  width: 308px;
  height: 76px;
  left: 105px;
  top: 1110px;
  background: rgba(0, 176, 240, 0.52);
  border-radius: 50px;
`;


// # 나의 MZ력은?
export const MZPower = styled.div`
  position: absolute
  width: 50px;
  height: 22px;
  left: 191px;
  top: 500px;
  font-family: "main_f", sans-serif;
  ${fontFace};
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 176, 240, 0.52) 70%
  );
  background-size: auto 100%;
`;

// Rectangle 25
export const ExamRectangle2 = styled.div`
  position: absolute;
  width: 132px;
  height: 10px;
  left: 187px;
  top: 1088px;
  background: rgba(0, 176, 240, 0.38);
`;

// MZ테스트
export const MZTestTitle = styled.div`
  position: absolute;
  width: 198px;
  height: 75px;
  left: 178px;
  top: 1126px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

export const RankingContainer_0 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 50px;
  margin-top: -30px;
  font-size: 17px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;
export const Verticalbar_0 = styled.div`
  border: 3px solid #ababab;
  height: 25px;
`;
export const RankingContent_0 = styled.div`
  margin-left: 10px;
  color: #00b0f0;
`;
export const Ranking_0 = styled.div`
  margin-left: 10px;
`;

export const DictContainer_0 = styled.div`
  height: 600px;
  font-family: "main_f", sans-serif;
  align-items: center;
  font-weight: 200;
  ${fontFace};
`;

export const DictContent_Main_0 = styled.div`
  word-wrap: break-word;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 100px;
`;
export const DictContent_0 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const Downarrow_0 = styled.img`
  width: 79px;
  height: 35px;
  display: flex;
  margin: 0 auto;
`;
export const Downcontainer_0 = styled.div`
  margin-top: -40px;
`;

export const DictContent_MainWord_0 = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  & > :first-child {
    font-size: 50px;
  }
`;

export const DictContent_word_0 = styled.div`
  font-size: 22px;
  margin-top: 15px;
  margin-right: 10px;
  color: black;
`;

export const DictContent_type_0 = styled.div`
  color: #dbdbdb;
  font-weight: 900;
  font-size: 22px;
`;

export const DictContent_mean_0 = styled.div`
  word-wrap: break-word;
  width: 1000px;
  font-size: 22px;
  margin-top: 20px;
  text-align: center;
`;

export const DictContent_ex_0 = styled.div`
  color: #00b0f0;
  width: 50%;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const DictContent_sen_0 = styled.div`
  font-size: 22px;
  margin-top: 25px;
  color: black;
  display: flex;
  align-items: center;
`;

export const DictContent_Word_0 = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Divider_0 = styled.hr`
  width: 80%;
  margin-top: 40px;
  border: none;
  border-top: 2px solid #ddd;
  align-self: center; /* 가운데 정렬 */
`;

export const Box_Divider_0 = styled.hr`
  width: 90%;
  margin-top: 0px;
  border: none;
  border-top: 1px solid #ddd;
  align-self: center; /* 가운데 정렬 */
`;

export const ImageLink = styled(NavLink)`
  position: absolute;
  top: 77px;
  right: 100px;
`;
export const ImageLink_0 = styled(NavLink)``;
export const ImageLink_1 = styled(NavLink)`
  padding: 40px;
`;

export const SmallImage_0 = styled.img`
  width: 70px;
  height: auto;
  cursor: pointer;
`;

export const MainContent_0 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
`;

export const BoxContainer_0 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 수직 가운데 정렬을 위해 추가 */
  margin-top: -10px;
`;

export const Box_input_0 = styled.div`
  margin-top: 20px;
  border: 2px solid #00b0f0;
  height: 300px;
  width: 540px;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
export const Box_0 = styled.div`
  margin-top: 20px;
  border: 2px solid #ddd;
  height: 300px;
  width: 540px;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const BoxTitle_0 = styled.h2`
  font-size: 20px;
  margin-bottom: 50px;
`;

export const BoxContent_input_0 = styled.textarea`
  width: 465px;
  height: 130px;
  font-size: 40px;
  margin-top: 10px;
  margin-left: 27px;
  padding: 10px;
  border: none;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
  cursor: pointer;
  vertical-align: text-top;
  resize: none; /* 사용자 크기 조절 비활성화 */
`;

export const BoxContent_0 = styled.p`
  font-size: 40px;
  margin-top: -20px;
  padding: 40px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;

export const DividerImage_0 = styled.img`
  width: 85px;
  height: auto;
  margin: 0 50px; /* 이미지와 상자 사이의 간격 조절 */
`;

export const Button_0 = styled.button`
  background-color: #87daf8;
  font-size: 20px;
  border: none;
  border-radius: 0 0 10px;
  padding: 20px 30px;
  cursor: pointer;
  position: absolute;
  bottom: -32px;
  right: -69px;
  transform: translate(-50%, -50%);
  font-family: "main_f", sans-serif;
  font-weight: 300;
  ${fontFace};
`;

export const ColorTitle_1 = styled.span`
  color: #00b0f0;
`;

export const CenteredImage_1_start = styled.img`
  margin-top: 100px;
  padding: 50px;
  width: 300px;
`;
export const CenteredImage_1_result = styled.img`
  margin-top: 20px;
  padding: 50px;
  width: 300px;
`;
export const Title_1_start = styled.h1`
  font-size: 90px;
  margin-top: -30px;
  font-family: "logo_f", sans-serif;
  font-weight: 300;
  ${fontFace};
`;

export const InputContainer_1_start = styled.div`
  display: flex;

  align-items: center;
  margin-top: 20px;
`;

export const InputLabelContainer_1_start = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px; /* 레이블 너비 */
  margin-bottom: 8px;
  align-items: center;
`;

export const InputLabel_1_start = styled.label`
  font-size: 35px;
  margin-bottom: 8px;
  font-family: "main_f", sans-serif;
  font-weight: 600;
  ${fontFace};
`;

export const InputField_1_start = styled.input`
  width: 400px;
  height: 80px;
  margin-top: 10px;
  padding: 5px;
  text-align: center;
  border: none;
  background-color: #afe6fa;
  font-size: 40px;
  border-radius: 10px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;
export const InputField_1_result = styled.input`
  width: 600px;
  height: 70px;
  margin-top: 10px;
  margin-left: 300px;
  padding: 5px;
  border: none;
  font-size: 40px;
  border-radius: 10px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;

export const StartLink_1 = styled(NavLink)`
  position: absolute;
  margin-top: 660px;
  text-decoration: none; /* 밑줄 없애기 */
  color: black;
  font-size: 40px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;

export const Container_1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title_1 = styled.h1`
  font-size: 80px;
  margin-top: 120px;
`;

export const Question_1 = styled.p`
  font-size: 30px;
  margin: 50px 0;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
  wordwrap: "break-word";
`;

export const Button_1 = styled.button`
  height: 130px;
  width: 130px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: 1000;
`;

export const ButtonContainer_1 = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 200px;
  margin-top: 10px;
`;
export const AgreeButtonContainer_1 = styled.div`
  display: flex;
  font-size: 25px;
  color: #00b0f0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
`;

export const DisAgreeButtonContainer_1 = styled.div`
  display: flex;
  font-size: 25px;
  color: #f44336;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
`;

export const AgreeButton_1 = styled(Button_1)`
  color: #00b0f0;
  background-color: white;
  background-image: url(${o_btn});
  background-size: cover;
`;

export const DisagreeButton_1 = styled(Button_1)`
  color: #f44336;
  background-color: white;
  background-image: url(${x_btn});
  background-size: cover;
`;

export const AgreeContent_1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

export const DisagreeContent_1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

export const NextButton_1 = styled.button`
  background-color: #87daf8;
  margin-top: 1000px;
  border: none;
  width: 240px;
  height: 60px;
  font-size: 20px;
  border-radius: 500px;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  cursor: pointer;
`;

export const Typecontent_1_result = styled.div`
  display: flex;
  font-family: "logo_f", sans-serif;
  font-weight: 700;
  ${fontFace};
  font-size: 40px;
`;
export const Type_1_result = styled.div`
  color: #87daf8;
`;
export const TypeImage_1_result = styled.img`
  color: #87daf8;
  height: 300px;
  width: 300px;
  margin-top: 80px;
`;

export const ShareButton_1_result = styled.img`
  color: #87daf8;
  position: absolute;
  right: 670px;
  top: 250px;
`;

export const MainContainer_1 = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  font-family: "main_f", sans-serif;
  font-weight: 500;
  ${fontFace};

  font-size: 23px;
`;
export const FeatureContainer_1 = styled.div`
  height: 400px;
  width: 1000px;
  border-radius: 20px;
  background-color: #87daf8;
  margin-bottom: 100px;
`;
export const Feature_1 = styled.div`
  padding: 50px;
  color: white;
  font-size: 40px;
  font-weight: 900;
`;
export const FeatureContent_1 = styled.div`
  display: flex;
  padding: 50px;
  font-size: 24px;
  font-weight: 300;
  width: 90%;
  margin-top: -60px;
  justify-content: ; /* 가운데 정렬 설정 */
`;

export const CommentContainer_1 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-family: "main_f", sans-serif;
  font-weight: 500;
  ${fontFace};
  padding-bottom: 100px;
`;

export const CommentBox_1 = styled.div`
  width: 100%;
  height: 100px;
  left: 0;
  top: 0;
  position: absolute;
  background: white;
  border-radius: 15px;
  border: 0.5px #ababab solid;
`;
export const CommentTitle_1 = styled.div`
  width: 275px;
  height: 50px;
  left: 40px;
  top: 30px;
  position: absolute;
  font-family: "main_f", sans-serif;
  font-weight: 800;
  ${fontFace};
  color: #03b0ef;
  font-size: 32px;
`;
export const Commentbutton_1 = styled.button`
  width: 80px;
  height: 50px;
  position: absolute;
  right: 10px;
  top: 25px;
  font-family: "main_f", sans-serif;
  font-weight: 800;
  ${fontFace};
  background-color: #03b0ef;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 22px;
  cursor: pointer;
`;

export const Verticalbar_1 = styled.div`
  width: 75px;
  height: 0;
  left: 260px;
  top: 90px;
  position: absolute;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  border: 0.5px #ababab solid;
`;
export const DataContainer_1 = styled.div``;
export const DataTitle_1 = styled.div``;

export const CenteredImage_main = styled.img`
  margin-top: 150px;
  padding: 20px;
  width: 300px;
`;

export const Title_main = styled.div`
  font-family: "logo_f", sans-serif;
  font-weight: 300;
  font-size: 60px;
  ${fontFace};
  padding-bottom: 50px;
`;
export const Downarrow_main = styled.img`
  width: 79px;
  height: 35px;
  display: flex;
  margin: 0 auto;
  margin-top: px;
`;

export const StartLink_main = styled(NavLink)`
  margin-top: 60px;
  text-decoration: none; /* 밑줄 없애기 */
  color: black;
  font-size: 30px;
  font-family: "main_f", sans-serif;
  font-weight: 700;
  ${fontFace};
`;
export const Container_1_result = styled.div`
  width: 100%;
  height: 100%;
  border: 0.5px #ababab solid;
  border-radius: 20px;
  position: relative;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-bottom: 80px;
  font-family: "main_f", sans-serif;
  font-weight: 400;
  ${fontFace};
`;

export const WhiteBox_1_result = styled.div`
  width: 100%;
  height: 500px;
  left: 0;
  top: 0;
  position: absolute;
  background: white;
  border-radius: 15px;
  border: 0.5px #ababab solid;
`;

export const Title_1_result = styled.div`
  width: 352px;
  height: 175.73px;
  left: 48px;
  top: 78.86px;
  position: absolute;
  color: #00b0f0;
  font-size: 35px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const TimeLine_1_result_1 = styled.div`
  width: 300px;
  border: 0.5px #ababab solid;
  position: absolute;
  left: 47px;
  top: 164px;
`;
export const TimeLine_1_result_2 = styled.div`
  width: 300px;
  border: 0.5px #ababab solid;
  position: absolute;
  right: 47px;
  top: 164px;
`;
export const Background_1_result = styled.div`
  width: 90%;
  height: 100px;
  left: 0;
  top: 0;
  left: 38px;
  top: 211px;
  position: absolute;
  background: #f5f5f5;
  border-radius: 15px;
`;

export const RotateLine_1_result = styled.div`
  width: 52px;
  height: 0;
  left: 197px;
  top: 288px;
  position: absolute;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  border: 1.5px white solid;
`;

export const TimeLabel_1_result = styled.div`
  width: 101px;
  height: 43px;
  position: absolute;
  left: 880px;
  top: 284px;

  color: #ababab;
  font-size: 16px;
  font-weight: 400;
  word-wrap: break-word;
`;
export const DateLabel_1_result = styled.div`
  width: 180px;
  height: 43px;
  position: absolute;
  left: 420px;
  top: 146px;
`;

export const CommentBubble_1_result = styled.div`
  width: 346px;
  height: 42px;
  position: absolute;
  left: 222px;
  top: 252px;
  color: black;
  font-size: 25px;
  font-family: "Gmarket Sans";
  font-weight: 400;
  word-wrap: break-word;
`;

export const NameLabel_1_result = styled.div`
  width: 123px;
  height: 57px;
  position: absolute;
  left: 66px;
  top: 246px;
  color: black;
  font-size: 30px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const Background1_1_result = styled.div`
  width: 100%;
  height: 1400px;
  left: 0;
  top: 0;
  position: absolute;
  background: #87daf8;
  border-radius: 20px;
  border: 0.5px #ababab solid;
`;

export const StatisticContainer_1_result = styled.div`
  width: 100%;
  height: 1500px;
  position: relative;
`;
export const StatisticTitle_1_result = styled.div`
  font-family: "main_f", sans-serif;
  font-weight: 700;
  position: absolute;
  ${fontFace};
  color: white;
  font-size: 30px;
  top: 50px;
  left: 50px;
`;
export const Line_1_result = styled.div`
  position: absolute;
  width: 65px;
  color: white;
  top: 90px;
  left: 45px;
  border: 1px white solid;
`;
export const StatisticContainer1_1_result = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  font-family: "main_f", sans-serif;
  font-weight: 800;
  ${fontFace};
`;
export const AbsoluteImage_1_result = styled.img`
  width: 45px;
  height: 45px;
  left: 259px;
  top: 0;
  position: absolute;
`;

export const ColoredCirclesWrapper_1_result = styled.div`
  width: 50px;
  height: 50px;
  left: 137px;
  top: 0;
  position: absolute;
`;

export const ColoredCircleBackground_1_result = styled.img`
  width: 50px;
  height: 50px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;

  position: absolute;
`;

export const ColoredCircleForeground_1_result = styled.img`
  width: 50px;
  height: 50px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;

  position: absolute;
`;

export const GenerationLabel_1_result = styled.div`
  width: 81px;
  height: 40px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  position: absolute;
  color: black;
  font-size: 20px;
  font-family: "main_f", sans-serif;
  font-weight: 700;
  ${fontFace};
  word-wrap: break-word;
`;

export const PercentageLabel_1_result = styled.div`
  width: 81px;
  height: 40px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  position: absolute;
  color: black;
  font-family: "main_f", sans-serif;
  font-weight: 700;
  ${fontFace};
  word-wrap: break-word;
`;

export const NumberSpan_1_result = styled.span`
  color: ${({ color }) => color};
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;

  position: absolute;
  font-size: 40px;
  font-family: "main_f", sans-serif;
  font-weight: 700;
  ${fontFace};
`;

export const Error_message_name = styled.div`
  position: absolute;
  width: 225px;
  height: 20px;
  right: 161px;
  font-size: 20px;
  color: red;
  border-bottom: 2px solid red;
  font-family: "main_f", sans-serif;
  font-weight: 300;
  ${fontFace};
`;
export const Error_message_age = styled.div`
  position: absolute;
  left: 161px;
  width: 225px;
  height: 20px;
  font-size: 20px;
  border-bottom: 2px solid red;
  color: red;
  font-family: "main_f", sans-serif;
  font-weight: 300;
  ${fontFace};
`;

export const Error_message_space = styled.div`
  width: 320px; /* 원하는 공백 크기 */
`;

export const Error_message_container = styled.div`
  display: flex;
  margin-top: 10px;
  position: relative;
`;

export const Verticalbar_comment = styled.div`
  width: 0px;
  height: 22px;
  border: 1px white solid;
  margin-right:10px;
  margin 0px;
`;

export const Commentlistcontainer = styled.div`
  font-family: "main_f", sans-serif;
  font-weight: 300;
  font-size: 22px;

  ${fontFace};
`;

export const Commentlist_date = styled.div`
  margin-bottom: 30px;
  /* 다른 스타일 설정 */
`;
export const Comment_nickname = styled.div`
  width: 20%;
  /* 다른 스타일 설정 */
`;
export const Comment_time = styled.div`
  color: #ababab;
  font-size: 14px;
`;
export const Comment_content = styled.div`
  width: 65%;
  margin-left: 10px;
`;

// 코멘트 정보를 나열하는 스타일
export const CommentInfoContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: #f5f5f5;
  margin-top: 10px;
  font-size: 35px;
  /* 각 정보 간 간격 설정 */
  span {
    margin: 0 8px;
  }
  padding: 15px;
`;

// CommentInfoContainer 안의 바 스타일

// Page2
export const Number = styled.h1`
  font-size: 50px;
  color: black;
  text-align: center;
  margin-top: 30px;
  span {
    color: #00b0f0;
  }
`;

export const QuizBox = styled.div`
  background-color: rgba(0, 176, 240, 0.37);
  text-align: center;
  border-radius: 50px;
  display: inline-block;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const BlackText = styled.h1`
  text-align: center;
  margin-left: 60px;
  margin-right: 60px;
  font-size: 35px;
  color: black;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
`;

export const Divider = styled.hr`
  width: 80%;
  margin-top: -20px;
  border: 10;
  border-top: 1px solid #ddd; /* 구분선 색상과 스타일 지정 */
`;

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 100px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
`;

export const LeftButtonContainer = styled.div`
  flex: 4;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  word-wrap: normal;
  white-space: normal;
  text-align: center;
`;
export const VSContainer = styled.div`
  flex: 1;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
`;
export const RightButtonContainer = styled.div`
  flex: 4;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  word-wrap: normal;
  white-space: normal;
  text-align: center;
`;

export const balanceSelect = styled.p`
  font-size: 30px;
  margin: 50px 0;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
  word-wrap: normal;
  white-space: normal;
  text-align: center;
`;

export const VS = styled.p`
  font-size: 30px;
  margin: 25px 0;
  color: #00b0f0;
  font-family: "main_f", sans-serif;
  font-weight: 600;
  ${fontFace};
  wordwrap: "break-word";
`;

//page2_result
export const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectContainer = styled.div`
  position: absolute;
  display: flex;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  text-align: center;
  white-space: normal;
  witdh: 110%;
  max-width: 300px;
  overflow-wrap: normal; /* 단어 내에서 줄바꿈 허용하지 않음 */
  word-wrap: normal; /* 단어 내에서 줄바꿈 허용하지 않음 */
  word-break: normal; /* 단어 내에서 줄바꿈 허용하지 않음 */
  z-index: 2; /* 더 높은 z-index 값 설정 */

  /* 나머지 스타일 */
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  z-index: 1; /* 더 낮은 z-index 값 설정 */

  /* 나머지 스타일 */
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  overflow-wrap: normal; /* 단어 내에서 줄바꿈 허용하지 않음 */
  word-wrap: normal; /* 단어 내에서 줄바꿈 허용하지 않음 */
  word-break: normal; /* 단어 내에서 줄바꿈 허용하지 않음 */
`;

export const NotSelectContainer = styled.div`
  display: flex;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
  text-align: center;
`;

export const ResultText = styled.p`
  font-size: 50px;
  margin-top: 200px;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  word-wrap: break-word;
  display: inline-block; /* 인라인 블록 요소로 설정 */
`;

export const ShareImageContainer = styled.div`
  margin-top: 110px;
  display: inline-block; /* 인라인 블록 요소로 설정 */

  /* 나머지 스타일 */
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  /* 나머지 스타일 */
`;

export const GoHomeBox = styled(NavLink)`
  margin-top: 80px;
  background-color: rgba(0, 176, 240, 0.37);
  border-radius: 50px;
  display: inline-block;
  text-decoration: none;
`;

export const BalanceResultContainer = styled.div`
  margin-left: 500px;
  margin-right: 500px;
`;

//Page3.js

// Group 15
export const Group15 = styled.div`
  position: absolute;
  width: 100px;
  height: 25px;
  left: 176px;
  top: 225px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  z-index: 5;
`;

// image 5
export const Image5 = styled.div`
  position: absolute;
  width: 28px;
  height: 19px;
  left: -30px;
  background: url(${image5});
  z-index: 1;
`;

// 세대 선택
export const GenerationSelection = styled.div`
  position: absolute;g
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

// Group 40
export const Group40 = styled.div`
  position: absolute;
  width: 147px;
  height: 117px;
  left: 50px;
  top: 5px;
`;

// Line 29, 30, and 31
export const Line = styled.div`
  position: absolute;
  width: 130px;
  height: 0px;
  left: 94px;
  border: 1px solid #ababab;

  // Modify top position based on props
  top: ${(props) => props.topPosition || "0px"};
`;

// X (70-80), M (81-94), and Z (95-2012)
export const Label = styled.div`
  position: absolute;
  width: ${(props) => props.width || "99px"};
  height: 25px;
  left: ${(props) => props.left || "102px"};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  z-index: 5;

  // Modify top position based on props
  top: ${(props) => props.topPosition || "0px"};
`;

// ㄱ Wrapper
export const Wrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: 45px;
  top: 25px;
`;

// Rectangle 19
export const Rectangle19 = styled.div`
  position: absolute;
  width: 153px;
  height: 61px;
  left: 403px;
  top: 329px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㄱ
export const Character = styled.div`
  position: absolute;
  width: 83px;
  height: 51px;
  left: 461px;
  top: 338px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const TextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${(props) => props.left || "392px"};
  top: ${(props) => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;

// ㄴ Wrapper
export const NWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 280px;
  left: -70px;
  top: 25px;
`;

// Rectangle 20
export const Rectangle20 = styled.div`
  position: absolute;
  width: 153px;
  height: 61px;
  left: 951px;
  top: 329px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㄴ
export const NCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 51px;
  left: 1012px;
  top: 338px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const NTextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${(props) => props.left || "932px"};
  top: ${(props) => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;

// ㄷ Wrapper
export const DWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 286px;
  left: 45px;
  top: 50px;
`;

// Rectangle 21
export const Rectangle21 = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 403px;
  top: 667px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㄷ
export const DCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 461px;
  top: 678px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const DTextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${(props) => props.left || "392px"};
  top: ${(props) => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;

// ㄹ Wrapper
export const LWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: -70px;
  top: 50px;
`;

// Rectangle 22
export const Rectangle22 = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 951px;
  top: 667px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㄹ
export const LCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 1012px;
  top: 678px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const LTextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${(props) => props.left || "932px"};
  top: ${(props) => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;

// M Wrapper
export const MWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 286px;
  left: 45px;
  top: 75px;
`;

export const MRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 403px;
  top: 1005px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㅁ
export const MCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 461px;
  top: 1018px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const MTextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${(props) => props.left || "392px"};
  top: ${(props) => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;

// ㅂ Wrapper
export const BWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: -70px;
  top: 75px;
`;

// Rectangle 22
export const BRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 951px;
  top: 1005px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㅂ
export const BCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 1012px;
  top: 1018px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const BTextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${(props) => props.left || "932px"};
  top: ${(props) => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;

//ㅅ
// S Wrapper
export const SWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 286px;
  left: 45px;
  top: 100px;
`;

export const SRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 403px;
  top: 1343px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

//
export const SCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 461px;
  top: 1358px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

//ㅇ
//  Wrapper
export const IWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: -70px;
  top: 100px;
`;

// Rectangle 22
export const IRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 951px;
  top: 1343px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// 아
export const ICharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 1012px;
  top: 1358px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// ㅈ
// J Wrapper
export const JWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 286px;
  left: 45px;
  top: 125px;
`;

export const JRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 403px;
  top: 1681px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

//
export const JCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 461px;
  top: 1698px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

//ㅊ
//  Wrapper
export const CWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: -70px;
  top: 125px;
`;

// Rectangle
export const CRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 951px;
  top: 1681px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㅊCharacter
export const CCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 1012px;
  top: 1698px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// ㅋ
// K Wrapper
export const KWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 286px;
  left: 45px;
  top: 150px;
`;

export const KRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 403px;
  top: 2019px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

//
export const KCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 461px;
  top: 2038px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

//ㅌ
//  Wrapper
export const TWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: -70px;
  top: 150px;
`;

// Rectangle
export const TRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 951px;
  top: 2019px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// Character
export const TCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 1012px;
  top: 2038px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// ㅍ
// P Wrapper
export const PWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 286px;
  left: 45px;
  top: 175px;
`;

export const PRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 403px;
  top: 2357px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

//
export const PCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 461px;
  top: 2378px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

//ㅎ
//  Wrapper
export const HWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: -70px;
  top: 175px;
`;

// Rectangle
export const HRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 951px;
  top: 2357px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// Character
export const HCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 1012px;
  top: 2378px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// SP
// SP Wrapper
export const SPWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 286px;
  left: 45px;
  top: 200px;
`;

export const SPRectangle = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 403px;
  top: 2695px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

//
export const SPCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 461px;
  top: 2718px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

//Page3_word.js

// 단어해석 Wrapper
export const WordTranslationWrapper = styled.div`
  position: absolute;
  width: 1000px;
  height: 60px;
  left: calc(50% - 900px / 2 - 62px);
  top: 0px;
`;

// 가즈아
export const WordLabel = styled.div`
  position: absolute;
  width: auto;
  height: 59px;
  left: 89px;
  top: 300px;
  justify-content: space-between;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
  align-items: center;
  margin-right: 25px;
`;

// (Z)
export const ZLabel = styled.span`
  position: absolute;
  width: 125px;
  height: 30px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ababab;
  margin-left: 15px;
  margin-top: 13px;
  margin-right: 25px;
`;

// Line 27
export const Line27 = styled.div`
  position: absolute;
  width: 900px;
  height: 0px;
  left: 89px;
  top: 355px;
  border: 1.5px solid #d9d9d9;
`;

export const Description = styled.div`
  position: absolute;
  width: 826px;
  height: 21px;
  left: 335px;
  top: 400px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;

// 예문 Wrapper
const ExampleWrapper = styled.div`
  position: absolute;
  width: 272px;
  height: 103px;
  left: 40px;
  top: 0px;
`;

// 예문 Title
const ExampleTitle = styled.div`
  position: absolute;
  width: 105px;
  height: 33px;
  left: 369px;
  top: 571px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #00b0f0;
`;

// 예문 Content
const ExampleContent = styled.div`
  position: absolute;
  width: 272px;
  height: 63px;
  left: 369px;
  top: 611px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;

export { ExampleWrapper, ExampleTitle, ExampleContent };

// Group 41 Wrapper
const Group41Wrapper = styled.div`
  position: absolute;
  width: 276px;
  height: 100px;
  left: 10px;
  top: 0px;
`;

// 다른 세대 유사 단어 Title
const SimilarWordTitle = styled.div`
  position: absolute;
  width: 206px;
  height: 30px;
  left: 857px;
  top: 571px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ababab;
`;

// ㄹㅊㄱ (Z) 돌진! (X) Content
const WordContent = styled.div`
  position: absolute;
  width: 272px;
  height: 63px;
  left: 861px;
  top: 608px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;

export { Group41Wrapper, SimilarWordTitle, WordContent };
