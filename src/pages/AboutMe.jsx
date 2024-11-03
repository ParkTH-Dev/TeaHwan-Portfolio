import styled from "styled-components";
import NextChapter from "../components/NextChapter";

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
`;

const Content = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 300px;
  /* justify-content: space-around; */
`;

const SubTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TitleWrap = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
`;
const TitleInner = styled.div`
  margin-left: 33px;
`;
const BackgroundText = styled.div`
  position: absolute;
  font-size: 130px;
  width: 100%;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.2);
  top: -50px;
  left: 50px;
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-right: 20px;
`;

const TitleBar = styled.div`
  position: absolute;
  top: -40px;
  width: 4px;
  height: 150px;
  background-color: black;
`;

const DescriptionWrap = styled.div`
  width: 100%;
  height: 100%;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const DescriptionTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 2;
  width: 90%;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  font-size: 20px;
  gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 20px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const InfoValue = styled.span``;

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

const AboutMe = () => {
  return (
    <Wrapper>
      <Inner>
        <TitleWrap>
          <TitleInner>
            <SubTitle>Some Word About Me</SubTitle>
            <BackgroundText>ABOUT ME</BackgroundText>
            <Title>ABOUT ME</Title>
          </TitleInner>
          <TitleBar />
        </TitleWrap>
        <Content>
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
