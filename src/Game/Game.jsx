import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

import Text from "../Text";
import Logo from "../Logo";
import Board from "./Board";
import ScoreDisplay from "./ScoreDisplay";
import TurnDisplay from "./TurnDisplay";
import { PillButton } from "../Button/PillButton";
import GameMenu from "../GameMenu";

function createNewBoard() {
  return Array(7)
    .fill(null)
    .map((column) => []);
}

export default function Game({ togglePlaying }) {
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [boardState, setBoardState] = React.useState(createNewBoard());
  const [playerOneScore, setPlayerOneScore] = React.useState(0);
  const [playerTwoScore, setPlayerTwoScore] = React.useState(0);

  function addToColumn(colNum) {
    if (boardState[colNum].length >= 6) return;
    // console.log(`ADDING TO COLUMN ${colNum}`);

    const nextBoardState = [];
    boardState.forEach((column) => nextBoardState.push([...column]));

    const column = nextBoardState[colNum];
    column.push(currentPlayer);

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    setBoardState(nextBoardState);
  }

  function handleRestart() {
    console.log("RESTART GAME");
    setBoardState(createNewBoard());
  }

  return (
    <Wrapper>
      <MaxWidthContainer>
        <Header>
          <GameMenu onRestart={handleRestart} onQuit={togglePlaying} />
          <Logo size={46} />
          <PillButton onClick={handleRestart}>
            <Text size="xs" style={{ color: "white" }}>
              Restart
            </Text>
          </PillButton>
        </Header>
        <PlayerScores>
          <ScoreDisplay player={1} score={playerOneScore} />
          <ScoreDisplay player={2} score={playerTwoScore} />
        </PlayerScores>
        <BoardWrapper>
          <Board
            boardState={boardState}
            onClick={addToColumn}
            player={currentPlayer}
          />
          <TurnDisplay player={currentPlayer} />
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

    @media ${BREAKPOINTS.tablet} {
    }

    @media ${BREAKPOINTS.desktop} {
      height: 25%;
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

  @media ${BREAKPOINTS.tablet} {
    gap: 32px;
  }

  @media ${BREAKPOINTS.desktop} {
    gap: 56px;
  }
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

const BoardWrapper = styled.div`
  isolation: isolate;
`;
