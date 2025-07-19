import { motion } from "framer-motion";
import styled from "styled-components";

const StyledButton = styled(motion.button)`
  padding: 12px 50px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.textColor};
  background-color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.btnColor : "transparent"};
  color: ${({ $variant, theme }) =>
    $variant === "primary" ? "#fff" : theme.textColor};
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 16px;
    width: 100%;
  }
`;

const Button = ({ onClick, children, variant = "primary" }) => {
  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      whileHover={{
        scale: 1.1,
        rotateX: -15,
        rotateY: 15,
        y: -10,
        x: 5,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
          mass: 0.8,
          velocity: 2,
        },
      }}
      whileTap={{
        scale: 0.95,
        rotateX: 0,
        rotateY: 0,
        y: 0,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 15,
        },
      }}
      initial={{
        scale: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
      }}
      animate={{
        scale: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
      }}
      style={{
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius: "30px",
          zIndex: -1,
          transformOrigin: "center",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{
          opacity: 1,
          scale: 1.05,
          filter: "blur(8px)",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
          },
        }}
      />
      {children}
    </StyledButton>
  );
};

export default Button;
