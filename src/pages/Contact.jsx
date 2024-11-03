import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

import { FiGithub } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Button from "../components/Button";
import NextChapter from "../components/NextChapter";

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
  margin-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const TitleWrap = styled.div`
  position: absolute;
  top: 120px;
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

const Items = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  span {
    font-size: 20px;
  }
`;
const Icon = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
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
`;

const PageNumber = styled.div``;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
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
`;

const ButtonWrapper = styled.div`
  display: flex;

  margin-top: 20px;
`;

const MessageBox = styled.div`
  text-align: center;
  color: ${(props) => (props.isError ? "red" : "green")};
`;

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_avdc0as", // EmailJS에서 받은 Service ID
        "template_d04oaiy", // EmailJS에서 받은 Template ID
        form.current,
        "GBUsQ34dBWfLuVpbq" // EmailJS에서 받은 Public Key
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
      );
  };

  return (
    <Wrapper>
      <Inner>
        <TitleWrap>
          <TitleInner>
            <SubTitle>Some Word About Me</SubTitle>
            <BackgroundText>CONTACT</BackgroundText>
            <Title>CONTACT</Title>
          </TitleInner>
          <TitleBar />
        </TitleWrap>
        <Content>
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
              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </ButtonWrapper>
            {message && <MessageBox isError={isError}>{message}</MessageBox>}
          </FormWrapper>
          <Items>
            <Item>
              <Icon>
                <HiOutlineMailOpen />
              </Icon>
              <span>dudwns123@naver.com</span>
            </Item>
            <Item>
              <Icon>
                <FiPhone />
              </Icon>
              <span>dudwns123@naver.com</span>
            </Item>
            <Item>
              <Icon>
                <FiGithub />
              </Icon>
              <span>dudwns123@naver.com</span>
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
