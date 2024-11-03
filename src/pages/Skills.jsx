import styled from "styled-components";
import NextChapter from "../components/NextChapter";
import SkillModal from "../components/SkillModal";
import { useState } from "react";

// SVG 이미지 가져오기 (Vite 환경 가정)
const skillImages = import.meta.glob("/src/assets/skills/*.svg", {
  eager: true,
  import: "default",
});

// Styled Components
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
  height: 60%;
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 300px;
  margin-bottom: 200px;
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

const SkillsInfo = styled.div`
  width: 100%;
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillsWrap = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 30px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CategoryName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SkillIcons = styled.div`
  min-width: 60px;
  min-height: 60px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

const SkillIcon = styled.img`
  cursor: pointer;
  width: 80px;
  height: 80px;
  object-fit: cover;
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

// Skills 컴포넌트
const Skills = () => {
  const skillCategories = [
    { name: "백엔드 및 데이터베이스", skills: ["nodejs", "firebase"] },
    { name: "스타일링 도구", skills: ["sass", "styledcomponents", "tailwind"] },
    { name: "개발 및 협업 도구", skills: ["vite", "github", "git", "figma"] },
    {
      name: "상태 관리 및 데이터 통신",
      skills: ["recoil", "reactquery", "redux", "graphql"],
    },
    {
      name: "프론트엔드",
      skills: ["javascript", "react", "typescript", "nextjs"],
    },
  ];

  // SVG 이미지 가져오기
  const defaultImage = Object.values(skillImages).find((img) =>
    img.toLowerCase().includes("javascript")
  );

  const [selectedSkill, setSelectedSkill] = useState({
    name: "JAVASCRIPT",
    image: defaultImage,
  });

  return (
    <Wrapper>
      <Inner>
        <TitleWrap>
          <TitleInner>
            <SubTitle>Some Word About Me</SubTitle>
            <BackgroundText>SKILLS</BackgroundText>
            <Title>SKILLS</Title>
          </TitleInner>
          <TitleBar />
        </TitleWrap>
        <Content>
          <SkillsInfo>
            <SkillModal
              skill={selectedSkill.name}
              image={selectedSkill.image}
            />
          </SkillsInfo>
          <SkillsWrap>
            {skillCategories.map((category, index) => (
              <Category key={index}>
                <CategoryName>#{category.name}</CategoryName>
                <SkillIcons>
                  {category.skills.map((skill, skillIndex) => {
                    const image = Object.values(skillImages).find((img) =>
                      img.toLowerCase().includes(skill.toLowerCase())
                    );
                    return (
                      <SkillIcon
                        key={skillIndex}
                        src={image || ""}
                        alt={skill}
                        title={skill}
                        onClick={() => setSelectedSkill({ name: skill, image })}
                      />
                    );
                  })}
                </SkillIcons>
              </Category>
            ))}
          </SkillsWrap>
        </Content>
        <Footer>
          <PageNumber>03/06</PageNumber>
          <NextChapter to="project" />
        </Footer>
      </Inner>
    </Wrapper>
  );
};

export default Skills;
