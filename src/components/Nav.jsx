import { Link } from "react-scroll";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 500px;
  width: 300px;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
`;

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  transition: all 0.2s;
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

const Nav = () => {
  return (
    <Wrapper>
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
  );
};

export default Nav;
