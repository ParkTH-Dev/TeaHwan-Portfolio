import styled from "styled-components";
const Wrapper = styled.div`
  height: 500px;
  width: 300px;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  /* background-color: #f0f0f0; */
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
  span {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding-left: 20px;
    transition: all 0.2s;
    overflow: hidden;
    b {
      margin-left: 20px;
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
      /* z-index: 2; */
    }
  }
`;
const Nav = () => {
  return (
    <Wrapper>
      <Inner>
        <span>
          01 <b>TOP</b>
        </span>
        <span>
          02 <b>ABOUT ME</b>
        </span>
        <span>
          03 <b>SKILLS</b>
        </span>
        <span>
          04 <b>PROJECT</b>
        </span>
        <span>
          05 <b>TEAM PROJECT</b>
        </span>
        <span>
          06 <b>CONTACT</b>
        </span>
      </Inner>
    </Wrapper>
  );
};

export default Nav;
