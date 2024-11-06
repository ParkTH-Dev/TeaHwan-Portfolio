import { Link } from "react-scroll";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { menuState } from "../state/atom";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Wrapper = styled.div`
  height: 500px;
  width: 300px;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: inherit;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    display: flex;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-300px")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    height: 100vh;
    z-index: 10;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: 20px;
  gap: 20px;
  border-left: 1.4px solid #000;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  transition: all 0.3s;
  overflow: hidden;
  cursor: pointer;

  b {
    font-weight: bold;
    margin-left: 20px;
  }

  &.active {
    border-left: 3px solid #000;
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    border-left: 3px solid #000;
  }

  &:hover::before {
    left: 0;
    opacity: 1;
  }

  &::before {
    content: "";
    opacity: 0;
    transition: all 0.5s;
    position: absolute;
    top: 0;
    left: -300px;
    width: 100%;
    border-left: none;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    z-index: 9;
  }
`;

const ScrollTopButton = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.textColor};
  background: inherit;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? "1" : "0")};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  bottom: ${({ $visible }) => ($visible ? "50px" : "100px")};
  right: 30px;
  transition: all 0.3s ease-in-out;
  z-index: 99;

  &:hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
  svg {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useRecoilState(menuState);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Wrapper $isOpen={isOpen}>
        <Inner>
          <StyledLink to="top" smooth={true} duration={500} spy={true}>
            01 <b>TOP</b>
          </StyledLink>
          <StyledLink to="about" smooth={true} duration={500} spy={true}>
            02 <b>ABOUT ME</b>
          </StyledLink>
          <StyledLink to="skills" smooth={true} duration={500} spy={true}>
            03 <b>SKILLS</b>
          </StyledLink>
          <StyledLink to="project" smooth={true} duration={500} spy={true}>
            04 <b>PROJECT</b>
          </StyledLink>
          <StyledLink to="teamproject" smooth={true} duration={500} spy={true}>
            05 <b>TEAM PROJECT</b>
          </StyledLink>
          <StyledLink to="contact" smooth={true} duration={500} spy={true}>
            06 <b>CONTACT</b>
          </StyledLink>
        </Inner>
      </Wrapper>
      <ScrollTopButton
        $visible={showScrollTop}
        onClick={scrollToTop}
        aria-label="맨 위로 이동"
      >
        <IoIosArrowUp />
      </ScrollTopButton>
    </>
  );
};

export default Nav;
