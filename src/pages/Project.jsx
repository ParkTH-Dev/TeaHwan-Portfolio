import { useState, useEffect, lazy, Suspense } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../components/SlideBtn";
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
  margin: 0 auto;
  position: relative;
  margin-top: 300px;
  margin-bottom: 200px;
  @media (max-width: 1200px) {
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    margin-top: 150px;
    margin-bottom: 150px;
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
const Footer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    left: 20px;
  }
`;
const PageNumber = styled.div``;

const ProjectContainer = styled(Slider)`
  width: 100%;
  margin-top: 15px;
  .slick-list {
    /* overflow: hidden; */
    padding-top: 20px;
  }
  .slick-slide {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    &.slick-active {
      opacity: 1;
    }
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
  @media (max-width: 768px) {
    .slick-dots {
      bottom: -40px;
    }
  }
`;

const ProjectCard = styled.div`
  flex: 1;
  position: relative;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease;
  }
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(0);
    }
  }
`;

const ProjectImage = styled.img.attrs({
  loading: "eager",
  decoding: "async",
})`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 3px;
    }
  }
`;

const CategoryTab = styled.button`
  color: ${({ theme }) => theme.textColor};
  padding: 10px 20px;
  border: none;
  background: ${(props) =>
    props.$active ? "rgba(0, 0, 0, 0.2)" : "transparent"};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    white-space: nowrap;
  }
`;

const ProjectModal = lazy(() => import("../components/ProjectModal"));

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sliderRef, setSliderRef] = useState(null);
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('[aria-hidden="true"]');
    hiddenElements.forEach((el) => {
      el.setAttribute("inert", "");
      el.removeAttribute("aria-hidden");
    });
  }, []);

  const activeProjects =
    activeCategory === "All"
      ? projects.flatMap((p) => p.items)
      : projects.find((p) => p.category === activeCategory)?.items || [];

  const settings = {
    dots: activeCategory !== "All",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: window.innerWidth > 768 ? <NextArrow /> : null,
    prevArrow: window.innerWidth > 768 ? <PrevArrow /> : null,
    accessibility: false,
    focusOnSelect: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 5,
    swipeEvent: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          initialSlide: 0,
          accessibility: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          initialSlide: 0,
          swipe: true,
          swipeToSlide: true,
          touchThreshold: 5,
          accessibility: false,
          verticalSwiping: false,
          draggable: true,
        },
      },
    ],
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = projects.flatMap((category) =>
        category.items.map((project) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = project.image;
          });
        })
      );

      Promise.all(imagePromises).catch((error) =>
        console.error("이미지 프리로딩 중 오류:", error)
      );
    };

    if (projects.length > 0) {
      preloadImages();
    }
  }, [projects]);

  const handleCategoryChange = (category) => {
    const currentProjects =
      projects.find((p) => p.category === category)?.items || [];
    currentProjects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });

    setActiveCategory(category);
    if (sliderRef) {
      sliderRef.slickGoTo(0);
    }
  };

  return (
    <Wrapper>
      <Inner>
        <TitleWrap>
          <TitleInner>
            <SubTitle>Check out my projects</SubTitle>
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
              PROJECT
            </BackgroundText>
            <Title>PROJECT</Title>
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
          <CategoryTabs>
            <CategoryTab
              $active={activeCategory === "All"}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </CategoryTab>
            {projects.map((project) => (
              <CategoryTab
                key={project.category}
                $active={activeCategory === project.category}
                onClick={() => handleCategoryChange(project.category)}
              >
                {project.category}
              </CategoryTab>
            ))}
          </CategoryTabs>
          <ProjectContainer ref={setSliderRef} {...settings}>
            {activeProjects.map((project) => (
              <ProjectCard
                key={project.id}
                onClick={() => handleProjectClick(project)}
                tabIndex={0}
              >
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <p>{project.subTitle}</p>
                  <TagContainer>
                    {project.tags.slice(0, 3).map((tag, index) => (
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
        <Suspense
          fallback={
            <LoadingWrapper>
              <LoadingSpinner />
            </LoadingWrapper>
          }
        >
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </Suspense>
      )}
    </Wrapper>
  );
};

export default Project;
