import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { themeState } from "../state/themeState";
import { nightTheme, oceanTheme, sunnyTheme } from "../styles/theme";

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SwitchButton = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeSwitch = () => {
  const setTheme = useSetRecoilState(themeState);

  const toggleTheme = (selectedTheme) => {
    switch (selectedTheme) {
      case "sunny":
        setTheme(sunnyTheme);
        break;
      case "night":
        setTheme(nightTheme);
        break;
      case "ocean":
        setTheme(oceanTheme);
        break;
      default:
        setTheme(sunnyTheme);
    }
  };

  return (
    <SwitchWrapper>
      <SwitchButton
        style={{ background: "#ffdc66" }}
        onClick={() => toggleTheme("sunny")}
      />
      <SwitchButton
        style={{ background: "#243642" }}
        onClick={() => toggleTheme("night")}
      />
      <SwitchButton
        style={{ background: "#e3f2fd" }}
        onClick={() => toggleTheme("ocean")}
      />
    </SwitchWrapper>
  );
};

export default ThemeSwitch;
