import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 50%;
  color: ${({ theme }) => theme.textColor};
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none; // 768px 이하에서 버튼 숨김
  }

  svg {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.textColor};
  }
`;

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style,
        right: "-40px",
      }}
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
      style={{
        ...style,
        left: "-40px",
      }}
      onClick={onClick}
    >
      <IoMdArrowBack />
    </Arrow>
  );
};

export { NextArrow, PrevArrow };
