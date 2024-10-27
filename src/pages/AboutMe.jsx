import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
  z-index: 0;
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
  font-size: 40px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const DescriptionTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  width: 80%;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  font-size: 20px;
`;

const InfoItem = styled.div``;

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

const NextChapter = styled.div`
  font-weight: bold;
  &::after {
    content: " →";
  }
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <Inner>
        <Content>
          <TitleWrap>
            <TitleInner>
              <SubTitle>Some Word About Me</SubTitle>
              <BackgroundText>ABOUT ME</BackgroundText>
              <Title>ABOUT ME</Title>
            </TitleInner>
            <TitleBar />
          </TitleWrap>
          <DescriptionWrap>
            <DescriptionTitle>
              안녕하세요 프론트엔드 개발자를 꿈꾸는 박태환입니다.
            </DescriptionTitle>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              dolorem, deleniti sequi asperiores voluptate illo earum hic,
              perferendis neque beatae doloremque doloribus eveniet minima fuga
              in nesciunt ex sint sapiente! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Iusto, at molestiae alias dolores,
              explicabo saepe veniam ullam aliquam possimus minus, repellendus
              inventore perferendis ad impedit aspernatur a quas numquam
              eveniet?
            </Description>
            <InfoGrid>
              <InfoItem>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>xxx12345@naver.com</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Date of Birth:</InfoLabel>
                <InfoValue>11 November, 1987</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>Los Angeles, California</InfoValue>
              </InfoItem>
            </InfoGrid>
          </DescriptionWrap>
        </Content>
        <Footer>
          <PageNumber>02/06</PageNumber>
          <NextChapter>Next Chapter</NextChapter>
        </Footer>
      </Inner>
    </Wrapper>
  );
};

export default AboutMe;
