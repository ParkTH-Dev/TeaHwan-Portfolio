import { useState, useEffect } from "react";
import styled from "styled-components";
import profile from "/img/profile.png";
import Button from "../components/Button";
import NextChapter from "../components/NextChapter";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* position: relative; */
  @media (max-width: 600px) {
    height: 100%;
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Left = styled(motion.div)`
  flex: 2;
  margin-left: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-left: 30px;
  }
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 100px;
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h2`
  line-height: 1.3;
  font-size: 70px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  span:last-child::after {
    content: "|";
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 600px) {
    height: 250px;
    margin-bottom: 0;
    font-size: 50px;
    text-align: center;
  }
`;

const ButtotWrap = styled(motion.div)`
  /* position: relative; */
  margin-top: 20px;
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    margin-top: 0;
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  border-radius: 50%;
  @media (max-width: 1550px) {
    margin-right: 30px;
  }
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 210px;
  }
  position: relative;
`;

const ImgWrapper = styled(motion.div)`
  width: 350px;
  height: 350px;
  overflow: hidden;
  border-radius: 50%;
  border: 7px double ${({ theme }) => theme.textColor};
  @media (max-width: 900px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
    /* width: 220px;
    height: 220px; */
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  @media (max-width: 600px) {
    left: 20px;
    bottom: -30px;
  }
`;

const PageNumber = styled.div``;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.textColor}20;
  backdrop-filter: blur(2px);
`;

const FloatingSquare = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.textColor}40;
  transform: rotate(45deg);
`;

const Top = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend\n Developer\n 박태환입니다.";
  const typingSpeed = 100;
  const pauseDuration = 2000;

  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let timer;
    let currentIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        timer = setTimeout(typeText, typingSpeed);
      } else if (isDeleting && currentIndex > 0) {
        setText(fullText.slice(0, currentIndex - 1));
        currentIndex--;
        timer = setTimeout(typeText, typingSpeed / 2);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        timer = setTimeout(typeText, pauseDuration);
      } else {
        isDeleting = true;
        timer = setTimeout(typeText, pauseDuration);
      }
    };

    typeText();

    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = () => {
    scroller.scrollTo("project", {
      duration: 500,
      smooth: true,
    });
  };

  const handleContactClick = () => {
    scroller.scrollTo("contact", {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <Wrapper>
      <Inner>
        <Left
          ref={leftRef}
          initial={{ opacity: 0, x: -50 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title>
            {text.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </Title>
          <ButtotWrap
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: "easeOut",
            }}
          >
            <Button onClick={handleProjectClick} variant="primary">
              Project
            </Button>
            <Button onClick={handleContactClick} variant="secondary">
              Contact
            </Button>
          </ButtotWrap>
        </Left>
        <Right
          ref={rightRef}
          initial={{ opacity: 0, x: 50 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FloatingElement
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              top: "20%",
              left: "0%",
            }}
          />
          <FloatingSquare
            animate={{
              rotate: [45, 225],
              y: [0, -30],
              x: [0, 20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              top: "50%",
              right: "0%",
            }}
          />
          <FloatingElement
            animate={{
              y: [0, -40],
              x: [0, -20],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              bottom: "20%",
              left: "10%",
              width: "20px",
              height: "20px",
            }}
          />
          <FloatingSquare
            animate={{
              rotate: [45, -145],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              top: "30%",
              right: "20%",
              width: "15px",
              height: "15px",
            }}
          />
          <ImgWrapper>
            <Img src={profile} alt="" />
          </ImgWrapper>
        </Right>
        <Footer>
          <PageNumber>01/06</PageNumber>
          <NextChapter to="about" />
        </Footer>
      </Inner>
    </Wrapper>
  );
};

export default Top;
