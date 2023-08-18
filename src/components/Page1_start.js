import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  fontFace,
  Container,
  CenteredImage_1_start,
  Title_1_start,
  ImageLink,
  SmallImage_0,
  MainContent_0,
  ColorTitle_1,
  InputContainer_1_start,
  InputField_1_start,
  InputLabel_1_start,
  InputLabelContainer_1_start,
  StartLink_1,
  Error_message_name,
  Error_message_age,
  Error_message_space,
  Error_message_container,
  Divider_0,
} from "./TitleStyle";
import mainButtonImage from "../mainImg/home_btn.png";
import mainLogo from "../mainImg/mainlogo.png";
import styled from "styled-components";

const Page1_start = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage_Name, setErrorMessage_Name] = useState("");
  const [errorMessage_Age, setErrorMessage_Age] = useState("");
  const [question, setQuestion] = useState(""); // 질문
  const [problemNumber, setProblemNumber] = useState(0); // 문제번호

  const isValidName = (inputName) => {
    // 이름 유효성 검사 로직을 추가하세요
    // 반환 값이 true일 경우 유효한 이름, false일 경우 유효하지 않은 이름
    return /^[가-힣]+$/.test(inputName);
  };

  const isValidAge = (parsedAge) => {
    // 나이 유효성 검사 로직을 추가하세요
    // 반환 값이 true일 경우 유효한 나이, false일 경우 유효하지 않은 나이
    return parsedAge > 0;
  };

  const updateButtonAndErrorState = (inputName, inputAge) => {
    setIsButtonDisabled(!isValidName(inputName) || !isValidAge(inputAge));
    setErrorMessage_Name();
    // isValidName(inputName) ? "" : "올바른 이름을 입력하세요."
    setErrorMessage_Age();
    // isValidAge(inputAge) ? "" : "올바른 나이를 입력하세요."
  };

  const handleNameChange = (event) => {
    const inputName = event.target.value;
    const trimmedName = inputName.trim();
    updateButtonAndErrorState(trimmedName, age);
    setName(trimmedName);
  };

  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    const parsedAge = parseInt(inputAge, 10);
    updateButtonAndErrorState(name, parsedAge);
    setAge(parsedAge);
  };

  const navigate = useNavigate();

  const updateButtonDisabledState = (inputName, inputAge) => {
    setIsButtonDisabled(inputName === "" || inputAge === "" || inputAge < 0);
  };

  const handleStartClick = () => {
    if (!isValidName(name)) {
      setErrorMessage_Name("올바른 이름을 입력하세요");
    }
    if (!isValidAge(age)) {
      setErrorMessage_Age("올바른 나이를 입력하세요");
    }

    if (isValidName(name) && isValidAge(age)) {
      localStorage.setItem("nickname", name);
      localStorage.setItem("age", age);
      axios
        .post(`http://52.79.219.32:8000/oldmantest/login_after`, {
          nickname: name,
          age: age,
        })
        .then((response) => {
          const problemNumber = response.data.index;
          const question = response.data.question.contents;
          const generation = response.data.user.generation;
          navigate("/page1", {
            state: { problemNumber, question, generation },
          });
        })
        .catch((error) => {
          console.error("Error sending data to server:", error);
        });
    }
  };

  // const handleStartClick = () => {
  //   if (!isButtonDisabled) {
  //     // 이름과 나이를 서버로 전송
  //     axios
  //       .post(`http://52.79.219.32:8000/oldmantest/login_after`, {
  //         nickname: name,
  //         age: age,
  //       })
  //       .then((response) => {
  //         // 성공적으로 처리되었을 때의 로직

  //         navigate("/page1"); // "/next-page"는 넘어갈 페이지의 경로로 바꾸세요
  //       })
  //       .catch((error) => {
  //         console.error("Error sending data to server:", error);
  //       });
  //   } else {
  //     setErrorMessage("올바른 이름과 나이를 입력하세요.");
  //   }
  // };

  return (
    <Container>
      <MainContent_0>
        <CenteredImage_1_start src={mainLogo} />
        <Title_1_start>
          <ColorTitle_1>MZ</ColorTitle_1>테스트
        </Title_1_start>
      </MainContent_0>
      <InputContainer_1_start>
        <InputLabelContainer_1_start>
          <InputLabel_1_start>이름</InputLabel_1_start>
          <InputField_1_start type="text" onChange={handleNameChange} />
        </InputLabelContainer_1_start>
        <InputLabelContainer_1_start>
          <InputLabel_1_start>나이</InputLabel_1_start>
          <InputField_1_start type="number" onChange={handleAgeChange} />
        </InputLabelContainer_1_start>
      </InputContainer_1_start>
      <Error_message_container>
        {errorMessage_Name && (
          <Error_message_name>{errorMessage_Name}</Error_message_name>
        )}

        {errorMessage_Age && (
          <Error_message_age>{errorMessage_Age}</Error_message_age>
        )}
      </Error_message_container>

      <ImageLink to="/home">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
      <StartLink_1 onClick={handleStartClick} disabled={isButtonDisabled}>
        시작하기
      </StartLink_1>
    </Container>
  );
};

export default Page1_start;
