import styled from "styled-components";
const Wrapper = styled.div`
  width: 300px;
  height: 680px;
  border-left: 2px solid #555;
  position: fixed;
  top: 100px;
  right: 0;
`;
const Inner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  align-items: start;
  justify-content: space-around;
  font-size: 20px;
  span {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding-left: 20px;
    transition: all 0.3s;
    overflow: hidden;
    &:hover {
      border-left: 2px solid #000;
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
      /* z-index: 2; */
    }
  }
`;
const Nav = () => {
  return (
    <Wrapper>
      <Inner>
        <span>01 </span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
        <span>06</span>
      </Inner>
    </Wrapper>
  );
};

export default Nav;
