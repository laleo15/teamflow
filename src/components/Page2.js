// Page2.js
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Container, CenteredImage, Title,Number,QuizBox,BlackText,
  BalanceContainer,balanceSelect,LeftButtonContainer,RightButtonContainer,VS,VSContainer} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
    const pageNumber = 2;
    const [data, setData] = useState(null);
    const [quizIndex, setQuizIndex] = useState(0);
    const [results, setResults] = useState([]);
    const [isLeft, setIsLeft] = useState(Math.random() > 0.5);
    const [answerLocations, setAnswerLocations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await requestProblems({ index: pageNumber });
            setData(response);
        };

        fetchData();
    }, [pageNumber]);

    useEffect(() => {
        if (data && quizIndex >= data.ten_quiz.length) {
            navigate('/page2_result', { state: { results, ten_quiz: data.ten_quiz, answerLocations } });
        }
    }, [data, quizIndex, results, navigate]);

    if (!data || quizIndex >= data.ten_quiz.length) {
        return (
            <div>
                <div>Loading...</div>
                <div>Results: {JSON.stringify(results)}</div>
            </div>
        );
    }

    const quiz = data?.ten_quiz[quizIndex];

    const handleButtonClick = (isCorrect) => {
        setResults([...results, isCorrect]);
        setAnswerLocations([...answerLocations, isLeft]);
        setQuizIndex(quizIndex + 1);
        setIsLeft(Math.random() > 0.5);
    };

    return (
        <Container>
            <CenteredImage src={mainLogo} />
            <Title>신조어테스트</Title>
            <Number>
                <span>0</span>{quizIndex+1}
            </Number>
            <QuizBox>
                <BlackText>{quiz.subject}</BlackText>
            </QuizBox>
            <BalanceContainer>
                <LeftButtonContainer>
                    <balanceSelect onClick={() => handleButtonClick(isLeft)}>{isLeft ? quiz.answer : quiz.wrong}</balanceSelect>
                </LeftButtonContainer>
                <VSContainer>
                    <VS>VS</VS>
                </VSContainer>
                <RightButtonContainer>
                    <balanceSelect onClick={() => handleButtonClick(!isLeft)}>{isLeft ? quiz.wrong : quiz.answer}</balanceSelect>
                </RightButtonContainer>
            </BalanceContainer>
        </Container>
    );
};

export default Page2;


// `data` parameter is an object containing the information to be sent in the POST request.
const requestProblems = async (data) => {
    try {
        const apiUrl = 'http://52.79.219.32:8000/mzquiz/detail/';
        const response = await axios.post(apiUrl, data);

        if (response.status === 200) {
            // The request was successful and the response contains the expected data.
            const result = response.data;

            // Store the result somewhere, for example, in the component's state or Redux store.
            return result;
        } else {
            // The request was successful, but the server returned an error.
            console.error('Error from server:', response.status, response.statusText);
            return null;
        }
    } catch (error) {
        // The request failed, probably due to network issues or invalid input data.
        console.error('Request failed:', error);
        return null;
    }
};
