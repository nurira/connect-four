import styled from "styled-components/macro";
import * as Dialog from "@radix-ui/react-dialog";

import Text from "./Text";
import Button from "./Button";
import { PillButton } from "./Button";
import { BREAKPOINTS } from "./GlobalStyles";

export default function GameMenu({ onRestart, onQuit }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <PillButton>
          <Text size="xs">Menu</Text>
        </PillButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Pause</Title>
          <Dialog.Close asChild>
            <Button>
              <Text size="md">Continue Game</Text>
            </Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button onClick={onRestart}>
              <Text size="md">Restart</Text>
            </Button>
          </Dialog.Close>
          <Button type="secondary" onClick={onQuit}>
            <Text size="md" style={{ color: "var(--color-white)" }}>
              Quit Game
            </Text>
          </Button>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: hsl(0 0% 0% / 50%);
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  padding: 40px 20px;
  margin: auto;
  background: var(--color-primary-light);
  height: 443px;
  max-width: 336px;
  border: var(--border);
  border-color: var(--color-black);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  box-shadow: 0 10px 0 0 var(--color-black);
  gap: 24px;

  @media ${BREAKPOINTS.tablet} {
    max-width: 486px;
    height: 497px;
    padding: 28px;
  }
`;

const Title = styled(Dialog.Title)`
  font-size: ${56 / 16}rem;
  line-height: 1;
  color: var(--color-white);
  text-transform: uppercase;

  @media ${BREAKPOINTS.tablet} {
    line-height: 2;
  }
`;
