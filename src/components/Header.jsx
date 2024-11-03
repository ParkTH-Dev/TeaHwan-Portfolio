import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";

const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 80px;
  backdrop-filter: blur(1.5px);
  position: fixed;
  z-index: 20;
  span {
    font-size: 30px;
    font-weight: 800;
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  /* position: relative; */
`;

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <span>ParkTH-Dev</span>
        <ThemeSwitch />
      </Inner>
    </Wrapper>
  );
};

export default Header;
