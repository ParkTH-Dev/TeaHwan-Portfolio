import styled from "styled-components";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ModalContent = styled(motion.div)`
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
  z-index: 10001;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
    padding: 20px;
    gap: 20px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.textColor}20;
      border-radius: 4px;
    }
    position: relative;
  }
`;

const InfoWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImageWrap = styled(motion.div)`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: 300px;
    min-height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
  cursor: pointer;
  overflow: hidden;
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
  z-index: 10002;

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

const TechStack = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const TechBadge = styled(motion.span)`
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
    <AnimatePresence>
      <ModalOverlay
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ModalContent
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <ImageWrap
            whileHover={{ scale: 1.02 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <motion.img
              src={image}
              alt={title}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </ImageWrap>

          <InfoWrap>
            <TitleWrap>
              <CloseButton onClick={onClose}>×</CloseButton>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectPeriod>{subTitle}</ProjectPeriod>
              </motion.div>

              <TechStack>
                {tags.map((tech, index) => (
                  <TechBadge
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {tech}
                  </TechBadge>
                ))}
              </TechStack>
            </TitleWrap>

            <Section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <SectionTitle>프로젝트 설명</SectionTitle>
                <SectionContent>{description}</SectionContent>
              </motion.div>
            </Section>

            <ButtonGroup>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => window.open(demo)}
                  variant="primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  사이트 보러가기
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={() => window.open(github)}
                  variant="secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Git-Hub
                </Button>
              </motion.div>
            </ButtonGroup>
          </InfoWrap>
        </ModalContent>
      </ModalOverlay>
    </AnimatePresence>
  );
};

export default ProjectModal;
