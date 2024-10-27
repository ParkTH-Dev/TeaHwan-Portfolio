import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 50px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid #000;
  transition: background-color 0.3s, color 0.3s;
  ${({ variant }) =>
    variant === "primary"
      ? `
        background-color: black;
        color: white;

      `
      : `
        background-color: transparent;
        color: black;
      `}

  &:hover {
    ${({ variant }) =>
      variant === "secondary"
        ? `
          background-color: black;
          color: white;
        `
        : `
      background-color: transparent;
          color: black;
        `}
  }
`;

const Button = ({ onClick, children, variant = "primary" }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
