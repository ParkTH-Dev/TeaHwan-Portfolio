import styled from "styled-components";
import { motion } from "framer-motion";

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${(props) => props.$size || "20px"};
  height: ${(props) => props.$size || "20px"};
  border-radius: ${(props) => (props.$shape === "circle" ? "50%" : "0")};
  background: ${(props) => props.$bg || `${({ theme }) => theme.textColor}50`};
  backdrop-filter: blur(2px);
  pointer-events: none;
  z-index: 0;
`;

const AnimatedElements = ({ page }) => {
  const elements = {
    top: [
      { shape: "circle", size: "30px", position: { top: "20%", left: "10%" } },
      { shape: "square", size: "25px", position: { top: "70%", right: "15%" } },
      {
        shape: "circle",
        size: "15px",
        position: { bottom: "20%", left: "20%" },
      },
    ],
    about: [
      { shape: "circle", size: "20px", position: { top: "30%", right: "10%" } },
      {
        shape: "square",
        size: "15px",
        position: { bottom: "40%", left: "5%" },
      },
    ],
    skills: [
      { shape: "circle", size: "25px", position: { top: "20%", left: "15%" } },
      {
        shape: "square",
        size: "20px",
        position: { bottom: "30%", right: "10%" },
      },
    ],
    project: [
      { shape: "circle", size: "30px", position: { top: "25%", right: "5%" } },
      {
        shape: "square",
        size: "20px",
        position: { bottom: "20%", left: "10%" },
      },
    ],
    contact: [
      { shape: "circle", size: "25px", position: { top: "15%", left: "20%" } },
      {
        shape: "square",
        size: "15px",
        position: { bottom: "35%", right: "15%" },
      },
    ],
  };

  return (
    <>
      {elements[page]?.map((element, index) => (
        <FloatingElement
          key={index}
          $shape={element.shape}
          $size={element.size}
          style={element.position}
          animate={{
            y: [0, -20, 0],
            x: [-10, 10, -10],
            rotate: element.shape === "square" ? [0, 180, 360] : 0,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.3,
          }}
        />
      ))}
    </>
  );
};

export default AnimatedElements;
