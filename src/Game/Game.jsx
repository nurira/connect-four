import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

import Text from "../Text";
import Logo from "../Logo";
import Board from "./Board";
import ScoreDisplay from "./ScoreDisplay";
import TurnDisplay from "./TurnDisplay";
import WinDisplay from "./WinDisplay";
import { PillButton } from "../Button/PillButton";
import GameMenu from "../GameMenu";

import useToggle from "../hooks/useToggle";

const TIME_PER_TURN = 15;

export default function Game({ togglePlaying }) {
  const [winner, setWinner] = React.useState(null);
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

  function checkForWin(board, colIndex) {
    // check starting from the last piece placed on the given column
    const winCondition = (board[colIndex].at(-1) + "").repeat(4);

    const rowIndex = board[colIndex].length - 1;
    const rowPieces = [];
    board.forEach((column) => {
      rowPieces.push(column[rowIndex]);
    });

    const diagonalChecks = [];

    // CHECK DIAGONAL 1
    let diagonalPieces = [];
    let [currRow, currCol] = [rowIndex, colIndex];
    while (currCol < 7 && currRow < 6) {
      diagonalPieces.push(board[currCol][currRow]);
      currRow++;
      currCol++;
    }

    // decrement once to prevent double counting start position
    [currRow, currCol] = [rowIndex - 1, colIndex - 1];
    while (currCol >= 0 && currRow >= 0) {
      diagonalPieces.unshift(board[currCol][currRow]);
      currRow--;
      currCol--;
    }
    diagonalChecks.push(diagonalPieces.join(""));

    // CHECK DIAGONAL 2
    diagonalPieces = [];
    [currRow, currCol] = [rowIndex, colIndex];
    while (currCol >= 0 && currRow < 6) {
      diagonalPieces.push(board[currCol][currRow]);
      currRow++;
      currCol--;
    }

    // decrement once to prevent double counting start position
    [currRow, currCol] = [rowIndex - 1, colIndex + 1];
    while (currCol < 7 && currRow >= 0) {
      diagonalPieces.unshift(board[currCol][currRow]);
      currRow--;
      currCol++;
    }
    diagonalChecks.push(diagonalPieces.join(""));

    const columnCheck = board[colIndex].join("");
    const rowCheck = rowPieces.join("");

    if (columnCheck.includes(winCondition)) return true;
    if (rowCheck.includes(winCondition)) return true;
    if (diagonalChecks[0].includes(winCondition)) return true;
    if (diagonalChecks[1].includes(winCondition)) return true;

    return false;
  }

  function addToColumn(colNum) {
    if (boardState[colNum].length >= 6) return;
    if (paused) return;

    const nextBoardState = [];
    boardState.forEach((column) => nextBoardState.push([...column]));
    nextBoardState[colNum].push(currentPlayer);

    if (checkForWin(nextBoardState, colNum)) {
      setWinner(currentPlayer);
      currentPlayer === 1
        ? setPlayerOneScore(playerOneScore + 1)
        : setPlayerTwoScore(playerTwoScore + 1);
      togglePaused();
    } else {
      switchPlayer();
      resetTimer();
    }
    setBoardState(nextBoardState);
  }

  function handleRestart() {
    if (paused) togglePaused();
    resetBoard();
    resetTimer();
    resetWinner();
  }

  function switchPlayer() {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  function resetTimer() {
    setTimeRemaining(TIME_PER_TURN);
  }

  function resetWinner() {
    setWinner(null);
  }

  function resetBoard() {
    setBoardState(
      Array(7)
        .fill(null)
        .map((column) => [])
    );
  }

  return (
    <Wrapper winner={winner}>
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
          <GameDisplays>
            {winner !== null ? (
              <WinDisplay winner={winner} onPlayAgain={handleRestart} />
            ) : (
              <TurnDisplay player={currentPlayer} timer={timeRemaining} />
            )}
          </GameDisplays>
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
    background: ${({ winner }) => {
      if (winner === 1) {
        return "var(--color-secondary)";
      } else if (winner === 2) {
        return "var(--color-tertiary)";
      } else {
        return "var(--color-primary)";
      }
    }};
    transition: background 0.2s ease;
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

const GameDisplays = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(-28px);

  @media ${BREAKPOINTS.tablet} {
    transform: translateY(-52px);
  }
`;
