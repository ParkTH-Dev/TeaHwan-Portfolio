import { atom } from "recoil";
import { sunnyTheme } from "../styles/theme";

const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme ? JSON.parse(savedTheme) : sunnyTheme;

export const themeState = atom({
  key: "themeState",
  default: initialTheme,
  effects: [
    ({ onSet }) => {
      onSet((newTheme) => {
        localStorage.setItem("theme", JSON.stringify(newTheme));
      });
    },
  ],
});

export const menuState = atom({
  key: "menuState",
  default: false,
});
