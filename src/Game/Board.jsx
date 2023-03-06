import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

import Piece from "./Piece";

export default function Board() {
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
        {Array(42)
          .fill(null)
          .map((_, idx) => (
            <Piece color={idx % 2 === 0 ? "red" : "yellow"} />
          ))}
      </PieceLayer>
      <Foreground>
        <source
          media={BREAKPOINTS.tablet}
          srcSet={`./assets/board-layer-white-large.svg`}
        />
        <img src={`./assets/board-layer-white-small.svg`} />
      </Foreground>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;

  isolation: isolate;
  position: relative;
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

  @media ${BREAKPOINTS.tablet} {
    grid-column-gap: 18px;
    grid-row-gap: 13px;
    padding: 17px;
  }
`;
