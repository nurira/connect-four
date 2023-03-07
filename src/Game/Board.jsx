import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

import Piece from "./Piece";

export default function Board({ boardState, onClick, player }) {
  return (
    <Wrapper>
      <Background>
        <source
          media={BREAKPOINTS.tablet}
          srcSet={`./assets/board-layer-black-large.svg`}
        />
        <img src={`./assets/board-layer-black-small.svg`} />
      </Background>
      <PieceLayer>
        {boardState.map((column, colIdx) =>
          column.map((piece, rowIdx) => (
            <Piece
              key={rowIdx + colIdx}
              style={{
                gridRow: 6 - rowIdx,
                gridColumn: colIdx + 1,
              }}
              color={piece === 1 ? "red" : "yellow"}
            />
          ))
        )}
      </PieceLayer>
      <Foreground>
        <source
          media={BREAKPOINTS.tablet}
          srcSet={`./assets/board-layer-white-large.svg`}
        />
        <img src={`./assets/board-layer-white-small.svg`} />
      </Foreground>
      <ClickLayer>
        {Array(7)
          .fill(null)
          .map((col, idx) => (
            <ClickColumn
              key={idx}
              player={player}
              onClick={() => onClick(idx)}
            />
          ))}
      </ClickLayer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;

  width: fit-content;
  margin: 0 auto;
`;

const Background = styled.picture``;

const Foreground = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
`;

const PieceLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);

  padding: 7px;
  grid-column-gap: 5.6px;
  grid-row-gap: 0.6px;

  overflow: hidden;

  @media ${BREAKPOINTS.tablet} {
    grid-column-gap: 18px;
    grid-row-gap: 13px;
    padding: 17px;
  }
`;

const ClickLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  padding-bottom: 32px;
  gap: 1px;

  @media ${BREAKPOINTS.tablet} {
    padding: 8px;
  }
`;

const ClickColumn = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
  flex: 1;
  /* background: deeppink; */

  @media ${BREAKPOINTS.desktop} {
    &:hover::before {
      content: "";
      background: no-repeat
        ${({ player }) =>
          player === 1
            ? `url("./assets/marker-red.svg")`
            : `url("./assets/marker-yellow.svg")`};
      height: 38px;
      width: 38px;
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translate(-50%, -100%);
    }
  }
`;
