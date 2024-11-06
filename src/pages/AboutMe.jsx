import styled from "styled-components";
import NextChapter from "../components/NextChapter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Content = styled(motion.div)`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 350px;
  @media (max-width: 1200px) {
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    margin-top: 150px;
  }
`;

const SubTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TitleWrap = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
  @media (max-width: 1200px) {
    top: 50px;
  }
`;
const TitleInner = styled.div`
  margin-left: 33px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;
const BackgroundText = styled(motion.div)`
  position: absolute;
  font-size: 130px;
  width: 100%;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.2);
  top: -50px;
  left: 50px;
  z-index: -1;
  @media (max-width: 1200px) {
    font-size: 100px;
  }
  @media (max-width: 768px) {
    font-size: 60px;
    top: -30px;
    left: 20px;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-right: 20px;
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const TitleBar = styled.div`
  position: absolute;
  top: -40px;
  width: 4px;
  height: 150px;
  background-color: black;
  @media (max-width: 1200px) {
    height: 120px;
  }
  @media (max-width: 768px) {
    height: 100px;
    top: -30px;
  }
`;

const DescriptionWrap = styled.div`
  width: 100%;
  height: 100%;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background: ${({ theme }) => theme.cardColor}60;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const DescriptionTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 2.3;
  width: 90%;
  @media (max-width: 768px) {
    line-height: 1.5;
    font-size: 16px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 150px;
  font-size: 20px;
  gap: 20px;
  background: ${({ theme }) => theme.cardColor}60;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-bottom: 100px;
    font-size: 16px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 20px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    margin-bottom: 0;
    width: 20%;
  }
`;

const InfoValue = styled.span`
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Footer = styled.footer`
  z-index: 1;
  position: absolute;
  bottom: 40px;
  left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  @media (max-width: 768px) {
    left: 20px;
  }
`;

const PageNumber = styled.div``;

const AboutMe = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Wrapper>
      <Inner>
        <TitleWrap>
          <TitleInner>
            <SubTitle>Some Word About Me</SubTitle>
            <BackgroundText
              ref={titleRef}
              initial={{ opacity: 0, x: -100 }}
              animate={titleInView ? { opacity: 0.2, x: 0 } : {}}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
            >
              SKILLS
            </BackgroundText>
            <Title>ABOUT ME</Title>
          </TitleInner>
          <TitleBar />
        </TitleWrap>
        <Content
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <DescriptionWrap>
            <DescriptionTitle>
              안녕하세요 프론트엔드 개발자를 꿈꾸는 박태환입니다.
            </DescriptionTitle>
            <Description>
              저는 온라인 사업을 운영하며 소비자의 관점과 니즈를 깊이 이해하게
              되었습니다. 이러한 경험을 바탕으로 사용자 중심의 웹 서비스를
              개발하는 데 열정을 가지고 있습니다. JavaScript, React, TypeScript,
              Next.js 등 다양한 기술을 학습하며 개인 프로젝트를 진행하였고, 팀
              프로젝트를 통해 협업의 중요성을 배웠습니다. 신입 개발자로서
              지속적인 학습과 성장을 통해 계속 발전하고 싶습니다.
            </Description>
          </DescriptionWrap>
          <Info>
            <InfoItem>
              <InfoLabel>이름:</InfoLabel>
              <InfoValue>박태환</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>생년월일:</InfoLabel>
              <InfoValue>99.03.02</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>위치:</InfoLabel>
              <InfoValue>서울특별시 중랑구</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>교육사항:</InfoLabel>
              <InfoValue>
                K-Digital Training(KDT) 기업연계 프론트엔드 개발 수료
              </InfoValue>
            </InfoItem>
          </Info>
        </Content>
        <Footer>
          <PageNumber>02/06</PageNumber>
          <NextChapter to="skills" />
        </Footer>
      </Inner>
    </Wrapper>
  );
};

export default AboutMe;
