import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";
import Text from "../Text";

export default function ScoreDisplay({ score, player }) {
  return (
    <Wrapper player={player}>
      <PlayerName size="xs" forwardedAs="p">
        Player {player}
      </PlayerName>
      <Score>{score}</Score>
      <PlayerAvatar
        src={`./assets/player-${player === 1 ? "one" : "two"}.svg`}
        alt={`Player ${player} avatar - smiley face`}
        player={player}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 142px;
  height: 81px;
  background: var(--color-white);
  border-radius: 20px;
  border: var(--border);
  border-color: var(--color-black);
  box-shadow: 0 10px 0 0 var(--color-black);
  padding: 10px;
  position: relative;

  @media ${BREAKPOINTS.tablet} {
    height: 106px;
    width: 278px;
    display: flex;
    flex-direction: ${({ player }) => (player === 1 ? "row" : "row-reverse")};
    align-items: center;
    justify-content: center;
    gap: 42px;
  }

  @media ${BREAKPOINTS.desktop} {
    height: 166px;
    width: 147px;
    padding-top: 38px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
`;

const PlayerName = styled(Text)`
  color: var(--color-black);
  text-transform: uppercase;
  text-align: center;

  @media ${BREAKPOINTS.tablet} {
    font-size: ${20 / 16}rem;
    line-height: 1;
  }

  @media ${BREAKPOINTS.desktop} {
    font-size: ${20 / 16}rem;
    line-height: ${26 / 16}rem;
  }
`;

const Score = styled.p`
  text-align: center;
  font-size: ${32 / 16}rem;
  line-height: 1;
  font-weight: var(--font-weight-bold);
  color: var(--color-black);

  @media ${BREAKPOINTS.tablet} {
    font-size: ${56 / 16}rem;
    line-height: 1;
  }

  @media ${BREAKPOINTS.desktop} {
    font-size: ${56 / 16}rem;
    line-height: ${71 / 16}rem;
  }
`;

const PlayerAvatar = styled.img`
  position: absolute;
  top: 50%;
  left: ${({ player }) => (player === 1 ? "0" : "100%")};
  transform: translate(-50%, -50%);

  @media ${BREAKPOINTS.desktop} {
    top: 0;
    left: 50%;
  }
`;
