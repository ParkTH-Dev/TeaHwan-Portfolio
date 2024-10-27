import styled from "styled-components";

const Wrapper = styled.div`
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
  padding: 0 50px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Inner>
        <span>ParkTH-Dev</span>
      </Inner>
    </Wrapper>
  );
};

export default Header;
