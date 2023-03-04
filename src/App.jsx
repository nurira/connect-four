import styled from "styled-components/macro";

function App() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  height: 480px;
  width: 480px;
  border-radius: 40px;
  border: 3px solid var(--color-black);
  background: var(--color-primary-light);

  filter: var(--drop-shadow-black);
  margin: 0 auto;
`;

export default App;
