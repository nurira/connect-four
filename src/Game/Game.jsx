import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

import Text from "../Text";
import Logo from "../Logo";
import Board from "./Board";
import ScoreDisplay from "./ScoreDisplay";
import TurnDisplay from "./TurnDisplay";
import { PillButton } from "../Button/PillButton";
import GameMenu from "../GameMenu";

import useToggle from "../hooks/useToggle";

const TIME_PER_TURN = 15;

export default function Game({ togglePlaying }) {
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [boardState, setBoardState] = React.useState(
    Array(7)
      .fill(null)
      .map((column) => [])
  );
  const [playerOneScore, setPlayerOneScore] = React.useState(0);
  const [playerTwoScore, setPlayerTwoScore] = React.useState(0);
  const [timeRemaining, setTimeRemaining] = React.useState(TIME_PER_TURN);
  const [paused, togglePaused] = useToggle(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (!paused) {
        setTimeRemaining((time) => {
          const nextTimeRemaining = time - 1;
          if (nextTimeRemaining < 0) {
            switchPlayer();
            return TIME_PER_TURN;
          }
          return nextTimeRemaining;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, paused]);

  function addToColumn(colNum) {
    if (boardState[colNum].length >= 6) return;

    const nextBoardState = [];
    boardState.forEach((column) => nextBoardState.push([...column]));
    nextBoardState[colNum].push(currentPlayer);

    switchPlayer();
    resetTimer();
    setBoardState(nextBoardState);
  }

  function handleRestart() {
    console.log("RESTART GAME");
    resetBoard();
    resetTimer();
  }

  function switchPlayer() {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  function resetTimer() {
    setTimeRemaining(TIME_PER_TURN);
  }

  function resetBoard() {
    setBoardState(
      Array(7)
        .fill(null)
        .map((column) => [])
    );
  }

  return (
    <Wrapper>
      <MaxWidthContainer>
        <Header>
          <GameMenu
            onRestart={handleRestart}
            onQuit={togglePlaying}
            onOpen={togglePaused}
          />
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
          <TurnDisplay player={currentPlayer} timer={timeRemaining} />
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
