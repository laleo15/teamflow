import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  CenteredImage,
  Title,
  SmallImage_0,
  ImageLink,
  WordLabel,
  WordTranslationWrapper,
  ZLabel,
  Line27,
  Description,
  ExampleContent,
  ExampleTitle,
  ExampleWrapper,
  Group41Wrapper,
  SimilarWordTitle,
  WordContent,
} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import mainButtonImage from "../mainImg/home_btn.png";

const Page3_word = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://52.79.219.32:8000/dictionary/apitest/'; // 여기에 Django API의 엔드포인트를 입력하세요.

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data from Django API", error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const wordItem = data.words.find((word) => word.id === parseInt(id));
      const synonyms = data.synonyms.filter((synonym) => synonym.id === parseInt(id));
      const examples = data.examples.filter((example) => example.id === parseInt(id));
      console.log(wordItem)
      console.log(synonyms)
      console.log(examples)
      setWordData({ wordItem, synonyms, examples });
    }
  }, [data, id]);

  if (!wordData) {
    return <div>Loading...</div>;
  }
  
  return (
    <Container>
      <CenteredImage src={mainLogo} />
      <Title>도감</Title>
  
      <WordTranslationWrapper>
        <WordLabel>{wordData.wordItem.subject}
        <ZLabel>{'('+wordData.wordItem.generation+')'}</ZLabel>
        </WordLabel>
        <Line27 />
      </WordTranslationWrapper>
      <Description>
        {wordData.wordItem.meaning}
      </Description>
  
      <ExampleWrapper>
        <ExampleTitle>예문</ExampleTitle>
        <ExampleContent>
          {wordData.examples.map((example) => (
            <p key={example.id}>{example.example}</p>
          ))}
        </ExampleContent>
      </ExampleWrapper>
  
      <Group41Wrapper>
        <SimilarWordTitle>다른 세대 유사 단어</SimilarWordTitle>
        <WordContent>
          {wordData.synonyms.map((synonym) => (
            <p key={synonym.id}>{synonym.synonym}</p>
          ))}
        </WordContent>
      </Group41Wrapper>
  
    </Container>
  );
};

export default Page3_word;
