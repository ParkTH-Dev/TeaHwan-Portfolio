import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";
import { useRecoilState } from "recoil";
import { menuState } from "../state/atom";

const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 80px;
  backdrop-filter: blur(1.5px);
  position: fixed;
  z-index: 100;
  a {
    font-size: 30px;
    font-weight: 800;
    transition: all 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
      transform: scale(1.02);
    }
  }
  @media (max-width: 1200px) {
    backdrop-filter: ${({ $isOpen }) => ($isOpen ? "none" : "blur(1.5px)")};
  }
  @media (max-width: 768px) {
    a {
      font-size: 20px;
    }
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Right = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 1200px) {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    right: 50px;
    div {
      position: relative;
      transition: all 0.3s ease;
      width: 100%;
      height: 2px;
      background-color: #000;
      transform-origin: center;
    }

    ${({ $isOpen }) =>
      $isOpen &&
      `
      div:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }
      div:nth-child(2) {
        opacity: 0;
      }
      div:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    `}
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useRecoilState(menuState);
  return (
    <Wrapper $isOpen={isOpen}>
      <Inner>
        <a href="/">ParkTH-Dev</a>
        <Right>
          <ThemeSwitch />
          <MenuIcon $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </MenuIcon>
        </Right>
      </Inner>
    </Wrapper>
  );
};

export default Header;
