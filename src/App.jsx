import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Top from "./pages/Top";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import TeamProject from "./pages/TeamProject";
import Contact from "./pages/Contact";
import { useRecoilValue } from "recoil";
import { themeState } from "./state/themeState";
import { Globalstyle } from "./styles/globalstyle.js";

const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Inner = styled.div`
  width: calc(100% - 300px);
  height: 100%;
`;

function App() {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Wrapper>
        <Header />
        <Nav />
        <Inner>
          <div id="top">
            <Top />
          </div>
          <div id="about">
            <AboutMe />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="teamproject">
            <TeamProject />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Inner>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
