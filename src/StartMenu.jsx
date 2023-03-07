import styled from "styled-components/macro";
import { BREAKPOINTS } from "./GlobalStyles";

import Logo from "./Logo";
import Button from "./Button";
import Text from "./Text";

export default function StartMenu({ onPlayGame, onShowRules }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo size={60} />
      </LogoWrapper>
      <Actions>
        <Button type="tertiary" onClick={onPlayGame}>
          <Text size="md">Play vs. Player</Text>
        </Button>
        <Button type="default" onClick={onShowRules}>
          <Text size="md">Game Rules</Text>
        </Button>
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--color-primary-light);
  padding: 57px 17px;
  width: 100%;
  height: 100%;

  /* tablet styles */
  @media ${BREAKPOINTS.tablet} {
    height: 440px;
    width: 486px;
    position: absolute;
    inset: 0;
    margin: auto;
    border: var(--border);
    border-color: var(--color-black);
    border-radius: 40px;
    box-shadow: var(--drop-shadow-black);
    padding-inline: 37px;
  }
`;

const LogoWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 143px;
  margin-bottom: 70px;

  @media ${BREAKPOINTS.tablet} {
    margin-top: 10px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`;
