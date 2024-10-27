import styled from "styled-components";
import Header from "./components/Header";
import Top from "./pages/Top";
import Nav from "./components/Nav";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Inner = styled.div`
  width: calc(
    100% - 300px
  ); // {{ edit_1 }} 전체 너비에서 300px를 뺀 값으로 설정
  height: 100%;
`;
function App() {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <Inner>
        <Top />
        <AboutMe />
        <Skills />
      </Inner>
    </Wrapper>
  );
}

export default App;
