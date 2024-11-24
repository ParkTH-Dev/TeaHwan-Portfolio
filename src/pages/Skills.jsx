import styled from "styled-components";
import NextChapter from "../components/NextChapter";
import SkillModal from "../components/SkillModal";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Content = styled(motion.div)`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 300px;
  margin-bottom: 200px;

  @media (max-width: 1200px) {
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    margin-top: 150px;
    margin-bottom: 100px;
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

const TitleBar = styled(motion.div)`
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

const SkillsInfo = styled.div`
  width: 100%;
  margin: auto;
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    position: absolute;
  }
`;

const SkillsWrap = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 20px;
    align-items: center;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CategoryName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SkillIcons = styled.div`
  min-width: 60px;
  min-height: 60px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  @media (max-width: 1200px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const SkillIcon = styled.img`
  cursor: pointer;
  width: 70px;
  height: 70px;
  object-fit: cover;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    /* width: 50px;
    height: 50px; */
  }
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
  @media (max-width: 768px) {
    left: 20px;
  }
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

  // 새로운 방식으로 이미지 매핑
  const skillImages = {
    javascript: "/img/skills/JavaScript.svg",
    react: "/img/skills/React.svg",
    typescript: "/img/skills/TypeScript.svg",
    nextjs: "/img/skills/NextJS.svg",
    nodejs: "/img/skills/NodeJS.svg",
    firebase: "/img/skills/Firebase.svg",
    sass: "/img/skills/Sass.svg",
    styledcomponents: "/img/skills/StyledComponents.svg",
    tailwind: "/img/skills/TailwindCSS.svg",
    vite: "/img/skills/Vite.svg",
    github: "/img/skills/Github.svg",
    git: "/img/skills/Git.svg",
    figma: "/img/skills/Figma.svg",
    recoil: "/img/skills/Recoil.svg",
    reactquery: "/img/skills/Reactquery.svg",
    redux: "/img/skills/Redux.svg",
    graphql: "/img/skills/GraphQL.svg",
  };

  const [selectedSkill, setSelectedSkill] = useState({
    name: "JAVASCRIPT",
    image: skillImages["javascript"],
  });
  const [showMobileModal, setShowMobileModal] = useState(false);

  const handleSkillClick = (skill) => {
    setSelectedSkill({
      name: skill.toUpperCase(),
      image: skillImages[skill.toLowerCase()],
    });
    if (window.matchMedia("(max-width: 768px)").matches) {
      setShowMobileModal(true);
    }
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    Object.values(skillImages).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
            <Title>SKILLS</Title>
          </TitleInner>
          <TitleBar
            initial={{ height: 0 }}
            animate={{
              height:
                window.innerWidth <= 768
                  ? 100
                  : window.innerWidth <= 1200
                  ? 120
                  : 150,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
          />
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
          <SkillsInfo>
            <SkillModal
              skill={selectedSkill.name}
              image={selectedSkill.image}
              isOpen={showMobileModal}
              onClose={() => setShowMobileModal(false)}
            />
          </SkillsInfo>
          <SkillsWrap>
            {skillCategories.map((category, index) => (
              <Category key={index}>
                <CategoryName>#{category.name}</CategoryName>
                <SkillIcons>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillIcon
                      key={skillIndex}
                      src={skillImages[skill.toLowerCase()]}
                      alt={skill}
                      title={skill}
                      onClick={() => handleSkillClick(skill)}
                    />
                  ))}
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
