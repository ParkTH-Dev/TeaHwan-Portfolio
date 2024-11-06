import { Link } from "react-scroll";
import styled from "styled-components";

const StyledLink = styled(Link)`
  z-index: 0;
  font-weight: bold;
  cursor: pointer;
  &::after {
    content: " →";
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
