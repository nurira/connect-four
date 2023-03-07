import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

import Text from "../Text";
import { PillButton } from "../Button";

export default function TurnDisplay({ winner, onPlayAgain }) {
  return (
    <Wrapper>
      <PlayerText size="xs">Player {winner}</PlayerText>
      <WinText size="lg">Wins</WinText>
      <PillButton onClick={onPlayAgain}>
        <Text size="xs">Play again</Text>
      </PillButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 291px;
  height: 166px;
  background: var(--color-white);
  border: var(--border);
  border-color: var(--color-black);
  border-radius: 20px;
  box-shadow: var(--drop-shadow-black);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 17px;
`;

const PlayerText = styled(Text)`
  color: var(--color-black);
  text-transform: uppercase;
`;

const WinText = styled(Text)`
  color: var(--color-black);
  text-transform: uppercase;
`;
