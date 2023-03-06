import styled from "styled-components/macro";

import Text from "../Text";
import Logo from "../Logo";
import Board from "./Board";

export default function Game() {
  return (
    <Wrapper>
      <MaxWidthContainer>
        <Header>
          <GameButton>
            <Text size="xs">Menu</Text>
          </GameButton>
          <Logo />
          <GameButton>
            <Text size="xs">Restart</Text>
          </GameButton>
        </Header>
        <Board />
      </MaxWidthContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  background: var(--color-primary-light);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const MaxWidthContainer = styled.div`
  max-width: 632px;
  margin: 0 auto;
`;

const GameButton = styled.button`
  border-radius: 20px;
  background: var(--color-primary);
  padding: 10px;
  border: none;

  width: ${108 / 16}rem;
  font-family: "Space GroteskVariable";

  span {
    color: var(--color-white);
    text-transform: uppercase;
  }
`;
