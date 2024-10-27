import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;

  backdrop-filter: blur(1px);
  position: fixed;
  span {
    font-size: 22px;
    font-weight: 800;
  }
`;
const Inner = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
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
