import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 50px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid #000;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${({ $variant }) =>
    $variant === "primary" ? "#000" : "transparent"};
  color: ${({ $variant }) => ($variant === "primary" ? "#fff" : "#000")};

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "primary" ? "#333" : "#f8f9fa"};
    color: ${({ $variant }) => ($variant === "primary" ? "#fff" : "#000")};
  }
`;

const Button = ({ onClick, children, variant = "primary" }) => {
  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
