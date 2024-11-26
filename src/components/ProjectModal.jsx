import styled from "styled-components";
import Button from "./Button";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  gap: 50px;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  max-width: 1200px;
  height: 600px;
  border-radius: 12px;
  padding: 30px;
  position: relative;
  overflow-y: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    /* overflow-y: scroll; */
    padding: 20px;
    gap: 20px;
  }
`;

const InfoWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
    font-size: 40px;
    width: 50px;
    height: 50px;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ProjectPeriod = styled.p`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

const TechBadge = styled.span`
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-size: 14px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const SectionContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 0;
    padding-bottom: 20px;
  }
`;

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const { title, subTitle, tags, description, demo, github, image } = project;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ImageWrap>
          <img src={image} alt={title} />
        </ImageWrap>
        <InfoWrap>
          <CloseButton onClick={onClose}>×</CloseButton>

          <ProjectTitle>{title}</ProjectTitle>
          <ProjectPeriod>{subTitle}</ProjectPeriod>

          <TechStack>
            {tags.map((tech, index) => (
              <TechBadge key={index}>{tech}</TechBadge>
            ))}
          </TechStack>
          <Section>
            <SectionTitle>프로젝트 설명</SectionTitle>
            <SectionContent>{description}</SectionContent>
          </Section>

          <ButtonGroup>
            <Button onClick={() => window.open(demo)} variant="primary">
              사이트 보러가기
            </Button>
            <Button onClick={() => window.open(github)} variant="secondary">
              Git-Hub
            </Button>
          </ButtonGroup>
        </InfoWrap>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
