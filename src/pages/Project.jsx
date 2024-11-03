import { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../components/SlideBtn";
import NextChapter from "../components/NextChapter";
import ProjectModal from "../components/ProjectModal";

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
  position: relative;
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

const ProjectContainer = styled(Slider)`
  width: 90%;
  margin: 0 auto;
  gap: 30px;
  margin-top: 15px;
  .slick-slide {
    padding: 0 10px;
    display: flex;
    justify-content: center;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-dots {
    bottom: -60px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: black;
  }

  .slick-dots li.slick-active button:before {
  }
`;

const ProjectCard = styled.div`
  flex: 1;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProjectInfo = styled.div`
  margin-top: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.span`
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-size: 14px;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  width: 90%;
  margin: 0 auto;
`;

const CategoryTab = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${(props) =>
    props.$active ? "rgba(0, 0, 0, 0.2)" : "transparent"};
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("TypeScript");
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("프로젝트 데이터를 불러오는데 실패했습니다:", error);
      }
    };
    fetchProjects();
  }, []);

  const activeProjects =
    projects.find((p) => p.category === activeCategory)?.items || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Inner>
        <TitleWrap>
          <TitleInner>
            <SubTitle>Some Word About Me</SubTitle>
            <BackgroundText>PROJECT</BackgroundText>
            <Title>PROJECT</Title>
          </TitleInner>
          <TitleBar />
        </TitleWrap>
        <Content>
          <CategoryTabs>
            {projects.map((project) => (
              <CategoryTab
                key={project.category}
                $active={activeCategory === project.category}
                onClick={() => setActiveCategory(project.category)}
              >
                {project.category}
              </CategoryTab>
            ))}
          </CategoryTabs>
          <ProjectContainer {...settings}>
            {activeProjects.map((project) => (
              <ProjectCard
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <p>{project.description}</p>
                  <TagContainer>
                    {project.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </TagContainer>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectContainer>
        </Content>
        <Footer>
          <PageNumber>04/06</PageNumber>
          <NextChapter to="teamproject" />
        </Footer>
      </Inner>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Wrapper>
  );
};

export default Project;
