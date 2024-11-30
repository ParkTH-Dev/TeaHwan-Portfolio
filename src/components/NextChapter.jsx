import { Link } from "react-scroll";
import styled from "styled-components";

const StyledLink = styled(Link)`
  z-index: 0;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  &::after {
    content: " →";
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${({ theme }) => theme.accentColor};
    transition: all 0.3s ease;
  }
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    scale: 1.1;
    &::before {
      width: 100%;
    }
  }
`;

const NextChapter = ({ to }) => {
  return (
    <StyledLink to={to} smooth={true} duration={500}>
      {to === "top" ? "Top" : "Next Chapter"}
    </StyledLink>
  );
};

export default NextChapter;
