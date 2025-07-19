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
  background: ${({ theme }) => theme.cardColor}60;
  padding: 30px;
  border-radius: 10px;
  @media (max-width: 768px) {
    gap: 15px;
    padding: 20px;
  }
`;

const DescriptionTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.3;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
    line-height: 1.4;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;
  width: 90%;
  text-align: justify;
  word-break: keep-all;
  word-wrap: break-word;

  b {
    font-weight: bold;
    display: inline-block;
    transition: all 0.2s ease;
    font-size: 20px;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    line-height: 1.7;
    font-size: 16px;
    text-align: left;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 150px;
  font-size: 18px;
  gap: 10px;
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
    font-size: 14px;
  }
`;

const InfoValue = styled.span`
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    /* transform: scale(1.05); */
    /* font-weight: bold; */
  }
  @media (max-width: 768px) {
    width: 80%;
    line-height: 1.5;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 25px;
  padding: 15px;
  border-left: 3px solid ${({ theme }) => theme.accentColor};
  background: ${({ theme }) => theme.cardColor}30;
  border-radius: 0 8px 8px 0;
  transition: all 0.3s ease;
  transform: translateY(0);
  pointer-events: auto;
  position: relative;
  z-index: 1;

  &:hover {
    background: ${({ theme }) => theme.cardColor}50;
    transform: translateX(5px) translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    z-index: 10;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 12px;

    &:hover {
      transform: translateX(3px) translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }
  }
`;

const ExperiencePeriod = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.accentColor};
  font-weight: 600;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExperienceCompany = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 3px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ExperienceRole = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor}cc;
  font-weight: 500;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ExperienceDetail = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textColor}aa;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
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
    font-size: 16px;
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
            <SubTitle>Let me introduce myself</SubTitle>
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
              ABOUT ME
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
              안녕하세요, 복잡한 문제를 사용자 친화적인 화면으로 푸는 개발자
              박태환입니다.
            </DescriptionTitle>
            <Description>
              온라인 쇼핑몰을 운영하며 <b>사용자의 시선</b>을 배웠고,
              <br />
              현재는 기업용 WMS 시스템을 유지보수하며{" "}
              <b>현장의 흐름과 데이터를 다루는 프론트엔드 개발</b>을 경험하고
              있습니다. <br />
              실시간 재고 관리, 송장 처리, 피킹/출고 화면 등<br />
              <b>NextJS, TypeScript, MUI</b>를 기반으로 복잡한 업무 흐름을 UI에
              녹이는 작업을 맡고 있으며, <br />
              백엔드와의 협업, 도메인 이해, 사용자 중심의 화면 설계를 고민하며
              성장 중입니다. <br />
              저는 기술보다 사람을, 화면보다 흐름을 먼저 생각하는 개발자입니다.
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
            <InfoItem>
              <InfoLabel>경력사항:</InfoLabel>
              <InfoValue style={{ pointerEvents: "none" }}>
                <ExperienceItem>
                  <ExperiencePeriod>2018.04 ~ 2019.04</ExperiencePeriod>
                  <ExperienceCompany>㈜그린광학</ExperienceCompany>
                  <ExperienceRole>신소재 개발 및 생산 관리</ExperienceRole>
                  <ExperienceDetail>
                    - 품질 관리 및 공정 개선 업무 수행
                  </ExperienceDetail>
                </ExperienceItem>

                <ExperienceItem>
                  <ExperiencePeriod>2022.09 ~ 2023.11</ExperiencePeriod>
                  <ExperienceCompany>에스티디컴퍼니</ExperienceCompany>
                  <ExperienceRole>온라인 쇼핑몰 창업 및 운영</ExperienceRole>
                  <ExperienceDetail>
                    - 제품 기획, 상세페이지 디자인, 마케팅, 고객 CS 등 전반적인
                    운영 경험
                    <br />- 사용자 행동 데이터를 분석하여 구매 전환율 향상
                  </ExperienceDetail>
                </ExperienceItem>

                <ExperienceItem>
                  <ExperiencePeriod>2025.03 ~ 재직 중</ExperiencePeriod>
                  <ExperienceCompany>초록마을</ExperienceCompany>
                  <ExperienceRole>
                    WMS(물류관리시스템) 프론트엔드 개발
                  </ExperienceRole>
                  <ExperienceDetail>
                    - NextJS, TypeScript, MUI 기반의 출고, 송장, 재고 실사 등
                    핵심 화면 유지보수 및 기능 개선
                    <br />
                    - 물류 도메인 이해를 바탕으로 사용자 흐름과 데이터를 고려한
                    UI 설계 및 협업
                    <br />- 백엔드(Golang)와 연계된 API 구조 분석 및 에러 대응
                    경험 보유
                  </ExperienceDetail>
                </ExperienceItem>
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
