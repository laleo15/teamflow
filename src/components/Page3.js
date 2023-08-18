// Page3.js
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container, CenteredImage, Title, SmallImage_0, ImageLink, Divider_0, Group15, Image5, GenerationSelection
  , Group40, Line, Label, Wrapper, Rectangle19, Character, TextLabel, NWrapper, Rectangle20, NCharacter, NTextLabel, DCharacter, DTextLabel
  , DWrapper, Rectangle21, LWrapper, LCharacter, LTextLabel, Rectangle22,MCharacter,MRectangle,MTextLabel,MWrapper,BCharacter,BRectangle,BTextLabel,BWrapper
  ,SWrapper,SCharacter,SRectangle,ICharacter,IRectangle,IWrapper,JCharacter,JRectangle,JWrapper,CCharacter,CRectangle,CWrapper
  ,KCharacter,KRectangle,KWrapper,TCharacter,TRectangle,TWrapper,PCharacter,PRectangle,PWrapper,HCharacter,HRectangle,HWrapper,SPCharacter,SPRectangle,SPWrapper
} from "./TitleStyle";

import mainLogo from "../mainImg/mainlogo.png";
import mainButtonImage from "../mainImg/home_btn.png";


const Page3 = () => {
  const pageNumber = 3; // 페이지 번호를 변수로 설정
  const [showGroup40, setShowGroup40] = useState(false); // state 추가

  const handleGroupClick = () => {
    setShowGroup40(!showGroup40); // showGroup40 토글
  };
  const tops = [424, 424, 465, 465, 505, 505, 545, 545, 585, 585,625,625,665,665];
  const lefts = [352, 543, 352, 543, 352, 543, 352, 543, 352, 543,352, 543,352, 543];
  const ntops = tops
  const nlefts = [892, 1083, 892, 1083, 892, 1083, 892, 1083, 892, 1083,892, 1083,892, 1083];
  const dtops = tops.map(top => top+341)
  const dlefts = lefts
  const ltops = dtops
  const llefts = nlefts
  const mtops = dtops.map(top => top + 341);
  const mlefts = lefts 
  const btops = mtops
  const blefts = nlefts
  const stops = mtops.map(top => top + 341)
  const slefts = lefts
  const itops = stops
  const ilefts = nlefts
  const jtops = stops.map(top => top + 341)
  const jlefts = lefts
  const ctops = jtops
  const clefts = nlefts
  const ktops = jtops.map(top => top + 341)
  const klefts = lefts
  const ttops = ktops
  const tlefts = nlefts
  const ptops =ktops.map(top=>top+341)
  const plefts = lefts
  const htops = ptops
  const hlefts = nlefts
  const sptops =ptops.map(top=>top+341)
  const splefts = lefts

  const [data, setData] = useState(null);
  const [generation , setGeneration] = useState("");
  const handleGenerationClick = (gen) => {
    setGeneration(gen);
    console.log(gen);
  };

  let filteredWords = [];
  let subjectsAndIds = [];
  if (data) {
    if(generation === "") {
      filteredWords = data.words;
    }
    else {
      filteredWords = data.words.filter(word=> word.generation === generation);
      console.log(generation);
    }
      filteredWords = filteredWords.filter(word => word.initial_sound === "ᄀ" || word.initial_sound === "ᄁ");
    subjectsAndIds = filteredWords.map(word => ({
      id: word.id,
      subject: word.subject
    }));
  }

  function MyComponent({ tops, lefts, start }) {
    return (
      <>
        {

          subjectsAndIds.map((item, index) => {
            const top = tops[index];
            const left = lefts[index];
            return (
              <Link key={item.id} to={`../page3_word/${item.id}`}>
                <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
              </Link>
            );
          })}
      </>
    );
  }


  let nfilteredWords = [];
  let nsubjectsAndIds = [];
  if (data) {

    if(generation === "") {
      nfilteredWords = data.words;
     
    }
    else {
      nfilteredWords = data.words.filter(word=>word.generation === generation);
    }

    nfilteredWords = nfilteredWords.filter(word => word.initial_sound === "ᄂ");
    nsubjectsAndIds = nfilteredWords.map(word => ({
      id: word.id,
      subject: word.subject
    }));
  }

  function NMyComponent({ ntops, nlefts }) {
    return (
      <>
        {nsubjectsAndIds.map((item, index) => {
          const top = ntops[index];
          const left = nlefts[index];
          return (
            <Link key={item.id} to={`../page3_word/${item.id}`}>
              <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
            </Link>
          );
        })}
      </>
    );
  }

  let dfilteredWords = [];
  let dsubjectsAndIds = [];
if (data) {
  if(generation === "") {
    dfilteredWords = data.words;
  }
  else {
    dfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  dfilteredWords = dfilteredWords.filter(word => word.initial_sound === "ᄃ");
  dsubjectsAndIds = dfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function DMyComponent({ dtops, dlefts }) {
  return (
    <>
      {dsubjectsAndIds.map((item, index) => {
        const top = dtops[index];
        const left = dlefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let lfilteredWords = [];
let lsubjectsAndIds = [];
if (data) {
  if(generation === "") {
    lfilteredWords = data.words;
  }
  else {
    lfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  lfilteredWords = lfilteredWords.filter(word => word.initial_sound === "ᄅ");
  lsubjectsAndIds = lfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function LMyComponent({ ltops, llefts }) {
  return (
    <>
      {lsubjectsAndIds.map((item, index) => {
        const top = ltops[index];
        const left = llefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let mfilteredWords = [];
let msubjectsAndIds = [];
if (data) {
  if(generation === "") {
    mfilteredWords = data.words;
  }
  else {
    mfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  mfilteredWords = mfilteredWords.filter(word => word.initial_sound === "ᄆ");
  msubjectsAndIds = mfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function MMyComponent({ mtops, mlefts }) {
  return (
    <>
      {msubjectsAndIds.map((item, index) => {
        const top = mtops[index];
        const left = mlefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}


let bfilteredWords = [];
let bsubjectsAndIds = [];
if (data) {
  if(generation === "") {
    bfilteredWords = data.words;
  }
  else {
    bfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  bfilteredWords = bfilteredWords.filter(word => word.initial_sound === "ᄇ" || word.initial_sount ==="ᄈ");
  bsubjectsAndIds = bfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function BMyComponent({ btops, blefts }) {
  return (
    <>
      {bsubjectsAndIds.map((item, index) => {
        const top = btops[index];
        const left = blefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let sfilteredWords = [];
let ssubjectsAndIds = [];
if (data) {
  if(generation === "") {
    sfilteredWords = data.words;
  }
  else {
    sfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  sfilteredWords = sfilteredWords.filter(word => word.initial_sound === "ᄉ");
  ssubjectsAndIds = sfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function SMyComponent({ stops, slefts }) {
  return (
    <>
      {ssubjectsAndIds.map((item, index) => {
        const top = stops[index];
        const left = slefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let ifilteredWords = [];
let isubjectsAndIds = [];
if (data) {
  if(generation === "") {
    ifilteredWords = data.words;
  }
  else {
    ifilteredWords = data.words.filter(word=> word.generation === generation);
  }
  ifilteredWords = ifilteredWords.filter(word => word.initial_sound === "ᄋ");
  isubjectsAndIds = ifilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function IMyComponent({ itops, ilefts }) {
  return (
    <>
      {isubjectsAndIds.map((item, index) => {
        const top = itops[index];
        const left = ilefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

// ㅈ 버전
let jfilteredWords = [];
let jsubjectsAndIds = [];
if (data) {
  if(generation === "") {
    jfilteredWords = data.words;
  }
  else {
    jfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  jfilteredWords = jfilteredWords.filter(word => word.initial_sound === "ᄌ" || word.initial_sound === "ᄍ");
  jsubjectsAndIds = jfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function JMyComponent({ jtops, jlefts }) {
  return (
    <>
      {jsubjectsAndIds.map((item, index) => {
        const top = jtops[index];
        const left = jlefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

// ㅊ 버전
let cfilteredWords = [];
let csubjectsAndIds = [];
if (data) {
  if(generation === "") {
    cfilteredWords = data.words;
  }
  else {
    cfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  cfilteredWords = cfilteredWords.filter(word => word.initial_sound === "ᄎ");
  csubjectsAndIds = cfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function CMyComponent({ ctops, clefts }) {
  return (
    <>
      {csubjectsAndIds.map((item, index) => {
        const top = ctops[index];
        const left = clefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let kfilteredWords = [];
let ksubjectsAndIds = [];
if (data) {
  if(generation === "") {
    kfilteredWords = data.words;
  }
  else {
    kfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  kfilteredWords = kfilteredWords.filter(word => word.initial_sound === "ᄏ");
  ksubjectsAndIds = kfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function KMyComponent({ ktops, klefts }) {
  return (
    <>
      {ksubjectsAndIds.map((item, index) => {
        const top = ktops[index];
        const left = klefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let tfilteredWords = [];
let tsubjectsAndIds = [];
if (data) {
  if(generation === "") {
    tfilteredWords = data.words;
  }
  else {
    tfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  tfilteredWords = tfilteredWords.filter(word => word.initial_sound === "ᄐ");
  tsubjectsAndIds = tfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function TMyComponent({ ttops, tlefts }) {
  return (
    <>
      {tsubjectsAndIds.map((item, index) => {
        const top = ttops[index];
        const left = tlefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let pfilteredWords = [];
let psubjectsAndIds = [];
if (data) {
  if(generation === "") {
    pfilteredWords = data.words;
  }
  else {
    pfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  pfilteredWords = pfilteredWords.filter(word => word.initial_sound === "ᄑ");
  psubjectsAndIds = pfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function PMyComponent({ ptops, plefts }) {
  return (
    <>
      {psubjectsAndIds.map((item, index) => {
        const top = ptops[index];
        const left = plefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}



let hfilteredWords = [];
let hsubjectsAndIds = [];
if (data) {
  if(generation === "") {
    hfilteredWords = data.words;
  }
  else {
    hfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  hfilteredWords = hfilteredWords.filter(word => word.initial_sound === "ᄒ");
  hsubjectsAndIds = hfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function HMyComponent({ htops, hlefts }) {
  return (
    <>
      {hsubjectsAndIds.map((item, index) => {
        const top = htops[index];
        const left = hlefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let spfilteredWords = [];
let spsubjectsAndIds = [];
if (data) {
  if(generation === "") {
    spfilteredWords = data.words;
  }
  else {
    spfilteredWords = data.words.filter(word=> word.generation === generation);
  }
  spfilteredWords = spfilteredWords.filter(word => word.initial_sound === "Ⴕ");
  spsubjectsAndIds = spfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function SPMyComponent({ sptops, splefts }) {
  return (
    <>
      {spsubjectsAndIds.map((item, index) => {
        const top = sptops[index];
        const left = splefts[index];
        return (
          <Link key={item.id} to={`../page3_word/${item.id}`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}


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

  const getColor = (gen) => {
    return generation === gen ? '#22BAF2' : 'black';
};
  function handleTitleClick() {
    setShowGroup40(false);
}
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <CenteredImage src={mainLogo} />

      <Title onClick={()=>{handleGenerationClick(""); handleTitleClick();}}>도감</Title>

      <Group15 onClick={handleGroupClick}>
        <Image5 />
        <GenerationSelection>세대 선택</GenerationSelection>
      </Group15>

      <Divider_0></Divider_0> 
      <Group40 style={{ display: showGroup40 ? "block" : "none" }}>
            <Line topPosition="301px" />
            <Line topPosition="344px" />
            <Line topPosition="389px" />
            <Label topPosition="272px" left="103px" onClick={()=>handleGenerationClick("X")} style={{color: getColor("X")}}>X (70-80)</Label>
            <Label topPosition="314px" onClick={()=>handleGenerationClick("M")} style={{color: getColor("M")}}>M (81-94)</Label>
            <Label topPosition="357px" width="139px"onClick={()=>handleGenerationClick("Z")}style={{color: getColor("Z")}}>Z (95-2012)</Label>
        </Group40>

      <Container>
      <Wrapper>
        <Rectangle19 />
        <Character>ㄱ</Character>
        <MyComponent tops={tops} lefts={lefts} />
      </Wrapper>
      <NWrapper>
        <Rectangle20 />
        <NCharacter>ㄴ</NCharacter>
        <NMyComponent ntops={ntops} nlefts={nlefts} />
      </NWrapper>
      <DWrapper>
        <Rectangle21 />
        <DCharacter>ㄷ</DCharacter>
        <DMyComponent dtops={dtops} dlefts={dlefts} />
      </DWrapper>
      <LWrapper>
        <Rectangle22 />
        <LCharacter>ㄹ</LCharacter>
        <LMyComponent ltops={ltops} llefts={llefts} />
      </LWrapper>
      <MWrapper>
        <MRectangle/>
        <MCharacter>ㅁ</MCharacter>
        <MMyComponent mtops={mtops} mlefts={mlefts} />
      </MWrapper>
      <BWrapper>
        <BRectangle/>
        <BCharacter>ㅂ</BCharacter>
        <BMyComponent btops={btops} blefts={blefts} />
      </BWrapper>
      <SWrapper>
        <SRectangle/>
        <SCharacter>ㅅ</SCharacter>
        <SMyComponent stops={stops} slefts={slefts} />
      </SWrapper>
      <IWrapper>
        <IRectangle/>
        <ICharacter>ㅇ</ICharacter>
        <IMyComponent itops={itops} ilefts={ilefts} />
      </IWrapper>
      <JWrapper>
        <JRectangle/>
        <JCharacter>ㅈ</JCharacter>
        <JMyComponent jtops={jtops} jlefts={jlefts} />
      </JWrapper>
      <CWrapper>
        <CRectangle/>
        <CCharacter>ㅊ</CCharacter>
        <CMyComponent ctops={ctops} clefts={clefts} />
      </CWrapper>
        <KWrapper>
    <KRectangle />
    <KCharacter>ㅋ</KCharacter>
    <KMyComponent ktops={ktops} klefts={klefts} />
  </KWrapper>
  <TWrapper>
  <TRectangle />
  <TCharacter>ㅌ</TCharacter>
  <TMyComponent ttops={ttops} tlefts={tlefts} />
</TWrapper>
<PWrapper>
  <PRectangle />
  <PCharacter>ㅍ</PCharacter>
  <PMyComponent ptops={ptops} plefts={plefts} />
</PWrapper>
<HWrapper>
  <HRectangle />
  <HCharacter>ㅎ</HCharacter>
  <HMyComponent htops={htops} hlefts={hlefts} />
</HWrapper>
<SPWrapper>
  <SPRectangle />
  <SPCharacter>***</SPCharacter>
  <SPMyComponent sptops={sptops} splefts={splefts} />
</SPWrapper>
</Container>


      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>

    </Container>
   
  );
};




export default Page3;
