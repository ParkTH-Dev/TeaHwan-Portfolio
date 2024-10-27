import styled from "styled-components";
import Header from "./components/Header";
import Main from "./pages/Main";
import Nav from "./components/Nav";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <Main />
    </Wrapper>
  );
}

export default App;
