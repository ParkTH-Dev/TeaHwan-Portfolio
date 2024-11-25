import { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../components/SlideBtn";
import NextChapter from "../components/NextChapter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../components/Button";

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
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// 콘텐츠 섹션
const Content = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 300px;
  margin-bottom: 200px;
  @media (max-width: 1200px) {
    margin-top: 200px;
  }
  @media (max-width: 768px) {
    margin: 150px 0;
  }
`;

// 새로운 슬라이더 스타일 컴포넌트 추가
const ProjectContainer = styled(Slider)`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-top: 15px;
  position: relative;
  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    padding: 0 10px;
    > div {
      width: 100%;
    }
  }

  .slick-track {
    display: flex;
    width: 100%;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 40px;
    height: 40px;
    @media (max-width: 768px) {
      display: none;
    }
    &:before {
      display: none;
    }
  }

  .slick-dots {
    bottom: -60px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: black;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// 제목 섹션 스타일
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

// 아이템 섹션 스타일
const ItemsWrap = styled.div`
  height: 100%;
  @media (max-width: 1000px) {
    max-height: 100%;
  }
`;

const Items = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    min-height: auto;
    gap: 15px;
  }
`;

const ItemLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  @media (max-width: 1000px) {
    gap: 15px;
  }
`;

// 왼쪽 아이템 스타일
const LeftFirstItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  flex: 1;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const LeftSecondItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ItemTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 15px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ItemDesc = styled.div`
  font-size: 14px;
  line-height: 2;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// 오른쪽 아이템 스타일
const ItemRight = styled.div`
  flex: 2;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 100%;
  padding: 20px;
  width: 100%;

  @media (max-width: 1000px) {
    flex: 1;
  }
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const RightImgWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column-reverse;
  width: 100%;

  @media (max-width: 1000px) {
    gap: 15px;
  }
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  max-height: 400px;
  @media (max-width: 768px) {
    max-height: 300px;
  }
  @media (max-width: 600px) {
    max-height: 200px;
  }
`;

const FirstImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1000px) {
    gap: 15px;
  }
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const SecondImage = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  padding: 5px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Thumbnail = styled.img`
  min-width: 80px;
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1000px) {
    min-width: 70px;
    width: 70px;
    height: 70px;
  }

  @media (max-width: 600px) {
    min-width: 60px;
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }
`;

const RightDesc = styled.div`
  width: 100%;
  gap: 10px;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 15px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 12px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    margin-top: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin: 30px 0;
  @media (max-width: 768px) {
    /* margin-top: 0; */
    /* padding-bottom: 20px; */
  }
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
  @media (max-width: 768px) {
    left: 20px;
    font-size: 16px;
  }
`;

const PageNumber = styled.div``;

// 메인 컴포넌트
const TeamProject = () => {
  const [projects, setProjects] = useState([]);
  const [selectedImages, setSelectedImages] = useState({});
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
        const response = await fetch("/teamProjects.json");
        const data = await response.json();
        setProjects(data.teamProjects);

        const initialSelectedImages = {};
        data.teamProjects.forEach((project) => {
          initialSelectedImages[project.id] = project.thumbnails[0];
        });
        setSelectedImages(initialSelectedImages);

        // 슬라이더를 첫 번째 슬라이드로 이동
        if (sliderRef) {
          sliderRef.slickGoTo(0);
        }
      } catch (error) {
        console.error("팀 프로젝트 데이터를 불러오는데 실패했습니다:", error);
      }
    };
    fetchProjects();
  }, [sliderRef]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 0,
          swipe: true,
        },
      },
    ],
  };

  const handleThumbnailClick = (projectId, newImage) => {
    setSelectedImages((prev) => ({
      ...prev,
      [projectId]: newImage,
    }));
  };

  if (!projects) return null;

  return (
    <Wrapper>
      <Inner>
        {/* 제목 섹션 */}
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
              TEAM PROJECT
            </BackgroundText>
            <Title>TEAM PROJECT</Title>
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
          <ProjectContainer ref={setSliderRef} {...sliderSettings}>
            {projects.map((project) => (
              <ItemsWrap key={project.id}>
                <Items>
                  <ItemLeft>
                    <LeftFirstItem>
                      <ItemTitle>프로젝트 정보</ItemTitle>
                      <ItemDesc>
                        <div>프로젝트 이름: {project.title}</div>
                        <div>팀 규모: {project.teamSize}</div>
                        <div>제작 기간: {project.updated}</div>
                        <div>카테고리: {project.category}</div>
                        <div>기여: {project.contribute}</div>
                        <div>기술스택: </div>
                        <div>{project.tags}</div>
                      </ItemDesc>
                    </LeftFirstItem>
                    <LeftSecondItem>
                      <ItemTitle>기여도</ItemTitle>
                      {/* <ItemDesc>{project.description}</ItemDesc> */}
                    </LeftSecondItem>
                  </ItemLeft>
                  <ItemRight>
                    <RightImgWrap>
                      <FirstImage>
                        <MainImage
                          src={selectedImages[project.id] || project.mainImage}
                          alt="Main Project"
                        />
                        <RightDesc>{project.description}</RightDesc>
                      </FirstImage>
                      <SecondImage>
                        {project.thumbnails.map((thumb, index) => (
                          <Thumbnail
                            key={index}
                            src={thumb}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() =>
                              handleThumbnailClick(project.id, thumb)
                            }
                          />
                        ))}
                      </SecondImage>
                    </RightImgWrap>
                  </ItemRight>
                </Items>
                <ButtonGroup>
                  <Button
                    onClick={() => window.open(project.demo)}
                    variant="primary"
                  >
                    사이트 보러가기
                  </Button>
                  <Button
                    onClick={() => window.open(project.github)}
                    variant="secondary"
                  >
                    Git-Hub
                  </Button>
                </ButtonGroup>
              </ItemsWrap>
            ))}
          </ProjectContainer>
        </Content>
        <Footer>
          <PageNumber>05/06</PageNumber>
          <NextChapter to="contact" />
        </Footer>
      </Inner>
    </Wrapper>
  );
};

export default TeamProject;
