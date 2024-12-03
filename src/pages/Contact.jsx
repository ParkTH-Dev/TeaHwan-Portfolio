import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";

import { FiGithub } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import Button from "../components/Button";
import NextChapter from "../components/NextChapter";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  @media (max-width: 768px) {
    height: 100%;
  }
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
    flex-direction: column;
    margin-top: 150px;
    margin-bottom: 100px;
  }
`;

const TitleWrap = styled.div`
  position: absolute;
  top: 120px;
  width: 100%;

  @media (max-width: 768px) {
    top: 40px;
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

const Items = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  @media (max-width: 1200px) {
    gap: 10px;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  @media (max-width: 500px) {
    align-items: flex-start;
    margin-left: 0;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  span {
    font-size: 20px;
    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      /* font-size: 14px; */
    }
  }
`;
const Icon = styled(motion.div)`
  width: 70px;
  height: 70px;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
  &:hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
  }
  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
    svg {
      font-size: 20px;
    }
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
    bottom: 20px;
    left: 20px;
    font-size: 16px;
  }
`;

const PageNumber = styled.div``;

const FormWrapper = styled.form`
  flex: 1.5;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;
  @media (max-width: 1200px) {
    max-width: 600px;
  }
  @media (max-width: 500px) {
    max-width: 400px;
    gap: 20px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Label = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 15px 0;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #000;
  background: none;
  outline: none;
  &::placeholder {
    transition: all 0.3s;
    color: #666;
  }
  &:focus {
    border-bottom: 2px solid #000;
    &::placeholder {
      opacity: 0;
    }
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #000 !important;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    background: none !important;
  }
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #000 !important;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    background: none !important;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

const TextArea = styled.textarea`
  padding: 15px 0;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #000;
  background: transparent;
  outline: none;
  resize: none;
  min-height: 150px;
  &::placeholder {
    transition: all 0.3s;
    color: #666;
  }
  &:focus {
    border-bottom: 2px solid #000;
    &::placeholder {
      opacity: 0;
    }
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    min-height: 100px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;

  margin-top: 20px;
  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;

const LoadingSpinner = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  margin-left: 10px;
`;

const MessageBox = styled(motion.div)`
  text-align: center;
  color: ${(props) => (props.isError ? "red" : "green")};
  padding: 10px;
  border-radius: 5px;
`;

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [typedEmail, setTypedEmail] = useState("");
  const emailPlaceholder = "xotj2635@naver.com";
  const [typedGithub, setTypedGithub] = useState("");
  const githubPlaceholder = "https://github.com/ParkTH-Dev";

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (contentInView) {
      setStartTyping(true);
    }
  }, [contentInView]);

  useEffect(() => {
    if (!startTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= emailPlaceholder.length) {
        setTypedEmail(emailPlaceholder.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [startTyping]);

  useEffect(() => {
    if (!startTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= githubPlaceholder.length) {
        setTypedGithub(githubPlaceholder.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [startTyping]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_avdc0as",
        "template_d04oaiy",
        form.current,
        "GBUsQ34dBWfLuVpbq"
      )
      .then(
        () => {
          setMessage("메시지가 성공적으로 전송되었습니다!");
          setIsError(false);
          form.current.reset();
        },
        () => {
          setMessage("메시지 전송에 실패했습니다. 다시 시도해주세요.");
          setIsError(true);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Wrapper>
      <Inner>
        <TitleWrap>
          <TitleInner>
            <SubTitle>Let me know your thoughts</SubTitle>
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
              CONTACT
            </BackgroundText>
            <Title>CONTACT</Title>
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
            delay: 0.3,
          }}
        >
          <FormWrapper ref={form} onSubmit={sendEmail}>
            <InputGroup>
              <InputWrapper>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Your e-mail"
                  required
                />
              </InputWrapper>
            </InputGroup>
            <InputWrapper>
              <Label>Message</Label>
              <TextArea name="message" placeholder="Your message" required />
            </InputWrapper>
            <ButtonWrapper>
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? (
                  <>
                    Sending
                    <LoadingSpinner
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </ButtonWrapper>
            <AnimatePresence>
              {message && (
                <MessageBox
                  isError={isError}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message}
                </MessageBox>
              )}
            </AnimatePresence>
          </FormWrapper>
          <Items>
            <Item>
              <Icon whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <HiOutlineMailOpen />
              </Icon>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: contentInView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {typedEmail}
              </motion.span>
            </Item>
            <Item>
              <Icon whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <a href="https://github.com/ParkTH-Dev">
                  <FiGithub />
                </a>
              </Icon>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: contentInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {typedGithub}
              </motion.span>
            </Item>
          </Items>
        </Content>
      </Inner>
      <Footer>
        <PageNumber>06/06</PageNumber>
        <NextChapter to="top" />
      </Footer>
    </Wrapper>
  );
};

export default Contact;
