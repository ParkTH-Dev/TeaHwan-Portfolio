import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 50%;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease;
  svg {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, right: "-70px" }}
      onClick={onClick}
    >
      <IoMdArrowForward />
    </Arrow>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, left: "-70px" }}
      onClick={onClick}
    >
      <IoMdArrowBack />
    </Arrow>
  );
};

export { NextArrow, PrevArrow };
