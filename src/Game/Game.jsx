import styled from "styled-components/macro";

import Text from "../Text";
import Logo from "../Logo";
import Board from "./Board";
import ScoreDisplay from "./ScoreDisplay";
import TurnDisplay from "./TurnDisplay";
import { BREAKPOINTS } from "../GlobalStyles";

export default function Game() {
  return (
    <Wrapper>
      <MaxWidthContainer>
        <Header>
          <GameButton>
            <Text size="xs">Menu</Text>
          </GameButton>
          <Logo size={46} />
          <GameButton>
            <Text size="xs">Restart</Text>
          </GameButton>
        </Header>
        <PlayerScores>
          <ScoreDisplay player={1} score={12} />
          <ScoreDisplay player={2} score={23} />
        </PlayerScores>
        <BoardWrapper>
          <Board />
          <TurnDisplay player={1} />
        </BoardWrapper>
      </MaxWidthContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding: 48px 20px;
  background: var(--color-primary-light);

  &::before {
    content: "";
    width: 100%;
    height: 236px;
    background: var(--color-primary);
    position: absolute;
    border-radius: 60px 60px 0 0;
    bottom: 0;
    left: 0;

    @media ${BREAKPOINTS.desktop} {
      height: 200px;
    }
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MaxWidthContainer = styled.div`
  max-width: 632px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 47px;
`;

const PlayerScores = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 15px;

  @media ${BREAKPOINTS.desktop} {
    position: absolute;
    width: 1034px;
    left: 0;
    right: 0;
    justify-content: space-between;
  }
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

const BoardWrapper = styled.div`
  isolation: isolate;
`;
