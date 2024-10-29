import { useState, useEffect } from "react";
import styled from "styled-components";

// Wrapper 스타일
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

// Inner 컨테이너
const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
`;

// 콘텐츠 섹션
const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 300px;
  margin-bottom: 200px;
`;

// 제목 섹션 스타일
const TitleWrap = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
`;

const TitleInner = styled.div`
  margin-left: 33px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const BackgroundText = styled.div`
  position: absolute;
  font-size: 100px;
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

// 아이템 섹션 스타일
const ItemsWrap = styled.div`
  max-height: 700px;
  /* height: 100%; */
`;

const Items = styled.div`
  display: flex;

  gap: 20px;
`;

const ItemLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// 왼쪽 아이템 스타일
const LeftFirstItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px;
`;

const LeftSecondItem = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ItemTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 15px 0;
  margin-bottom: 10px;
  width: 80%;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
`;

const ItemDesc = styled.div`
  font-size: 16px;
  width: 80%;
`;

// 오른쪽 아이템 스타일
const ItemRight = styled.div`
  flex: 3;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 100%;
  padding: 20px;
`;

const RightImgWrap = styled.div`
  display: flex;

  gap: 20px;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const FirstImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 3;
`;

const SecondImage = styled.div`
  flex: 1;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 100%;
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

const RightDesc = styled.div`
  width: 100%;
  gap: 10px;
  font-size: 16px;
`;

// 푸터 스타일
const Footer = styled.div`
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

// 메인 컴포넌트
const TeamProject = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/teamProjects.json");
        const data = await response.json();
        setProject(data.teamProjects[0]);
      } catch (error) {
        console.error("팀 프로젝트 데이터를 불러오는데 실패했습니다:", error);
      }
    };
    fetchProject();
  }, []);

  if (!project) return null;

  return (
    <Wrapper>
      <Inner>
        {/* 제목 섹션 */}
        <TitleWrap>
          <TitleInner>
            <SubTitle>Some Word About Me</SubTitle>
            <BackgroundText>TEAM PROJECT</BackgroundText>
            <Title>TEAM PROJECT</Title>
          </TitleInner>
          <TitleBar />
        </TitleWrap>

        {/* 콘텐츠 섹션 */}
        <Content>
          <ItemsWrap>
            <Items>
              {/* 왼쪽 아이템들 */}
              <ItemLeft>
                <LeftFirstItem>
                  <ItemTitle>Article Information</ItemTitle>
                  <ItemDesc>
                    <div>Category: {project.category}</div>
                    <div>Updated: {project.updated}</div>
                    <div>Author: {project.author}</div>
                    <div>Reading Time: {project.readingTime}</div>
                  </ItemDesc>
                </LeftFirstItem>
                <LeftSecondItem>
                  <ItemTitle>Article Information</ItemTitle>
                  <ItemDesc>{project.description}</ItemDesc>
                </LeftSecondItem>
              </ItemLeft>

              {/* 오른쪽 아이템 */}
              <ItemRight>
                <RightImgWrap>
                  <FirstImage>
                    <MainImage src={project.mainImage} alt="Main Project" />
                    <RightDesc>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas inventore beatae eaque dolores molestias aut ducimus
                      aspernatur ea maxime laudantium asperiores, cumque quaerat
                      nisi nostrum expedita ullam omnis sunt repellat!
                      aspernatur ea maxime laudantium asperiores, cumque quaerat
                      nisi nostrum expedita ullam omnis sunt repellat!{" "}
                      {/* 생략 */}
                    </RightDesc>
                  </FirstImage>
                  <SecondImage>
                    {project.thumbnails.map((thumb, index) => (
                      <Thumbnail
                        key={index}
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                      />
                    ))}
                  </SecondImage>
                </RightImgWrap>
              </ItemRight>
            </Items>
          </ItemsWrap>
        </Content>

        {/* 푸터 섹션 */}
        <Footer>
          <PageNumber>05/06</PageNumber>
          <NextChapter>Next Chapter</NextChapter>
        </Footer>
      </Inner>
    </Wrapper>
  );
};

export default TeamProject;
