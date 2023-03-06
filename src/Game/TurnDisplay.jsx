import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";
import Text from "../Text";

export default function TurnDisplay({ player }) {
  return (
    <Wrapper player={player}>
      <TurnText size="xs">Player {player}'s Turn</TurnText>
      <Timer size="lg">14s</Timer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: no-repeat
    ${({ player }) =>
      player === 1
        ? "url(./assets/turn-background-red.svg)"
        : "url(./assets/turn-background-yellow.svg)"};
  width: 197px;
  height: 165px;
  margin: 0 auto;
  transform: translateY(-28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 30px 16px 30px;

  color: ${({ player }) =>
    player === 1 ? "var(--color-white)" : "var(--color-black)"};

  @media ${BREAKPOINTS.tablet} {
    transform: translateY(-53px);
  }
`;

const TurnText = styled(Text)`
  text-transform: uppercase;
  /* color: var(--color-white); */
`;

const Timer = styled(Text)`
  /* color: var(--color-white); */
`;
