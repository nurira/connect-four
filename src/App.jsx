import styled from "styled-components/macro";

import Text from "./Text";

function App() {
  return (
    <Wrapper>
      <Button>
        <Text>Play vs. Player</Text>
      </Button>
      <Button>
        <Text>Game Rules</Text>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 480px;
  width: 480px;
  border-radius: 40px;
  border: 3px solid var(--color-black);
  background: var(--color-primary-light);

  filter: var(--drop-shadow-black);
  margin: 0 auto;

  padding: 70px 40px;
`;

const Button = styled.button`
  height: 72px;
  width: 100%;
  border-radius: 20px;
  border: var(--border);
  font-size: var(--text-md);
  background-color: var(--color-tertiary);
  text-transform: uppercase;
  filter: var(--drop-shadow-black);
`;

export default App;
