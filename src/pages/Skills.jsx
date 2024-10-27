import styled from "styled-components";

// 이미지 가져오기 (Vite 환경 가정)
const skillImages = import.meta.glob("/public/img/skills/*.png", {
  eager: true,
});

// Styled Components
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
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
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

const SubTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
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

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const SkillIcon = styled.img`
  cursor: pointer;
  width: 60px;
  height: 60px;
  object-fit: contain;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
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

// Skills 컴포넌트
const Skills = () => {
  const skillCategories = [
    { name: "백엔드 및 데이터베이스", skills: ["nodejs", "firebase"] },
    {
      name: "상태 관리 및 데이터 통신",
      skills: ["redux", "recoil", "graphql"],
    },
    { name: "스타일링 도구", skills: ["sass", "styledcomponents", "tailwind"] },
    { name: "개발 및 협업 도구", skills: ["vite", "github", "git", "figma"] },
    {
      name: "프론트엔드",
      skills: ["html", "css", "JavaScript", "react", "typescript", "nextjs"],
    },
  ];

  return (
    <Wrapper>
      <Inner>
        <Content>
          <TitleWrap>
            <TitleInner>
              <SubTitle>Some Word About Me</SubTitle>
              <BackgroundText>SKILLS</BackgroundText>
              <Title>SKILLS</Title>
            </TitleInner>
            <TitleBar />
          </TitleWrap>

          <SkillsContainer>
            {skillCategories.map((category, index) => (
              <Category key={index}>
                <CategoryName>#{category.name}</CategoryName>
                <SkillIcons>
                  {category.skills.map((skill, skillIndex) => {
                    const image = Object.values(skillImages).find((img) =>
                      img.default.toLowerCase().includes(skill.toLowerCase())
                    )?.default;
                    return (
                      <SkillIcon
                        key={skillIndex}
                        src={image || ""}
                        alt={skill}
                        title={skill}
                      />
                    );
                  })}
                </SkillIcons>
              </Category>
            ))}
          </SkillsContainer>
        </Content>
        <Footer>
          <PageNumber>03/06</PageNumber>
          <NextChapter>Next Chapter</NextChapter>
        </Footer>
      </Inner>
    </Wrapper>
  );
};

export default Skills;
