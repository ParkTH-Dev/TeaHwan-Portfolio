import { useState, useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  width: 25px;
  height: 25px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.16s ease-out;
  backdrop-filter: invert(100%) hue-rotate(180deg);
  filter: contrast(1.2) brightness(1.1);
  mix-blend-mode: difference;

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({
        x: e.clientX - 10,
        y: e.clientY - 10,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <Cursor
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default MouseFollower;
