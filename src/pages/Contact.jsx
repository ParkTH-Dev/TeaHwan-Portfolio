import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #000;
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
const Contact = () => {
  return (
    <Wrapper>
      <Inner>
        <Content>
          <TitleWrap>
            <TitleInner>
              <SubTitle>Some Word About Me</SubTitle>
              <BackgroundText>CONTACT</BackgroundText>
              <Title>CONTACT</Title>
            </TitleInner>
            <TitleBar />
          </TitleWrap>
        </Content>
      </Inner>
      <Footer>
        <PageNumber>06/06</PageNumber>
        <NextChapter>Top</NextChapter>
      </Footer>
    </Wrapper>
  );
};

export default Contact;
