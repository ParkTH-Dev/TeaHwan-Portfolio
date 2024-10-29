import { useState, useEffect } from "react";
import styled from "styled-components";
import sample from "/img/sample.png";
import Button from "../components/Button"; // 버튼 컴포넌트 임포트

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

const Left = styled.div`
  flex: 2;

  margin-left: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.h2`
  line-height: 1.3;
  font-size: 70px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span:last-child::after {
    content: "|";
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 100px;
`;

const ButtotWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  @media (max-width: 1550px) {
    margin-right: 30px;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 350px;
  min-height: 350px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 40px;
  left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 20px;
`;

const PageNumber = styled.div``;

const NextChapter = styled.div`
  font-weight: bold;
  &::after {
    content: " →";
  }
`;

const Top = () => {
  const [text, setText] = useState("");
  const fullText = "Front-End Developer\n박태환입니다.";
  const typingSpeed = 100; // 타이핑 속도 (밀리초)
  const pauseDuration = 2000; // 루프 전 대기 시간 (밀리초)

  useEffect(() => {
    let timer;
    let currentIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        timer = setTimeout(typeText, typingSpeed);
      } else if (isDeleting && currentIndex > 0) {
        setText(fullText.slice(0, currentIndex - 1));
        currentIndex--;
        timer = setTimeout(typeText, typingSpeed / 2);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        timer = setTimeout(typeText, pauseDuration);
      } else {
        isDeleting = true;
        timer = setTimeout(typeText, pauseDuration);
      }
    };

    typeText();

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <Wrapper>
      <Inner>
        <Left>
          <Title>
            {text.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </Title>
          <SubTitle>안녕하세요. 블라블라</SubTitle>
          <ButtotWrap>
            <Button onClick={handleClick} variant="primary">
              Project
            </Button>
            <Button onClick={handleClick} variant="secondary">
              Contact
            </Button>
          </ButtotWrap>
        </Left>
        <Right>
          <ImgWrapper>
            <Img src={sample} alt="" />
          </ImgWrapper>
        </Right>
        <Footer>
          <PageNumber>01/06</PageNumber>
          <NextChapter>Next Chapter</NextChapter>
        </Footer>
      </Inner>
    </Wrapper>
  );
};

export default Top;
