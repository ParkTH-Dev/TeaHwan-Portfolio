import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Top from "./pages/Top";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import TeamProject from "./pages/TeamProject";
import Contact from "./pages/Contact";
import { useState } from "react";
import { blueTheme, darkTheme, lightTheme } from "./styles/theme";
const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const Inner = styled.div`
  width: calc(
    100% - 300px
  ); // {{ edit_1 }} 전체 너비에서 300px를 뺀 값으로 설정
  height: 100%;
`;
function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = (selectedTheme) => {
    switch (selectedTheme) {
      case "light":
        setTheme(lightTheme);
        break;
      case "dark":
        setTheme(darkTheme);
        break;
      case "blue":
        setTheme(blueTheme);
        break;
      default:
        setTheme(lightTheme);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Nav />
        <Inner>
          <Top />
          <AboutMe />
          <Skills />
          <Project />
          <TeamProject />
          <Contact />
        </Inner>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
