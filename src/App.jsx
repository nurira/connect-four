import styled from "styled-components/macro";

import Button from "./Button";
import Text from "./Text";

function App() {
  return (
    <Wrapper>
      <Button type="tertiary">
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

export default App;
