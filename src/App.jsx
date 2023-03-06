import styled from "styled-components/macro";

import StartMenu from "./StartMenu";

export default function App() {
  return (
    <Wrapper>
      <StartMenu />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100%;
`;
